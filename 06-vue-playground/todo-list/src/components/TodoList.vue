<script setup>
    import TodoListItem from './TodoListItem.vue';
</script>

<template>
    <div>
        <ul>
            <TodoListItem
                v-for="item in visibleItems"
                :item="item"
                @mark-as="(status) => { item.status = status }"
                @set-archived="(archived) => { item.archived = archived }"
            />
        </ul>

        <h2>Add an item</h2>
        <form @submit.prevent="onAdd">
            <input type="text" maxlength="64" v-model="addText" />
            <button type="submit" :disabled="!addText">Add</button>
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

                // return this.items.filter((item) => {
                //     return !item.archived;
                // });

                // same thing but in short form
                return this.items.filter(item => !item.archived);

                // const out = [];

                // for (const item of this.items){
                //     if (!item.archived) {
                //         out.push(item);
                //     }
                // }

                // // FIXME .filter
                // return out;
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
        },
    }
</script>

