// angular
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

// app
import { AppComponent } from '../../app/frameworks/sample/components/app/app.component';
import { LogService } from '../../app/frameworks/core/index';
import { ActionBarUtil } from '../../shared/core/utils/actionbar.util';

export class NSAppComponent extends AppComponent {

  // @Inject decorator is used on injectables here since this component merely extends AppComponent
  // Since @Component decorator is not used here, this ensures metadata will be generated
  constructor(@Inject(LogService) private log: LogService, @Inject(Router) private router: Router) {
    super();
    log.debug('NSAppComponent constructor');

    ActionBarUtil.STATUSBAR_STYLE(1);

    router.events.subscribe((e) => {
      this.log.debug(`Router Event: ${e.toString()}`);
    });
  }
}
