export type NatalChart = {
    "Планеты и точки в Знаках": [string, string][],
    "Планеты и Точки в Домах": [string, string][],
    "Аспекты": [string, string][]
};
export type CompatibilityInfo = {
    "title": string,
    "chakra": [[string, string], [string, string]][],
    "chakraDescription": [string, string][]
}