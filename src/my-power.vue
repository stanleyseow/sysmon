<template>
  <div>
	<b-row>
	<b-col align-self="center">
	    <img src="Power.png" alt="Power">
		<div v-if="mypower.trafficLight == '1'">
			 <img src="red.png" alt="Red Icon">
		</div>
		<div v-else-if="mypower.trafficLight == '2'">
		   <img src="yellow.png" alt="Yellow Icon">
		</div>
		<div v-else="mypower.trafficLight == '3'">
		   <img src="green.png" alt="Green Icon">
		</div>

		<H5>Uptime : {{mypower.uptime}} minutes</H5>
		<h5>Notification Level: {{mypower.level}} </H5>
		<H5>Last Recv: {{mypower.lastTime}} </H5>
		<H6>Last event: {{mypower.msg}} </H6>
		<H6>Click for events details</H6>

	</b-col>
	</b-row>

<BR>

 </div>
</template>


<script>
module.exports =  {
	props: {
		mypower: {
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
