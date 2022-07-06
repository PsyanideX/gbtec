import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../models/api-responses/image-list';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {

  @Input() public image!: Image;

  constructor() { }

  ngOnInit(): void {
  }

}
