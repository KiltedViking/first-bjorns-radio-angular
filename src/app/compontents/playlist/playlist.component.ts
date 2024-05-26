import { Component, Input } from '@angular/core';
import { Playlist } from '../../interfaces/playlist';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {
  @Input() playlist!: Playlist;
}
