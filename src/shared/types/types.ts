import {Dayjs} from "dayjs";

export interface startFormInterface {
    name: string,
    city: string,
    date: Dayjs
    time: Dayjs
}
export enum themeMode {
    dark = "dark",
    light = "light"
}