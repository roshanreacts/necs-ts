"use client";

import React from "react"
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from "./theme";

export const EmotionThemeProvider = ({children}) => {
    return (<ThemeProvider theme={lightTheme}>
    {children}
    </ThemeProvider>)
  }
