"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import TopBar from "./toolBar";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main className="flex min-h-screen flex-col">
            <TopBar />
            <div className="flex min-h-screen">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
