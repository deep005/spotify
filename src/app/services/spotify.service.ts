import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()

export class SpotifyService{

  private searchUrl:string;

  constructor(private http:Http){}

  searchMusic(str:string, type='artist'){
    this.searchUrl = "https://api.spotify.com/search?query="+str+"&offset=0&limit=20&type="+type+"&market=Us";
    return this.http.get(this.searchUrl)
      .map(res => res.json());
  }

}
