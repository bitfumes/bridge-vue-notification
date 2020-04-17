import { writable } from "svelte/store";

export const left = writable([]);
export const right = writable([]);
export const center = writable([]);
export const bottomleft = writable([]);
export const bottomright = writable([]);
export const bottomcenter = writable([]);

const data = {
  message: "",
  type: "success",
  duration: 5000,
  position: "center",
  animate: { x: 200, duration: 1000 },
};

export const notify = (
  msg,
  type = "success",
  duration = 5000,
  position = "center",
  animate = { x: 200, duration: 1000 }
) => {
  msg = { ...data, ...msg };

  let name = getPosition(msg.position);
  eval(name).update((n) => {
    msg = { ...msg, i: n.length };
    n = [msg, ...n];
    return n;
  });

  removeAfter(msg, name);
};

function removeAfter(msg, name) {
  setTimeout(() => {
    eval(name).update((n) => {
      let ind = n.indexOf(msg);
      return n.filter((_, i) => i != ind);
    });
  }, msg.duration);
}

function getPosition(pos) {
  if (pos.includes("bottom")) {
    let x = pos.replace("bottom", "").trim().toLowerCase();
    return "bottom" + x;
  }
  return pos;
}
