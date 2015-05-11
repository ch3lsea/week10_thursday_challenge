function scroll($el) {
    var top = parseInt($el.css("top"));
    if(top < -5) {
        var $lastEl = $(".last");
        $lastEl.removeClass("last");
        $el.addClass("last");
        top = (parseInt($lastEl.css("top")) + $lastEl.height());
        $el.css("top", top);
    }
    $el.animate({ top: (parseInt(top)-50) },2000,'linear',
        function() {
            scroll($(this));
        }
    );
}

module.exports.scroll = scroll;