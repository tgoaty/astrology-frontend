export type PlanetsAndPointsInSigns = {
    "Планеты и точки в Знаках": Array<
        Array<{
            title: string;
        }>
    >;
};

export type PlanetsAndPointsInHouses = {
    "Планеты и Точки в Домах": Array<
        Array<{
            title: string;
        }>
    >;
};

export type Aspects = {
    "Аспекты": Array<
        Array<{
            title: string;
        }>
    >;
};

export type NatalChart = PlanetsAndPointsInSigns & PlanetsAndPointsInHouses & Aspects;

export type Planet =
    | "Солнце"
    | "Луна"
    | "Меркурий"
    | "Венера"
    | "Марс"
    | "Юпитер"
    | "Сатурн"
    | "Уран"
    | "Нептун"
    | "Плутон"
    | "Черная Луна Лилит"
    | "Парс Фортуны"
    | "Середина Неба";

export type House =
    | "Первый Дом"
    | "Второй Дом"
    | "Третий Дом"
    | "Четвёртый Дом"
    | "Пятый Дом"
    | "Шестой Дом"
    | "Седьмой Дом"
    | "Восьмой Дом"
    | "Девятый Дом"
    | "Десятый Дом"
    | "Одиннадцатый Дом"
    | "Двенадцатый Дом";

export type AspectType = "Тригон" | "Соединение" | "Секстиль" | "Квадрат" | "Оппозиция";

export type Aspect = {
    planet1: Planet;
    aspectType: AspectType;
    planet2: Planet;
};

export type NatalChartWithAspects = NatalChart & {
    "Аспекты": Array<Aspect[]>;
};