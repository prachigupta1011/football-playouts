import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballPlayoutComponent } from './components/football-playout/football-playout.component';
import { SceneManagerComponent } from './components/scene-manager/scene-manager.component';
import { ApiCallComponent } from './components/api-call/api-call.component';

const routes: Routes = [
  { path: 'football-playout', component: FootballPlayoutComponent },
  { path: 'scene-manager', component: SceneManagerComponent },
  { path: 'api-call', component: ApiCallComponent },
  { path: '', redirectTo: '/football-playout', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
