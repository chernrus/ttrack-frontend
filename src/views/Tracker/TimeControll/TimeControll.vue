<template lang="html">
    <div class="time-controll">
        <h3>TimeControll</h3>
        <el-form :model="formModel"
            label-position="left">
            <el-row align="bottom" type="flex">
                <el-col :lg="6" :md="12" :xs="24" :sm="24">
                    <el-form-item label="Name">
                        <el-input v-model="formModel.name" placeholder="Task..."></el-input>
                    </el-form-item>
                </el-col>
                <el-col :lg="4" :md="6" :xs="12" :sm="12">
                    <el-form-item label="Start">
                        <el-time-picker class="w-100" v-model="formModel.start_t" placeholder="Start..."></el-time-picker>
                    </el-form-item>
                </el-col>
                <el-col :lg="4" :md="6" :xs="12" :sm="12">
                    <el-form-item label="End">
                        <el-time-picker class="w-100" v-model="formModel.end_t" placeholder="End..."></el-time-picker>
                    </el-form-item>
                </el-col>
                <el-col :lg="6" :md="18" :xs="24" :sm="18">
                    <el-form-item label="Description">
                        <el-input v-model="formModel.description" placeholder="Description..." type="textarea" :autosize="{maxRows: 1}"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item>
                        <el-button type="primary"
                            @click="addTime">
                            Create task
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

    </div>
</template>

<script src="./TimeControll.js"></script>
