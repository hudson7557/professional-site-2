import { Component, Input } from '@angular/core';
import { TextSectionData } from './../models/text-section-data';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
})
export class SectionComponent {

    @Input()
    public data?: TextSectionData;

}
