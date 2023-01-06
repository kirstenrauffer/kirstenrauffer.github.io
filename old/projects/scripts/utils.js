/*
 * Generates a random integer given a maximum value.
 */
const _getRandomInt = (max = 0, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
}