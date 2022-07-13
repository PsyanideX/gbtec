import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Image } from '../../models/api-responses/image-list';

import { ImageViewerComponent } from './image-viewer.component';

describe('ImageViewerComponent', () => {
  let component: ImageViewerComponent;
  let fixture: ComponentFixture<ImageViewerComponent>;

  const twitterUrl = 'https://www.twitter.com/';
  const instagramUrl = 'https://www.instagram.com/';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ImageViewerComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: getImageData() },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.data = getImageData();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to twitter profile', () => {
    const redirectSpy = spyOn(window, 'open');
    component.goToTwitterProfile();
    expect(redirectSpy).toHaveBeenCalledOnceWith(`${twitterUrl}${component.data?.user?.social?.twitter_username}`, "_blank");
  });

  it('should redirect to instagram profile', () => {
    const redirectSpy = spyOn(window, 'open');
    component.goToInstagramProfile();
    expect(redirectSpy).toHaveBeenCalledOnceWith(`${instagramUrl}${component.data?.user?.social?.instagram_username}`, "_blank");
  });

  it('should toggle show overlay on mobile', () => {
    component.showOverlayMobile = true;
    component.toggleShowOverlayMobile();
    expect(component.showOverlayMobile).toEqual(false);
  });

  function getImageData(): Image {
    return ({
      id: "8bYABbKgBYQ",
      created_at: "2020-08-28T03:45:06-04:00",
      updated_at: "2022-07-10T12:14:41-04:00",
      promoted_at: "2020-08-28T04:00:01-04:00",
      width: 2782,
      height: 3477,
      color: "#f3f3f3",
      blur_hash: "LaPG%4M{a#of_2t7WBaz~Wxuofay",
      description: null,
      alt_description: "man surfing on sea waves during daytime",
      urls: {
        raw: "https://images.unsplash.com/photo-1598600703090-6867b834f070?ixid=MnwzNDM4MDB8MHwxfHNlYXJjaHwyMXx8YXxlbnwwfDF8fHwxNjU3NTUwOTQ1&ixlib=rb-1.2.1",
        full: "https://images.unsplash.com/photo-1598600703090-6867b834f070?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDM4MDB8MHwxfHNlYXJjaHwyMXx8YXxlbnwwfDF8fHwxNjU3NTUwOTQ1&ixlib=rb-1.2.1&q=80",
        regular: "https://images.unsplash.com/photo-1598600703090-6867b834f070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM4MDB8MHwxfHNlYXJjaHwyMXx8YXxlbnwwfDF8fHwxNjU3NTUwOTQ1&ixlib=rb-1.2.1&q=80&w=1080",
        small: "https://images.unsplash.com/photo-1598600703090-6867b834f070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM4MDB8MHwxfHNlYXJjaHwyMXx8YXxlbnwwfDF8fHwxNjU3NTUwOTQ1&ixlib=rb-1.2.1&q=80&w=400",
        thumb: "https://images.unsplash.com/photo-1598600703090-6867b834f070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM4MDB8MHwxfHNlYXJjaHwyMXx8YXxlbnwwfDF8fHwxNjU3NTUwOTQ1&ixlib=rb-1.2.1&q=80&w=200",
        small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1598600703090-6867b834f070"
      },
      links: {
        self: "https://api.unsplash.com/photos/8bYABbKgBYQ",
        html: "https://unsplash.com/photos/8bYABbKgBYQ",
        download: "https://unsplash.com/photos/8bYABbKgBYQ/download?ixid=MnwzNDM4MDB8MHwxfHNlYXJjaHwyMXx8YXxlbnwwfDF8fHwxNjU3NTUwOTQ1",
        download_location: "https://api.unsplash.com/photos/8bYABbKgBYQ/download?ixid=MnwzNDM4MDB8MHwxfHNlYXJjaHwyMXx8YXxlbnwwfDF8fHwxNjU3NTUwOTQ1"
      },
      categories: [],
      likes: 45,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "-k1Jn78-Fao",
        updated_at: "2022-07-11T06:59:00-04:00",
        username: "ldxcreative",
        name: "Liam Drinan",
        first_name: "Liam",
        last_name: "Drinan",
        twitter_username: null,
        portfolio_url: null,
        bio: "Instagram - @ldxcreative",
        location: "Sydney, Australia",
        links: {
          self: "https://api.unsplash.com/users/ldxcreative",
          html: "https://unsplash.com/@ldxcreative",
          photos: "https://api.unsplash.com/users/ldxcreative/photos",
          likes: "https://api.unsplash.com/users/ldxcreative/likes",
          portfolio: "https://api.unsplash.com/users/ldxcreative/portfolio",
          following: "https://api.unsplash.com/users/ldxcreative/following",
          followers: "https://api.unsplash.com/users/ldxcreative/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1616753016068-fb7005af2621image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1616753016068-fb7005af2621image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1616753016068-fb7005af2621image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "ldxcreative",
        total_collections: 0,
        total_likes: 6,
        total_photos: 25,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "ldxcreative",
          portfolio_url: null,
          twitter_username: "ldxcreative",
          paypal_email: null
        }
      },
      tags: [
        {
          type: "search",
          title: "sydney"
        },
        {
          type: "search",
          title: "australia"
        }
      ]
    });
  }
});
