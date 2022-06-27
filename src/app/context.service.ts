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
                            content: 'Created apps for managing and summarizing inventory, contacts, accounts, and other data. Some are hosted on Salesforce, others standalone. Most are backed by a dotnet server, but some use frameworks like Nest.js to send and receive requests from Salesforce. Worked On Angular UI implementation Rest Callouts Rest Endpoints (On Salesforce and in the custom server) .NET server set up (beginner at this) SOQL queries and Apex data manipulation on Salesforce and in Angular.'
                        },
                        {
                            title: 'iOS App',
                            content: 'Blah'
                        },
                        {
                            title: 'Angular Forms App',
                            content: 'Blah2'
                        },
                        {
                            title: 'Marketing Cloud Management',
                            content: 'Blah3'
                        },
                        {
                            title: 'Data Reporting Tools',
                            content: 'Blah4'
                        },
                        {
                            title: 'UI Design and Prototyping',
                            content: 'Blah5'
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
                    anchor: 'philosophy',
                    sectionType: 'text',
                    content: 'Stylistically I prefer to begin programming with some sort of pseudo code derived from requirements or a prototype design. I tend to like writing out the major logical steps in a process as comments and once I have a solid idea of what to do I proceed to actually writing the code. I try to break the code up into different files, components, and functions based upon logical grouping for the code and what the code is doing. I really enjoy programming that involves components so I feel particularly at home in Angular and Swift. As for testing, I typically test as I go and don’t write unit tests. It’s not that I don’t like them. I just usually don’t have the time/budget to write them. I also use GitHub/GitLab to commit and branch my work often to break projects up and ensure that the code is stable before pushing into a master branch. I usually commit after a logical chunk of code is completed.'
                }
            ]
        }

        return stubData;
    }
}
