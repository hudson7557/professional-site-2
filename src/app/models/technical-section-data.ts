import { SectionData } from "./section-data";

export interface TechnicalSectionData extends SectionData {
    sections: TechSubsectionData[];
}

export interface TechSubsectionData extends SectionData {
    content: string;
}
