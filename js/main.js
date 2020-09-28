$(document).ready(function() {
    $('.loading-overlay').fadeOut(1000);
    $('.option-chat .fa-times').click(function() {
        $('.chat-popup').hide();
    });
    $('.messages-container .messages').click(function() {
        $('.chat-popup').show();
    });
    $(document).mouseup(function(e) {
        var container = $(".chat-popup");
        var container2 = $(".messages-container .messages");
        if (container.has(e.target).length === 0 && container2.has(e.target).length === 0) {
            container.hide();
        }
    });
    let popupAdd = false;
    $("#add-friend").click(function(e) {
        if (popupAdd) {
            $(".add-friend").hide();
            this.popupAdd = false;
        } else {
            $(".add-friend").show();
            this.popupAdd = true;

        }
    });
    $(document).mouseup(function(e) {
        var container = $("#add-friend");
        var container2 = $(".add-friend");
        if (container.has(e.target).length === 0 && container2.has(e.target).length === 0) {
            container2.hide();
            this.popupAdd = false;

        }
    });

    let messages = false;
    $("#messages").click(function(e) {
        if (messages) {
            $(".message-nonfiction").hide();
            this.messages = false;
        } else {
            $(".message-nonfiction").show();
            this.messages = true;

        }
    });
    $(document).mouseup(function(e) {
        var container = $("#messages");
        var container2 = $(".message-nonfiction");
        if (container.has(e.target).length === 0 && container2.has(e.target).length === 0) {
            container2.hide();
            this.messages = false;

        }
    });
    let nonfictions = false;
    $("#nonfictions").click(function(e) {
        if (nonfictions) {
            $(".nonfiction").hide();
            this.nonfictions = false;
        } else {
            $(".nonfiction").show();
            this.nonfictions = true;

        }
    });
    $(document).mouseup(function(e) {
        var container = $("#nonfictions");
        var container2 = $(".nonfiction");
        if (container.has(e.target).length === 0 && container2.has(e.target).length === 0) {
            container2.hide();
            this.nonfictions = false;
        }
    });
    let small_popup_side = false;
    $(".small-popup-side").click(function() {
        if (small_popup_side) {
            $(".popup-side").hide();
            this.small_popup_side = false;
        } else {
            $(".popup-side").show();
            this.small_popup_side = true;
        }
    });
    $(document).mouseup(function(e) {
        var container = $(".small-popup-side");
        var container2 = $(".popup-side");
        if (container.has(e.target).length === 0 && container2.has(e.target).length === 0) {
            container2.hide();
            this.small_popup_side = false;
        }
    });



    /*
    $(".advertisement .owl-carousel ,.advertisement2 .owl-carousel,.advertisement3 .owl-carousel").each(function() {
        $(".advertisement .owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            rtl: true,
            responsive: {
                0: {
                    items: 1,
                },
                500: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });
        $('.advertisement2 .owl-carousel').owlCarousel({
            loop: false,
            margin: 5,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            rtl: true,
            responsive: {
                1: {
                    items: 1,
                },
                300: {
                    items: 2,
                },
                700: {
                    items: 3,
                },
            }
        });
        $('.advertisement3 .owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            nav: false,
            dots: false,
            touchDrag: true,
            mouseDrag: true,
            autoplayHoverPause: false,
            rtl: true,
            responsive: {
                1: {
                    items: 1,
                },
                300: {
                    items: 2,
                },
                700: {
                    items: 3,
                },
            }
        });
    });
*/
});