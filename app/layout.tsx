import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button"; // Ensure this is the correct path for ShadCN components
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"; // Assuming ShadCN imports are set up
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cartier Meditations",
  description: "Jacques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="p-4 flex items-center justify-between pr-8"> {/* pr-8 adds right padding */}
          {/* Simple Home button */}
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu className="flex space-x-4"> {/* space-x-4 adds horizontal spacing between items */}
            <NavigationMenuItem>
              <Link href="/blogSection" legacyBehavior passHref>
                <NavigationMenuLink className="text-gray-700 hover:text-blue-600">
                  Meditations
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/navbarSection" legacyBehavior passHref>
                <NavigationMenuLink className="text-gray-700 hover:text-blue-600">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* More items can be added here */}
          </NavigationMenu>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
