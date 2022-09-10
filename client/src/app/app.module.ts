import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MapViewComponent } from './components/map-view/map-view.component';
import { MousePositionComponent } from './components/mouse-position/mouse-position.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LocationsComponent,
    LocationCardComponent,
    MapViewComponent,
    MousePositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
