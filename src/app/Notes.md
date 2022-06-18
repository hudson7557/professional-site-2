{
    title: string;
    anchor: string;
    content: string;
    listItems: string[];
    sections: {
        title: string;
        content: string;
    }
}

title: varchar
content: varchar
listItems: list of varchar results
sections: rows with a title piece and a content piece

I think I don't need the angular router module outside of navigation to home component, wild card navigation, and error page. 

The rest of the navigation will actually use anchor tags with refs to pieces in the code. That way I can generate the links as I go. I'll need to add a field to my data models for the sections of an anchor tag. That'll be placed in each anchor and in the rendered section. That should give me the desired single page application behavior. 

At that rate we're looking at a list of the various kinds of section data. 

How do I want to differentiate between the different kind of data? 

There's reflection, there's instance of if I use classes, there's also the possibility of putting a flag in the data model. Which is potentially the easiest. But uninteresting. 


The expandable sections need to be a component.

Need a way to make sure that the ids are not the same... I don't super like linking off of the anchor ids but it does work...
