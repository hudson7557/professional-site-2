import { ListSectionData } from "./list-section-data";
import { NonGeneratedLink } from "./non-generated-link";
import { TechnicalSectionData } from "./technical-section-data";
import { TextSectionData } from "./text-section-data";

// Data for the entire app itself
export interface AppData {
    data: (ListSectionData | TechnicalSectionData | TextSectionData)[];
    extraLinks: NonGeneratedLink[];
}
