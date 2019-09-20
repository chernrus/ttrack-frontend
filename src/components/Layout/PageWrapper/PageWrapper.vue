<template>
    <div class="page-wrapper">
        Page Warapper
        <router-view :key="$route.fullPath"/>
    </div>
</template>

<script src="./PageWrapper.js"></script>
