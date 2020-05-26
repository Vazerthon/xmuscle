import db from '../../index';

export default userId => db
  .select('id', 'userId', 'notes', 'date')
  .from('workout')
  .where('userId', userId);
