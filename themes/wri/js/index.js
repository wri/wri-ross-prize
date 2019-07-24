(function ($) {
    var finalistHash = location.hash.substr(1);
    if (finalistHash) {
        var id = '#popup-finalists' + $('.finalists__card[data-hash="' + finalistHash + '"]').data('id');
        if ($(id).length) {
            $(id + ", .mask").fadeIn(300);
            $(id).css("top", $(window).scrollTop() + 20);
            $(".wrapper").addClass("opened");
            $("html, body").css("overflow", "hidden");

            var iframe = $(id).find('div[src]');
            if (!iframe.length) {
                iframe = $(id).find('iframe');
            }
            var src = String(iframe.attr('src'));
            src = src.split('?')[0];
            src += '?autopause=0';

            if ($(this).hasClass('finalists__card-image')) {
                src += '&loop=1&autoplay=1';
            } else {
                src.replace('&loop=1&autoplay=1', '');
            }

            iframe.replaceWith('<iframe frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay" src="' + src + '"></iframe>');

            jQuery(document).ready(function ($) {
                $(id).niceScroll({cursorcolor: "#ffae16", autohidemode: false});
            });
        }
    }

    /*var ot = 0, ol = 0;
    $(".header").mousemove(function (e) {
        var header = $(".header-bg");
        var t = header.position().top;
        var l = header.position().left;
        if (e.pageX > ol) {
            l = l + 1;
        } else {
            l = l - 1;
        }
        if (e.pageY > ot) {
            t = t + 1;
        } else {
            t = t - 1;
        }
        if (l < -125) l = -125;
        if (l > header.width() + 125) l = header.width() + 125;
        if (t < -125) t = -125;
        if (t > header.height() + 125) t = header.height() + 125;
        header.css("left", l);
        header.css("top", t);
        ot = e.pageY;
        ol = e.pageX;
    });*/
//popup
    $(".menu .right").click(function () {
        $(".popup-application, .mask, .close").fadeIn(300);
        $(".popup-application").css("top", $(window).scrollTop() + 20);
        $(".scroll").niceScroll({cursorcolor: "#ffae16", autohidemode: false});
        $(".wrapper").addClass("opened");
        $("html, body").css("overflow", "hidden");
        return false;
    });
    $(".apply-disabled").click(function () {
        gtag('event', 'click', {
            'event_category': 'Apply',
            'event_label': 'Application Start'
        });
        $(".popup-application, .mask, .close").fadeIn(300);
        $(".popup-application").css("top", $(window).scrollTop() + 20);
        if (document.body.clientWidth >= 800) {
            // $(".scroll").niceScroll({cursorcolor: "#ffae16", autohidemode: false});
        }
        $(".wrapper").addClass("opened");
        $("html, body").css("overflow", "hidden");
        return false;
    });

    $(".apply").click(function () {
        $('html, body').animate({
            scrollTop: ($('.congratulation').offset().top - 70)
        }, 500);

        return false;
    });

    $(".js-map").click(function () {
        $('html, body').animate({
            scrollTop: ($('.xprojects').offset().top - 70)
        }, 500);

        return false;
    });

    $('.finalists__card-info, .finalists__card-image, .finalists__card-image + span').click(function (event) {
        history.pushState({}, null, location.pathname + '#' + $(this).parent().data('hash'));

        var id = '#popup-finalists' + $(this).parent().data('id');
        $(id + ", .mask").fadeIn(300);
        $(id).css("top", $(window).scrollTop() + 20);
        $(id).niceScroll({cursorcolor: "#ffae16", autohidemode: false});
        $(".wrapper").addClass("opened");
        $("html, body").css({"overflow": "hidden", "position": "fixed", "width": "100%", "height": "100%"});

        var iframe = $(id).find('div[src]');
        if (!iframe.length) {
            iframe = $(id).find('iframe');
        }
        var src = String(iframe.attr('src'));
        src = src.split('?')[0];
        src += '?autopause=0&modestbranding=1&rel=0&showinfo=0';

        if (!$(this).hasClass('finalists__card-info')) {
            src += '&loop=1&autoplay=1';
        } else {
            src.replace('&loop=1&autoplay=1', '');
        }

        iframe.replaceWith('<iframe frameborder="0" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="' + src + '"></iframe>');

        return false;
    });

    $(".decided").click(function () {
        $(".popup-decided, .mask").fadeIn(300);
        $(".popup-decided").css("top", $(window).scrollTop() + 20);
        $(".popup-decided").niceScroll({cursorcolor: "#ffae16", autohidemode: false});
        $(".wrapper").addClass("opened");
        $("html, body").css("overflow", "hidden");
        $(".popup-decided .popup__close").data('position',$(this).closest('.finalists__container').offset().top);
        $(".mask").data('position',$(this).closest('.finalists__container').offset().top);

        return false;
    });

    $(".contact").click(function () {
        $(".popup-form.contact-us-form, .mask, .close").fadeIn(300);
        $(".close").addClass("popup-form-close");
        $(".popup-form").css("top", $(window).scrollTop() + 20);
        $(".wrapper").addClass("opened");
        $("html, body").css({"overflow": "hidden", "position": "fixed", "width": "100%", "height": "100%"});

        $(".popup-form .close").data('position',$(this).closest('.container').offset().top);
        $(".mask").data('position',$(this).closest('.container').offset().top);

        return false;
    });

    $(".subscribe").click(function (event) {
        event.preventDefault()
        $(".popup-form.subscribe-form, .mask, .close").fadeIn(300);
        $(".close").addClass("popup-form-close");
        $(".popup-form.subscribe-form").css("top", $(window).scrollTop() + 20);
        $(".wrapper").addClass("opened");
        $("html, body").css({"overflow": "hidden", "position": "fixed", "width": "100%", "height": "100%"});

        $(".popup-form .close").data('position',$(this).closest('div').offset().top);
        $(".mask").data('position',$(this).closest('div').offset().top);
        return false;
    });
    $(".winner-s").click(function () {

        var id = '#popup-finalists248';
        if ($(id).length) {
            $(id + ", .mask").fadeIn(300);
            $(id).css("top", $(window).scrollTop() + 20);
            $(".wrapper").addClass("opened");
            $("html, body").css("overflow", "hidden");

            var iframe = $(id).find('div[src]');
            if (!iframe.length) {
                iframe = $(id).find('iframe');
            }
            var src = String(iframe.attr('src'));
            src = src.split('?')[0];
            src += '?autopause=0';

            if ($(this).hasClass('finalists__card-image')) {
                src += '&loop=1&autoplay=1';
            } else {
                src.replace('&loop=1&autoplay=1', '');
            }

            iframe.replaceWith('<iframe frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay" src="' + src + '"></iframe>');

            jQuery(document).ready(function ($) {
                $(id).niceScroll({cursorcolor: "#ffae16", autohidemode: false});
            });
        }
        window.location.hash = 'SARSAI';
    });

    $(".guide-link, .terms-link").click(function () {
        $("html, body").css({"overflow": "hidden", "position": "fixed", "width": "100%", "height": "100%"});
        return false;
    });

    $(".mask,.close, .popup-faq .h a, .popup__close img").click(function () {
        history.pushState({}, null, location.pathname);


        $(".wrapper").removeClass("opened");
        $(".popup-form, .popup-application, .popup-jury, .popup-jury1, .popup-advisory-council, .mask, .popup-video, .popup-faq, .popup-guide, .popup-terms, .popup-form, .popup-finalists, .popup-decided, .close").hide();
        $(".close").removeClass("white");
        $(".popup-video .iframe").html("");
        $("html, body").css({"overflow": "auto", "position": "static", "width": "100%", "height": "auto"});
        $('.popup-finalists iframe').each(function (index, elem) {
            if ($(elem).length) {
                $(elem).attr('src', $(elem).attr('src').replace('&loop=1&autoplay=1', ''));
            }
        });

        if($(this).data('position')){
            $('html,body').animate({scrollTop: $(this).data('position')-50}, 1);
        }
    });
    $(".close-guide").click(function () {

        if ($('.popup-application').is(':visible') || $('.popup-faq').is(':visible') || ($('.popup-guide').is(':visible') && $('.popup-terms').is(':visible'))) {
            $(this).parent().hide();
        } else {
            $(".wrapper").removeClass("opened");
            $(".popup-form, .popup-application, .popup-jury, .popup-jury1, .popup-advisory-council, .mask, .popup-video, .popup-faq, .popup-guide, .popup-terms, .popup-form, .popup-finalists, .popup-decided, .close").hide();
            $(".close").removeClass("white");
            $(".popup-video .iframe").html("");
            $("html, body").css("overflow", "auto");
        }
        if($(this).data('position')){
            $('html,body').animate({scrollTop: $(this).data('position')-50}, 1);
        }

    });
    $(".photos .item:first").addClass('item1').removeClass('item');
    $(".photos .item1 .img, .photos .item .img, .img-gradient").click(function () {
        var popup = $("#" + $(this).attr("data-id"));
        popup.fadeIn(300);
        $(".mask, .close").fadeIn(300);
        popup.niceScroll({cursorcolor: "#ffae16", autohidemode: false});
        $(".wrapper").addClass("opened");
        $("html, body").css({"overflow": "hidden", "position": "fixed", "width": "100%", "height": "100%"});
        return false;
    });
    $(".jury").click(function () {
        /*$(".popup-jury1, .mask, .close").fadeIn(300);
        $(".popup-jury1").css("top", $(window).scrollTop() + 20);
        $(".popup-jury1").niceScroll({cursorcolor: "#ffae16", autohidemode: false});
        $(".wrapper").addClass("opened");
        $("html, body").css("overflow", "hidden");*/
        $("html, body").animate({
            scrollTop: $("#jury").offset().top - 83
        }, 500);

        return false;
    });
    $(".finalists").click(function () {
        /*$(".popup-jury1, .mask, .close").fadeIn(300);
        $(".popup-jury1").css("top", $(window).scrollTop() + 20);
        $(".popup-jury1").niceScroll({cursorcolor: "#ffae16", autohidemode: false});
        $(".wrapper").addClass("opened");
        $("html, body").css("overflow", "hidden");*/
        $("html, body").animate({
            scrollTop: $("#finalists").offset().top - 83
        }, 500);

        return false;
    });
    $(".people .img").each(function (i) {
        if (i > 4) {
            $(this).addClass('img-more');
        }
    });
    $(".people .img").click(function () {
        if ($(this).attr("data-id")) {
            var id = $(this).attr("data-id");
        } else {
            var id = $(this).find(">:first-child").attr("data-id");
        }
        var popup = $("#" + id);
        popup.fadeIn(300);
        $(".mask, .close").fadeIn(300);
        popup.css("top", $(window).scrollTop() + 20);
        popup.niceScroll({cursorcolor: "#ffae16", autohidemode: false});
        $(".wrapper").addClass("opened");
        $("html, body").css({"overflow": "hidden", "position": "fixed", "width": "100%", "height": "100%"});
        return false;
    });
    $(".faq .more, .faq .title").click(function () {
        $(".popup-faq, .mask, .close").fadeIn(300);
        $(".popup-faq").css("top", $(window).scrollTop() + 20);
        $(".popup-faq").niceScroll({cursorcolor: "#ffae16", autohidemode: false});

        $(".popup-faq .close").data('position',$(this).closest('.container').offset().top);
        $(".mask").data('position',$(this).closest('.container').offset().top);

        $(".wrapper").addClass("opened");
        $("html, body").css({"overflow": "hidden", "position": "fixed", "width": "100%", "height": "100%"});
        return false;
    });
    $(".guide-link").click(function () {
        $(".popup-guide, .mask, .close").fadeIn(300);
        $(".popup-guide").css("top", $(window).scrollTop() + 20);
        $(".popup-guide").niceScroll({cursorcolor: "#ffae16", autohidemode: false});

        $(".wrapper").addClass("opened");
        $("html, body").css("overflow", "hidden");

        $(".popup-guide .close-guide").data('position',$(this).closest('.container').offset().top);
        $(".mask").data('position',$(this).closest('.container').offset().top);
        return false;
    });
    $(".guide-modal").click(function () {
        $(".popup-guide, .mask, .close-guide").fadeIn(300);
        $(".popup-guide").css("top", $(window).scrollTop() + 20);
        $(".popup-guide").niceScroll({cursorcolor: "#ffae16", autohidemode: false});

        $(".wrapper").addClass("opened");
        $("html, body").css("overflow", "hidden");

        $(".popup-guide .close-guide").data('position',$(this).closest('.container').offset().top);
        $(".mask").data('position',$(this).closest('.container').offset().top);

        return false;
    });
    $(".terms-link").click(function () {
        $(".popup-terms, .mask, .close").fadeIn(300);
        $(".popup-terms").css("top", $(window).scrollTop() + 20);
        $(".popup-terms").niceScroll({cursorcolor: "#ffae16", autohidemode: false});


        $(".wrapper").addClass("opened");
        $("html, body").css("overflow", "hidden");

        $(".popup-terms .close-guide").data('position',$(this).closest('.container').offset().top);
        $(".mask").data('position',$(this).closest('.container').offset().top);

        return false;
    });

//
//5
    $(".about").click(function () {
        var line = $(".whats h2 .line, .whats .num"),
            el = $(".whats p, .whats .text, .whats .date"),
            wrapper = $(".wrapper");
        line.each(function () {
            var opacity = 0.5, y = 50;
            $(this).find(".letter").each(function () {
                $(this).css("opacity", opacity).css("transform", "translate3d(0px, " + y + "px, 0px)");
                opacity = opacity - 0.4;
                y = y + 7;
            });
        });
        line.css("opacity", 0);
        el.css("opacity", 0);
        wrapper.addClass("modify");
        $("html, body").animate({scrollTop: $(".header").height()}, 1200, function () {
            wrapper.removeClass("modify");
            line.animate({opacity: 1}, 300, function () {
                line.find(".letter").css("opacity", 1).css("transform", "translate3d(0px, 0px, 0px)");
            });
            el.animate({opacity: 1}, 300);
        });
    });

    $(".whats h2 .line span").each(function () {
        var span = $(this);
        var text = span.text();
        span.html("");
        for (var i = 0; i < text.length; i++) {
            span.append("<span class='letter'>" + text[i] + "</span>");
        }
    });

    $('.whats .item').each(function () {
        var item = $(this);
        var date = Date.parse(item.find('time').attr('datetime'));
        if (Date.now() < date) {
            item.addClass('future');
        }
    });
    $('.whats .item:not(.future):last').removeClass('future').addClass('current');
//6
    var bgt = 300, scrollTop = 0;
    $(window).scroll(function () {
        var el = $(".bg, .bg1, .bg3, .bg4, .bg5");
        if ($(window).scrollTop() > scrollTop) {
            if (el.offset().top - $(window).height() < scrollTop) {
                bgt = bgt - 10;
            }
        } else {
            bgt = bgt + 10;
        }
        el.css("top", bgt);
        if (bgt < 0) bgt = 0;
        if (bgt > 300) bgt = 300;

        scrollTop = $(window).scrollTop(), menu = $(".menu");
        if (scrollTop > $(".header").height() && $(window).width() > 600) {
            menu.addClass("fixed");
        } else {
            menu.removeClass("fixed");
        }

        $(".menu .menu-list a").each(function () {
            var href = $(this).attr("href"),
                offset = href == '#advisory_council' ? 180 : 100;
            if ($(href).offset().top - offset < scrollTop) {
                $(".menu .menu-list a").removeClass("active");
                $(this).addClass("active");
            }
        });

    });
    $(".menu .menu-list a").click(function () {
        var el = $(this);
        var href = $(this).attr("href"),
            offset = href == '#advisory_council' ? 160 : 83;
        if ($(window).width() <= 1125) {
            $(".menu ul").fadeOut(300);
        }
        $("html, body").animate({scrollTop: $(href).offset().top - offset}, 500, function () {
            $(".menu .menu-list a").removeClass("active");
            el.addClass("active");
        });

        return false;
    });
    $(".awards").mousemove(function (e) {
        $(this).css("transform", "perspective(300px) rotateY(" + (e.pageX / $(this).height() - 1) + "deg)");
    });
    $(".projects").mousemove(function (e) {
        $(this).css("transform", "perspective(300px) rotateY(" + (e.pageX / $(this).height() - 1) + "deg)");
    });
    $(".have .btn").mousemove(function (e) {
        $(this).css("transform", "perspective(300px) rotateY(" + (e.pageX / $(this).height() - 1) + "deg)");
    });
    $(".pin").hover(function () {
        $(".tooltip").css({"opacity": 1});
        $(".tooltip__content").css({"opacity": 1, "transform": "scale(1)"});
        $(".tooltip__shape path").attr("d", "M 33.5,31 C 33.5,31 145,31 200,31 256,31 367,31 367,31 367,31 367,110 367,150 367,190 367,269 367,269 367,269 256,269 200,269 145,269 33.5,269 33.5,269 33.5,269 33.5,190 33.5,150 33.5,110 33.5,31 33.5,31 Z");
    }, function () {
        $(".tooltip").css({"opacity": 0});
        $(".tooltip__content").css({"opacity": 0, "transform": "scale(0.8)"});
        $(".tooltip__shape path").attr("d", "M 79.5,66 C 79.5,66 128,106 202,105 276,104 321,66 321,66 321,66 287,84 288,155 289,226 318,232 318,232 318,232 258,198 200,198 142,198 80.5,230 80.5,230 80.5,230 112,222 111,152 110,82 79.5,66 79.5,66 Z");
    });
    $(".menu-icon").click(function () {
        $(".menu ul").fadeToggle(300);
    });
    $(".container-video .video").click(function () {
        $(".popup-video, .mask, .close").fadeIn(300);
        $(".close").addClass("white");
        $(".popup-video").css("top", $(window).scrollTop() + 20);
        $(".popup-video .iframe").html("<iframe src=\"https://www.youtube.com/embed/K_WKETlzshQ?autoplay=1\"></iframe>");
        $(".wrapper").addClass("opened");
        $("html, body").css("overflow", "hidden");
    });
    $(".popup-faq .ask").click(function () {
        $(this).toggleClass("open");
        $(this).find(".more").fadeToggle(300);
        $(".popup-faq").getNiceScroll().resize();
    });
    $(".datepicker").datepicker({dateFormat: 'yy MM dd'});
    $(".quest").click(function () {
        $(".tooltip").hide();
        var el = $(this), tooltip = el.closest(".text").find(".tooltip");
        tooltip.css({top: el.position().top - tooltip.height() - 30, left: el.position().left - tooltip.width() / 2});
        tooltip.fadeToggle(300);
    });
    $(".scroll").scroll(function () {
        $(".tooltip").hide();
    });
    $(".input input[type=file]").change(function () {
        //var val = $(this).val();
        //val = val.replace("C:\\fakepath\\", "");
        var val = "";
        for (var i = 0; i < $(this)[0].files.length; i++) {
            val += $(this)[0].files[i].name + "; ";
        }
        $(this).parent().find("input[type=text]").val(val);
    });

    // function logoPos() {
    //     if ($('.about').length) {
    //       var leftPos = document.querySelector('.about').getBoundingClientRect().left;
    //       var logo = $('.menu-c img').css('left', leftPos + 'px');
    //     }

    // }
    // $(document).ready(function() {
    //     logoPos();
    // });
    // $(window).resize(function() {
    //     logoPos();
    // });

    $(".popup-faq__nav .h").on('click', function () {
        var index = $(this).data('tab');
        $('.popup-faq__nav .h').removeClass('active');
        $(this).addClass('active');
        $('.popup-faq__tab').fadeOut();
        $('.popup-faq__tab-' + index).fadeIn();
    });

    $('html').click(function (e) {

        if (!e.target.classList.contains('quest')) {
            if (!(e.target.classList.contains('tooltip') || ($(e.target).parent('.tooltip').length > 0))) {
                $('.tooltip').fadeOut(500);
            }
        }
    });

    //var clickCounter = false;
    $(".people .more").click(function (e) {
        var evt = e;
        showMorePeople(evt);
    });

    function showMorePeople(e) {
        e.preventDefault();
        var t = 150, more = $('.people .more');
        if ($(".people .img-more").css("display") !== "none") return;
        more.hide();
        $(".people .img-more").each(function () {
            var el = $(this);
            t = t + 150;
            setTimeout(function () {
                el.addClass("animate");
            }, t);
        });
        //clickCounter = true;
        return false;
    }

    /*
        function inView() {
            var faqPos = $('#faq').get(0).getBoundingClientRect().top - document.documentElement.clientHeight;
            var cards = $('.img-more');
            if (faqPos <= 0 && !clickCounter) {
                $('.people .more').trigger('click');
            }
        }

        inView();

        $(window).on('scroll',function(){
            inView();
        });
    */

    /*$('.popup__form').submit(function(e) {
        e.preventDefault();
        $.ajax( {
            url: $(this).attr('action'),
            type: 'POST',
            dataType: 'JSON',
            data: new FormData( this ),
            processData: false,
            contentType: false,
            success: function (data) {
                if (data.success && data.success == true) {
                    $('.popup-form').find('.close').trigger('click');
                }
            }
        });
    });*/

    // $('#contact-us-submit').on('click', function (e) {
    //     $('.popup__form').find('[type="submit"]').click();
    //     return false;
    // });

    /*$('.app-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            dataType: 'JSON',
            data: new FormData( this ),
            processData: false,
            contentType: false,
            success: function (data) {
                if (data.success && data.success == true) {
                    $('.app-success').find('h2').html('Thank you!');
                    $('.app-success').find('p').html('Your data was submitted.');
                } else {
                    $('.app-success').find('h2').html('Error');
                    $('.app-success').find('p').html(data.message);
                }
                $('#app-form').fadeOut(300);
                $('.app-success').delay(300).fadeIn();
                $('#app-form')[0].reset();
                setTimeout(function () {
                    $('.app-success').fadeOut(300);
                    $('#app-form').delay(300).fadeIn();
                }, 3000);

            }
        });
    });*/

    if ($('.webform-confirmation-modal').length) {
        $('body').css({overflow: 'hidden'});
        $('.wrapper').addClass('opened');

        setTimeout(function () {
            $('body').css({overflow: 'auto'});
            $('.wrapper').removeClass('opened');
            $('.ui-dialog-titlebar-close').click();
        }, 3000);
    }
})(jQuery)


