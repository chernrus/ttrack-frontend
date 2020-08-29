<template lang="html">
    <div class="time-list" v-if="timeList.length">
        <h3>List</h3>
        <pre>{{timeList}}</pre>
        <div>
            <div v-for="(item) of timeList"
                :key="item.id">
                <p>{{item.name || '-'}}: {{ item.start_t | time() }} - {{ item.end_t | time() }}</p>
            </div>
        </div>
    </div>
</template>

<script src="./TimeList.js"></script>
