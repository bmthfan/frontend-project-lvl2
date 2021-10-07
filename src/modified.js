const diffObj = {
  common: {
    state: 'unchanged',
    value: {
      follow: { state: 'added', value: false },
      setting1: { state: 'unchanged', value: 'Value 1' },
      setting2: { state: 'deleted', value: 200 },
      setting3: { state: 'changed', value: [true, null] },
      setting4: { state: 'added', value: 'blah blah' },
      setting5: {
        state: 'added',
        value: {
          key5: { state: 'unchanged', value: 'value5' },
        },
      },
      setting6: {
        state: 'unchanged',
        value: {
          doge: {
            state: 'unchanged',
            value: {
              wow: { state: 'changed', value: ['', 'so much'] },
            },
          },
          key: { state: 'unchanged', value: 'value' },
          ops: { state: 'added', value: 'vops' },
        },
      },
    },
  },
  group1: {
    state: 'unchanged',
    value: {
      baz: { state: 'changed', value: ['bas', 'bars'] },
      foo: { state: 'unchanged', value: 'bar' },
      nest: {
        state: 'changed',
        value: [
          { key: { state: 'unchanged', value: 'value' } },
          'str',
        ],
      },
    },
  },
  group2: {
    state: 'deleted',
    value: {
      abc: { state: 'unchanged', value: 12345 },
      deep: {
        state: 'unchanged',
        value: {
          id: { state: 'unchanged', value: 45 },
        },
      },
    },
  },
  group3: {
    state: 'added',
    value: {
      deep: {
        state: 'unchanged',
        value: {
          id: {
            state: 'unchanged',
            value: {
              number: { state: 'unchanged', value: 45 },
            },
          },
        },
      },
      fee: { state: 'unchanged', value: 100500 },
    },
  },
};

export default diffObj;
