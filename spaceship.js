class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = []
    crew.forEach((member,index,array) => {
      this.crew.push(member)

      member.currentShip = this
    })
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'

    if(this.crew.length === 0 || this.crew.length === undefined) {
      this.docked = true
    } else {
      this.docked = false
    }

    this.phasersCharge = 'uncharged'
  }
}
