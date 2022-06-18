import { SectionData } from "./section-data";

/** [Extends Section Data] Data for a list section in the app. */
export interface ListSectionData extends SectionData {
    listItems?: string[];
}
