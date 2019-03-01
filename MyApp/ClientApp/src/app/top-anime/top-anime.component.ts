import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-anime',
  templateUrl: './top-anime.component.html',
  styleUrls: ['./top-anime.component.css']
})
export class TopAnimeComponent {
  public topAnimeList: TopAnime[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<TopAnimeApiResponse>('https://api.jikan.moe/v3/top/anime/1').subscribe(result => {
      console.log(result);
      this.topAnimeList = result.top;
    }, error => console.error(error));
  }
}

interface TopAnimeApiResponse {
  top: TopAnime[];
}

interface TopAnime {
  image_url, string,
  episodes: number,
  rank: number,
  score: number,
  title: string,
  url: string
}
