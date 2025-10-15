import { otherFunction } from './second-dependency';

export const consoleLogger = () => {
  console.log('First dependency ran');
  otherFunction();
};
