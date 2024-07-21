
/**
 * Get random colors from the color palette JSON
 * @param {*} colors 
 * @param {*} count 
 * @returns 
 */
const getRandomColors = (colors, count) => {
    const colorNames = Object.keys(colors);
    const selectedColors = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * colorNames.length);
        const colorName = colorNames.splice(randomIndex, 1)[0];
        selectedColors.push({ [colorName]: colors[colorName] });
    }
    return selectedColors;
};

module.exports = {
    getRandomColors,
};
