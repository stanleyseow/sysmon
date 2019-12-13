<template>
  <div>
	<b-row>
	<b-col align-self="center">
	    <img src="Mixer.png" alt="Mixer">
		<div v-if="mymixer.trafficLight == '1'">
			<img src="red.png" alt="Red Icon">
		</div>
		<div v-else-if="mymixer.trafficLight == '2'">
		    <img src="yellow.png" alt="Yellow Icon">
		</div>
		<div v-else="mymixer.trafficLight == '3'">
		  <img src="green.png" alt="Green Icon">
		</div>

		<H5>Uptime : {{mymixer.uptime}} minutes</H5>
		<h5>Notification Level: {{mymixer.level}} </H5>
		<H5>Last Recv: {{mymixer.lastTime}} </H5>
		<H6>Last event: {{mymixer.msg}} </H6>
		<H6>Click for events details</H6>

	</b-col>
	</b-row>

<BR>

 </div>
</template>


<script>
module.exports =  {
	props: {
		mymixer: {
		}, 
	},
	data() {
		return {

	}
},
	computed: {

		}, // end of computed

	methods: {
		
		}, // end of methods 

	mounted: function () {
  	},
} // end of exports
</script>

<style scoped>
    img{
        padding-top: 5px;
		padding-bottom: 15px;
    }
    h5 {
        padding-top: 10px;
		padding-bottom: 5px;
        font-family:'Josefin Sans', sans-serif;
        font-size: 20px;
		color: #c6c6c6;
		font-kerning: normal;
		letter-spacing: 1px;
		line-height: 15px;
    }
    h6 {
        padding-top: 10px;
		padding-bottom: 5px;
        font-family:'Josefin Sans', sans-serif;
        font-size: 20px;
		color: #c6c6c6;
		font-kerning: normal;
		letter-spacing: 1px;
		line-height: 23px;
    }
</style>
