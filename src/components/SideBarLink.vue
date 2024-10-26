<template>
    <a
        :href="page.link.url"
        :title="`This link goes to ${page.link.text} page`"
        :class="activeClasses"
    > {{ page.link.text }}</a>
</template>

<script>

    export default{
        data() {
            return {
                props: ['page', 'isActive'],
                computed: {
                    activeClasses(){
                        active: this.isActive;
                    }
                }
            }
        }
    }
</script>