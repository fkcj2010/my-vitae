<template>
    <div id="musicCard">
        <div class="cover">
            <img :src='card.cover'>
        </div>
        <div class="des">
            <span class="hand" @click="getMusic(card)">{{card.description}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MusicCard',
    props: ['card'],
    methods: {
      getMusic: function (card) {
        alert(card.description)
      }
    }
}
</script>
<style scoped>
#musicCard{
    margin: 0px;
    padding: 0px;
}
.cover{
    height: 140px;
}
.des{
    font-size: 12px;
    width: 140px;
    height: 30px;
}
img{
    height: 140px;
    width: 140px;
}
.hand{
    cursor: pointer;
}
.des span:hover{
    color: rgb(100, 149, 237);
}
</style>


