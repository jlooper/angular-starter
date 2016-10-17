import {Injectable} from '@angular/core';
import {LogService} from '../../core/services/log.service';
import {Config} from '../../core/utils/config';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/share';
import {SampleModel} from '../models/sample.model';

@Injectable()
export class SampleService {
  
  constructor(
    private logger: LogService) {
    logger.debug(`SampleService initializing...`);

    if (Config.IS_MOBILE_NATIVE()) {
      //initialize your service for NativeScript
    } else {
      //initialize it for web
  }
}  

}
