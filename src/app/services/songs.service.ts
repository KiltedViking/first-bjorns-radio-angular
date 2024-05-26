import { Injectable } from '@angular/core';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  songList: Song[] = [
    {
      id: 1,
      albumId: 1,
      sequence: 1,
      title: '1999',
      comments: ''
    },
    {
      id: 2,
      albumId: 1,
      sequence: 2,
      title: 'Little Red Corvette',
      comments: ''
    },
    {
      id: 3,
      albumId: 3,
      sequence: 1,
      title: 'Someone, Somwhere in Summertime',
      comments: ''
    },
    {
      id: 4,
      albumId: 3,
      sequence: 2,
      title: 'Colours Fly and Catherine Wheel',
      comments: ''
    },
  ];

  constructor() { }

  getAllSongs(): Song[] {
    return this.songList;
  }

  getSongById(id: number): Song | undefined {
    return this.songList.find((song) => song.id === id);
  }

  getSongForAlbumId(id: number): Song[] {
    return this.songList.filter((song) => song.albumId === id);
  }
}
