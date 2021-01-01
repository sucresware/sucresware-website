<template>
    <div class="flex flex-col items-center justify-center">
        <div class="w-full max-w-lg">
            <logo />
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                version: undefined,
            }
        },

        mounted(){
            this.version = process.env.PACKAGE_VERSION;
        },

        methods: {}
    }
</script>