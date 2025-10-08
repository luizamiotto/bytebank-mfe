import React, { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

// Defina o tipo do contexto
type ResponsiveContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

// Crie o contexto já tipado
const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
  undefined
);

export function ResponsiveProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();
  // MUI breakpoints: sm = 600, md = 900, lg = 1200
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // até 599px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg")); // 600px até 1199px
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); // 1200px ou mais

  useEffect(() => {
		setMounted(true);
  }, []);

  if (!mounted) return null;


	return React.createElement(
		ResponsiveContext.Provider,
		{ 
			value: { isMobile, isTablet, isDesktop } 
		},
		children
	);
}

export function useResponsive() {
  const context = useContext(ResponsiveContext);
  if (!context) {
		throw new Error("useResponsive must be used within a ResponsiveProvider");
  }
  return context;
}
