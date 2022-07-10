import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerComponent } from 'src/app/shared/components/image-viewer/image-viewer.component';
import { Image } from 'src/app/shared/models/api-responses/image-list';
import { UnsplashService } from 'src/app/shared/services/unsplash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private _searchQuery: string = 'a';

  @ViewChild("scrollContainer") scrollContainer!: ElementRef<HTMLDivElement>;
  @Input() set searchQuery(value: string) {
    if(value && value !== this.searchQuery) {
      this._searchQuery = value;
      this.images = [];
      this._getImages();
    }
  }

  get searchQuery(): string {
    return this._searchQuery;
  }

  private readonly RESULTS_PER_PAGE: number = 10;
  private readonly ORIENTATION: string = 'portrait';

  public totalImages!: number;
  public imagesLoaded!: number;
  public pageNumber: number = 1;
  public totalPages!: number;

  public images: Image[] = [];
  public imageSelected!: string;

  constructor(
    private readonly _unsplashService: UnsplashService,
    private readonly _dialog: MatDialog
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
    this.imageSelected = selectedImage.id;
    this._openImageViewer(selectedImage);
  }

  /**
   * Fetches images, 10 by 10. Each search increases page number by 1
   */
  private _getImages(): void {
    this._unsplashService.getImagesByQuery(this.searchQuery, this.RESULTS_PER_PAGE, this.ORIENTATION, this.pageNumber).subscribe( response =>  {
      this.totalPages = response.total_pages;
      this.totalImages = response.total;
      this.imagesLoaded = this.images.push(...response.results);

      if(!this._isContainerFull() && this.imagesLoaded < this.totalImages) {
        this.onScroll();
      }
    });
  }

  private _openImageViewer(image: Image): void {
    this._dialog.open(ImageViewerComponent, {
      width: '100vw',
      height:  '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: image
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
