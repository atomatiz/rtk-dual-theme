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
            setDarkOrLightTheme(mode);

            function setDarkOrLightTheme(mode: boolean | null | undefined) {
                if (mode === false) {
                    state.mode = true;
                    window.localStorage.setItem(
                        LOCALSTORAGE_KEY.THEME,
                        themeStatus.DARK
                    );
                    document.documentElement.classList.add(themeStatus.DARK);
                } else if (mode === true) {
                    state.mode = false;
                    window.localStorage.setItem(
                        LOCALSTORAGE_KEY.THEME,
                        themeStatus.LIGHT
                    );
                    document.documentElement.classList.remove(themeStatus.DARK);
                } else {
                    state.mode = false;
                    window.localStorage.setItem(
                        LOCALSTORAGE_KEY.THEME,
                        themeStatus.LIGHT
                    );
                    document.documentElement.classList.remove(themeStatus.DARK);
                }
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
