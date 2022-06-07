import { Component, Input } from '@angular/core';
import { TechnicalSectionData } from '../models/technical-section-data';

@Component({
  selector: 'app-technical-section',
  templateUrl: './technical-section.component.html',
  styleUrls: ['./technical-section.component.scss']
})
export class TechnicalSectionComponent {

    @Input()
    data?: TechnicalSectionData;

}
