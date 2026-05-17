// @ts-nocheck
import type { Metadata } from 'next';

import { Garrison365LivePreview } from '@/components/Garrison365LivePreview';
export const metadata: Metadata = {
  title: "LIFT Barbell Co — Women's Barbell Studio | Denver, CO",
  description:
    "Denver's premier women's barbell studio. Powerlifting, Olympic lifting, and strength programming for women who want to get seriously strong.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cfg = await getGarrison365Config();
  const vars = buildCssVars(cfg?.brand);
  return (
    <html lang="en" style={vars as React.CSSProperties}>
      <body>{children}<Garrison365LivePreview /></body>
    </html>
  );
}
