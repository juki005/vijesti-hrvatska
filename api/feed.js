const url = require('url');

module.exports = async (req, res) => {
    // Enable CORS for frontend requests
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const { query } = url.parse(req.url, true);
    const feedUrl = query.url;

    if (!feedUrl) {
        res.status(400).send("Missing 'url' query parameter.");
        return;
    }

    try {
        console.log(`Proxying feed: ${feedUrl}`);
        const response = await fetch(feedUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'hr-HR,hr;q=0.9,en-US;q=0.8,en;q=0.7'
            }
        });

        if (!response.ok) {
            res.status(response.status).send(`Failed to fetch feed from source: ${response.statusText}`);
            return;
        }

        const data = await response.text();
        res.setHeader('Content-Type', 'text/xml; charset=utf-8');
        res.status(200).send(data);
    } catch (error) {
        console.error(`Error in serverless proxy:`, error);
        res.status(500).send(`Serverless Proxy Error: ${error.message}`);
    }
};
