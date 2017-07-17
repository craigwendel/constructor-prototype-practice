//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner) {
  this.status = status
  this.color = color
  this.hungry = hungry
  this.owner = owner
}

Dog.prototype = new Human()

// Instances of Dog
// Needed: sadie, moonshine, atticus

const sadie = new Dog('normal', 'black', false)
const moonshine = new Dog('normal', 'brown', true)
const atticus = new Dog('normal', 'grey', true)

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool, feed, pet) {
  this.cool = cool
  this.feed = function () {
    return this.hungry
  }
  this.pet = function () {
    return this.status
  }
}
const mason = new Human(false)
const julia = new Human(true)

julia.feed(moonshine)
mason.pet(sadie)

sadie.owner = mason

// Instances of Human
// Needed: mason, julia
