import { themeStatus } from './../../utils/theme';
import { useEffect } from 'react';
import { toggleTheme } from '../../redux/reducers/themeSlice';
import { useAppDispatch } from '../../redux/hooks';
import { LOCALSTORAGE_KEY } from '../../utils/theme';

export const useThemeHook = () => {
    const dispatch = useAppDispatch();

    const setTheme = () => {
        if (
            window.localStorage.getItem(LOCALSTORAGE_KEY.THEME) ===
            themeStatus.DARK
        ) {
            window.localStorage.setItem(
                LOCALSTORAGE_KEY.THEME,
                themeStatus.DARK
            );
            document.documentElement.classList.add(themeStatus.DARK);
            dispatch(toggleTheme({ mode: true }));
        } else {
            window.localStorage.setItem(
                LOCALSTORAGE_KEY.THEME,
                themeStatus.LIGHT
            );
            document.documentElement.classList.remove(themeStatus.DARK);
            dispatch(toggleTheme({ mode: false }));
        }
    };

    useEffect(() => {
        setTheme();
        setTheme();
    }, []);
};
