import _ from 'lodash';

const getKeySign = (state) => {
  switch (state) {
    case 'added':
      return '  + ';
    case 'deleted':
      return '  - ';
    case 'unchanged':
      return '    ';
    default:
      return new Error('Unknown state, try again.');
  }
};

const stylish = (data, replacer = ' ', spacesCount = 4) => {
  const iter = (currentData, depth) => {
    if (typeof currentData !== 'object' || _.isNull(currentData)) {
      return `${currentData}`;
    }

    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const lines = Object
      .entries(currentData)
      .sort()
      .map(([key, val]) => {
        const { state, value } = val;
        const sign = getKeySign(state);

        if (Array.isArray(value)) {
          const [valueBefore, valueAfter] = value;
          const added = getKeySign('added');
          const deleted = getKeySign('deleted');
          return [
            `${currentIndent}${deleted}${key}: ${iter(valueBefore, depth + 1)}`,
            `${currentIndent}${added}${key}: ${iter(valueAfter, depth + 1)}`,
          ].join('\n');
        }

        return `${currentIndent}${sign}${key}: ${iter(value, depth + 1)}`;
      });

    return [
      '{',
      ...lines,
      `${currentIndent}}`,
    ].join('\n');
  };

  return iter(data, 0);
};

export default stylish;
