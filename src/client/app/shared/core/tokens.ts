import {OpaqueToken} from '@angular/core';

export const FRAME: OpaqueToken = new OpaqueToken('Frame');

export const TOKENS_SHARED: Array<any> = [
  { provide: FRAME, useValue: {} }
];

