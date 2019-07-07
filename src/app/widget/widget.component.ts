import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '@app/shared/services/geolocation.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.sass']
})
export class WidgetComponent implements OnInit {
  public lat: string;
  public lon: string;
  constructor(
    private geolocationService: GeolocationService
  ) { }

  ngOnInit() {
    this.geolocationService.getGeo()
      .subscribe((geoData) => {
        this.lat = geoData.latitude;
        this.lon = geoData.longitude;
          console.log('lat' + this.lat);
          console.log('lon' + this.lon);
        }
      );
  }

}
