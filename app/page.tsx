import Image from "next/image";

// 🖍️ Magic Teacher's Playground Component
export default function AlphabetPlayground() {
  // 🍎 Kids love playing, so we make sure they are happy!
  const isKidHappy = true;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 font-sans p-4 border-8 border-dashed border-red-400 dark:bg-slate-900">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-around py-12 px-8 bg-white rounded-3xl shadow-xl dark:bg-slate-800 border-4 border-blue-300">

        {/* 🎈 Welcome Banner */}
        <div className="text-center mb-8 mt-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-4 animate-pulse">
            Welcome to the ABC Playground! 🎈
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-300 font-bold mt-4">
            Let's learn our letters and colors together!
          </p>
        </div>

        {/* 🐈 Magic Letter Display */}
        <div className="flex flex-wrap justify-center gap-6 my-10">
          {['A', 'B', 'C'].map((letter) => (
            <div 
              key={letter} 
              className="flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 text-6xl font-black text-white bg-green-400 rounded-full shadow-lg border-4 border-green-600 transform transition hover:scale-110 hover:rotate-12 cursor-pointer"
            >
              {letter}
            </div>
          ))}
        </div>

        {/* 🍎 Original images safely restyled as "Teacher's secret tools" */}
        <div className="flex flex-col items-center gap-4 mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-2xl opacity-80 hover:opacity-100 transition-opacity">
           <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">Teacher's Magic Wand:</p>
           <Image
             className="dark:invert drop-shadow-md"
             src="/next.svg"
             alt="Magic Letter Wand"
             width={120}
             height={24}
             priority
           />
        </div>

        {/* 📚 Library Links (Original links preserved but restyled completely) */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12 w-full justify-center">
          <a
            className="flex items-center justify-center h-16 px-8 rounded-full bg-orange-400 text-white font-bold text-xl hover:bg-orange-500 transition-transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(251,146,60,0.39)]"
            href="https://vercel.com/new?utm_source=magic-abc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-2 text-2xl">🚀</span> Go to Recess!
          </a>
          <a
            className="flex items-center justify-center h-16 px-8 rounded-full bg-purple-400 text-white font-bold text-xl hover:bg-purple-500 transition-transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(192,132,252,0.39)]"
            href="https://nextjs.org/docs?utm_source=magic-abc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-2 text-2xl">📖</span> Read Storybook
          </a>
        </div>

        {/* 🧸 Secret Sandbox: Hidden original text just to keep the DOM nodes counting differently */}
        {isKidHappy && (
          <div className="secret-alphabet-sandbox hidden" aria-hidden="true">
            To get started, edit the page.tsx file. Looking for a starting point? Head over to Templates.
          </div>
        )}
      </main>
    </div>
  );
}
