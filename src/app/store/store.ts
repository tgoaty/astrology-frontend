import {create} from "zustand"
import {natalInfo, themeMode} from "../../shared/types/types.ts";

interface useUserInfoStoreState {
    username: string;
    city: string;
    date: string;
    time: string;
    themeColor: themeMode;

    natalInfo: natalInfo;
}

interface useUserInfoStoreActions {
    setUsername: (newUsername: string) => void;
    setCity: (newCity: string) => void;
    setDate: (newDate: string) => void;
    setTime: (newTime: string) => void;

    setNatalInfo: (newNatalInfo: natalInfo) => void

    setThemeColor: (newThemeColor: themeMode) => void
    deleteUserInfo: () => void
    setAllUserInfo: (newUsername: string, newCity: string, newDate: string, newTime: string) => void
}

export const useUserInfoStore = create<useUserInfoStoreState & useUserInfoStoreActions>((set) => ({
    username: localStorage.getItem("username") || '',
    city: localStorage.getItem("city") || '',
    date: localStorage.getItem("date") || '',
    time: localStorage.getItem("time") || '',
    themeColor: localStorage.getItem('theme') as themeMode || themeMode.dark,
    natalInfo: {city: "", date: "", time: ""},

    setUsername: (newUsername) => set({username: newUsername}),
    setCity: (newCity) => set({city: newCity}),
    setDate: (newDate) => set({date: newDate}),
    setTime: (newTime) => set({time: newTime}),

    setNatalInfo: (newNatalInfo) => set({natalInfo: newNatalInfo}),

    setThemeColor: (newThemeColor) => set({themeColor: newThemeColor}),

    deleteUserInfo: () => {
        localStorage.removeItem('username')
        localStorage.removeItem('city')
        localStorage.removeItem('date')
        localStorage.removeItem('time')
        set({
            username: '',
            city: '',
            date: '',
            time: '',
        })
    },

    setAllUserInfo: (newUsername, newCity, newDate, newTime) => {
        localStorage.setItem('username', newUsername)
        localStorage.setItem('city', newCity)
        localStorage.setItem('date', newDate)
        localStorage.setItem('time', newTime)
        set({
            username: newUsername,
            city: newCity,
            date: newDate,
            time: newTime,
        })
    }
}))