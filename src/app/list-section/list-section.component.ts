import { Component, Input } from '@angular/core';
import { ListSectionData } from '../models/list-section-data';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.scss']
})
export class ListSectionComponent {
    @Input()
    data?: ListSectionData;
}
