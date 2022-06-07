import { ListSectionData } from "./list-section-data";
import { TechnicalSectionData } from "./technical-section-data";
import { TextSectionData } from "./text-section-data";

// Data for the entire app itself
export interface AppData {
    aboutMe: TextSectionData;
    professionalExperience: TextSectionData;
    languages: ListSectionData;
    typesOfProblems: TechnicalSectionData;
    programmingPhilosophy: TextSectionData;
}
