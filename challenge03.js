/*
You receive a Christmas gifts pack that Santa Claus wants to deliver to the children.
Each gift inside the pack is represented by a string and it has a weight equal to the number of letters in its name.
Santa Claus's sleigh can only carry a weight limit.

Santa Claus also has a list of reindeer able to help him to deliver the gifts. Each reindeer has a maximum weight limit
that it can carry. The maximum weight limit of each reindeer is equal to twice the number of letters in its name.

Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a gifts pack and a list of
reindeer and returns the maximum number of gifts packs that Santa Claus can deliver. You can't split gifts packs.
*/

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
function distributeGifts(packOfGifts, reindeers) {
  const totalPackOfGiftsWeight = getTotalPackOfGiftsWeight(packOfGifts)
  const maxReindeerLoad = getMaxReindeerLoad(reindeers)

  console.log(totalPackOfGiftsWeight, maxReindeerLoad)

  if (totalPackOfGiftsWeight > maxReindeerLoad) {
    return 0
  }

  return Math.floor(maxReindeerLoad / totalPackOfGiftsWeight)
}

function getTotalPackOfGiftsWeight(packOfGifts) {
  return packOfGifts.join('').length
}

function getMaxReindeerLoad(reindeers) {
  return reindeers.join('').length * 2
}

distributeGifts(packOfGifts, reindeers)