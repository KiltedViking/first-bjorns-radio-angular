import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsService } from '../../services/songs.service';
import { Song } from '../../interfaces/song';
import { SongComponent } from '../song/song.component';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule, SongComponent],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  songService: SongsService = inject(SongsService);
  songList: Song[];

  constructor() {
    this.songList = this.songService.getAllSongs();
  }
}
