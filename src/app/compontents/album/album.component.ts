import { Component, Input } from '@angular/core';
import { Album } from '../../interfaces/album';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
@Input() album!: Album;
}
