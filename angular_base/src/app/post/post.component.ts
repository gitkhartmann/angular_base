import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Post } from '../app.component';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
	OnInit,
	OnChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy {

	@Input()
	post!: Post;
	@ContentChild('info', { static: true })
	infoRef!: ElementRef;
	@Output() onRemove = new EventEmitter<number>()

	removePost() {
		this.onRemove.emit(this.post.id);
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnCanges', changes);
	}


	ngOnInit(): void {
		console.log('ngOnInit');
		//console.log(this.infoRef.nativeElement);
	}

	ngDoCheck(): void {
		//throw new Error('Method not implemented.');
		console.log('ngDoCheck');
	}
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
		//throw new Error('Method not implemented.');
	}
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
		//throw new Error('Method not implemented.');
	}
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
		//throw new Error('Method not implemented.');
	}
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
		//throw new Error('Method not implemented.');
	}
	ngOnDestroy(): void {
		console.log('ngOnDestroy');
		//throw new Error('Method not implemented.');
	}

}
