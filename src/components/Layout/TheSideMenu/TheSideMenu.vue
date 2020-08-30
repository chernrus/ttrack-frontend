<template>
    <div class="side-menu">
        <div class="side-menu__title">
            {{appTitle}}
        </div>
        <div id="nav" class="side-menu__nav">
            <template v-for="menuItem in sideMenu">
              <router-link v-if="!menuItem.disabled"
                  :key="menuItem.url"
                  :to="menuItem.url"
                  class="side-menu__link"
                  exact-active-class="side-menu__link_active">
                  {{menuItem.title}}
              </router-link>
              <span v-else class="side-menu__link link_disabled" :key="menuItem.url">{{menuItem.title}}</span>
            </template>
        </div>
    </div>
</template>

<script src="./TheSideMenu.js"></script>
