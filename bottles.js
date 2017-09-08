const input = process.argv[2]
const emptyRedeem = ['empty', 'earnedFromEmpties', 2, 'caps']
const capsRedeem = ['caps', 'earnedFromCaps', 4, 'empty']

let bottle = {
  bought: 0,
  earnedFromEmpties: 0,
  earnedFromCaps: 0,
  calcBottles: function (investment) {
    this.bought = Math.floor(investment / 2)
    this.total = Math.floor(investment / 2)
    this.caps = this.bought
    this.empty = this.bought
    // console.log(bottle)
    while (this.caps >= 4 || this.empty >= 2) {
      if (this.empty >= 2){
        this.Redeem(emptyRedeem)
      }
      if (this.caps >= 4){
        this.Redeem(capsRedeem)
      }
    }
    return bottle
  },
  Redeem: function (array) {
    // console.log(array)
    e = Math.floor(this[array[0]] / array[2])
    // console.log(e)
    this[array[1]] += e
    this[array[3]] += e
    this[array[0]] = e
    this.total += e
    // console.log(bottle)
    return
  }
}



const answer = bottle.calcBottles(input)
console.log(answer.total + ' bottles total: ')
console.log(answer.bought + ' purchased, ' + answer.earnedFromEmpties + ' earned from empties, ' + answer.earnedFromCaps + ' earned from caps.')
console.log('You have', answer.empty, 'empties and ', answer.caps, 'caps remaining')