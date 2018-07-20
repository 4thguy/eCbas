import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { MatButtonModule, MatListModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FrontPageComponent } from './front-page/front-page.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AppRoutingModule } from './app-routing.module';
import { TopMenuComponent } from './top-menu/top-menu.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/user';
import { UserEffect } from './effects/user';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    ItemDetailsComponent,
    FrontPageComponent,
    TopMenuComponent,
    SignOutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,

    StoreModule.forRoot({ user: reducer }),
    EffectsModule.forRoot([UserEffect])
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
