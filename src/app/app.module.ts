import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppContext } from './context.service';
import { TextSectionComponent } from './text-section/text-section.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { ListSectionComponent } from './list-section/list-section.component';
import { TechnicalSectionComponent } from './technical-section/technical-section.component';

const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

const routerOptions: ExtraOptions = {
    useHash: false,
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        TextSectionComponent,
        SectionHeaderComponent,
        ListSectionComponent,
        TechnicalSectionComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, routerOptions)
    ],
    providers: [AppContext],
    bootstrap: [AppComponent]
})
export class AppModule { }
