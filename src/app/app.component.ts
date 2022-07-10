import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public searchQuery!: string;

  public onSearch(searchQuery: string): void {
    this.searchQuery = searchQuery;
  }
}
