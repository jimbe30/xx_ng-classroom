import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	
	title: string = 'the Jungle';
	secondes: number;
	observateur: Subscription;

	ngOnInit() {
		const counter = Observable.interval(1000);
		this.observateur = counter.subscribe(
			(value) => {
				this.secondes = value;
			},
			(error) => {
				console.log('Uh-oh, an error occurred! : ' + error);
			},
			() => {
				console.log('Observable complete!');
			}
		);
	}

	ngOnDestroy(): void {
		this.observateur.unsubscribe();
	}
}
