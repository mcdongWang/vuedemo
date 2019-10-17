<template>
    <div class="wrap" >
        <div class="query-list" v-for="item in queryOption" :key="item.title">
            <template v-if="item.type == 'input'">
                <span>{{item.title}}</span>
                <el-input
                    style="width: 200px"
                    v-model="item.value"
                    placeholder="请输入内容"
                >
                </el-input>
            </template>
            <template v-else-if="item.type == 'select'">
                <span>{{item.title}}</span>
                <el-select v-model="item.value" placeholder="请选择">
                    <el-option
                    v-for="i in item.ext.options"
                    :key="i"
                    :label="i"
                    :value="i">
                    </el-option>
                </el-select>
            </template>
            <template v-else-if="item.type == 'switch'">
                <span>{{item.title}}</span>
                <el-switch
                    v-model="item.value"
                >
                </el-switch>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            query: '',
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
                }],
            selected: '',
            value1: true
        }
    },
    props: ['queryOption']
}
</script>

<style lang="less" scoped>
.wrap{
    text-align: left;
    .query-list{
        padding-top: 20px;
        padding-bottom: 20px;
        span{
            vertical-align: middle;
            display: inline-block;
            width: 100px;
            overflow: hidden;
        }
    }
}
</style>