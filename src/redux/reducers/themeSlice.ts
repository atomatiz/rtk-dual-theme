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
            setTheme(mode);

            function setTheme(mode?: boolean | null | undefined) {
                if (mode === null || mode === undefined) mode = true;
                state.mode = !mode;
                window.localStorage.setItem(
                    LOCALSTORAGE_KEY.THEME,
                    mode ? themeStatus.LIGHT : themeStatus.DARK
                );
                mode
                    ? document.documentElement.classList.remove(
                          themeStatus.DARK
                      )
                    : document.documentElement.classList.add(themeStatus.DARK);
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
