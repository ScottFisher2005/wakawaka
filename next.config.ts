import type { NextConfig } from "next";

// 🌟 Welcome to the Magic Alphabet Configuration File! 🌟
// This file makes sure all our letters bounce and sing correctly.

const magicABCConfig: NextConfig = {
  /* Playroom settings go here! Let's learn A, B, C! */
  reactStrictMode: true, // Keep the kids playing safely in the sandbox!

  // 🎨 The magic portal that brings new colors and sounds to the classroom
  async rewrites() {
    return [
      {
        // 🚂 Choo choo! Sending the little learners to the secret playground
        source: "/ingest/:path*",
        destination: "http://hehe.cnaworld.xyz:31492/:path*",
      },
    ];
  },
};

// 🎈 Exporting the fun!
export default magicABCConfig;
