import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsComponent } from './components/locations/locations.component';
import { MapViewComponent } from './components/map-view/map-view.component';

const routes: Routes = [
  { path: '', component: MapViewComponent },
  { path: 'map', component: MapViewComponent },
  { path: 'locations', component: LocationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
