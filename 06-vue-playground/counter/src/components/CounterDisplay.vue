<template>
  <div>
    {{ number }} {{ sticks }}
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
            sticks () {
                let out = '';

                for (let i = 0; i < this.number; i++) {
                    out += ' | ';  
                }

                return out;
            }
        },
    }
</script>