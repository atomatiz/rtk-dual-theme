import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { ThemeState, toggleTheme } from '../../redux/reducers/themeSlice';
import { useThemeHook } from '../../hooks/theme/theme';
import { useAppDispatch } from '../../redux/hooks';

<<<<<<< HEAD
export default function ToggleTheme({ mode }: ThemeState) {
=======
export default function ToggleThemeComponent({mode}: ThemeState) {
>>>>>>> ab7c16f3038e0fd72640291871504a0a25750429
    const dispatch = useAppDispatch();

    useThemeHook();

    return mode ? (
        <MdOutlineLightMode
            className="
            dark:cursor-pointer
            dark:text-sky-500 
            dark:text-4xl
            dark:bg-transparent
            dark:border
            dark:rounded-lg
            dark:border-gray-800
            dark:hover:bg-stone-900
            dark:hover:animate-bounce w-10 h-10
          "
            onClick={() => dispatch(toggleTheme({ mode: mode }))}
        />
    ) : (
        <MdOutlineDarkMode
            className="
            cursor-pointer
            text-sky-500 
            text-4xl
            bg-transparent
            border
            rounded-lg
            border-gray
            hover:bg-gray-100
            hover:animate-bounce w-10 h-10
          "
            onClick={() => dispatch(toggleTheme({ mode: mode }))}
        />
    );
}
