<template>
    <div class="header-top">
        <div class="clock">
            <v-clock></v-clock>
        </div>
        <div class="sign">
            <h2>尚未佩妥剑，转眼便江湖，愿你历尽千帆，归来仍是少年</h2>
            <!-- <p></p> -->
            <p>~ 星居士</p>
        </div>
    </div>
</template>
<script>
import Vclock from './Vclock.vue'

export default {
    name: 'HeaderTop',
    components: {
        'v-clock' : Vclock
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
    /* background: rgba(100, 100, 100, 1); */
    background-image: url(../assets/top-bg.gif);
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
</style>



