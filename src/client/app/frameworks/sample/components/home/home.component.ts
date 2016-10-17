import {OnInit, Inject} from '@angular/core';
import {BaseComponent} from '../../../core/decorators/base.component';
import {LogService} from '../../../core/services/log.service';
import {FRAME} from '../../../core/tokens';
import {Config} from '../../../core/utils/config';
import {Router} from '@angular/router';
import {SampleService} from '../../../sample/services/sample.service';
import {SampleModel} from '../../../sample/models/sample.model';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public sampleService: SampleService,
              private logger: LogService,
              private _router: Router,
              @Inject(FRAME) private frame: any
            ) {}

 ngOnInit() {
    if (Config.IS_MOBILE_NATIVE()) {
      if (this.frame.topmost().ios) {
          this.frame.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false);
      } 
    } 
  }
}