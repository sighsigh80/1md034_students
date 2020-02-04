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
    return ', contains ' + alergy;
  }
}

function getVegan(menuItem) {
var vegan = menuItem.vegan;
  var no = 'no';
  if(vegan.localeCompare(no) == 0){
    return '';
  }
  else {
    return ', can be ordered vegan'
  }
}

let B1 = new menuItem('Classic Cheese', 'https://tasteandsee.com/wp-content/uploads/2017/06/Easy-Pimento-Cheese-and-Bacon-Burger-EL-burger-great.jpg', 760, 'lactose', 'yes');

let B2 = new menuItem('The Tall One', 'https://www.halsanskok.se//sites/default/files/2019-06/190227_GG_Care2share_Incredible%20Burger.jpg', 2000, 'everything', 'no');

let B3 = new menuItem('Beyond burger', 'https://www.vegomagasinet.se/wp-content/uploads/2018/06/beyond.jpg', 820, 'lactose', 'yes');

let B4 = new menuItem('Small n Tasty', 'https://cdn-rdb.arla.com/Files/arla-se/1361781217/43b7c050-b61b-4baa-8eb6-5a8ebb896bc4.jpg?crop=(104,0,-152,0)&w=479&h=335&ak=f525e733&hm=72b785fb', 450, 'lactose', 'yes');

let B5 = new menuItem('Chicken Dream', 'https://barrels.se/app/uploads/2020/01/Unknown.jpeg', 500, 'lactose', 'yes');

let div1 = document.getElementById('burger-menu');

var burgerArray = [B1, B2, B3, B4, B5];
for (let i = 0; i < burgerArray.length; i++) {
  let para = document.createElement("p");
  let Binfo = document.createTextNode(burgerArray[i].info() + getAlergy(burgerArray[i]) + getVegan(burgerArray[i]));
  para.appendChild(Binfo);
  div1.appendChild(para);
}
