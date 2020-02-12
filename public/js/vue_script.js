const vm = new Vue({
    el: '#burgerWrapper',
    data: {
	burgers : food,
    }
})

const vmb = new Vue({
    el: '#customerInfo',
    data: {
	fullName : '',
	email : '',
	street : '',
	houseNr : '',
	payment : 'Visa',
	gender : 'other'
    },
    methods: {
	sendInfo: function() {
	    var dataArray = [];
	    dataArray.push(vmb.fullName);
	    dataArray.push(vmb.email);
	    dataArray.push(vmb.street);
	    dataArray.push(vmb.houseNr);
	    dataArray.push(vmb.payment);
	    dataArray.push(vmb.gender);
	    console.log(dataArray.toString());
	    return dataArray;	
	}
    }
})
