import { applyMiddleware } from 'redux';
import ItemMiddleware from './item_middleware';
import FilterMiddleware from './filter_middleware';

const RootMiddleware = applyMiddleware(ItemMiddleware);

export default RootMiddleware;

