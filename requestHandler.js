const express = require('express');
const path = require('path');
const { readJsonFile } = require('./utils/readFile'); 

const app = express();
const port = 3000;

app.get('/randomColors', async (res) => {
    const filePath = path.join(__dirname, 'randomized_color_palette.json');
    const randomizedColorPalette = await readJsonFile(filePath);

    if (randomizedColorPalette) {
        // If the file was read successfully, sends a JSON response with the content of randomizedColorPalette and sets the HTTP status code to 200 (OK)
        res.status(200).json(randomizedColorPalette);
    } else {
        //If the file could not be read, sends a JSON response with an error message and sets the HTTP status code to 500 (Internal Server Error)
        res.status(500).json({ error: 'Failed to read randomized color palette file' });
    }
});

// Starts the server and makes it listen for connections on the specified port (3000).
// The callback function logs a message to the console indicating that the server is running and provides the URL where it can be accessed.
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/randomColors`);
});
