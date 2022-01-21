import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../app.component';

@Component({
	selector: 'app-post-form',
	templateUrl: './post-form.component.html',
	styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

	@Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
	@ViewChild('titleInput')
	inputRef!: ElementRef;

	title: string = '';
	text: string = '';
	id?: number
	constructor() { }

	ngOnInit(): void {
	}
	addPost() {
		if (this.title.trim() && this.text.trim()) {
			const post: Post = {
				title: this.title,
				text: this.text,
				id: this.id
			}

			this.onAdd.emit(post);
			this.text = this.title = '';
		}
	}
	focusTitle() {
		this.inputRef.nativeElement.focus();
	}
}
