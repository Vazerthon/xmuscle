
import uuid from 'uuid/v4';
import db from '../../index';

const takeFirst = array => array[0];

export default authProviderId => db('user')
  .insert({ id: uuid(), authProviderId }, ['id'])
  .then(takeFirst);
