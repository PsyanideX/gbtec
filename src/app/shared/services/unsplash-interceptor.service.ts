import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnsplashInterceptorService implements HttpInterceptor {

  private readonly _unsplashApiKey!: string;
  private readonly _headers!: HttpHeaders;

  constructor() {
    this._unsplashApiKey = environment.UNSPLASH_API_KEY;
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url.startsWith('https://api.unsplash.com/')) {
      const request = req.clone({
        setHeaders: {
          authorization: `Client-ID ${this._unsplashApiKey}`
        }
      })
      return next.handle(request);
    }

    return next.handle(req);

  }
}
