<template>
    <div class="page-wrapper">
        <router-view :key="$route.fullPath"/>
    </div>
</template>

<script src="./PageWrapper.js"></script>

<style lang="scss">
    .page-wrapper {
        padding: 10px 20px;
    }
</style>
