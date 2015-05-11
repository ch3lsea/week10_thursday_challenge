function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function Fruit(name) {
    this.name = name;
    this.price = randomNumber(25, 999)/100;
}

Fruit.prototype.changePrice = function() {
    this.price += randomNumber(-200,200)/100;
    this.price = Math.round(this.price * 100)/100;
    if(this.price > 9.99) {
        this.price = 9.99;
    } else if(this.price < 0.25) {
        this.price = 0.25;
    }
};

Fruit.prototype.display = function(){
    var imgString = "<img src='images/" + this.name + ".png'></img>";
    var string = "<div>" + imgString + "<br>$" + this.price + "</div>";
    var button = "<button class='btnBuy' value='" + this.name + "'>Buy</button>";
    var buttonSell ="<button class='btnSell' value='" + this.name + "'>Sell</button>";
    var invString = "<div>You have " + inventory[this.name] + "</div>";
    var divWrapper = "<div class='fruit'>" + string + button + buttonSell + invString + "</div>";
    $("#container").append(divWrapper);
};

function PlayerInventory(array){
    // Loop through the given array, creating a variable for the name of each property
    for (var i = 0; i < array.length; i++) {
        var name = array[i].name;
        this[name] = 0;
    }
}

function updateAll(){
    $("#container").children().remove();
    for(var i = 0; i < fruit.length; i++){
        fruit[i].display();
    }
    $("#money").html("<p>Your Money: $" + money + "</p>");
}

var money;
var fruit;
var inventory;

function startMarket() {
    $("#container").children().remove();
    // Declare local variables: new fruit objects with random prices
    var apple = new Fruit("apples");
    var orange = new Fruit("oranges");
    var banana = new Fruit("bananas");
    var pear = new Fruit("pears");

    // Intialize / reset global variables to the above
    money = 50;
    fruit = [apple, orange, banana, pear];
    inventory = new PlayerInventory(fruit);
}

module.exports.startMarket = startMarket;
module.exports.updateAll = updateAll;
module.exports.playerInventory = PlayerInventory;
module.exports.Fruit = Fruit;
module.exports.randomNumber = randomNumber;
