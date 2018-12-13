import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExportChoicesPage } from './export-choices';

@NgModule({
  declarations: [
    ExportChoicesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExportChoicesPage),
  ],
  exports: [
      ExportChoicesPage
  ]
})
export class ExportChoicesPageModule {}
