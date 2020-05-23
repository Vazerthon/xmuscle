import testLoader from '../../data/dataloaders/test';

// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Query: {
    test: () => testLoader.load('x'),
  },
};
