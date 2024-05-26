import { Injectable } from '@angular/core';
import { Album } from '../interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albumList: Album[] = [
    {
      id: 1,
      title: '1999',
      artist: 'Prince',
      relaseYear: '1982',
      comments: ''
    },
    {
      id: 2,
      title: 'The Highland Connection',
      artist: 'Runrig',
      relaseYear: '1979',
      comments: ''
    },
    {
      id: 3,
      title: 'New Gold Dream (81-82-83-84)',
      artist: 'Simple Minds',
      relaseYear: '1982',
      comments: ''
    }
  ];
  constructor() { }

  getAllAlbums(): Album[] {
    return this.albumList;
  }

  getAlbumById(id: number): Album | undefined {
    return this.albumList.find((album) => album.id === id);
  }
}
