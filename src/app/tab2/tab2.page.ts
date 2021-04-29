import { Component, OnInit } from "@angular/core";
import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";



import { Platform, LoadingController, ToastController } from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
constructor(public platform: Platform) { }

	/* Only instantiate the map AFTER the view is initialized and the DOM is accessible */
	ngAfterViewInit() {
		this.platform.ready().then(() => this.loadMap());
	}

	loadMap() {
		/* The create() function will take the ID of your map element */
		const map = GoogleMaps.create('map');

		map.one( GoogleMapsEvent.MAP_READY ).then((data: any) => {
			const coordinates: LatLng = new LatLng(18.779241, -103.163511);

			map.setCameraTarget(coordinates);
			map.setCameraZoom(16);
		});
	}
}