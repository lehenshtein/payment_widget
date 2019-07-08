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
  public formSuccess: boolean;
  public formError: boolean;
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
  public onSuccess(value) {
    if (value) {
      this.formSuccess = true;
      setTimeout(() => this.formSuccess = false, 3000);
      return;
    }
    this.formError = true;
    setTimeout(() => this.formError = false, 3000);
  }

}
