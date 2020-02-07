function menuItem(name, pp, cal, alg, veg) {
    this.name = name;
    this.picpath = pp;
    this.calories = cal;
    this.alergy = alg;
    this.vegan = veg;
    this.info = function() {
	return this.name + ' ' + ', calories: ' + this.calories;
    };
}

function getAlergy(menuItem) {
    var alergy = menuItem.alergy;
    var no = 'no';
    if(alergy.localeCompare(no) == 0){
	return '';
    }
    else {
	return 'Contains ' + alergy;
    }
}

function getVegan(menuItem) {
    var vegan = menuItem.vegan;
    var no = 'no';
    if(vegan.localeCompare(no) == 0){
	return '';
    }
    else {
	return 'Can be ordered vegan'
    }
}

let B1 = new menuItem('Classic Cheese', 'https://tasteandsee.com/wp-content/uploads/2017/06/Easy-Pimento-Cheese-and-Bacon-Burger-EL-burger-great.jpg', 760, 'lactose', 'yes');

let B2 = new menuItem('The Tall One', 'https://www.halsanskok.se//sites/default/files/2019-06/190227_GG_Care2share_Incredible%20Burger.jpg', 2000, 'everything', 'no');

let B3 = new menuItem('Beyond burger', 'https://www.vegomagasinet.se/wp-content/uploads/2018/06/beyond.jpg', 820, 'lactose', 'yes');

let B4 = new menuItem('Small n Tasty', 'https://cdn-rdb.arla.com/Files/arla-se/1361781217/43b7c050-b61b-4baa-8eb6-5a8ebb896bc4.jpg?crop=(104,0,-152,0)&w=479&h=335&ak=f525e733&hm=72b785fb', 450, 'lactose', 'yes');

let B5 = new menuItem('Chicken Dream', 'https://barrels.se/app/uploads/2020/01/Unknown.jpeg', 500, 'lactose', 'yes');

var burgerArray = [B1, B2, B3, B4, B5];

/*

function addNewBurger(newBurger) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'box');
    let newTitle = document.createElement('h2');
    let ttxt = document.createTextNode(newBurger.name);
    newTitle.appendChild(ttxt);
    newDiv.appendChild(newTitle);
    
    let pic = document.createElement('img');
    pic.setAttribute('src', newBurger.picpath);
    pic.setAttribute('width', '250');
    newDiv.appendChild(pic);
    
    let newList = document.createElement('ul');

    let p1 = document.createElement('li');
    let pt1 = document.createTextNode(newBurger.calories + ' Calories');
    p1.appendChild(pt1);
    newList.appendChild(p1);
    

    let alergy = getAlergy(newBurger);
    if(alergy.length > 0) {
	let p2 = document.createElement('li');
	let pt2 = document.createTextNode(alergy);
	p2.appendChild(pt2);
	newList.appendChild(p2);
    }

    let vegan = getVegan(newBurger);
    if(vegan.length > 0){
	let p3 = document.createElement('li');
	let pt3 = document.createTextNode(vegan);
	p3.appendChild(pt3);
	newList.appendChild(p3);
    }
    
    newDiv.appendChild(newList);
    burgerWrapper.appendChild(newDiv);
}

function addBurgerMenu(burgers){
    for (let i = 0; i < burgers.length; i++) {
	addNewBurger(burgers[i]);
    }
}

addBurgerMenu(burgerArray);

*/
