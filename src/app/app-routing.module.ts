import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistEditComponent } from './artist-edit/artist-edit.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'artists'},
  { path: 'albums', component: ArtistsComponent },
  { path: 'create', component: ArtistCreateComponent},
  { path: 'edit', component: ArtistEditComponent },
  { path: 'albums/:id', component: ArtistDetailComponent },
  { path: 'album/:name', component: ArtistSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
