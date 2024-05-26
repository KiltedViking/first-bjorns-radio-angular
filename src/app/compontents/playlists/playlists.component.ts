import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Playlist } from '../../interfaces/playlist';
import { PlaylistsService } from '../../services/playlists.service';
import { PlaylistComponent } from '../playlist/playlist.component'

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [CommonModule, PlaylistComponent],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.css'
})
export class PlaylistsComponent {
  playlistService: PlaylistsService = inject(PlaylistsService);
  playlistList: Playlist[];

  constructor() {
    this.playlistList = this.playlistService.getAllPlaylists();
  }
}
