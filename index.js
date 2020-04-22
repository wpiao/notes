'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes();

input.valid() ? notes.excute() : help();

const help = () => {
  console.log('Error!');
  process.exit();
}
