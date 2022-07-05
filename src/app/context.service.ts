import { Injectable } from '@angular/core';
import { AppData } from './models/app-data';

@Injectable()
export class AppContext {

    /** Provides stubbed data to aid in development. */
    public getData(): AppData {
        let stubData: AppData = {
            data: [
                {
                    title: 'About Me',
                    anchor: 'aboutMe',
                    sectionType: 'text',
                    content: 'I’m a Colorado native, and currently live in Arvada, CO. I love Colorado and everything it has to offer, when I’m not working I’m usually mountain biking, rock climbing, or spending time with friends and family.'
                },
                {
                    title: 'Professional Experience',
                    anchor: 'professionalExperience',
                    sectionType: 'text',
                    content: 'I’ve worked as a software consultant since June of 2021, meaning that a lot of my work is bound by NDAs and I can’t just link you to stuff I’ve worked on. It also means that I have a lot of exposure to different languages, frameworks, and code bases. Prior to all of this I was actually a Special Education Teacher and have 3 degrees... and the debt to prove it.'
                },
                {
                    title: 'Languages',
                    anchor: 'languages',
                    sectionType: 'list',
                    listItems: [
                        'Angular',
                        'C/C#',
                        'CSS/SCSS',
                        'HTML',
                        'Typescript/Javascript',
                        'Salesforce Apex',
                        'Salesforce SOQL',
                        'Swift',
                        'SQL',
                        'Python',
                        'Etc.'
                    ]
                },
                {
                    title: 'Types of Problems I\'ve Worked On',
                    anchor: 'typesOfProblems',
                    sectionType: 'technical',
                    sections: [
                        {
                            title: 'Angular Salesforce Integrations',
                            content: 'Created apps for managing and summarizing inventory, contacts, accounts, and other common Salesforce data. Some are hosted on Salesforce, others standalone. Most are backed by a dotnet server, but some use frameworks like Nest.js to send and receive requests from Salesforce. Worked On Angular UI implementation Rest Callouts Rest Endpoints (On Salesforce and in the custom server) .NET server set up (beginner at this) SOQL queries and Apex data manipulation on Salesforce and in Angular.'
                        },
                        {
                            title: 'iOS App',
                            content: 'Worked on an iOS application to add new features and maintain or debug pre-existing features in response to user testing through test flight. I worked on adding features to the application such as saving user preferences and favorites. Worked on a generated calendar to display events stored in the database. Also added features that tied into other apps (mail, phone, etc.) and added additional menus, navigations, and views to the app. '
                        },
                        {
                            title: 'Angular Forms App',
                            content: 'This was a piece of reporting software that involved completing excessively long government reports. I was responsible for creating the forms in Angular using reactive forms. Along the way I created components for all of the types of input that the form could accept along with data validation rules. Some of the components that were created were simple styled inputs, others were components that created their own child components which used control value accessors to communicate with their parent components. This was done to create flexible pick lists or radio inputs that responded to the data received from the SQL database.'
                        },
                        {
                            title: 'Marketing Cloud Management',
                            content: 'Worked in Salesforce (SFDC) and Marketing Cloud (SFMC) to manage a clients SFMC instance. This involved writing AMPScript pages to allow users to manage their subscriptions, writing Apex schedulable batch jobs to manage and sync the data in SFMC with the data in the clients SFDC and providing routing maintenance of the data through single use jobs.'
                        },
                        {
                            title: 'Data Reporting Tools',
                            content: 'Used a C# server app to query a clients database and generate scheduled reports. The report builder used OpenXML to take SQL data and create the .xls business reports the client had requested. Some logic and styles were applied to cells as necessary. '
                        },
                        {
                            title: 'UI Design and Prototyping',
                            content: 'I actually applied this in this project and created a click through prototype of the project on Figma prior to beginning programing. That said, working as a consultant I have been the one to design and implement multiple interfaces. I have also worked as a TA for Oregon State Universities CS-352(Usability Engineering) where I graded projects based off of adherence to usability heuristics and helped develop usability curriculum. '
                        }
                    ]
                },
                {
                    title: 'Programming Philosophy',
                    anchor: 'philosophy',
                    sectionType: 'text',
                    content: 'Everyone’s got their own style of programming including myself. Personally, I view programming as an inherently creative endeavour, and with the rate at which technology changes I don’t focus so much on being an expert in a single language or framework. Instead, I focus on using the right technology to get the right results and focus on being able to learn and adapt. I don’t really ever see myself stopping programming, I just like making things. At the same time, my hope is to use my programming skills to make the world a better place.'
                },
                {
                    title: 'Programming Style',
                    anchor: 'programming-style',
                    sectionType: 'text',
                    content: 'Stylistically I prefer to begin programming with some sort of pseudo code derived from requirements or a prototype design. I tend to like writing out the major logical steps in a process as comments and once I have a solid idea of what to do I proceed to actually writing the code. I try to break the code up into different files, components, and functions based upon logical grouping for the code and what the code is doing. I really enjoy programming that involves components so I feel particularly at home in Angular and Swift. As for testing, I typically test as I go and don’t write unit tests. It’s not that I don’t like them. I just usually don’t have the time/budget to write them. I also use GitHub/GitLab to commit and branch my work often to break projects up and ensure that the code is stable before pushing into a master branch. I usually commit after a logical chunk of code is completed.'
                }
            ],
            extraLinks: [
                            {
                                title: 'Get In Touch',
                                anchor: 'getInTouch'
                            }
                        ]
        }

        return stubData;
    }
}
