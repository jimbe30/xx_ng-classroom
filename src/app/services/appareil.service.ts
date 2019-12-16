import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface Appareil {
	id: number;
	name: string;
	status: string;
}

@Injectable()
export class AppareilService {

	appareilsSubject = new Subject<Appareil[]>();

	private appareils: Appareil[] = [{
		id: 1,
		name: 'Triumph Street RS',
		status: 'arrêtée'
	}, {
		id: 2,
		name: '675 Street Triple R',
		status: 'démarrée'
	}, {
		id: 3,
		name: 'Yamaha YZF-R1',
		status: 'arrêtée'
	}];

	constructor() {

	}

	emitAppareilSubject(): void {
		this.appareilsSubject.next(this.appareils.slice());
	}

	switchOnAll(): void {
		for (const appareil of this.appareils) {
			appareil.status = 'démarrée';
		}
		this.emitAppareilSubject();
	}

	switchOffAll(): void {
		for (const appareil of this.appareils) {
			appareil.status = 'arrêtée';
		}
		this.emitAppareilSubject();
	}

	switchOn(index: number): void {
		this.appareils[index].status = 'démarrée';
		this.emitAppareilSubject();
	}

	switchOff(index: number): void {
		this.appareils[index].status = 'arrêtée';
		this.emitAppareilSubject();
	}

	getAppareilById(id: number): Appareil {
		const appareil = this.appareils.find(
			(item) => {
				return item.id === id;
			}
		);
		return appareil;
	}

	addAppareil(appareilForm): void {
		const appareilObject: Appareil = {...appareilForm, id: this.appareils[(this.appareils.length - 1)].id + 1};
		this.appareils.push(appareilObject);
		this.emitAppareilSubject();
	}




}
