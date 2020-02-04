function MenuItem(name, pp, cal, alg, veg) {
    this.name = name;
    this.picpath = pp;
    this.calories = cal;
    this.alergy = alg;
    this.vegan = veg;
    this.info = function() {
	return this.name + ' ' + 'Calories: ' + this.calories;
    };
}

let BI1 = new MenuItem('Classic Cheese', 'https://tasteandsee.com/wp-content/uploads/2017/06/Easy-Pimento-Cheese-and-Bacon-Burger-EL-burger-great.jpg', 760, 'lactose', True);

let BI2 = new MenuItem('The Tall One', 'https://www.halsanskok.se//sites/default/files/2019-06/190227_GG_Care2share_Incredible%20Burger.jpg', 2000, 'everything', False);

let BI3 = new MenuItem('Beyond burger', 'https://www.vegomagasinet.se/wp-content/uploads/2018/06/beyond.jpg', 820, 'lactose', True);

let BI4 = new MenuItem('Small n Tasty', 'https://cdn-rdb.arla.com/Files/arla-se/1361781217/43b7c050-b61b-4baa-8eb6-5a8ebb896bc4.jpg?crop=(104,0,-152,0)&w=479&h=335&ak=f525e733&hm=72b785fb', 450, 'lactose', True);

let BI5 = new MenuItem('Chicken Dream', 'https://barrels.se/app/uploads/2020/01/Unknown.jpeg', 500, 'lactose', False);
