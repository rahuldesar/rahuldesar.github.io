import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rahuldeshar.com.np",
  base: "/",
  integrations: [
    tailwind({
        // Example: Disable injecting a basic `base.css` import on every page.
        // Useful if you need to define and/or import your own custom `base.css`.
        applyBaseStyles: false,
    }),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
