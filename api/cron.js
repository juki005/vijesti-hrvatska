// Vercel Serverless Cron Job
// Triggered every 15 minutes by Vercel Cron

module.exports = async function handler(req, res) {
    try {
        console.log('Vercel 15-minute Cron trigger executed at:', new Date().toISOString());
        
        return res.status(200).json({ 
            status: 'ok', 
            message: '15-minute cron executed successfully', 
            timestamp: new Date().toISOString() 
        });
    } catch (err) {
        console.error('Cron Execution Error:', err);
        return res.status(500).json({ error: err.message });
    }
}
