import { Routes } from '@angular/router';
import { HomeComponent } from './compontents/home/home.component';
import { AlbumsComponent } from './compontents/albums/albums.component';
import { SongsComponent } from './compontents/songs/songs.component';
import { PlaylistsComponent } from './compontents/playlists/playlists.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Björn\'s Radio - Angular'
    },
    {
        path: 'albums',
        component: AlbumsComponent,
        title: 'Albums - Björn\'s Radio'
    },
    {
        path: 'songs',
        component: SongsComponent,
        title: 'Songs - Björn\'s Radio'
    },
    {
        path: 'playlists',
        component: PlaylistsComponent,
        title: 'Playlists - Björn\'s Radio'
    }
];
