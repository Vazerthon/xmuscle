// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Query: {
    workouts: (_, __, { dataloaders, user }) => dataloaders.workout.byUserId.load(user.id),
  },
};
