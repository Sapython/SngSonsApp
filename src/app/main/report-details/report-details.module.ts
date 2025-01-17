import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportDetailsPageRoutingModule } from './report-details-routing.module';

import { ReportDetailsPage } from './report-details.page';
import { ReportTableComponent } from 'src/app/shared/components/report-table/report-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportDetailsPageRoutingModule,
    ReportTableComponent,
  ],
  declarations: [ReportDetailsPage],
})
export class ReportDetailsPageModule {}
