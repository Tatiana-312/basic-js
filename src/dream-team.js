const { NotImplementedError } = require('../extensions/index.js');

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
  let teamName = [];
  if (!Array.isArray(members)) {
      return false;
  }
  const a = members.map((elem) => {
      if (typeof elem === 'string') {
          for (let i = 0; i < elem.length; i++) {
              if (elem[i] === ' ') {
                  continue;
              }
          teamName.push(elem[i].toUpperCase());
          break;
          }
      }
  });
  return teamName.sort().join('');
}

module.exports = {
  createDreamTeam
};
