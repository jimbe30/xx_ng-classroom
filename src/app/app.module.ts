import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthService } from './services/auth.service';
import { AppareilDetailComponent } from './appareil-detail/appareil-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';



const appRoutes: Routes = [
	{ path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
	{ path: 'appareils/:id', canActivate: [AuthGuard], component: AppareilDetailComponent },
	{ path: 'auth', component: AuthComponent },
	{ path: '', redirectTo: '/appareils', pathMatch: 'full' },
	{ path: 'not-found', component: NotFoundComponent },
	{ path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
	{ path: '**', redirectTo: 'not-found' },
];

@NgModule({
	// référencement des composants de l'application
	declarations: [
		AppComponent,
		AppareilComponent,
		AuthComponent,
		AppareilViewComponent,
		AppareilDetailComponent,
		NotFoundComponent,
		EditAppareilComponent,
	],
	// référencement des dépendances sur des modules externes
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
	],
	// référencement des services singletons de l'application
	providers: [
		AppareilService,
		AuthService,
		AuthGuard,
	],
	// le point d'entrée de l'application
	bootstrap: [AppComponent]
})
export class AppModule { }
