import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bounce, swing } from 'ng-animate';

@Component({
	selector: 'app-animate',
	template: `
		
		<button (click)="visible=!visible">Toggle</button>
		<hr>
		<div [@bounce] class="rect" *ngIf="visible"></div>
	`,
	styleUrls: ['./animate.component.scss'],
	animations: [
		trigger('bounce', [transition('void => *', useAnimation(bounce))]),
		trigger('bounce', [transition('* => void', useAnimation(swing))])
	]
})
export class AnimateComponent implements OnInit {
	visible = true
	constructor() { }

	ngOnInit(): void {
	}

}
