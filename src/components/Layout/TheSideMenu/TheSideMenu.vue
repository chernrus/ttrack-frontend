<template>
    <div class="side-menu">
        <div class="side-menu__title">
            {{appTitle}}
        </div>
        <div id="nav" class="side-menu__nav">
            <router-link v-for="menuItem in sideMenu"
                :key="menuItem.url"
                :to="menuItem.url"
                class="side-menu__link"
                exact-active-class="side-menu__link_active">
                {{menuItem.title}}
            </router-link>
          <!-- <router-link to="/tracker"
             >Tracker</router-link>
          <router-link to="/pomodoro"
            class="side-menu__link" exact-active-class="side-menu__link_active">Pomodoro</router-link>
          <router-link to="/desk"
            class="side-menu__link" exact-active-class="side-menu__link_active">Desk</router-link>
          <router-link to="/calendar"
            class="side-menu__link" exact-active-class="side-menu__link_active">Calendar</router-link> -->
        </div>
    </div>
</template>

<script src="./TheSideMenu.js"></script>
