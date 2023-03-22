import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMTCCComponent } from './pages/emt-cc/emt-cc.component';
import { EMTOperationsSupportComponent } from './pages/emt-operations-support/emt-operations-support.component';
import { EmtStandardsComponent } from './pages/emt-standards/emt-standards.component';
import { HealthRiskMappingComponent } from './pages/health-risk-mapping/health-risk-mapping.component';
import { HomeComponent } from './pages/home/home.component';
import { MinDatasetComponent } from './pages/min-dataset/min-dataset.component';
import { OperationsUpdateComponent } from './pages/operations-update/operations-update.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "operations-update", component: OperationsUpdateComponent},
  {path: "emt-cc-3ws-mapping", component: EMTCCComponent},
  {path: "minimum-datasets", component: MinDatasetComponent},
  {path: "emt-standards", component: EmtStandardsComponent},
  {path: "emt-operations-support", component: EMTOperationsSupportComponent},
  {path: "health-risk-mapping", component: HealthRiskMappingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
