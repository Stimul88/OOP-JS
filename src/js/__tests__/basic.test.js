import Bowerman from '../Bowerman.js';
import Swordsman from '../Swordsman.js';
import Magician from '../Magician.js';
import Daemon from '../Daemon.js';
import Undead from '../Undead.js';
import Zombie from '../Zombie.js';
import Character from "../Character.js";

const heroArray = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

class Boomer extends Character {
  constructor(name) {
    super(name, 'Boomer', 25, 25);
  }
}

class Pop extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25);
    this.health = 0;
  }

}

const result = new Bowerman('Pups');


test('correct name test', () => {
  expect(result.name).toBe('Pups');
});

test('incorrect name test', () => {
  expect(() => {
    new Bowerman('p');
  }).toThrow();
});

test('type to be in list test', () => {
  expect(heroArray).toContain(result.type);
});

test('type not in list test', () => {
  expect(() => {
    new Boomer('Pop');
  }).toThrow();
});

test('level up test', () => {
  result.levelUp()
  expect(result.level).toBe(2);
});


test('level up impossible test', () => {
  expect(() => {
    new Pop('Pop').levelUp();
  }).toThrow();
});

test('attack up test', () => {
  result.levelUp()
  expect(result.attack).toBe(36);
});

test('defence up test', () => {
  result.levelUp()
  expect(result.defence).toBe(43.2);
});


test('health up test', () => {
  result.levelUp()
  expect(result.health).toBe(100);
});


test('damage test', () => {
  result.damage(30)
  expect(result.health).toBe(85.552);
});


test('correct type Swordsman test', () => {
  const result = new Swordsman('Pups');
  expect(result.type).toBe('Swordsman');
});


test('correct type Magician test', () => {
  const result = new Magician('Pups');
  expect(result.type).toBe('Magician');
});


test('correct type Daemon test', () => {
  const result = new Daemon('Pups');
  expect(result.type).toBe('Daemon');
});

test('correct type Undead test', () => {
  const result = new Undead('Pups');
  expect(result.type).toBe('Undead');
});

test('correct type Zombie test', () => {
  const result = new Zombie('Pups');
  expect(result.type).toBe('Zombie');
});
