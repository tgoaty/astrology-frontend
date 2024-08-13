import {Dayjs} from "dayjs";

export interface natalFormInterface {
    name: string,
    city: string,
    date: Dayjs | string
    time: Dayjs
}

export interface natalInfo {
    city: string,
    date: string,
    time: string
}

export interface compatibilityFormInterface {
    fDate: Dayjs,
    mDate: Dayjs
}

export interface compatibilityReqData {
    f_day: string;
    f_month: string;
    f_year: string;
    m_day: string;
    m_month: string;
    m_year: string;
}

export enum themeMode {
    dark = "dark",
    light = "light"
}