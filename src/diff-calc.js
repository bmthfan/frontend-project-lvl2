import _ from 'lodash';

const gendiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const result = {};

  _.union(keys1, keys2)
    // eslint-disable-next-line array-callback-return
    .map((key) => {
      const value1 = data1[key];
      const value2 = data2[key];
      const valueAfter1 = (typeof value1 === 'object' && !_.isNull(value1)) ? gendiff(value1, value1) : value1;
      const valueAfter2 = (typeof value2 === 'object' && !_.isNull(value2)) ? gendiff(value2, value2) : value2;

      if (typeof value1 === 'object' && typeof value2 === 'object') {
        result[key] = { state: 'unchanged', value: gendiff(value1, value2) };
        return;
      } if (value1 === value2) {
        result[key] = { state: 'unchanged', value: value1 };
        return;
      } if (_.has(data1, key) && !_.has(data2, key)) {
        result[key] = { state: 'deleted', value: valueAfter1 };
        return;
      } if (_.has(data2, key) && !_.has(data1, key)) {
        result[key] = { state: 'added', value: valueAfter2 };
        return;
      }

      result[key] = { state: 'changed', value: [valueAfter1, valueAfter2] };
    });

  return result;
};

export default gendiff;
