/// <reference types="vitest" />
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import link from "./src/index";

// used for testing, library code uses TSUP to build exports
export default defineConfig({
  plugins: [
    Markdown({
      builders: [link()],
    }),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
});
