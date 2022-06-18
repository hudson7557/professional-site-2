import { SectionData } from "./section-data";

/** [Extends SectionData] Data for a generic text section */
export interface TextSectionData extends SectionData {
    content?: string;
}
