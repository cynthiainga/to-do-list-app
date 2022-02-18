// eslint-disable-next-line import/no-cycle
import { addTask } from './controllTools.js';

const data = addTask();
export function getTask() {
  return data.map((task) => task);
}
