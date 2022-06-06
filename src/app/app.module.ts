import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppContext } from './context.service';
import { SectionComponent } from './section/section.component';
import { SectionHeaderComponent } from './section-header/section-header.component';

const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        SectionComponent,
        SectionHeaderComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [AppContext],
    bootstrap: [AppComponent]
})
export class AppModule { }
