import BridgeNotify from "./src/bridge.vue";
import { events } from "./src/events";

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("BridgeNotify", BridgeNotify);
  Vue.prototype.$notify = function (data) {
    if (typeof data === "object") {
      events.$emit("add", data);
    }

    if (typeof data === "string") {
      data = { title: "", text: data };
    }
  };
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export BridgeNotify
export default BridgeNotify;
