<script  setup>
  import CounterDisplay from './components/CounterDisplay.vue';
</script>

<template>
  <button @click="number--">-</button>
  <!-- <CounterDisplay v-bind:number="number"/> -->
  <CounterDisplay :number="number" />
  <button @click="number++">+</button>
</template>

<script>
  export default {
    data () {
      return {
        number: 1,
      };
    },
  }
</script>
