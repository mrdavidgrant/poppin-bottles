function bottles (investment) {
  let bottles = {
    calculate: function(){
      this.bought = Math.floor(investment /2)
      this.earnedEmpty = Math.floor(this.bought /2)
      this.earnedCaps = Math.floor(this.bought /4)
      this.emptiesLeft = this.bought % 2
      this.capsLeft = this.bought % 4
      
      return
    },
    recursive: function () {
      console.log(this)
      let newEmpties = (this.earnedEmpty + this.emptiesLeft + this.earnedCaps)
      let newCaps = (this.earnedEmpty + this.capsLeft + this.earnedCaps)
      e = 0,
      c = 0

      while (newEmpties >= 2 || newCaps >= 4) {
        let newBottles = 0
        if (newEmpties >= 2) {
          e = Math.floor(newEmpties / 2)
          this.earnedEmpty += e
          this.emptiesLeft = newEmpties % 2
          newBottles += e
        }
        if (newCaps >= 4) {
          c = Math.floor(newCaps / 4)
          this.earnedCaps += c
          this.capsLeft = newCaps % 4
          newBottles += c
        }
        newEmpties = newBottles + this.emptiesLeft
        newCaps = newBottles + this.capsLeft
      }
    
      this.total = this.bought + this.earnedEmpty + this.earnedCaps
      return
    }
  }
  
  bottles.calculate(investment)
  bottles.recursive()
  // calculate recursive returns
  // console.log(bottles)
  return bottles
}

const input = process.argv[2]

var outputBottles = bottles(input)
// console.log(outputBottles)
console.log('TOTAL BOTTLES: ' + outputBottles.total + '\nTOTAL BOUGHT: ' + outputBottles.bought + '\nTOTAL EARNED VIA:\n\ \ EMPTIES: ' + outputBottles.earnedEmpty + '\n\ \ CAPS:\ \ \ ' + outputBottles.earnedCaps + '\nWith ' + outputBottles.emptiesLeft + ' empties and ' + outputBottles.capsLeft + ' caps left')

module.exports = bottles