import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "LIFT Barbell Co — Women's Barbell Studio | Denver, CO",
  description:
    "Denver's premier women's barbell studio. Powerlifting, Olympic lifting, and strength programming for women who want to get seriously strong.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
