import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/shared/models/api-responses/image-list';
import { UnsplashService } from 'src/app/shared/services/unsplash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public totalImages!: number;
  public imagesLoaded!: number;
  public pageNumber: number = 1;
  public totalPages!: number;

  public images: Image[] = [];

  constructor(
    private readonly _unsplashService: UnsplashService
  ) { }

  ngOnInit(): void {
    this._getImages();
  }

  private _getImages(): void {
    this._unsplashService.getImagesByQuery('a', 10, 'portrait', this.pageNumber).subscribe( response =>  {
      this.totalPages = response.total_pages;
      this.totalImages = response.total;
      this.imagesLoaded = this.images.push(...response.results);
    });
  }

}
