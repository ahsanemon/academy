<script setup>
    import TodoListItem from './TodoListItem.vue';
</script>

<template>
    <div>
        <label for="">
            <input type="checkbox" v-model="displayArchivedItems"/> Display archived items
        </label>
        <ul>
            <TodoListItem
                v-for="item in visibleItems"
                :item="item"
                @mark-as="(status) => { item.status = status }"
                @set-archived="(archived) => { item.archived = archived }"
                @delete-item="deleteItem(item)"
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
                displayArchivedItems: false,
            };
        
        },
        computed: {
            visibleItems () {
                if (this.displayArchivedItems) {
                    return this.items.filter(item => item.archived);
                }

                // return this.items.filter((item) => {
                //     return !item.archived;
                // });

                // same thing as above but in short from
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
            deleteItem(item) {
                const index = this.items.indexOf(item);
                this.items.splice(index, 1);
                // this.items = this.items.filter(fItem => fItem !== item); // this goes through all the items regardless of the position of the item to be deleted. Expensive!!!
            },
        },
    }
</script>

