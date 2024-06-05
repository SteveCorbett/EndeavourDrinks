import { ITrolley } from '../trolley';
import { ITrolleyItem } from '../trolleyItem';

export interface ITrolleyGetResult {
  trolley: ITrolley;
  trolleyItems: ITrolleyItem[];
}
