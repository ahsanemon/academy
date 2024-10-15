<script setup>
  import CounterDisplay from './components/CounterDisplay.vue';
  import MyButton from './components/MyButton.vue';
</script>

<template>
  <div class="counter-layout">
    <!-- <MyButton @click="number--" > -->
      <!-- <MyButton @click="number = Math.max()" > -->
      <!-- <MyButton @click="decrement" > -->
      <MyButton @click="number" >
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
    watch: {
      number (newValue, oldValue) {

        if (this.number < 0) {
          this.number = 0;
        }
        if (this.number > 1000) {
          this.number = 1000;
        }

        console.log("Number changed! from ", oldValue, "to", newValue)
      },
    },
    methods: {
      // decrement () {
      //   // A
      //   if (this.number > 0) {
      //     this.number--;
      //   }
        
      //   // B
      //   this.number = Math.max(this.number - 1, 0)

      //   // C
      //   this.number--;
      //   if (this.number < 0) {
      //     this.number = 0;
      //   }        

      //   // D
      //   if (this.number <= 0) {
      //     return;
      //   }        
      //   this.number--;
      // }
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