import {create} from "zustand"
import {themeMode} from "../../shared/types/types.ts";

interface useUserInfoStoreState {
    username: string;
    city: string;
    date: string;
    time: string;
    themeColor: themeMode
}

interface useUserInfoStoreActions {
    setUsername: (newUsername: string) => void;
    setCity: (newCity: string) => void;
    setDate: (newDate: string) => void;
    setTime: (newTime: string) => void;
    setThemeColor: (newThemeColor: themeMode) => void
}

export const useUserInfoStore = create<useUserInfoStoreState & useUserInfoStoreActions>((set) => ({
    username: '',
    city: '',
    date: '',
    time: '',
    themeColor: localStorage.getItem('theme') as themeMode || themeMode.dark,
    setUsername: (newUsername) => set({username: newUsername}),
    setCity: (newCity) => set({city: newCity}),
    setDate: (newDate) => set({date: newDate}),
    setTime: (newTime) => set({time: newTime}),
    setThemeColor: (newThemeColor) => set({themeColor: newThemeColor})
}))