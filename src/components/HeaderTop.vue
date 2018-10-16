<template>
    <div class="header-top">
        <div class="clock">
            <v-clock></v-clock>
        </div>
        <div class="sign">
            <h2>尚未佩妥剑，转眼便江湖，愿你历尽千帆，归来仍是少年</h2>
            <!-- <p></p> -->
            <p>~ 日生居士</p>
        </div>
        <v-spider class="spider"></v-spider>
    </div>
</template>
<script>
import Vclock from './Vclock.vue'
import SpiderSilk from './SpiderSilk.vue'

export default {
    name: 'HeaderTop',
    components: {
        'v-clock' : Vclock,
        'v-spider' : SpiderSilk
    }
}
</script>
<style scoped>
.header-top{
    position: relative;
    height: 200px;
    width: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background: rgba(100, 100, 100, 0.3);
    background-image: url(../assets/star.gif);
}
.clock{
    position: absolute;
    /* left: 10px; */
}
.sign{
    position: absolute;
    top: 30px;
    right: 100px;
    color: gold;
}
.sign p{
    position: absolute;
    right: 0px;
}
.spider{
    position: absolute;
    top: 0px;
    left: 0px;
}
</style>



