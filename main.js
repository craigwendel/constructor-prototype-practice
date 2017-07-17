// ##############################################################
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
  this.feed = function (dog) {
     // dog param can be anything as long as it matches return statement.
    return dog.hungry = false
  }
  this.pet = function (dog) {
    return dog.status = 'happy'
  }
}

// Instances of Human
// Needed: mason, julia

const julia = new Human(true)
const mason = new Human(false)
