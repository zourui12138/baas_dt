<template>
    <el-row :gutter="80">
        <el-col :span="8">
            <div class="card">
                <header>数据加密</header>
                <ul>
                    <li>
                        <div class="clear">
                            <span class="fl">AES</span>
                            <el-switch class="fr" v-model="encryptData.AES" :width="60" active-color="#1665fe" inactive-color="#d8d8dc"></el-switch>
                        </div>
                    </li>
                    <li>
                        <div class="clear">
                            <span class="fl">SHA256</span>
                            <el-switch class="fr" v-model="encryptData.SHA256" :width="60" active-color="#1665fe" inactive-color="#d8d8dc"></el-switch>
                        </div>
                    </li>
                    <li>
                        <div class="clear">
                            <span class="fl">SM1</span>
                            <el-switch class="fr" v-model="encryptData.SM1" :width="60" active-color="#1665fe" inactive-color="#d8d8dc"></el-switch>
                        </div>
                    </li>
                    <li>
                        <div class="clear">
                            <span class="fl">SM4</span>
                            <el-switch class="fr" v-model="encryptData.SM4" :width="60" active-color="#1665fe" inactive-color="#d8d8dc"></el-switch>
                        </div>
                    </li>
                    <li>
                        <div class="clear">
                            <span class="fl">SCHNORR</span>
                            <el-switch class="fr" v-model="encryptData.SCHNORR" :width="60" active-color="#1665fe" inactive-color="#d8d8dc"></el-switch>
                        </div>
                    </li>
                </ul>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="card">
                <header>隐私安全</header>
                <ul>
                    <li>
                        <div class="clear">
                            <span class="fl">同态加密</span>
                            <el-switch class="fr" v-model="privacySafety.homomorphicEncryption" :width="60" active-color="#1665fe" inactive-color="#d8d8dc"></el-switch>
                        </div>
                        <p>同态加密是基于数学难题的计算复杂性理论的密码学技术。对经过同态加密的数据进行处理得到一个输出，将这一输出进行解密，</p>
                    </li>
                    <li>
                        <div class="clear">
                            <span class="fl">零知识证明</span>
                            <el-switch class="fr" v-model="privacySafety.zeroKnowledge" :width="60" active-color="#1665fe" inactive-color="#d8d8dc"></el-switch>
                        </div>
                        <p>零知识证明是证明者能够在不向验证者提供任何有用的信息的情况下，使验证者相信某个论断是正确的。</p>
                    </li>
                    <li>
                        <div class="clear">
                            <span class="fl">环签名</span>
                            <el-switch class="fr" v-model="privacySafety.ringSignature" :width="60" active-color="#1665fe" inactive-color="#d8d8dc"></el-switch>
                        </div>
                        <p>环签名开启后能有效的实现匿名性</p>
                    </li>
                </ul>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="card">
                <header>传输加密</header>
                <ul>
                    <li>
                        <div class="clear">
                            <span class="fl">HTPS</span>
                            <el-switch class="fr" v-model="transmissionEncrypt.HTPS" :width="60" active-color="#1665fe" inactive-color="#d8d8dc"></el-switch>
                        </div>
                        <p>HTPS是High Temperature Poly-Silicon（高温多晶硅）的简称，它是有源矩阵驱动方式的透过型LCD。</p>
                    </li>
                </ul>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "SafetyConfig",
        data() {
            return{
                encryptData: {
                    AES: true,
                    SHA256: false,
                    SM1: false,
                    SM4: true,
                    SCHNORR: true
                },
                privacySafety: {
                    homomorphicEncryption: true,
                    zeroKnowledge: true,
                    ringSignature: true
                },
                transmissionEncrypt: {
                    HTPS: true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card{
        padding: 0 14px 50px 14px;
        height: 423px;
        header{
            height: 100px;
            line-height: 100px;
            font-size: 24px;
        }
        ul{
            li{
                line-height: 20px;
                padding: 15px 50px 15px 30px;
                border-bottom: 1px solid #f6f7fb;
                p{
                    text-align: justify;
                    font-size: 14px;
                    color: #ffce62;
                    margin-top: 10px;
                }
            }
        }
    }
</style>
