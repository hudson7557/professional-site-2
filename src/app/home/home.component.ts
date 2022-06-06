import { Component, OnInit } from '@angular/core';
import { AppContext } from '../context.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        public readonly context: AppContext
    ) { }

    ngOnInit(): void { }

}
