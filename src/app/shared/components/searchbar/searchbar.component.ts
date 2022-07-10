import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  @Output() searchEvent = new EventEmitter<string>();
  public searchQuery!: string;

  constructor() { }

  public search(): void {
    this.searchEvent.emit(this.searchQuery);
  }

}
