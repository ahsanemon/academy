<template>
    <li :class="`is-${item.status}`">
        <span class="item-text">{{ item.text }}</span>

        <template v-if="item.archived">
            <button @click="setArchived(false)">Unarchive</button>
            <button @click="deleteItem">Delete</button>
        </template>
        <template v-if="item.status === 'pending'">
            <button @click="markAs('done')">Done</button>
            <button @click="markAs('canceled')">Cancel</button>
        </template>
        <template v-else>
            <button @click="markAs('pending')">Undo</button>
            <button @click="setArchived(true)">Archive</button>
        </template>
    </li>
</template>

<script>
    export default {
        // You are not supposed to mutate props. You have events for that.
        props: {
            item: {
                type: Object,
                required: true,
            },
        },
        emits: ['mark-as', 'set-archived', 'delete-item'],
        methods: {
            markAs (status) {
                this.$emit('mark-as', status);
            },
            setArchived (archived) {
                this.$emit('set-archived', archived);
            },
            deleteItem() {
                this.$emit('delete-item');
            },
        },
    }
</script>

<style scoped>
    .is-done .item-text {
        text-decoration: line-through;
    }
    .is-canceled .item-text {
        /* color: #cccccc; */
        opacity: 0.6;
    }
    
</style>