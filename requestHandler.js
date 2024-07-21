const path = require('path');
const { readJsonFile } = require('./utils/readFile');
const { getRandomColors } = require('./utils/colorUtils');

/**
 * HTTP server listener
 * @param {*} req 
 * @param {*} res 
 */
const requestListener = async (req, res) => {
    if (req.method === 'GET') {
        const filePath = path.join(__dirname, 'color_palette.json');
        const colorPalette = await readJsonFile(filePath);

        if (colorPalette) {
            const randomizedColors = getRandomColors(colorPalette, 5);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(randomizedColors));
        } else {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to read color palette file' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
};

module.exports = {
    requestListener,
};
