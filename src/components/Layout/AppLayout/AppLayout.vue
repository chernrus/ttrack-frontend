<template>
    <div class="app-layout">
        <SideMenu></SideMenu>
        <router-view :key="$route.fullPath"/>
    </div>
</template>

<script src="./AppLayout.js"></script>
