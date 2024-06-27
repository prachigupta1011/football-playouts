import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballPlayoutComponent } from './components/football-playout/football-playout.component';
import { SceneManagerComponent } from './components/scene-manager/scene-manager.component';
import { ApiCallComponent } from './components/api-call/api-call.component';
import { HttpClientModule } from '@angular/common/http';
import { TreeNodeComponent } from './components/scene-manager/tree-node.component';
import { PropertiesViewComponent } from './components/scene-manager/properties-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FootballPlayoutComponent,
    SceneManagerComponent,
    ApiCallComponent,
    TreeNodeComponent,
    PropertiesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
