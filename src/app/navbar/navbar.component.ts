import { Component, OnInit } from '@angular/core';
import { AppContext } from './../context.service'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    constructor(
        public readonly context: AppContext
    ) { }

    ngOnInit(): void { }

}
