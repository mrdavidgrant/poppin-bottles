function bottles (investment) {
  let bottlesBought = Math.floor(investment /2)
  let bottlesEarnedEmpty = Math.floor(bottlesBought /2)
  let bottlesEarnedCaps = Math.floor(bottlesBought /4)

  return bottlesBought + bottlesEarnedEmpty + bottlesEarnedCaps
}

module.exports = bottles