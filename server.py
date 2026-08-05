import http.server
import socketserver
import os

PORT = 8080

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        url_path = self.path.split('?')[0].split('#')[0]
        query_string = self.path[len(url_path):]
        
        # Root URL
        if url_path == '/' or url_path == '':
            self.path = '/index.html' + query_string
        elif url_path.startswith('/portali/'):
            clean_sub = url_path[len('/portali/'):]
            if '.' in clean_sub:
                self.path = '/' + clean_sub + query_string
            else:
                self.path = '/portali.html' + query_string
        else:
            clean_name = url_path.lstrip('/')
            # If path doesn't have an extension and a matching .html file exists
            if not os.path.splitext(clean_name)[1]:
                html_candidate = os.path.join(self.directory or os.getcwd(), clean_name + '.html')
                if os.path.isfile(html_candidate):
                    self.path = '/' + clean_name + '.html' + query_string

        return super().do_GET()

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    print(f"Clean URL Localhost Server running at http://localhost:{PORT}/")
    with socketserver.TCPServer(("", PORT), CleanURLHandler) as httpd:
        httpd.serve_forever()
