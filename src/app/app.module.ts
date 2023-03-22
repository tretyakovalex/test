import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { OperationsUpdateComponent } from './pages/operations-update/operations-update.component';
import { EMTCCComponent } from './pages/emt-cc/emt-cc.component';
import { MinDatasetComponent } from './pages/min-dataset/min-dataset.component';
import { EMTOperationsSupportComponent } from './pages/emt-operations-support/emt-operations-support.component';
import { HealthRiskMappingComponent } from './pages/health-risk-mapping/health-risk-mapping.component';
import { EmtStandardsComponent } from './pages/emt-standards/emt-standards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OperationsUpdateComponent,
    EMTCCComponent,
    MinDatasetComponent,
    EMTOperationsSupportComponent,
    HealthRiskMappingComponent,
    EmtStandardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
