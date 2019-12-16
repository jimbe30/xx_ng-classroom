import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService, Appareil } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-appareil-view',
	templateUrl: './appareil-view.component.html',
})
export class AppareilViewComponent implements OnInit, OnDestroy {

	isAuth = false;
	lastUpdate: Promise<Date>;
	appareilSubscription: Subscription;
	appareils: Appareil[];


	constructor(private appareilService: AppareilService, private authService: AuthService) {
		this.isAuth = authService.isAuth;
		
		this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
			(appareils: Appareil[]) => {
				this.appareils = appareils;
			}
		);
		this.appareilService.emitAppareilSubject();
		
		this.lastUpdate = new Promise((resolve, reject) => {
			const date = new Date();
			setTimeout(
				() => {
					resolve(date);
				}, 2000
			);
		});
	}

	ngOnInit = (): void => {
		
	}

	onAllumer = (): void => {
		this.appareilService.switchOnAll();
	}

	onEteindre = (): void => {
		this.appareilService.switchOffAll();
	}

	ngOnDestroy() {
		this.appareilSubscription.unsubscribe();
	}

}
