// angular
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

// app
import { CoreModule } from '../core/core.module';
import { TOKENS_SHARED } from '../core/tokens';
import { SAMPLE_PROVIDERS } from './services/index';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CoreModule
  ],
  providers: [
    SAMPLE_PROVIDERS,
    TOKENS_SHARED
  ]
})
export class SampleModule {
  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: configuredProviders
    };
  }
  constructor( @Optional() @SkipSelf() parentModule: SampleModule) {
    console.log(`SampleModule constructor`);
    if (parentModule) {
      throw new Error('SampleModule already loaded; Import in root module only.');
    }
  }
}
