import {create} from "zustand"

interface useUserInfoStoreState {
    username: string;
    city: string;
    date: string;
    time: string
}

interface useUserInfoStoreActions {
    setUsername: (newUsername: string) => void;
    setCity: (newCity: string) => void;
    setDate: (newDate: string) => void;
    setTime: (newTime: string) => void;
}

export const useUserInfoStore = create<useUserInfoStoreState & useUserInfoStoreActions>((set) => ({
    username: '',
    city: '',
    date: '',
    time: '',
    setUsername: (newUsername) => set({username: newUsername}),
    setCity: (newCity) => set({city: newCity}),
    setDate: (newDate) => set({date: newDate}),
    setTime: (newTime) => set({time: newTime})
}))