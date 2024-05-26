import { Injectable } from '@angular/core';
import { Playlist } from '../interfaces/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  playlistList: Playlist[] = [
    {
      id: 1,
      name: 'The Red list',
      playDate: new Date(2024, 4, 1)
    },
    {
      id: 2,
      name: 'The Nationalist list',
      playDate: new Date(2024, 5, 6)
    }
  ];
  
  constructor() { }

  getAllPlaylists(): Playlist[] {
    return this.playlistList;
  }

  getPlaylistById(id: number): Playlist | undefined {
    return this.playlistList.find((playlist) => playlist.id === id);
  }
}
