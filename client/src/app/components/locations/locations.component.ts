import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/Location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: Location[] = [];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getLocatoins().subscribe((locations) => (this.locations = locations));
  }
}
