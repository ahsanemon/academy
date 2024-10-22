<script setup>
    import TodoListItem from './TodoListItem.vue';
</script>

<template>
    <div>
        <ul>
            <TodoListItem
                v-for="item, index in visibleItems"
                :item="item"
                @mark-as="(status) => { markAs(index, status) }"
                @set-archived="(archived) => { item.archived = archived }"

            />
        </ul>

        <h2>Add an item</h2>
        <form @submit.prevent="onAdd">
            <input type="text" v-model="addText" />
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
    const StatusEnum = Object.freeze({
        pending: 'pending',
        done: 'done',
        canceled: 'canceled',
    });

    export default {
        data () {
            return {
                addText: '',
                items: [],
            };
        
        },
        computed: {

            visibleItems () {
                const out = [];
                for (const item of this.items){
                    if (!item.archived) {
                        out.push(item)
                    }
                }
                return out;
            },
        },
        methods: {
            onAdd () {
                this.items.push({
                    text: this.addText,
                    status: StatusEnum.pending,
                    archived: false,
                    color: 'black',
                });
                this.addText = '';
            },
            markAs(index, status) {
                this.items[index].status = status;
            },
        },
    }
</script>

