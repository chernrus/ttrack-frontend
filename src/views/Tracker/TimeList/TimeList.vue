<template lang="html">
    <div class="time-list" v-if="timeList.length">
        <h3>List</h3>
        <!-- <pre>{{timeList}}</pre> -->
        <el-table
            :data="timeList"
            style="width: 50%">
            <el-table-column
                prop="name"
                label="Name">
                <span slot-scope="scope">{{ scope.row.name || '-' }}</span>
            </el-table-column>
            <el-table-column
                prop="start_t"
                label="Start">
                <span slot-scope="scope">{{ scope.row.start_t | time() }}</span>
            </el-table-column>
            <el-table-column
                prop="end_t"
                label="End">
                <span slot-scope="scope">{{ scope.row.end_t | time() }}</span>
            </el-table-column>
            <el-table-column
                prop="description"
                label="Description">
                <span slot-scope="scope">{{ scope.row.description || '-' }}</span>
            </el-table-column>
            <el-table-column
                prop="edit"
                label="">
                <template slot-scope="scope">
                    <el-button type="danger" icon="el-icon-delete" circle @click="remove(scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- <div>
            <div v-for="(item) of timeList"
                :key="item.id">
                <p>{{item.name || '-'}}: {{ item.start_t | time() }} - {{ item.end_t | time() }}</p>
            </div>
        </div> -->
    </div>
</template>

<script src="./TimeList.js"></script>
