import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-appareil-detail',
	templateUrl: './appareil-detail.component.html',
})
export class AppareilDetailComponent implements OnInit {

	name: string = 'Appareil';
	status: string = 'Statut';
	id: number = -1;

	constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

	ngOnInit() {
		const id = this.route.snapshot.params['id'];
		this.name = this.appareilService.getAppareilById(+id).name;
		this.status = this.appareilService.getAppareilById(+id).status;
	}


}
