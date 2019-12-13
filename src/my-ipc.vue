<template>
  <div>
	<b-row>
	<b-col align-self="center">
	    <img src="FoodComputer.png" alt="FoodComputer">
		<div v-if="myipc.trafficLight == '1'">
			 <img src="redn.png" alt="Red Icon">
		</div>
		<div v-else-if="myipc.trafficLight == '2'">
		   <img src="yellow.png" alt="Yellow Icon">
		</div>
		<div v-else-if="myipc.trafficLight == '3'">
		  <img src="green.png" alt="Green Icon">
		</div>

		<H5>Uptime : {{myipc.uptime}} minutes</H5>
		<h5>Notification Level: {{myipc.level}} </H5>
		<H5>Last Recv: {{myipc.lastTime}} </H5>
		<H6>Last event: {{myipc.msg}} </H6>
		<H6>Click for events details</H6>

	</b-col>
	</b-row>

<BR>

 </div>
</template>


<script>
module.exports =  {
	props: {
		myipc: {
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