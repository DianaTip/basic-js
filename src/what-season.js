const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 // const today = new Date(); 
   /*let mounth = date.getMonth();
   const seasons = ['winter', 'spring', 'summer', 'autumn']
   return  seasons[Math.floor(mounth/3)];*/
/*if ( mounth == 11 || mounth == 0 || mounth == 1)
  {return 'winter'}
if (2 <= mounth <= 4)
  {return 'spring'} 
if (5 <= mounth <= 7)
  {return 'summer'}
if (8 <= mounth <= 10)
  {return 'autumn'}*/ 
}

module.exports = {
  getSeason
};
