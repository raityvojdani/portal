import { NgModule } from '@angular/core';

import { SetadRoutingModule } from './setad-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { SingleListPageComponent } from './pages/single/single-list-page/single-list-page.component';
import { SinglePlayerDitailPageComponent } from './pages/single/single-player-ditail-page/single-player-ditail-page.component';
import { AllPlayerPageComponent } from './pages/all-player-page/all-player-page.component';
import { DoubleListPageComponent } from './pages/double/double-list-page/double-list-page.component';
import { DoubleTeamDetailPageComponent } from './pages/double/double-team-detail-page/double-team-detail-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SingleListPageComponent,
    SinglePlayerDitailPageComponent,
    AllPlayerPageComponent,
    DoubleListPageComponent,
    DoubleTeamDetailPageComponent
  ],
  imports: [
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    SetadRoutingModule
  ]
})
export class StetadModule { }