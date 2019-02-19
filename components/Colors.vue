<template>
  <div 
  v-on:mouseenter="active = !active" 
  v-on:mouseleave="active = !active" 
  class="colors--hitbox">
    <div 
    class="colors"
    >
      <div v-bind:class="{ active: active }" class="colors__squares">
        <div class="colors__square"></div>
        <div class="colors__square"></div>
        <div class="colors__square"></div>
        <div class="colors__square"></div>
        <div class="colors__square"></div>
      </div>
      <div class="colors__label">Color</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: false
    }
  }
}
</script>

<style>
  body {
    background: linear-gradient(151.56deg, #537CFD 0%, #4268DD 96.79%);
  }

  .colors--hitbox {
    position: absolute;
    display: flex;
    align-items: flex-end;
    height: 242px;
    padding: 50px;

    left: 0px;
    bottom: 0px;
  }

  .colors {
    display: flex;
    align-items: center;
  }

  .colors__squares {
    position: relative;
    width: 22px;
    height: 22px;
  }

  .colors__squares .colors__square:nth-child(1) {
    background-color: var(--red)
  }

  .colors__squares .colors__square:nth-child(2) {
    background-color: var(--yellow)
  }

  .colors__squares .colors__square:nth-child(3) {
    background-color: var(--lightBlue)
  }

  .colors__squares .colors__square:nth-child(4) {
    background-color: var(--green)
  }

  .colors__squares.active .colors__square:nth-child(1) {
    transform: translateY(-30px)
  }

  .colors__squares.active .colors__square:nth-child(2) {
    transform: translateY(-60px)
  }

  .colors__squares.active .colors__square:nth-child(3) {
    transform: translateY(-90px)
  }

  .colors__squares.active .colors__square:nth-child(4) {
    transform: translateY(-120px)
  }

  .colors__square {
    position: absolute;
    width: 100%;
    height: 100%;

    border: 2px solid var(--white);
    border-radius: 3px;

    background-color: var(--main);

    transition: transform ease 150ms;

    cursor: pointer;
  }

  .colors__label {
    margin-left: 12px;

    font-family: 'Muli';
    font-weight: 600;
    color: var(--white)
  }
</style>
