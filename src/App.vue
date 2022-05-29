<template>
  <div id="app">
    <div v-if="deferredPrompt" class="text-left">
      Install now to have this installed!
      <button @click="dismiss">Dismiss</button>
      <button @click="install">Install</button>
    </div>
    <div>
      <h1>Sleepy or not?</h1>
      <div>
        <button
          class="option"
          :key="index"
          v-for="(button, index) in buttons"
          @click="button.onClick"
          :style="{ transform: 'rotate(' + button.rotation + 'deg)' }"
        >
          {{ button.text }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      deferredPrompt: null,
      buttons: [],
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
    const NUM_BUTTONS = 24;
    for (let i = 1; i <= NUM_BUTTONS; i++) {
      this.buttons.push({
        value: false,
        text: "👎",
        rotation: 180,
        onClick: this.loose,
      });
    }
    const randomPosition = Math.round(Math.random() * NUM_BUTTONS);
    this.buttons[randomPosition] = {
      value: true,
      text: "👍",
      rotation: 0,
      onClick: this.win,
    };
  },
  methods: {
    loose() {
      alert("You are still sleepy!");
    },
    win() {
      alert("Congrats! You are not sleepy");
    },
    async dismiss() {
      this.deferredPrompt = null;
    },
    async install() {
      this.deferredPrompt.prompt();
    },
  },
};
</script>
<style>
button.option {
  background: transparent;
  border: transparent;
  font-size: 25px;
}
</style>
