import "./index.css"
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

import ToggleTheme from './components/theme/themeToggle.component';
import { darkTheme, lightTheme } from "./utils/theme";
import { GlobalStyleProvider } from "./styles/global";

export default function App() {
  const theme: boolean = useSelector((state: RootState) => state.theme.darkMode)

  return (
      <>
        <GlobalStyleProvider theme={theme ? darkTheme : lightTheme} />
          <h1 className="flex justify-center mt-80 mb-5 text-6xl text-orange-500 dark:text-green-500 dark:text-6xl">
            {theme ? "Night" : "Day"}
          </h1>
          <span className="flex justify-center">
            <ToggleTheme />
          </span>
      </>
  );
}
