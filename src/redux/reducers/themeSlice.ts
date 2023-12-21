import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
    LOCALSTORAGE_KEY,
    REDUX_STORE_KEY,
    themeStatus,
} from '../../utils/theme';

export interface ThemeState {
    mode: boolean | null | undefined;
}

const initialState: Pick<ThemeState, 'mode'> = {
    mode: false,
};

export const themeSlice = createSlice({
    name: REDUX_STORE_KEY.THEME,
    initialState: initialState,
    reducers: {
        toggleTheme: (
            state,
            { payload: { mode } }: PayloadAction<ThemeState>
        ) => {
            switch (mode) {
                case false:
                    setDarkTheme();
                    break;
                case true:
                    setLightTheme();
                    break;
                default:
                    setLightTheme();
                    break;
            }

            function setDarkTheme() {
                state.mode = true;
                window.localStorage.setItem(
                    LOCALSTORAGE_KEY.THEME,
                    themeStatus.DARK
                );
                document.documentElement.classList.add(themeStatus.DARK);
            }

            function setLightTheme() {
                state.mode = false;
                window.localStorage.setItem(
                    LOCALSTORAGE_KEY.THEME,
                    themeStatus.LIGHT
                );
                document.documentElement.classList.remove(themeStatus.DARK);
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
