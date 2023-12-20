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
    throw new NotImplementedError('Not implemented');}
/*const dreamTeam = '';
const dreamArray = [];
let str = '';
/*const even = (element ) => typeOf element === 'string'*/
/*for (let i=0; i<members.length; i++)
  {if (typeof members[i] === 'string')
    {str = members[i];
      dreamArray.push(str.charAt(0).toUpperCase())   
    }}
  for (let j=0; j<dreamArray.length; j++)
  {

  }
  dreamArray.charAt(0).toUpperCase() + dreamArray.substr(1)
}*/

module.exports = {
  createDreamTeam
};
