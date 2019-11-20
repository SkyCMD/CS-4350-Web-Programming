import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';


const routes: Routes = [
  {path: 'radar-chart', component: MyRadarChartComponent},
  {path: '**', component: MyRadarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
