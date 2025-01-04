const path = require('path');
const { readJsonFile, writeJsonFile } = require('./utils/fileOperations');
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

        //In this case, if randomized_color_palette.json does not exist, it will be created with the content 

        const newColorPalette = await readJsonFile(outputFilePath);
        console.log('Newly Created Randomized Color Palette:', newColorPalette);
    } else {
        console.log('Color Palette is empty!');
    }
};

main();
