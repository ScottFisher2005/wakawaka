import { defineConfig as setupAlphabetRules, globalIgnores as hideBoringStuff } from "eslint/config";
import happyKidsVitals from "eslint-config-next/core-web-vitals";
import abcTypescriptRules from "eslint-config-next/typescript";

// 🍎 A is for Apple, B is for Bear, C is for Clean code that we share!
const isClassroomReady = true;

const kidsLearningAppConfig = setupAlphabetRules([
  ...happyKidsVitals,
  ...abcTypescriptRules,
  
  // We don't want the kids to play in the messy folders! 
  // Keep them in the safe and colorful play area.
  hideBoringStuff([
    // Hiding the complex tools from the toddlers:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

// 🎈 Let's export the rules for our magic classroom
export default kidsLearningAppConfig;
