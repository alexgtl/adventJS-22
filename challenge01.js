const gifts = ['book', 'game', 'socks']

function wrapping(gifts) {
  const WRAPPING_CHAR = '*'
  const BREAK_LINE_CHAR = '\n'

  const wrappedGiftsArray = gifts.map(gift => {
    const paperQuantity = gift.length + 2
    const startWrapper = `${getWrapper(paperQuantity, WRAPPING_CHAR)}${BREAK_LINE_CHAR}${WRAPPING_CHAR}`
    const endWrapper = reverse(startWrapper)

    return `${startWrapper}${gift}${endWrapper}`
  });

  return wrappedGiftsArray
}

function getWrapper(paperQuantity, WRAPPING_CHAR) {
  return WRAPPING_CHAR.repeat(paperQuantity)
}

function reverse(str) {
  return str.split("").reverse().join("");
}

const wrapped = wrapping(gifts)
console.log(wrapped)