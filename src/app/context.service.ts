import { Injectable } from '@angular/core';
import { AppData } from './models/app-data';

@Injectable()
export class AppContext {

    /*
    Provides stubbed data to aid in development
    */
    public getData(): AppData {
        let stubData = {
            aboutMe: {
                title: 'About Me',
                content: 'Blah'
            },
            professionalExperience: {
                title: 'Professional Experience',
                content: 'Blah'
            },
            languages: {
                title: 'Languages',
                listItems: [
                    'One',
                    'Two',
                    'Three'
                ]
            },
            typesOfProblems: {
                title: 'Types of Problems I\'ve Worked On',
                sections: [
                    {
                        title: 'Angular Salesforce Integrations',
                        content: 'Blah blah blah'
                    }
                ]
            },
            programmingPhilosophy: {
                title: 'Programming Philosophy',
                content: 'Always Sunny'
            }
        };

        return stubData;
    }
}



