const { NotImplementedError } = require('../lib');

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
  const strString = String(str);

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';

  let additionString = '';
  if (options.addition !== undefined) {
    const addition = String(options.addition);
    const additionRepeatTimes = options.additionRepeatTimes || 1;
    const additionSeparator = options.additionSeparator || '|';

    const additionParts = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionParts.push(addition);
    }
    additionString = additionParts.join(additionSeparator);
  }

  const fullPart = strString + additionString;

  const resultParts = [];
  for (let i = 0; i < repeatTimes; i++) {
    resultParts.push(fullPart);
  }

  return resultParts.join(separator);
}

module.exports = {
  repeater,
};
