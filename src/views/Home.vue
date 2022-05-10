<template>
  <div id="home">
    <div v-if="isInIframe" class="alert alert-danger" role="alert">
      We are restricting iframe from using our script. To make this sample code
      work
      <a href="/" target="_blank" class="alert-link">click here</a>
      to open this page in another browser tab and try to click "Watch Live"
      again
    </div>
    <div class="d-flex flex-column align-items-center justify-content-center">
      <img
        class="mx-auto"
        alt="Vue logo"
        src="../assets/logo.png"
        width="100px"
      />
      <h1>Demo BeLive Player Widget!</h1>
      <router-link to="/about">Navigate to another page</router-link>
      <div class="d-flex justify-content-center mt-5">
        <button
          @click="watchLive"
          id="watch-button"
          class="btn btn-primary mx-2"
        >
          Watch Live
        </button>
        <button @click="close" id="close-button" class="btn btn-primary mx-2">
          Close Widget
        </button>
        <button
          @click="minimize"
          id="minimize-button"
          class="btn btn-primary mx-2"
        >
          Minimize
        </button>
        <button
          @click="unminimize"
          id="unminimize-button"
          class="btn btn-primary mx-2"
        >
          Unminimize
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { player, BelivePlayerWidget } from "../belive-player-widget";

export default {
  name: "App",
  mounted() {
    player.on(BelivePlayerWidget.PlayerEventType.READY, () => {
      console.log("Player Widget Ready");
    });

    player.on(BelivePlayerWidget.PlayerEventType.MINIMIZED, () => {
      console.log("Player Widget MINIMIZED");
    });

    player.on(BelivePlayerWidget.PlayerEventType.UNMINIMIZED, () => {
      console.log("Player Widget UNMINIMIZED");
    });

    player.on(BelivePlayerWidget.PlayerEventType.CLOSE, () => {
      console.log("Player Widget CLOSE");
    });
  },
  beforeDestroy() {
    player.removeAllListeners();
  },
  computed: {
    isInIframe() {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    },
  },
  methods: {
    close() {
      player.close();
    },
    minimize() {
      player.minimize();
    },
    unminimize() {
      player.unminimize();
    },
    watchLive() {
      player.open();
    },
  },
};
</script>

<style>
</style>
