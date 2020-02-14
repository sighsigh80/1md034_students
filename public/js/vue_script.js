const vm = new Vue({
    el: '#burgerWrapper',
    data: {
	burgers : food,
    },
    methods: {
	getItems: function() {
	    var elements = document.getElementsByName("itemCheckbox");
	    var items = [];
	    var f = 0;
	    for(var i = 0; elements.length > i; i++) {
		if(elements[i].checked == true){
		    items[f] = elements[i].value;
		    f++;
		}
	    }
	    return items;
	}
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
	gender : 'other',
	sendArray : [],
	itemsArray : [],
	sendStatus : false,
    },
    methods: {
	sendInfo: function() {
	    itemsArray = [];
	    vmb.itemsArray = vm.getItems();
	    if(vmb.itemsArray.length == 0){
		return;
	    }
	    var dataArray = [];
	    dataArray.push(vmb.fullName);
	    dataArray.push(vmb.email);
	    dataArray.push(vmb.street);
	    dataArray.push(vmb.houseNr);
	    dataArray.push(vmb.payment);
	    dataArray.push(vmb.gender);
	    vmb.sendArray = dataArray;
	    vmb.sendStatus = true;
	    console.log(dataArray.toString());
	    return dataArray;	
	}
    }
})

