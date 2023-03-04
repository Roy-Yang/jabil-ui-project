import { NgModule } from '@angular/core';
// import { FormatTime } from './pipes/format-time';
// import { SecondToHour } from './pipes/second-to-hour';
// import { WebsocketService } from './providers/websocket.service';
// import ExcelExportService from './providers/excel-export.service';
// import { DefaultRouteGuardService } from './providers/default-route-guard.service';
// import { AppMenuService } from './providers/app-menu.service';
// import { BigFileUploadService } from './providers/big-file-upload.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

// import { DialogModule } from 'primeng/dialog';
// import { NzProgressModule } from 'ng-zorro-antd/progress';

// import {
// FileUploadModule,
// LoadingModule,
// QRModule,
// VideoDialogModule,
//   FormatTime,
// } from 'jabil-bus-lib';

// import { JabilLoadingComponent } from './components/JabilLoadingComponent';
// import { JabilVideoDialogComponent } from './components/JabilVideoDialogComponent';
// import { JabilQRComponent } from './components/JabilQRComponent';
// import { JabilFileUploadComponent } from './components/JabilFileUploadComponent';
// import { TranslationApiService } from './providers/translation/translation.service';
// import { translationApiLoaderFactory } from '../app/pages/testValidation/testValidation.module';

@NgModule({
  declarations: [
    // FormatTime,
    // SecondToHour,
    // JabilLoadingComponent,
    // JabilVideoDialogComponent,
    // JabilQRComponent,
    // JabilFileUploadComponent,
    // LoadingComponent,
    // VideoDialogComponent,
    // QRComponent,
    // FileUploadComponent,
  ],
  providers: [
    // WebsocketService,
    // DefaultRouteGuardService,
    // AppMenuService,
    // ExcelExportService,
    // BigFileUploadService,
  ],
  entryComponents: [],
  imports: [
    // DialogModule,
    // NzProgressModule,
    // FileUploadModule,
    // LoadingModule,
    // QRModule,
    // VideoDialogModule,
  ],
  exports: [
    // FormatTime,
    // SecondToHour,
    // LoadingComponent,
    // VideoDialogComponent,
    // QRComponent,
    // FileUploadComponent,
  ],
})
export class CoreModule {
  constructor() {
    // private dbService: dbService // public langService: langService, //     public dvService: deviceService,
    // this.langService.setLang();
  }
}
