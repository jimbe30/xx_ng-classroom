import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-appareil',
	templateUrl: './appareil.component.html',
	styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

	@Input() appareilName: string = 'Triumph 675 Street Triple R';
	@Input() appareilStatus: string = 'éteint';

	constructor() { }

	ngOnInit() {
	}

	getStatus() {
		return this.appareilStatus.toUpperCase();
	}

	getColor() {
		if (this.appareilStatus === 'démarrée') {
			return 'green';
		} else {
			return 'red';
		}
	}

}
