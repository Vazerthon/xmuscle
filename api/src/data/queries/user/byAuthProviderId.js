
import db from '../../index';

const takeFirst = array => array[0];

export default authProviderId => db
  .select('id')
  .from('user')
  .where('authProviderId', authProviderId)
  .then(takeFirst);
