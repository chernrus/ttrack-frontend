<template>
    <div class="app-layout">
        <TheSideMenu></TheSideMenu>
        <div class="app-layout__content">
            <div v-if="pageTitle"
                class="main-page-title">{{pageTitle}}</div>
            <router-view :key="$route.fullPath"/>
        </div>
    </div>
</template>

<script src="./AppLayout.js"></script>
