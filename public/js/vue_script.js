/* jslint es6:true, indent: 2 */
/* global Vue, io */
/* exported vm */
'use strict';
const socket = io();

const vm = new Vue({
    el: '#main',
    data: {
	burgers : food,
	
	fullName : '',
	email : '',
	payment : 'Visa',
	gender : 'other',
	sendArray : [],
	itemsArray : [],
	sendStatus : false,

	orders : {},
	orderNr : 0,
        order : {
	    orderId : "T",
	    details : {x: 0, y: 0},
	    sendInfo : [],
	    orderItems : [],
	},
    },
    
    methods: {
	getItems: function() {
	    var elements = document.getElementsByName("itemCheckbox");
	    var f = 0;
	    for(var i = 0; elements.length > i; i++) {
		if(elements[i].checked == true){
		    this.itemsArray[f] = elements[i].value;
		    f++;
		}
	    }
	    if(this.itemsArray.length > 0) {
		return 1;
	    }
	    else{
		return -1;
	    }
	},
	
	sendInfo: function() {
	    this.itemsArray = [];
	    var i = this.getItems();
	    if(i == -1){
		console.log("No items entered!");
		return;
	    }
	    var dataArray = [];
	    dataArray.push(this.fullName);
	    dataArray.push(this.email);
	    dataArray.push(this.payment);
	    dataArray.push(this.gender);
	    this.sendArray = dataArray;
	    this.sendStatus = true;
	    console.log(dataArray.toString());
	    this.addOrder(this.order);
	    return dataArray;	
	},

	getNext: function() {
	    this.orderNr++;
	    return this.orderNr;
	},
	addOrder: function(event) {
	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: {
		    x : this.order.details.x,
		    y : this.order.details.y,
		    sendInfo : this.sendArray,
		    orderItems: this.itemsArray,
		},
	    });
	},

	displayOrder: function(event) {
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    this.order.details.x = event.clientX - 10 - offset.x;
	    this.order.details.y = event.clientY - 10 - offset.y;

	},
    },
});
