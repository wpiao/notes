'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Note Nodule', () => {

  it ('excute() does nothing with invalid options', () => {
    const notes = new Notes({ command: {} });
    notes.excute();
    expect(console.log).not.toHaveBeenCalled();
  });

  it ('notes() can add a note', () => {
    const action = 'add';
    const payload = 'test note';
    const notes = new Notes({ command: { action, payload } });
    notes.excute();
    expect(console.log).toHaveBeenCalledWith(`Adding Note: ${payload}`);
  });

});