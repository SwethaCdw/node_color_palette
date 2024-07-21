const path = require('path');
const { readJsonFile, writeJsonFile } = require('./utils/readFile');
const { getRandomColors } = require('./utils/colorUtils');

/**
 * Display the randomized colors and write them to a new JSON file
 */
const main = async () => {
    const filePath = path.join(__dirname, 'color_palette.json');
    const colorPalette = await readJsonFile(filePath);
    
    if (colorPalette) {
        const randomizedColors = getRandomColors(colorPalette, 5);
        console.log('Randomized Colors:', randomizedColors);
        
        const outputFilePath = path.join(__dirname, 'randomized_color_palette.json');
        await writeJsonFile(outputFilePath, randomizedColors);

        const newColorPalette = await readJsonFile(outputFilePath);
        console.log('Newly Created Randomized Color Palette:', newColorPalette);
    } else {
        console.log('Color Palette is empty!');
    }
};

main();
