import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImageList } from '../models/api-responses/image-list';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  private readonly _endpointUrl!: string;

  // TODO move to config file
  private readonly unsplashEndpoints = {
    SEARCH: '/search/photos'
  }

  constructor(
    private readonly _httpClient: HttpClient
  ) {
    this._endpointUrl = environment.UNSPLASH_BASE_URL;
  }

  public getImagesByQuery(query: string, pageResults?: number, orientation?: string, page?: number): Observable<ImageList> {
    const url = this._endpointUrl + this.unsplashEndpoints.SEARCH;
    const queryParams = `query=${query}&per_page=${pageResults}&orientation=${orientation}&page=${page}`;
    return this._httpClient.get<ImageList>(`${url}?${queryParams}`);
  }
}
