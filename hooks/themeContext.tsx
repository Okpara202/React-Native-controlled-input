import React, { createContext, useState } from "react";

interface Theme {
  light: boolean;
  toggle: () => void;
}

const themeContext = createContext<Theme>({} as Theme);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [light, setLight] = useState(true);

  const toggle = () => {
    setLight((prevState) => !prevState);
  };
  return (
    <themeContext.Provider value={{ light, toggle }}>
      {children}
    </themeContext.Provider>
  );
};

export function useTheme() {
  const theme = React.useContext(themeContext);
  if (theme === undefined) {
    throw new Error("Theme not found");
  }
  return theme;
}
