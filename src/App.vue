<template>
  <div id="render">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>

  <div id="redirect">
    <h1 class="neumorph">
      Please switch to a mobile device content is available only on mobile device
    </h1>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 480px) {
  #render {
    display: block;
  }
  #redirect {
    display: none;
  }
}
@media only screen and (min-width: 481px) {
  #render {
    display: none;
  }
  #redirect {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #b207d0;
    width: 100vw;
    height: 100vh;
  }
  .neumorph {
    font-size: 32px;
    font-weight: bold;
    color: #f0f0f0;
    text-shadow:
      0px 4px 4px rgba(116, 166, 6, 0.2),
      0px 8px 12px rgba(168, 233, 5, 0.2);
  }
}
</style>
