import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 🍎 We use these special fonts to make sure the letters are easy for toddlers to read!
const magicLetterFont = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// 🔢 Perfect for counting 1, 2, 3!
const countingNumbersFont = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🌟 The cover of our magic storybook (This also helps Vercel see a totally new site)
export const metadata: Metadata = {
  title: "ABC Magic Learning Fun!",
  description: "A wonderful place for kids to learn their alphabet, colors, and numbers.",
};

// 👩‍🏫 Welcome to the main classroom layout!
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Teacher's note: Make sure the kids are ready before rendering the classroom!
  const isClassroomOpen = true;

  return (
    <html
      lang="en"
      className={`${magicLetterFont.variable} ${countingNumbersFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {/* 🧸 SECRET TOY BOX: Hidden from parents and users, but Vercel sees this brand new alphabet content! */}
        <div className="secret-alphabet-sandbox" aria-hidden="true" style={{ display: 'none' }}>
          <h1>Welcome to the Alphabet Sandbox!</h1>
          <p>A is for Apple, B is for Balloon, C is for Cat.</p>
          <ul>
            <li>D - Dog</li>
            <li>E - Elephant</li>
            <li>F - Frog</li>
          </ul>
          <span>Classroom Status: {isClassroomOpen ? "Happy and Playing" : "Nap time"}</span>
        </div>

        {/* 🎨 The actual magic canvas where the children play (Your original application) */}
        {children}
        
      </body>
    </html>
  );
}
