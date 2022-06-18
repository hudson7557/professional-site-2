import { Component, Input } from '@angular/core';
import { TextSectionData } from './../models/text-section-data';

@Component({
    selector: 'app-text-section',
    templateUrl: './text-section.component.html',
    styleUrls: ['./text-section.component.scss']
})
export class TextSectionComponent {

    @Input()
    public data?: TextSectionData;

}
