const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Remove line below and write your code here
  const firstLetters = [];

  for (const member of members) {
    if (typeof member === 'string' && member.length > 0) {
      firstLetters.push(member[0].toUpperCase());
    }
  }

  return firstLetters.sort().toUpperCase().join('');
}

module.exports = {
  createDreamTeam,
};
