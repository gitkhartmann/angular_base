import { animate, state, group, style, transition, trigger, query, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { AnimationEvent as AnimationEvent_2 } from "@angular/animations";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [
		trigger('box', [
			state('start', style({ background: 'blue' })),
			state('end', style({ background: 'red', transform: 'scale(1.2)' })),
			state('special', style({
				background: 'orange',
				transform: 'scale(0.5)',
				borderRadius: '50%'
			})),
			transition('start => end', animate(450)),
			transition('end => start', animate('800ms ease-in-out')),
			transition('special <=> *', [
				group([
					query('h4', animate(2000, style({
						fontSize: '.5rem',
						color: 'red'

					}))),
					style({ background: 'green' }),
					animate(1500, style({ background: 'pink' })),
					animate(750)
				]),

			]),// void => *
			transition(':enter', [
				animate('4s', keyframes([
					style({ background: 'red', offset: 0 }),
					style({ background: 'black', offset: 0.2 }),
					style({ background: 'orange', offset: 0.3 }),
					style({ background: 'blue', offset: 1 })
				]))
				//style({ opacity: 0 }),
				//animate('850ms ease-out')
			]),// * => void
			transition(':leave', [
				style({ opacity: 1 }),
				group([
					animate(750, style({ opacity: 0, transform: 'scale(1.2)' })),
					animate(350, style({ fontWeight: 'bold', color: '#000' }))
				])

			])

		])
	]
})
export class AppComponent {
	boxState = 'start'
	visible = true

	animate(): void {
		this.boxState = this.boxState === 'end' ? 'start' : 'end'
	}

	animationStarted(event: AnimationEvent_2) {
		console.log('Animation started: ', event)
	}

	animationDone(event: AnimationEvent_2) {
		console.log('Animation done: ', event)
	}
}
