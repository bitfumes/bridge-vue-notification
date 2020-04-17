<template>
  <div class="box">
    <p
      class="content"
      :class="data.type"
      style="{data.style}"
      in:fly="{data.animate}"
      out:fade
    >
      {{ data.message }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
.content {
  padding: 0.75rem;
  margin: 0.3rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  max-width: 32rem;
}

.box {
  z-index: 10;
  color: #fff;
  position: relative;
  display: flex;
}

.success {
  background-color: #38a169;
}

.error {
  background-color: #e53e3e;
}

.warning {
  background-color: #d69e2e;
}

.info {
  background-color: #718096;
}

.normal {
  color: #000;
  background-color: #fff;
}

.bottom {
  bottom: 0;
}

.center {
  left: 50%;
  transform: translate(-50%, 0);
}

.left {
  left: 0;
}

.right {
  right: 0;
}
</style>
