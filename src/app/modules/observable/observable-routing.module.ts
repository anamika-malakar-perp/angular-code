import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableData } from './components/observable-data/observable-data.component';

const routes: Routes = [
  {
    path: 'observable-data',
    component: ObservableData,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservableRoutingModule {}
