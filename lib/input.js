'use strict';

const minimist = require('minimist');

// constructor Input handles input from command line
// constructor function cannot use arrow function. It has be be function declaration
// Input constructor has command property
function Input() {
  // example command: node index.js -a "add notes"
  const args = minimist(process.argv.slice(2));
  // minimist returns an object
  this.command = this.parse(args);
}

Input.prototype.parse = function(args) {
  const argsMap = {
    a: 'add',
    add: 'add',
    d: 'delete',
    delete: 'delete',
    l: 'list',
    list: 'list'
  };

  const arg = Object.keys(args).filter(arg => argsMap[arg])[0];

  return {
    action: argsMap[arg],
    payload: args[arg]
  };
}

Input.prototype.valid = function() {
  return !!(this.command.action && this.command.payload);
};

module.exports = Input;
