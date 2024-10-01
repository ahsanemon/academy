<script setup>
  import CounterDisplay from './components/CounterDisplay.vue';
  import MyButton from './components/MyButton.vue';
</script>

<template>
  <div class="counter-layout">
    <MyButton @click="number--" >
      <span style="font-size: 1.4em;">-</span>
    </MyButton>
    <!-- <MyButton text="-" @pressed="number--" /> -->
    <!-- <button @click="number--">-</button> -->
    <!-- <CounterDisplay v-bind:number="number"/> -->
    <CounterDisplay :number="number" />
    <!-- <button @click="number++">+</button> -->
    <!-- <MyButton text="+" @pressed="number++" /> -->
    <MyButton @click="number++" >
      <span style="font-size: 1.4em;">+</span>
    </MyButton>
  </div>
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

<style>
  .counter-layout {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>