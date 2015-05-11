var scroll = require('./marquee');
var fruit = require('./fruitStand');

$.ajax(../../server/modules/fruitStand) {

}

$(document).ready(function() {
    $('#tabz a[href="#home"]').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });
    $('#tabz a[href="#tab1"]').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });
    $('#tabz a[href="#tab2"]').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });
    $('#tabz a[href="#tab3"]').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });

    //Tab 2 Shout Outs
    //This is broken. The link doesn't work...it's not scrolling at all
    var i = 0;
    $(".marquee").last().addClass("last");
    $(".marquee").each(function() {
        var $this = $(this);
        $this.css("top", i);
        i += $this.height();
        scroll($this);
    });

    //Tab 3 Fruit Stand
    $("#btnStart").on("click", function(){
        // Initialize the app
        startMarket();
        // Display everything to start
        updateAll();
        // Set interval to 1500 -- 15 secs
        setInterval(function() {
            for (var i = 0; i < fruit.length; i++) {
                fruit[i].changePrice();
            }
            updateAll();
        }, 15000);
    });
    $("#container").on("click", ".btnSell", function(){
        updateAll();
        // Loop through fruits array to check which fruit name the button was assigned
        for (var i = 0; i < fruit.length; i++) {
            if(fruit[i].name == this.value){
                if(inventory[this.value] < 1){
                    alert("You don't have any " + this.value + " to sell!");
                    return;
                }
                inventory[this.value]--;
                money += fruit[i].price;
                money = Math.round(money * 100) / 100;
                updateAll();
            }
        }
    });

    $("#container").on("click", ".btnBuy", function(){
        inventory[this.value]++;
        updateAll();
        // Loop through fruits array to check which fruit name the button was assigned
        for (var i = 0; i < fruit.length; i++) {
            if(fruit[i].name == this.value){
                if(money < fruit[i].price){
                    alert("You don't have enough cash to buy " + this.value +"!");
                    return;
                }
                money -= fruit[i].price;
                money = Math.round(money * 100) / 100;
                updateAll();
            }
        }
    });
});

//May be using accordion for the Home tab in the future
//Hide content and just keep up the click-able titles?
//$('#accordion .panel-heading').click(function () {
//    if (!$(this).hasClass('active'))
//    {
//        // the element clicked was not active, but now is -
//        $('.panel-heading').removeClass('active');
//        $(this).addClass('active');
//        setIconOpened(this);
//    }
//    else
//    {
//        // active panel was reclicked
//        if ($(this).find('b').hasClass('opened'))
//        {
//            setIconOpened(null);
//        }
//        else
//        {
//            setIconOpened(this);
//        }
//    }
//});
//function setIconOpened(activePanel) {
//    $('.panel-heading').find('b').addClass('closed').removeClass('opened');
//
//    if (activePanel)
//    {
//        $(activePanel).find('b').addClass('opened').removeClass('closed');
//    }
//}