'use strict';
const processSection = require('../processSection');

describe('processSection', () => {
  let section = {
    toJSON: () => (
      {
        description: '<p>Hello world</p><p>@react-component components/Test.jsx</p>',
        modifiers: [{
          name: '.primary',
          description: 'The primary action',
          className: ''
        }],
        parameters: []
      }
    )
  };

  let data;

  beforeAll(() => {
    data = processSection(section);
  });

  it('sets and replaces flags', () => {
    expect(data.reactComponent).toEqual('components/Test.jsx');
    expect(data.description).toEqual('<p>Hello world</p>');
  });

  it('adds a sections property', () => {
    expect(data.sections).toEqual(expect.any(Map));
  });
});