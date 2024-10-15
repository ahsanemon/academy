<template>
  <div>
    <p class="number">{{ number }}</p>
    <p class="sticks">
        <!-- hide stick for -ve value -->
        <!-- <template v-if="bigSticks > 0">
            <span 
                v-for="i in bigSticks" 
                class="diamond"
            >
            </span>
        </template> -->
        <span 
            v-for="i in bigSticks" 
            class="diamond"
        >
        </span>
        <!-- {{ sticks }} -->
    </p>
    
    <p class="sticks">
         <!-- <span class="diamond"></span> -->
        {{ sticks }}
    </p>
  </div>
</template>

<script>
    export default {
        props: {
            number: {
                required: false,
                // default: 0,
                type: Number,
            },
        },
        computed: {
            bigSticks () {
                if (this.number < 0) {
                    return 0
                }
                // return Math.max(Math.floor(this.number / 10), 0);
                return Math.floor(this.number / 10);
            },
            sticks () {

                const bigSticks = this.bigSticks;
                // const bigSticks = Math.floor(this.number / 10);
                // const smallSticks = this.number % 10;
                const smallSticks = this.number - bigSticks * 10;

                let out = '';
                
                for (let i = 0; i < bigSticks; i++) {
                    out += ' ❚ ';
                    // out += '<span class="diamond"></span>';
                }

                for (let i = 0; i < smallSticks; i++) {
                    out += ' | ';
                }
                // for (let i = 0; i < bigSticks + smallSticks; i++) {
                //     if (i<= bigSticks) {
                //         out += '❚';
                //     }
                //     else {
                //         out += ' | ';
                //     }
                // }
                
                return out;
                // return '❚❚|||' -> 23
            }
        },
    }
</script>

<style scoped>
    .number {
        font-size: 2em;
        margin: 0;
        text-align: center;
    }

    .sticks {

    }

    .sticks .diamond {
        display: inline-block;
        width: 1em;
        height: 1em;
        background: blue;
        margin-right: 0.6em;
        transform: rotate(45deg);
        animation-name: diamond-anim;
        animation-duration: 6s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        /* animation-timing-function: ease-in-out; */
    }
    @keyframes diamond-anim {
        0% {
            /* background: blue; */
            /* transform: rotate(0deg); */
            transform: translateY(0) rotate(-45deg);
        }
        50% {
            /* background: blue; */
            /* transform: rotate(0deg); */
            transform: translateY(-1em) rotate(0);
        }
        100% {
            /* background: red; */
            /* transform: rotate(90deg); */
            transform: translateY(0) rotate(45deg);
        }
    }
</style>