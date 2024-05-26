import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Album } from '../../interfaces/album';
import { AlbumsService } from '../../services/albums.service';
import { AlbumComponent } from '../album/album.component';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, AlbumComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albumService: AlbumsService = inject(AlbumsService);
  albumList: Album[];

  constructor() {
    this.albumList = this.albumService.getAllAlbums();
  }
}
