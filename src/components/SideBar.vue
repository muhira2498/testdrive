<template>
    
    <div class="sidebar">
        <div v-for="(page, index) in pages" :key="index">
            <a
                :href="page.link.url"
                :title="`This link goes to ${page.link.text} page`"
                :class="{active: activePage == index}"
                @click = "changePage(index)"
            > {{ page.link.text }}</a>
        </div>
    </div>

</template>

<script>

export default {
    props : ['pages', 'activePage'],
    methods: {
        changePage(index) {
        this.$emit('change-page', index);
        }
    },
    data(){
        return {
           
        };
    },
};

</script>