import { Component, OnInit } from '@angular/core';

export interface Post {
	title: string,
	text: string,
	id?: number
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	posts: Post[] = [
		{ title: 'Изучение компонентов', text: 'Изучаю компоненты Andular', id: 1 },
		//{ title: 'Второй заголовок', text: 'Второй текст', id: 2 }
	]

	updatePosts(post: Post) {
		this.posts.unshift(post);
	}
	removePost(id: number) {
		console.log(id);
		this.posts = this.posts.filter(p => p.id !== id);
	}
	ngOnInit(): void {

		//throw new Error('Method not implemented.');
	}

}
