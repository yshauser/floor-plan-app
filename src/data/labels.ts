export interface LabelData {
    id: string; // like 4N23B
    x: number;
    y: number;
  }
  
  export const labels: LabelData[] = [
    { id: "4N23B", x: 1230, y: 340 },
    { id: "4S45", x: 2340, y: 670 },
    { id: "4N16", x: 122, y: 226 },
    // Add all known labels manually or parse from an OCR process
  ];
  