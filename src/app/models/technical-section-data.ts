import { SectionData } from "./section-data";

/** [Extends SectionData] Data for a technical section in app. */
export interface TechnicalSectionData extends SectionData {
    sections?: TechSubsectionData[];
}

/** Data for a technical subsection in the app. */
export interface TechSubsectionData {
    title: string;
    content: string;
}
