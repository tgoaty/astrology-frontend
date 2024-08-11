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

export enum themeMode {
    dark = "dark",
    light = "light"
}