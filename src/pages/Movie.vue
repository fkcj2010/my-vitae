<template>
    <div>
        <main-ui>
          <p>热门推荐</p>
          <div class="music-type flex flex-center jcfs">
			  <div v-for="(card,i) in musicData" class="music-card" :key="i">
			  	<!-- <music-card :coverImage='card.cover' :description='card.description'></music-card> -->
				<music-card :card='card'></music-card>
			  </div>
          </div>
        </main-ui>
    </div>
</template>

<script>
  	import MainUi from "@/layouts/Main.vue";
  	import MusicCard from "@/components/music/MusicCard.vue";

	let musicData = [{
		cover: require('@/assets/music/m1.jpg'),
		description: '话语速爆新歌'
	},{
		cover: require('@/assets/music/m2.jpg'),
		description: '感情上缺乏安全感的人是怎样的? '
	},{
		cover: require('@/assets/music/m3.jpg'),
		description: '适合视频剪辑BGM的音乐'
	}]

  	export default {
		data: ()=>{
			return {
				musicData
			}
		},
  	  	components: {
  	  	    MainUi,
  	  	    MusicCard
  	  	}
  	}
</script>

<style scoped>
.music-card{
	margin-right: 30px;
}
.flex {
    display: -webkit-flex;
    -webkit-flex-wrap: wrap;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: space-around;
}

.jcfs{
    justify-content: flex-start;
}

.jcfe{
    justify-content: flex-end;
}

.flex-center{
    align-items: center;
    align-content: center;
}
</style>