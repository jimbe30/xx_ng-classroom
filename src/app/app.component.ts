import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	isAuth: boolean = false;
	title: string = 'the Jungle';

	appareils = [{
		name: 'Triumph Street RS',
		status: 'arrêtée'
	}, {
		name: '675 Street Triple R',
		status: 'démarrée'
	}, {
		name: 'Yamaha YZF-R1',
		status: 'arrêtée'
	}
	];

	constructor() {
		setTimeout(() => {
			this.isAuth = true;
		}, 5000);
	}

	lastUpdate = new Promise((resolve, reject) => {
		const date = new Date();
		setTimeout(
			() => {
				resolve(date);
			}, 2000
		);
	});

	onAllumer = function (): void {
		console.log('On allume tout !');
	};



}
