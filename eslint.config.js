import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["*.ts", "*.tsx", "*.mjs"], // Target TypeScript and JS files
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Disable 'any' type warning
      "@typescript-eslint/no-unused-vars": "off", // Disable unused vars warning
      "no-unused-vars": "off", // General unused vars rule
      "react/no-unescaped-entities": "off", // Disable unescaped entities warning
    },
  },
  {
    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        rules: {
          "@typescript-eslint/no-explicit-any": "off", // Disable 'any' type warning for TypeScript
        },
      },
    ],
  },
];

export default eslintConfig;
