import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-edit-appareil',
	templateUrl: './edit-appareil.component.html',
})
export class EditAppareilComponent implements OnInit {

	defaultStatus: string = 'arrêtée';

	constructor(private appareilService: AppareilService,  private router: Router) {}

	ngOnInit() {
	}

	onSubmit(form: NgForm) {
		console.log(form.value);
		this.appareilService.addAppareil(form.value);
		this.router.navigate(['appareils']);
	}

}
