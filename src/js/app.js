import Bowerman from './Bowerman.js';
import Swordsman from './Swordsman.js';
import Magician from './Magician.js';
import Daemon from './Daemon.js';
import Undead from './Undead.js';
import Zombie from './Zombie.js';
import Character from "./Character.js";

const bowerman = new Bowerman('Bowman');
const swordsman = new Swordsman('Swordsman');
const magician = new Magician('Magician');
const daemon = new Daemon('Daemon');
const undead = new Undead('Undead');
const zombie = new Zombie('Zombie');


class Pop extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25);
    this.health = 5;
  }

}

const pop = new Pop('Pop');


function getInfo() {
  const tag = document.querySelector('body');

  const addTag = `<ul class="hero"> 
                    <li class="decimal">healt: ${bowerman.health}</li>
                    <li class="decimal">level: ${bowerman.level}</li>
                    <li class="decimal">Атака/защита:
                      <ul>
                        <li class="lower-roman"> ${bowerman.type}: ${bowerman.attack}/${bowerman.defence }</li>
                        <li class="lower-roman"> ${swordsman.type}: ${swordsman.attack}/${swordsman.defence }</li>
                        <li class="lower-roman"> ${magician.type}: ${magician.attack}/${magician.defence }</li>
                        <li class="lower-roman"> ${undead.type}: ${undead.attack}/${undead.defence }</li>
                        <li class="lower-roman"> ${zombie.type}: ${zombie.attack}/${zombie.defence }</li>
                        <li class="lower-roman"> ${daemon.type}: ${daemon.attack}/${daemon.defence }</li>
                      </ul>
                 </ul>`

  tag.insertAdjacentHTML('beforebegin', addTag)
}

getInfo()


pop.levelUp()

console.log(pop.health)


console.log('the app is running');
