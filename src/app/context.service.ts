import { Injectable } from '@angular/core';
import { AppData } from './models/app-data';

@Injectable()
export class AppContext {

    /*
    Provides stubbed data to aid in development
    */
    public getData(): AppData {
        let stubData = {
            sections: [
                {
                    title: 'About Me',
                    content: 'Blah'
                }
            ]
        };

        return stubData;
    }
}



