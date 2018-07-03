<template>
    <div>
        <div id="node_detail">
            <el-row class="node_msg card">
                <el-col :span="24"><h1>节点信息</h1></el-col>
                <el-col :span="8"><span>节点名称：成都新兴荣金融投资公司</span></el-col>
                <el-col :span="8"><span>节点地址：成都市高新区太升南路222号</span></el-col>
                <el-col :span="8"><span>联系方式：028-56778888</span></el-col>
            </el-row>
            <div class="router">
                <header>成都新兴荣金融投资有限公司</header>
                <section class="card">
                    <h3>分片路由</h3>
                    <el-row :gutter="30">
                        <el-col :span="8">
                            <div class="router_box">
                                <h1>性能概况</h1>
                                <h2>cpu使用正常，总内存16G，网络情况良好</h2>
                                <footer class="clear">
                                    <div class="fl"></div>
                                    <div class="fl"></div>
                                </footer>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="router_box">
                                <h1>性能概况</h1>
                                <h2>cpu使用正常，总内存16G，网络情况良好</h2>
                                <footer class="clear">
                                    <div class="fl"></div>
                                    <div class="fl"></div>
                                </footer>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="router_box">
                                <h1>性能概况</h1>
                                <h2>cpu使用正常，总内存16G，网络情况良好</h2>
                                <footer class="clear">
                                    <div class="fl"></div>
                                    <div class="fl"></div>
                                </footer>
                            </div>
                        </el-col>
                    </el-row>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NodeManage"
    }
</script>

<style lang="scss" scoped>
    @function imgUrl($name) {
        @return '../../../assets/img/platform/nodeManage/'+$name;
    }
    #node_detail{
        .node_msg{
            padding: 10px 30px 30px;
            line-height: 30px;
            h1{
                height: 60px;
                line-height: 60px;
                color: #4e4e4e;
                background: url(imgUrl('node.png')) no-repeat 0 center;
                padding-left: 40px;
            }
            span{
                border: 1px solid #e6e6e6;
                padding: 6px 10px;
                font-size: 14px;
            }
        }
        .router{
            header{
                height: 60px;
                line-height: 60px;
                padding-left: 30px;
            }
            section{
                padding: 30px;
                h3{
                    height: 80px;
                    background: url(imgUrl('tree.png')) no-repeat 70px center;
                }
                .router_box{
                    background-color: #f6f7fb;
                    padding: 0 30px 30px;
                    color: #4e4e4e;
                    border-radius: 4px;
                    border: 1px solid #ebeef5;
                    overflow: hidden;
                    -webkit-transition: 0.3s;
                    transition: 0.3s;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    h1{
                        height: 50px;
                        line-height: 50px;
                    }
                    h2{
                        height: 30px;
                        line-height: 30px;
                    }
                    div{
                        width: 50%;
                        height: 200px;
                    }
                }
            }
        }
    }
</style>
