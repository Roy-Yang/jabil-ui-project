import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { RedirectComponent } from './redirect';
import { CommonRoutingModule } from './common-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslationApiService, TranslationApiLoader } from 'jabil-bus-lib';
export function translationApiLoaderFactory(api: TranslationApiService) {
  return new TranslationApiLoader(api);
}
//
@NgModule({
  declarations: [HomeComponent, RedirectComponent],
  providers: [],
  entryComponents: [HomeComponent, RedirectComponent],
  imports: [
    CommonRoutingModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translationApiLoaderFactory,
        deps: [TranslationApiService],
      },
    }),
  ],
  exports: [HomeComponent, RedirectComponent],
})
export class CommonPageModule {
  constructor() {
    // private dbService: dbService // public langService: langService, //     public dvService: deviceService,
    // this.langService.setLang();
  }
}
