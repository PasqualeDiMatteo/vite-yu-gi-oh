import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleNotch);

createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
