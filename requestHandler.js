const express = require('express');
const path = require('path');
const { readJsonFile } = require('./utils/fileOperations'); 
const _ = require('lodash');

const app = express();
const port = 3000;

app.get('/randomColors', async (req, res) => {
    const filePath = path.join(__dirname, 'randomized_color_palette.json');
    try {
        const randomizedColorPalette = await readJsonFile(filePath);

        if (randomizedColorPalette) {
            const shuffledPalette = _.shuffle(randomizedColorPalette);
            res.status(200).json(shuffledPalette);
        } else {
            res.status(500).json({ error: 'Failed to read randomized color palette file' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
});

// Starts the server and makes it listen for connections on the specified port (3000).
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/randomColors`);
});
