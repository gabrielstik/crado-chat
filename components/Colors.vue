<template>
  <div 
  v-on:mouseenter="active = !active" 
  v-on:mouseleave="active = !active" 
  v-bind:style="{ height: `${40 * colors.length}px` }"
  class="colors--hitbox">
    <div 
    class="colors"
    >
      <div v-bind:class="{ active: active }" class="colors__squares">
        <div 
        v-for="(color, index) in colors"
        :key="index"
        v-bind:style="{ backgroundColor: color.background, transform: `translateY(${-30 * index}px)` }"
        v-on:click="updateColor(color.background, color.gradient, index)"
        class="colors__square"
        ref="colors"
        ></div>
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
  },
  props: {
    colors: {
      type: Array,
      default: () => [
        { 
          background: "#4268DD" ,
          gradient: 
          {
            topLeft: "537CFD",
            bottomRight: "4268DD"
          }
        },
        { 
          background: "var(--yellow)" ,
          gradient: 
          {
            topLeft: "FFB347",
            bottomRight: "FFCC33"
          }
        },
        { 
          background: "var(--green)" ,
          gradient: 
          {
            topLeft: "1D976C",
            bottomRight: "93F9B9"
          }
        },
        { 
          background: "var(--lightBlue)" ,
          gradient: 
          {
            topLeft: "00C6FF",
            bottomRight: "0072FF"
          }
        },
      ],
    }
  },
  methods: 
  {
    updateColor(_color, _gradient, _index) {
      for (const color of this.$refs.colors) {
        color.style.zIndex = '0'
      }
      this.$refs.colors[_index].style.zIndex = '10'
      document.documentElement.style.setProperty("--body", `linear-gradient(151.56deg, #${_gradient.topLeft} 0%, #${_gradient.bottomRight} 96.79%)`);
      document.documentElement.style.setProperty("--main", `${_color}`);
    }
  }
}
</script>

<style>
  .colors--hitbox {
    position: absolute;
    display: flex;
    align-items: flex-end;
    height: 242px;
    padding: 50px;
    z-index: 10;

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

  /* .colors__squares .colors__square:nth-child(1) {
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
  } */

  .colors__squares:not(.active) .colors__square {
    transform: translateY(0px)!important
  }
  /* .colors__squares.active .colors__square:nth-child(1) {
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
  } */

  .colors__square {
    position: absolute;
    width: 100%;
    height: 100%;

    border: 2px solid var(--white);
    border-radius: 3px;

    /* background-color: var(--main); */

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
