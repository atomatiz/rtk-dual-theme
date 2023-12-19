import { useEffect } from 'react';
import { toggleTheme } from '../../redux/reducers/themeSlice';
import { useAppDispatch } from '../../redux/hooks';

export const useThemeHook = () => {
    const dispatch = useAppDispatch();

    const setTheme = () => {
        if (window.localStorage.getItem('theme') === 'dark') {
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            dispatch(toggleTheme({ mode: true }));
        } else {
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            dispatch(toggleTheme({ mode: false }));
        }
    };

    useEffect(() => {
        setTheme();
        setTheme();
    }, []);
};
