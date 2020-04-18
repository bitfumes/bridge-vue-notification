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
// App.svelte

<script>
  import BridgeNotify from "bridge-svelte-notification";
  <main>
    <BridgeNotify />
    ...
  </main>
</script>
```

```javascript
// ChildrenComponent.svelte

<script>
  import { notify } from "bridge-svelte-notification";

  function show(position) {
    notify({
      message: "Bridge Notification is Awesome 😍",
      type: 'success',
      duration: 3000,
      position: 'center',
      animate: {
            y: 100,
            x: 0,
            duration: 500
      }
    });
  }
</script>

<button on:click={show}> Show Notification </button>
```

## Providing custom style component

```javascript
// ChildrenComponent.svelte

import { notify } from "bridge-svelte-notification";

  function show(position) {
    notify({
      message: "Bridge Notification is Awesome 😍",
      type: 'success',
      duration: 3000,
      position: 'center',
      animate: {
            y: 100,
            x: 0,
            duration: 500
      },
      style:'backgound-color:blue;color:black'
    });
  }
</script>

<button on:click={show}> Show Notification </button>
```
