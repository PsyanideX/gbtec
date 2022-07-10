import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ImageItemModule } from './shared/components/image-item/image-item.module';
import { UnsplashInterceptorService } from './shared/services/unsplash-interceptor.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageViewerModule } from './shared/components/image-viewer/image-viewer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchbarModule } from './shared/components/searchbar/searchbar.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    //Custom components
    ImageItemModule,
    ImageViewerModule,
    MatDialogModule,
    SearchbarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnsplashInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
