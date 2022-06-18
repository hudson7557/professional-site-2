/** Base model for an apps section data. */
export interface SectionData {
    title: string;
    anchor: string;
    sectionType: "text" | "list" | "technical";
}
