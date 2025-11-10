const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Remove line below and write your code here
  const activity = Number(sampleActivity);

  if (Number.isNaN(activity)) {
    return false;
  }

  return MODERN_ACTIVITY - Math.log2(activity) / HALF_LIFE_PERIOD;
}

module.exports = {
  dateSample,
};
