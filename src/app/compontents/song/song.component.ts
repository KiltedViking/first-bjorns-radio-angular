import { Component, Input } from '@angular/core';
import { Song } from '../../interfaces/song';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
  @Input() song!: Song;
}
