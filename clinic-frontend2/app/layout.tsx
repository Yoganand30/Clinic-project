import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Clinic Front Desk",
  description: "Manage clinic front desk operations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
