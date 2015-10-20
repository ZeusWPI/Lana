import { authenticationChannel } from '../channels';
import { publishedAction } from './utils';

export const login = publishedAction(authenticationChannel, 'login');
