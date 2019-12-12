'use strict'

Vue.component(
		'my-sys',  httpVueLoader('my-sys.vue'))
Vue.component(
		'my-env',  httpVueLoader('my-env.vue'))
Vue.component(
		'my-rack', httpVueLoader('my-rack.vue'))
Vue.component(
		'my-power',  httpVueLoader('my-power.vue'))
Vue.component(
		'my-cool', httpVueLoader('my-cool.vue'))
Vue.component(
		'my-mixer',  httpVueLoader('my-mixer.vue'))
Vue.component(
		'my-sec', httpVueLoader('my-sec.vue'))
Vue.component(
		'my-conn',  httpVueLoader('my-conn.vue'))
Vue.component(
		'my-ipc', httpVueLoader('my-ipc.vue'))


var app1 = new Vue({
    el: '#app',

    /** Load external component files
     *  Make sure there is no leading / in the name
     *  To load from the common folder use like: 'common/component-name.vue' */

    data: {
		racks: {},
		power: {}, 
		cooling: {}, 
		env: {}, 
		security: {}, 
		mixer: {}, 
		conn: {}, 
		ipc: {}, 
    }, // --- End of data --- //

    computed: {
    }, // --- End of computed --- //

    methods: {
				
		},	// --- End of methods --- //	
		
    mounted: function(){
        // **REQUIRED** Start uibuilder comms with Node-RED @since v2.0.0-dev3
        
		let vm = this
        uibuilder.start()

		// Process new messages from Node-RED events
		// /bg/fc/events
		// Sample payload
		// { name:env1 system:env t1:}
        uibuilder.onChange('msg', function (msg) {
			console.log('Recv msg ', msg.payload)
			// Save json into object 
        if (msg.payload.hasOwnProperty('system')) { 

		if ( msg.payload.system == 'racks') {
                	vm.racks = msg.payload;
       	}
		if ( msg.payload.system == 'power') {
                	vm.power = msg.payload;
       	}
		if ( msg.payload.system == 'cooling') {
                	vm.cooling = msg.payload;
       	}
		if ( msg.payload.system == 'env') {
				vm.env = msg.payload;
       	}
		if ( msg.payload.system == 'security') {
                	vm.env = msg.payload;
       	}
		if ( msg.payload.system == 'mixer') {
                	vm.env = msg.payload;
       	}
		if ( msg.payload.system == 'conn') {
                	vm.conn = msg.payload;
       	}
		if ( msg.payload.system == 'ipc') {
                	vm.ipc = msg.payload;
       	}

        } // have property name
		}) // onChange

    } // --- End of mounted hook --- //

}) // --- End of app1 --- //
