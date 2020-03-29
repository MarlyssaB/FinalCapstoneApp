import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TitleListComponent } from './title-list/title-list.component';
import { ItemComponent } from './item/item.component';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SearchBoxComponent} from './search-box/search-box.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { MovieComponent } from './movie/movie.component';
import { MovieMainComponent } from './movie-main/movie-main.component';
import { ListAddComponent } from './list-add/list-add.component';
import { ApiService } from './services/api.service';
import { MovieService } from './services/movie.service';
import { MovieApiService } from './services/movie-api.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MovieComponent,
    MovieMainComponent,
    SearchBoxComponent,
    TitleListComponent,
    ItemComponent,
    ListAddComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,

    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
        { path: 'movies', component: MovieMainComponent, canActivate: [AuthorizeGuard] },

    ])
  ],
  providers: [ MovieService, MovieApiService, ApiService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
