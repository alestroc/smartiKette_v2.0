import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SmartmatchComponent } from '../../pages/smartmatch/smartmatch.component';
import { ArticoliComponent } from '../../pages/articoli/articoli.component';
import { EtichetteComponent } from '../../pages/etichette/etichette.component';
import { LocationComponent } from '../../pages/location/location.component';

import { VisualizzarticoloComponent } from '../../pages/visualizzarticolo/visualizzarticolo.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    EtichetteComponent,
    LocationComponent,
    SmartmatchComponent,
    ArticoliComponent,
    VisualizzarticoloComponent
  ]
})

export class AdminLayoutModule {}
