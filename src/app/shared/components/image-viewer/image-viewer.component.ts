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

  public hasMediaLinks!: boolean;
  public instagramUsername?: string;
  public twitterUsername?: string;

  constructor(
    public dialogRef: MatDialogRef<ImageViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Image
  ) {
    this.hasMediaLinks = !!data.user.social.instagram_username || !!data.user.social.twitter_username;
    this.instagramUsername = data.user.social.instagram_username;
    this.twitterUsername = data.user.social.instagram_username;
  }

  public close(): void {
    this.dialogRef.close();
  }

  public goToTwitterProfile(): void {
    window.open(`https://www.twitter.com/${this.twitterUsername}`, "_blank")
  }

  public goToInstagramProfile(): void {
    window.open(`https://www.instagram.com/${this.instagramUsername}`, "_blank")
  }

}
