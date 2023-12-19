import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/reducers/themeSlice';

export const useThemeHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.localStorage.getItem('theme') === 'dark') {
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            dispatch(toggleTheme({ mode: true }));
        } else {
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            dispatch(toggleTheme({ mode: false }));
        }
    }, []);
};
