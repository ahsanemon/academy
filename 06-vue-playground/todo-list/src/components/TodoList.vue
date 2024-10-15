<template>
    <div>
        <ul>
            <li v-for="item in items">
                {{ item.text }}
            </li>
        </ul>

        {{ addText }}
        
        <form @submit.prevent="onAdd">
            <input type="text" v-model="addText"/>
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
                items: [
                    {
                        text: 'Do this',
                        status: StatusEnum.pending,
                        archived: false,
                        due: null,
                        color: 'green',
                    },
                    {
                        text: 'Do that',
                        status: StatusEnum.pending,
                        archived: false,
                        due: null,
                        color: 'green',
                    },
                    {
                        text: 'Do this third thing',
                        status: StatusEnum.pending,
                        archived: false,
                        due: null,
                        color: 'green',
                    },
                ],
            };
        
        },
        methods: {
            onAdd () {
                this.items.push({
                    text: this.addText,
                })
            },
        }
    }
</script>