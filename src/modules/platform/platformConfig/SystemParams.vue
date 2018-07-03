<template>
    <div class="card">
        <header>基础环境</header>
        <section>
            <div class="clear">
                <h1 class="fl">CPU：</h1>
                <el-input class="fl" :disabled="true" v-model="basicEnvironment.name"></el-input>
            </div>
            <div class="clear">
                <h1 class="fl">内存：</h1>
                <el-input class="fl" :disabled="true" v-model="basicEnvironment.RAM"></el-input>
            </div>
            <div class="clear">
                <h1 class="fl">硬盘：</h1>
                <el-input class="fl" :disabled="true" v-model="basicEnvironment.disk"></el-input>
            </div>
            <div class="clear">
                <h1 class="fl">软件环境：</h1>
                <el-input class="fl" :disabled="true" v-model="basicEnvironment.software"></el-input>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "SystemParams",
        data() {
            return{
                basicEnvironment: {
                    name: '',
                    RAM: '',
                    disk: '',
                    software: ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @function imgUrl($path){
        @return '../../../assets/img/platform/systemParams/'+$path;
    }
    header{
        height: 80px;
        line-height: 80px;
        padding: 0 20px;
        font-size: 24px;
    }
    section{
        padding: 80px 20px;
        background: url(imgUrl('graph_img.png')) no-repeat 860px center;
        >div{
            &:not(:last-child){
                margin-bottom: 30px;
            }
            h1{
                width: 125px;
                height: 40px;
                line-height: 40px;
            }
            .el-input{
                width: 460px;
            }
        }
    }
</style>
