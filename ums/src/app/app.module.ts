import { UserService } from './services/user.service';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDataComponent } from './user-data/user-data.component';
import { RoutingModuleModule } from './routing-module.module';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModuleModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
