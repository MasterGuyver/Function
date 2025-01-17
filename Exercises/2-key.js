'use strict';
const { random: frandom, floor: trunc } = Math;
const generateKey = (length, possible) => {
  let s = '';
  const plength = possible.length;
  for (let i = 0; i < length; i++) {
    s += possible[trunc(frandom() * plength)];
  }
  return s;
};

module.exports = { generateKey };
