import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const useThemeHook = () => {
    const theme: boolean = useSelector(
        (state: RootState) => state.theme.darkMode
    );

    const toggleTheme = () => {
        switch (theme) {
            case false:
                localStorage.setItem('theme', JSON.stringify('dark'));
                document.documentElement.classList.add('dark');
                break;
            case true:
                localStorage.setItem('theme', JSON.stringify('light'));
                document.documentElement.classList.remove('dark');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');

        if (localTheme) {
            localStorage.setItem('theme', JSON.stringify(localTheme));
            document.documentElement.classList.add(JSON.stringify(localTheme));
        } else {
            window.localStorage.setItem('theme', JSON.stringify('light'));
            document.documentElement.classList.remove('dark');
        }
    });

    return [theme, toggleTheme];
};
