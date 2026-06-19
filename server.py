#!/usr/bin/env python3
"""
Klik.hr Clone - Local Development Server with Built-in CORS Proxy
Serves static frontend files and proxies RSS requests to bypass CORS limitations.
"""

import http.server
import urllib.request
import urllib.parse
import socketserver
import sys

PORT = 8000

class ProxyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Check if the request is for our proxy API
        parsed_url = urllib.parse.urlparse(self.path)
        if parsed_url.path == '/api/feed':
            query_params = urllib.parse.parse_qs(parsed_url.query)
            feed_url = query_params.get('url', [None])[0]
            
            if not feed_url:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(b"Missing 'url' query parameter.")
                return
                
            try:
                # Fetch target RSS feed directly from media portals
                req = urllib.request.Request(
                    feed_url, 
                    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
                )
                with urllib.request.urlopen(req, timeout=10) as response:
                    content = response.read()
                    
                # Serve RSS feed XML with CORS enabled
                self.send_response(200)
                self.send_header('Content-Type', 'text/xml; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(content)
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(f"Proxy Error: {str(e)}".encode('utf-8'))
        else:
            # Fallback to serving static html files (index.html, etc.)
            super().do_GET()

def main():
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), ProxyRequestHandler) as httpd:
            print(f"===========================================================")
            print(f"  KLIK KLON - LOCAL DEVELOPMENT SERVER & CORS PROXY")
            print(f"===========================================================")
            print(f"  Running on: http://localhost:{PORT}")
            print(f"  Press Ctrl+C to stop the server.")
            print(f"===========================================================")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        sys.exit(0)
    except Exception as e:
        print(f"Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
