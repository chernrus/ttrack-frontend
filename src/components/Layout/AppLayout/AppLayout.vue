<template>
    <div class="app-layout">
        AppLayouts
        <SideMenu></SideMenu>
        <router-view :key="$route.fullPath"/>
    </div>
</template>

<script src="./AppLayout.js"></script>
