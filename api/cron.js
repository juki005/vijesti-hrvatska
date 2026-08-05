const updateNews = require('./update-news');

module.exports = async function handler(req, res) {
    return updateNews(req, res);
};
