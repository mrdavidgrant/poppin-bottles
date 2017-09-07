function bottles (investment) {
  let bottles = {
    calculate: function(){
      this.bought = Math.floor(investment /2)
      this.earnedEmpty = Math.floor(this.bought /2)
      this.earnedCaps = Math.floor(this.bought /4)
      this.emptiesLeft = this.bought % 2
      this.capsLeft = this.bought % 4
      this.total = this.bought + this.earnedEmpty + this.earnedCaps
    }
  }
  bottles.calculate(investment)
  // console.log(bottles)
  return bottles
}

const input = process.argv[2]

var outputBottles = bottles(input)
// console.log(outputBottles)
console.log('TOTAL BOTTLES: ' + outputBottles.total + '\nTOTAL EARNED VIA:\n\ \ EMPTIES: ' + outputBottles.earnedEmpty + '\n\ \ CAPS:\ \ \ ' + outputBottles.earnedCaps + '\nWith ' + outputBottles.emptiesLeft + ' empties and ' + outputBottles.capsLeft + ' caps left')

module.exports = bottles