import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';


@Component({
	selector: 'app-appareil',
	templateUrl: './appareil.component.html',
})
export class AppareilComponent implements OnInit {

	@Input() appareilName: string = 'Triumph 675 Street Triple R';
	@Input() appareilStatus: string = 'éteint';
	@Input() index: number = -1;
	@Input() id: number = -1;


	constructor(private appareilService: AppareilService) {
	}

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

	onSwitch() {
		if (this.appareilStatus === 'démarrée') {
			this.appareilService.switchOff(this.index);
		} else if (this.appareilStatus === 'arrêtée') {
			this.appareilService.switchOn(this.index);
		}
	}

}
