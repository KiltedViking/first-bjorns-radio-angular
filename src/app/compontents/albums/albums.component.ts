import { Component } from '@angular/core';
import { AlbumComponent } from '../album/album.component';
import { Album } from '../../interfaces/album';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, AlbumComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
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
}
