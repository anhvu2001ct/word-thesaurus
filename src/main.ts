import { createApp } from "vue";
import { Quasar } from "quasar";

// Import libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import iconSet from "quasar/icon-set/material-icons-outlined";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "quasar/dist/quasar.css";

import "./assets/main.css";

import App from "./App.vue";
import { getTheme } from "./helper";

const theme = getTheme();

createApp(App)
  .use(Quasar, {
    plugins: {},
    iconSet,
    config: {
      dark: theme != "auto" ? theme === "dark" : "auto",
      brand: {
        asdf: "#e46262",
        "dark-page": "#121212"
      }
    }
  })
  .mount("#app");
