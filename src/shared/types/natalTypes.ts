export type NatalChart = {
    "Планеты и точки в Знаках": {title: string, text: string}[],
    "Планеты и Точки в Домах": {title: string, text: string}[],
};
export type CompatibilityInfo = {
    "title": string,
    "chakra": [[string, string], [string, string]][],
    "chakraDescription": {title: string, text: string}[]
}