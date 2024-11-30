$(document).ready(function () {
    try {
        $('.featuredWorkImage').ripples({
            resolution: 750,
            dropRadius: 35, //px
            perturbance: 0.04,
        });
        $('.bevmoText').ripples({
            resolution: 750,
            dropRadius: 35, //px
            perturbance: 0.04,
            interactive: false
        });
    }
    catch (e) {
        $('.error').show().text(e);
    }

    $('.js-ripples-disable').on('click', function () {
        $('.featuredWorkImage, .bevmoText').ripples('destroy');
        $(this).hide();
    });

    $('.js-ripples-play').on('click', function () {
        $('.featuredWorkImage, .bevmoText').ripples('play');
    });

    $('.js-ripples-pause').on('click', function () {
        $('.featuredWorkImage, .bevmoText').ripples('pause');
    });

    // Automatic drops
    setInterval(function () {
        var $el = $('');
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 25;
        var strength = 0.05 + Math.random() * 0.05;

        $el.ripples('drop', x, y, dropRadius, strength);
    }, 400);
});