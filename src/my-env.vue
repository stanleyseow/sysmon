<template>
  <div>
	<b-row>
	<b-col align-self="center">
	    <img src="environmental.png" alt="Environmental">
		<div v-if="myenv.trafficLight == '1'">
		  <img src="redicon.png" alt="Red Icon">
		</div>
		<div v-else-if="myenv.trafficLight == '2'">
		  <img src="yellowicon.png" alt="Yellow Icon">
		</div>
		<div v-else-if="myenv.trafficLight == '3'">
		  <img src="greenicon.png" alt="Green Icon">
		</div>
		<H5>Uptime : {{myenv.uptime}} minutes</H5>
		<H5>Notification Level: {{myenv.level}} </H5>
		<H5>Last Recv: {{myenv.lastTime}} </H5>
		<H6>Last event: {{myenv.msg}} </H6>
		<H6>Click for events details</H6>

	</b-col>
	</b-row>

<BR>

 </div>
</template>


<script>
module.exports =  {
	props: {
		myenv: {
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
        font-family: 'Josefin Sans', sans-serif;
        font-size: 20px;
		color: #2d3d32;
		font-kerning: normal;
		letter-spacing: 1px;
		line-height: 15px;
    }
    h6 {
        padding-top: 10px;
		padding-bottom: 5px;
        font-family:'Josefin Sans', sans-serif;
        font-size: 20px;
		color: #2d3d32;
		font-kerning: normal;
		letter-spacing: 1px;
		line-height: 15px;
    }
</style>