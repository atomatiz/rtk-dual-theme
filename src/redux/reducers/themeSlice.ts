import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
    mode: boolean;
}

const initialState: ThemeState = {
    mode: false,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        toggleTheme: (
            state,
            { payload: { mode } }: PayloadAction<ThemeState>
        ) => {
            switch (mode) {
                case false:
                    state.mode = true;
                    window.localStorage.setItem('theme', 'dark');
                    document.documentElement.classList.add('dark');
                    break;
                case true:
                    state.mode = false;
                    window.localStorage.setItem('theme', 'light');
                    document.documentElement.classList.remove('dark');
                    break;
                default:
                    state.mode = false;
                    window.localStorage.setItem('theme', 'light');
                    document.documentElement.classList.remove('dark');
                    break;
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
