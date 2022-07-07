import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Image } from 'src/app/shared/models/api-responses/image-list';
import { UnsplashService } from 'src/app/shared/services/unsplash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild("scrollContainer") scrollContainer!: ElementRef<HTMLDivElement>;

  private readonly RESULTS_PER_PAGE: number = 10;
  private readonly ORIENTATION: string = 'portrait';

  public totalImages!: number;
  public imagesLoaded!: number;
  public pageNumber: number = 1;
  public totalPages!: number;

  public images: Image[] = [];
  public imageSelected!: string;

  constructor(
    private readonly _unsplashService: UnsplashService
  ) { }

  ngOnInit(): void {
    this._getImages();
  }

  /**
   * Event triggers when the scroll reaches reaches 90% of scroll bar
   */
  public onScroll(): void {
    this.pageNumber += 1;
    this._getImages();
  }

  public selectImage(selectedImage: Image): void {
    // const selectedImageIndex = this.images.findIndex(image => image.id === selectedImage.id);
    // this.images[selectedImageIndex].selected = true;
    this.imageSelected = selectedImage.id;
  }

  /**
   * Fetches images, 10 by 10. Eac
   */
  private _getImages(): void {
    this._unsplashService.getImagesByQuery('a', this.RESULTS_PER_PAGE, this.ORIENTATION, this.pageNumber).subscribe( response =>  {
      this.totalPages = response.total_pages;
      this.totalImages = response.total;
      this.imagesLoaded = this.images.push(...response.results);

      if(!this._isContainerFull()) {
        this.onScroll();
      }
    });
  }

  /**
   * Checks whether the container scroll size is smaller or equal than the container height to know if it has a scrollbar,
   * and therefore, if more images need to be fetched
   *
   * @returns boolean
   */
  private _isContainerFull(): boolean {
    return this.scrollContainer.nativeElement.scrollHeight > this.scrollContainer.nativeElement.clientHeight;
  }

}
