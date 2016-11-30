// nativescript
import { NativeScriptModule, platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { RouterExtensions as TNSRouterExtensions } from 'nativescript-angular/router/router-extensions';

// angular
import { NgModule } from '@angular/core';

// app
import { WindowService, ConsoleService, RouterExtensions } from './app/frameworks/core/index';
import { NSAppComponent } from './pages/app/app.component';
import { TOKENS_NATIVE } from './tokens.native';
import { AppComponent, ENTRY_COMPONENTS } from './app/frameworks/sample/index';
import { routes } from './app/frameworks/sample/routes';
import { SampleModule } from './app/frameworks/sample/sample.module';


// feature modules
import { CoreModule } from './app/frameworks/core/core.module';


// intermediate component module
// helps encapsulate custom native modules in with the components
// note: couple ways this could be done, just one option presented here...
@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule
  ],
  declarations: [
    ENTRY_COMPONENTS
  ],
  exports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule
  ]
})
class ComponentModule { }

@NgModule({
  imports: [
    CoreModule.forRoot([
      { provide: ConsoleService, useValue: console }
    ]),   
    ComponentModule,
    SampleModule.forRoot([
      TOKENS_NATIVE
    ]),
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    NSAppComponent
  ],
  providers: [
    { provide: RouterExtensions, useClass: TNSRouterExtensions }
  ],
  bootstrap: [NSAppComponent]
})

export class NativeModule { }
