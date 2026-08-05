// Vercel Serverless Function for Cron Jobs (cron-job.org / Vercel Cron)
// Endpoint: https://vijesti-hrvatska.com/api/update-news
// Optional Secret Key: ?key=VijestiHrvatska2026CronSecret

module.exports = async (req, res) => {
    // Enable CORS for external cron callers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const secretKey = process.env.CRON_SECRET || 'VijestiHrvatska2026CronSecret';
    const providedKey = req.query.key || (req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : '');

    // Verify secret key if configured
    if (process.env.CRON_SECRET && providedKey !== secretKey) {
        return res.status(401).json({
            success: false,
            error: 'Unauthorized: Invalid or missing cron secret key'
        });
    }

    try {
        const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        let databaseStatus = 'Client-side Feed Active';
        if (supabaseUrl && supabaseKey) {
            databaseStatus = 'Supabase Sync Ready';
        }

        return res.status(200).json({
            success: true,
            status: 'ok',
            message: 'News aggregator cron endpoint triggered successfully!',
            databaseStatus: databaseStatus,
            timestamp: new Date().toISOString(),
            provider: 'cron-job.org / Vercel Serverless'
        });
    } catch (err) {
        console.error('Cron Update API Error:', err);
        return res.status(500).json({
            success: false,
            error: err.message,
            timestamp: new Date().toISOString()
        });
    }
};
