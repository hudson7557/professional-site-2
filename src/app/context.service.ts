import { Injectable } from '@angular/core';
import { AppData } from './models/app-data';
import { TextSectionData } from './models/text-section-data';

@Injectable()
export class AppContext {

    /*
    Provides stubbed data to aid in development
    */
    public getData(): AppData {
        let stubData: AppData = {
            data: [
                {
                    title: 'About Me',
                    anchor: 'aboutMe',
                    sectionType: 'text',
                    content: 'Blah'
                },
                {
                    title: 'Professional Experience',
                    anchor: 'professionalExperience',
                    sectionType: 'text',
                    content: 'Blah'
                },
                {
                    title: 'Languages',
                    anchor: 'languages',
                    sectionType: 'list',
                    listItems: [
                        'One',
                        'Two',
                        'Three'
                    ]
                },
                {
                    title: 'Types of Problems I\'ve Worked On',
                    anchor: 'typesOfProblems',
                    sectionType: 'technical',
                    sections: [
                        {
                            title: 'Angular Salesforce Integrations',
                            content: 'Blah blah blah'
                        }
                    ]
                },
                {
                    title: 'Programming Philosophy',
                    anchor: 'philosophy',
                    sectionType: 'text',
                    content: 'Always Sunny'
                }
            ]
        }

        return stubData;
    }
}
