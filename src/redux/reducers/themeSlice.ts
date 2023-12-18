import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useThemeHook } from '../../hooks/theme/theme';

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
                    useThemeHook();
                    break;
                case true:
                    state.darkMode = false;
                    useThemeHook();
                    break;
                default:
                    break;
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
