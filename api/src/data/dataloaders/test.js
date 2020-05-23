import DataLoader from 'dataloader';

const getTest = () => Promise.resolve([{ message: 'loader' }]);

const testLoader = new DataLoader(getTest);

export default testLoader;
