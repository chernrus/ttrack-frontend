<template lang="html">
    <div class="time-controll">
        <h3>TimeControll</h3>
        <el-row align="bottom" type="flex">
            <el-col :span="6" >
                <label>Name</label>
                <el-input v-model="formModel.name" placeholder=""></el-input>
            </el-col>
            <el-col :span="3">
                <label>Start</label>
                <el-time-picker class="w-100" v-model="formModel.start_t" placeholder=""></el-time-picker>
            </el-col>
            <el-col :span="3">
                <label>End</label>
                <el-time-picker class="w-100" v-model="formModel.end_t" placeholder=""></el-time-picker>
            </el-col>
            <el-col :span="4">
                <el-button type="primary"
                    @click="addTime">
                    Create task
                </el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script src="./TimeControll.js"></script>
