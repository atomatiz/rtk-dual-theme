import { MdOutlineDarkMode } from "react-icons/md"; 
import { MdOutlineLightMode } from "react-icons/md"; 
import { toggleTheme } from '../../redux/reducers/themeSlice';
import { useThemeHook } from '../../hooks/theme/theme';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function ToggleTheme() {
  const theme: boolean | null | undefined = useAppSelector<boolean | null | undefined>((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  useThemeHook()

  return ( 
    theme
      ? <MdOutlineLightMode
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
            onClick={() => dispatch(toggleTheme({mode: theme}))} /> 
      : <MdOutlineDarkMode 
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
            onClick={() => dispatch(toggleTheme({mode: theme}))}/>
  ); 
}