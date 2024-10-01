<template>
    <!-- <button @click="$emit('pressed')">{{ text }}</button> -->
    <button>
        <slot />
    </button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: false,
                default: null,
            },
        }
    }
</script>

<style scoped>
    button {
        margin: 1em;
        background: #dddddd;
        border: 0;
        font-size: 1.2em;
        padding: 1em;
        /* box-shadow: x y size color; */
        box-shadow: 0.2em 0.2em 0 #5555ee;

    }

    button:hover {
        background: #eeeeee;
    }

    button:active {
        background: #dddddd;
        box-shadow: 0.1em 0.1em 0 #5555ee;
        /* transform: rotate(35deg); */
        transform: translate(0.1em, 0.1em);
    }
</style>