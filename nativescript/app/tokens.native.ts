import {FRAME} from './app/frameworks/core/tokens';
import * as frame from 'ui/frame';


export const TOKENS_NATIVE: Array<any> = [
  { provide: FRAME, useValue: frame }  
];