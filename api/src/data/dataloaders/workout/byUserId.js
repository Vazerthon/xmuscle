import makeDataLoader from '../makeDataLoader';
import queries from '../../queries';

const getWorkoutsForUser = ([userId]) => Promise.resolve([queries.workout.byUserId(userId)]);

export default makeDataLoader(getWorkoutsForUser);
