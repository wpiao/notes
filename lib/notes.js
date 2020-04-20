'use strict';

// constructor Notes has two props: action and payload. 
// i.e. -a "add notes"
// constructor function cannot use arrow function. It has to be function declaration.

function Notes(opts) {
  this.action = opts.command.action;
  this.payload = opts.command.payload;
}

Notes.prototype.excute = function() {
  switch(this.action) {
    case 'add':
      this.add(this.payload);
      break;
    default:
      break;
  }
}

Notes.prototype.add = function(payload) {
  console.log(`Adding Note: ${payload}`);
}

module.exports = Notes;
