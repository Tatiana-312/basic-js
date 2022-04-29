const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result;
    let convertedStr = String(str);
    let convertedAdd;
    console.log('convertedStr', convertedStr);
    if (options.addition !== undefined) {
        convertedAdd = String(options.addition);
    }
    console.log('convertedAdd', convertedAdd);
    if(!options.separator) {
        options.separator = '+';
    } 
    if (!options.additionSeparator) {
      options.additionSeparator = '|';
    } 
    if (!options.repeatTimes) {
        options.repeatTimes = 1;
        return result = convertedStr + convertedAdd;
    } 
    if (!options.additionRepeatTimes) {
        options.additionRepeatTimes = 1;
    }
 
    let resultArr = [];

    for ( let i = 0; i < options.repeatTimes; i++) {
        let array = [];
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            array.push(convertedAdd);
        }

        let strWithAdditions = convertedStr + array.join(options.additionSeparator);
        resultArr.push(strWithAdditions);
    }

      return resultArr.join(options.separator);
}

module.exports = {
  repeater
};
