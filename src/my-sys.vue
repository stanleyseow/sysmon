<template>
  <div>
	<HR>
	<b-row>	 
	<b-col>
	<b-card header="Racks" border-variant="success">
	<my-rack v-bind:myracks="racks"> </my-rack>
	</b-card>
	</b-col>
	<b-col>
	<b-card header="Environment" border-variant="success">	
	<my-env v-bind:env="myenv"> </my-env>
	</b-card>
	</b-col>
	</b-row>
	<HR>
	 </div>
</template>


<script>
module.exports =  {
	props: {
		myracks:{}.
		myenv:{},
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
    b-card header {
        color: #2d3d32;
    	padding-bottom: 5px;
    	padding-top: 10px;
    	letter-spacing: 1px;
		line-height: 10px;
    }
</style>