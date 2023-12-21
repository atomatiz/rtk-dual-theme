import './index.css';
import ToggleTheme from './components/theme/themeToggle.component';
import { darkTheme, lightTheme } from './utils/theme';
import { GlobalStyleProvider } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './redux/hooks';

export default function App() {
    const theme: boolean | null | undefined = useAppSelector(
        (state) => state.theme.mode
    );

    return (
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
            <GlobalStyleProvider />
            <h1 className="flex justify-center mt-80 mb-5 text-6xl text-orange-500 dark:text-green-500 dark:text-6x">
                {theme ? 'DARK' : 'BRIGHT'}
            </h1>
            <span className="flex justify-center">
                <ToggleTheme mode={theme} />
            </span>
        </ThemeProvider>
    );
}
