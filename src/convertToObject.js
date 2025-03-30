'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString.split(';');
  const ret = {};

  for (let i = 0; i < arr.length; i++) {
    const childArr = arr[i].split(':');

    if (childArr.length === 2) {
      const attributeName = childArr[0].trim();
      const attributeText = childArr[1].trim();

      if (attributeName !== '') {
        ret[attributeName] = attributeText;
      }
    }
  }

  return ret;
}

module.exports = convertToObject;
