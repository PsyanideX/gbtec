import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Image } from '../../models/api-responses/image-list';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent {

  private readonly _twitterUrl = 'https://www.twitter.com/';
  private readonly _instagramUrl = 'https://www.instagram.com/';

  public instagramUsername?: string;
  public twitterUsername?: string;

  constructor(
    private readonly _httpClient: HttpClient,
    public dialogRef: MatDialogRef<ImageViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Image
  ) {
    this.instagramUsername = data.user.social.instagram_username;
    this.twitterUsername = data.user.social.instagram_username;
  }

  public close(): void {
    this.dialogRef.close();
  }

  public goToTwitterProfile(): void {
    window.open(`${this._twitterUrl}${this.twitterUsername}`, "_blank")
  }

  public goToInstagramProfile(): void {
    window.open(`${this._instagramUrl}${this.instagramUsername}`, "_blank")
  }

  public downloadImage(): void {
    const imgUrl = this.data?.urls?.regular;
    const imgName = `${this.data?.id}.png`;
    this._httpClient.get(imgUrl, {responseType: 'blob' as 'json'})
      .subscribe((res: any) => {
        const file = new Blob([res], {type: res.type});
        const blob = window.URL.createObjectURL(file);
        const link = document.createElement('a');

        link.href = blob;
        link.download = imgName;

        // Version link.click() to work at firefox
        link.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }));

        setTimeout(() => { // firefox
          window.URL.revokeObjectURL(blob);
          link.remove();
        }, 100);
      });
  }

}
