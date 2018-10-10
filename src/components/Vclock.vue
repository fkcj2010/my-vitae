<template>
    <div>
        <canvas id="canvas" width="200" height="200" ></canvas>
    </div>
</template>
<script>
let initCanvas = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 6;
    ctx.shadowBlur= 2;
    ctx.shadowColor = '#00ffff';
    function degToRad(degree){
    	var factor = Math.PI/180;
    	return degree*factor;
    }
    function renderTime(){
    	var now = new Date();
    	var today = now.toDateString();
    	var time = now.toLocaleTimeString();
    	var hrs = now.getHours();
    	var min = now.getMinutes();
    	var sec = now.getSeconds();
    	var mil = now.getMilliseconds();
    	var smoothsec = sec+(mil/1000);
        var smoothmin = min+(smoothsec/60);
    	//Background
    	// var gradient = ctx.createRadialGradient(100, 100, 5, 100, 100, 100);
    	// gradient.addColorStop(0, "#03303a");
    	// gradient.addColorStop(1, "black");
    	// ctx.fillStyle = gradient;
    	// ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
		// ctx.fillRect(0, 0, 200, 200);
		ctx.clearRect(0,0,200,200);
    	//Hours
		ctx.beginPath();
    	ctx.arc(100,100,90, degToRad(270), degToRad((hrs*30)-90));
    	ctx.stroke();
    	//Minutes
		ctx.beginPath();
    	ctx.arc(100,100,80, degToRad(270), degToRad((smoothmin*6)-90));
    	ctx.stroke();
    	//Seconds
    	ctx.beginPath();
    	ctx.arc(100,100,70, degToRad(270), degToRad((smoothsec*6)-90));
    	ctx.stroke();
    	//Date
    	ctx.font = "12px Helvetica";
    	ctx.fillStyle = 'rgba(00, 255, 255, 1)';
    	ctx.fillText(today, 55, 90);
    	//Time
    	ctx.font = "12px Helvetica Bold";
    	ctx.fillStyle = 'rgba(00, 255, 255, 1)';
    	ctx.fillText(time, 65, 120);
    }
    setInterval(renderTime, 40);
}

export default {
    name: 'Vclock',
    data() {
        return {
            width: '200'
        };
    },
    mounted: function (){
        initCanvas();
    }
}
</script>
<style scoped>

</style>


