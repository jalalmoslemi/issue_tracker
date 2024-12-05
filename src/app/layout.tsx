import type { Metadata } from "next";
import "./globals.css";
import AppThemeProvider from "@/components/theme/AppThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <AppThemeProvider>{children}</AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
