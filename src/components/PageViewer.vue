<template>
    <div class="container">
        <h1>{{ page.pageTitle }}</h1>
        <a>{{ page.content }}</a>
    </div>
</template>

<script>

export default{
    props: ['page'],
}

</script>
