import { create } from "zustand";

export interface ProfileState{
    name: string;
    email: string;
}

export const useProfileStore = create<ProfileState>(() => ({
    name: 'Juan Perez',
    email: 'jperez@me.com',
}) );