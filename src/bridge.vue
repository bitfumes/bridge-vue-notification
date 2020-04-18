<template>
  <div>
    <div style="position: absolute;">
      <transition-group
        v-bind:css="false"
        v-on:enter="enter"
        v-on:leave="leave"
        @beforEnter="beforeEnter"
      >
        <Content :data="item" v-for="(item, i) in left" :key="item.count" />
      </transition-group>
    </div>

    <div style="position: absolute;" class="center">
      <transition-group
        v-bind:css="false"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <Content :data="item" v-for="(item, i) in center" :key="item.count" />
      </transition-group>
    </div>

    <div style="position: absolute;" class="right">
      <transition-group
        v-bind:css="false"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <Content :data="item" v-for="(item, i) in right" :key="item.count" />
      </transition-group>
    </div>

    <div style="position: absolute;" class="bottom left">
      <transition-group
        v-bind:css="false"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <Content :data="item" v-for="item in bottomright" :key="item.count" />
      </transition-group>
    </div>

    <div style="position: absolute;" class="bottom center">
      <transition-group
        v-bind:css="false"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <Content :data="item" v-for="item in bottomleft" :key="item.count" />
      </transition-group>
    </div>

    <div style="position: absolute;" class="bottom right">
      <transition-group
        v-bind:css="false"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <Content :data="item" v-for="item in bottomcenter" :key="item.count" />
      </transition-group>
    </div>
  </div>
</template>

<script>
import Content from "./content";
import { events } from "./events";
import Velocity from "velocity-animate";

const defaultData = {
  message: "",
  type: "success",
  duration: 5000,
  position: "center",
  animate: { x: 200, duration: 1000 },
};
export default {
  data() {
    return {
      right: [],
      left: [],
      center: [],
      bottomright: [],
      bottomleft: [],
      bottomcenter: [],
      animate: {
        x: 30,
        y: 0,
        duration: 600,
      },
    };
  },
  mounted() {
    events.$on("add", (data) => {
      data = { ...defaultData, ...data };
      let name = this.getPosition(data.position);
      data = { ...data, count: this[name].length };
      this[name].push(data);
      this.removeAfter(data, name);
    });
  },
  methods: {
    removeAfter(data, name) {
      this.animate = { ...this.animate, ...data.animate };
      setTimeout(() => {
        let ind = this[name].indexOf(data);
        this[name] = this[name].filter((_, i) => i != ind);
      }, data.duration);
    },
    getPosition(pos) {
      if (pos.includes("bottom")) {
        let x = pos.replace("bottom", "").trim().toLowerCase();
        return "bottom" + x;
      }
      return pos;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter: function (el, done) {
      Velocity(
        el,
        {
          translateX: ["0px", `${this.animate.x}px`],
          translateY: ["0px", `${this.animate.y}px`],
        },
        { duration: this.animate.duration, complete: done }
      );
    },
    leave: function (el, done) {
      Velocity(el, { opacity: 0 }, { duration: 600, complete: done });
    },
  },
  components: { Content },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
