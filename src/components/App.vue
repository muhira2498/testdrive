<template>
    <SideBar
    :pages="pages"
    :activePage="activePage"
    @change-page="changePage($event)"
    ></SideBar>
    <PageViewer
    :page="pages[activePage]"
    ></PageViewer>
    <a>Hallo</a>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    .container{
        margin: auto;
        padding-left: 200px;
    }

     .sidebar {
        margin: 0;
        padding-top: 15px;
        width: 100px;
        background-color: #f1f1f1;
        position: fixed;
        height: 100%;
        overflow: auto;
    }
    .sidebar a {
        display: block;
        color: black;
        padding: 16px;
        text-decoration: none;
    }
    
    .sidebar a.active {
        background-color: #04AA6D;
        color: white;
    }
    .sidebar a:hover:not(.active) {
        background-color: #555;
        color: white;
    }
    .sidebar.content {
        margin-left: 200px;
        padding: 1px 16px;
        height: 1000px;
    }
</style>

<script>
import SideBar from './SideBar.vue';
import PageViewer from './PageViewer.vue';

export default {
    components: {
        SideBar, PageViewer
    },
    methods: {
        changePage(id){
            this.activePage = id;
        }
    },
    data(){
        return {
            activePage: 0,
            pages: [
                {
                    link: {text:'Dashboard', url: '#'},
                    pageTitle: 'Dashboard',
                    content: 'Content',
                },
                {
                    link: {text:'timer', url: '#'},
                    pageTitle: 'Set time',
                    content: 'Content - 2',
                },
                {
                    link: {text:'Settings', url: '#'},
                    pageTitle: 'settings',
                    content: 'Content - 3',
                },
            ]
        };
    },
};

</script>