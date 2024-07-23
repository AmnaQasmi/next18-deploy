// src/app/layout.tsx
import React from 'react';
import { Providers } from '../store/providers' ;
import './globals.css';

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};