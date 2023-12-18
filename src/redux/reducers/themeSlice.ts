import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
    darkMode: boolean;
}

const initialState: ThemeState = {
    darkMode: false,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        toggleTheme: (
            state,
            { payload: { darkMode } }: PayloadAction<ThemeState>
        ) => {
            switch (darkMode) {
                case false:
                    state.darkMode = true;
                    localStorage.setItem('theme', JSON.stringify('dark'));
                    document.documentElement.classList.add('dark');
                    break;
                case true:
                    state.darkMode = false;
                    localStorage.setItem('theme', JSON.stringify('light'));
                    document.documentElement.classList.remove('dark');
                    break;
                default:
                    break;
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
