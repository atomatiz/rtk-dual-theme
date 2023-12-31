import { themeStatus } from './../../utils/theme';
import { useEffect } from 'react';
import { toggleTheme } from '../../redux/reducers/themeSlice';
import { useAppDispatch } from '../../redux/hooks';
import { LOCALSTORAGE_KEY } from '../../utils/theme';

export const useThemeHook = () => {
    const prevTheme: string | null | undefined = window.localStorage.getItem(
        LOCALSTORAGE_KEY.THEME
    );
    const dispatch = useAppDispatch();

    const setTheme = () => {
        if (prevTheme === null || prevTheme === undefined)
            prevTheme === themeStatus.LIGHT;
        window.localStorage.setItem(
            LOCALSTORAGE_KEY.THEME,
            prevTheme === themeStatus.LIGHT
                ? themeStatus.LIGHT
                : themeStatus.DARK
        );
        prevTheme === themeStatus.LIGHT
            ? document.documentElement.classList.remove(themeStatus.DARK)
            : document.documentElement.classList.add(themeStatus.DARK);
        prevTheme === themeStatus.LIGHT
            ? dispatch(toggleTheme({ mode: true }))
            : dispatch(toggleTheme({ mode: false }));
    };

    useEffect(() => {
        setTheme();
    }, []);
};
