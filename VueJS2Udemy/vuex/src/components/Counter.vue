<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment by 1</button>
        <button class="btn btn-primary" @click="decrement">Decrement by 1</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.state.counter++;
            },
            decrement() {
                this.$store.state.counter--;
            }
        }
    }
</script>