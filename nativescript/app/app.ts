// nativescript
import { NativeScriptModule, platformNativeScriptDynamic, onAfterLivesync, onBeforeLivesync } from 'nativescript-angular/platform';

/**
 * Config
 * Seed provided configuration options
 */
import { Config } from './app/frameworks/core/index';

// (required) platform target (allows component decorators to use the right view template)
Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

// (optional) log level - defaults to no logging if not set
Config.DEBUG.LEVEL_4 = true;


// app
import { NativeModule } from './native.module';

platformNativeScriptDynamic().bootstrapModule(NativeModule);
