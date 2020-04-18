# Bridge Vue Notifications

![Bridge Notification](https://user-images.githubusercontent.com/41295276/79585406-60ed7280-80ed-11ea-8b6c-864dbd14dad9.png)

## Demonstration

[https://bridge-notification.netlify.app](https://bridge-notification.netlify.app)

## Getting started

```bash
npm install --save bridge-vue-notification
```

## Basic usage

```javascript
// main.js:

import Vue from "vue";
Vue.use(require("bridge-vue-notification"));
```

```javascript
// In App.vue:

<div id="app">
  <bridge-notify />
...
...
</div>

<script>

export default {
  methods:{
    show(){
      this.$notify({
          message: "Bridge Notification is Awesome 😍",
          duration: 3000,
          position: 'center',
          animate: {
            x: 0,
            y: 330,
          },
        });
    }
  }
}
</script>

<button @click="show">Show Notification</button>
```
