// angular
import {ChangeDetectionStrategy} from '@angular/core';

// app
import {BaseComponent} from '../../../core/decorators/base.component';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
export class AppComponent {}
