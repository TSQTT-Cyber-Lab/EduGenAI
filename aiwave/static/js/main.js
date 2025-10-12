(function (window, document, $, undefined) {
    'use strict';

    var aiwaveJs = {
        i: function (e) {
            aiwaveJs.d();
            aiwaveJs.methods();
        },

        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },
        
        methods: function (e) {
            aiwaveJs.smothScroll();
            aiwaveJs.counterUpActivation();
            aiwaveJs.wowActivation();
            aiwaveJs.headerTopActivation();
            aiwaveJs.headerSticky();
            aiwaveJs.salActive();
            aiwaveJs.popupMobileMenu();
            aiwaveJs.popupDislikeSection();
            aiwaveJs.popupleftdashboard();
            aiwaveJs.popuprightdashboard();
            aiwaveJs.preloaderInit();
            aiwaveJs.showMoreBtn();
            aiwaveJs.slickSliderActivation();
            aiwaveJs.radialProgress();
            aiwaveJs.contactForm();
            aiwaveJs.menuCurrentLink();
            aiwaveJs.onePageNav();
            aiwaveJs.selectPicker();
        },



        selectPicker: function () {
            $('select').selectpicker();
        },


        menuCurrentLink: function () {
            var path = location.pathname
                        
            $('.dashboard-mainmenu li a').each(function(){
                var $this = $(this);
                if($this.attr('href') === path){
                    $this.addClass('active');
                    $this.parents('.has-menu-child-item').addClass('menu-item-open')
                }
            });
            $('.mainmenu li a').each(function(){
                var $this = $(this);
                if($this.attr('href') === path){
                    $this.addClass('active');
                    $this.parents('.has-menu-child-item').addClass('menu-item-open')
                }
            });
            $('.user-nav li a').each(function(){
                var $this = $(this);
                if($this.attr('href') === path){
                    $this.addClass('active');
                    $this.parents('.has-menu-child-item').addClass('menu-item-open')
                }
            });
        },



        smothScroll: function () {
            $(document).on('click', '.smoth-animation', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 50
                }, 300);
            });
        },


        popupMobileMenu: function (e) {
            $('.hamberger-button').on('click', function (e) {
                $('.popup-mobile-menu').addClass('active');
            });

            $('.close-menu').on('click', function (e) {
                $('.popup-mobile-menu').removeClass('active');
                $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .rainbow-megamenu').removeClass('active').slideUp('400');
                $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open')
            });

            $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu, .rainbow-megamenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open')
            })

            $('.popup-mobile-menu, .popup-mobile-menu .mainmenu.onepagenav li a').on('click', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('active') && $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .rainbow-megamenu').removeClass('active').slideUp('400') && $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open');
            });
        },

        popupDislikeSection: function(e){
            $('.dislike-section-btn').on('click', function (e) {
                $('.popup-dislike-section').addClass('active');
            });

            $('.close-button').on('click', function (e) {
                $('.popup-dislike-section').removeClass('active');
            });
        },

        popupleftdashboard: function(e){
            function updateSidebar() {
                if ($(window).width() >= 1600) {
                    $('.popup-dashboardleft-btn').removeClass('collapsed');
                    $('.popup-dashboardleft-section').removeClass('collapsed');
                } else {
                    $('.popup-dashboardleft-btn').addClass('collapsed');
                    $('.popup-dashboardleft-section').addClass('collapsed');
                }
            }

            // Hide sidebars by default
            $('.popup-dashboardleft-btn, .popup-dashboardleft-section, .rbt-main-content, .rbt-static-bar').hide();

            // Initial setup on page load
            updateSidebar();

            // Show sidebars after determining the appropriate state
            $('.popup-dashboardleft-btn, .popup-dashboardleft-section, .rbt-main-content, .rbt-static-bar').show();
        
            // Update on window resize
            $(window).on('resize', function () {
                updateSidebar();
            });
        
            // Toggle classes on button click
            $('.popup-dashboardleft-btn').on('click', function (e) {
                $('.popup-dashboardleft-btn').toggleClass('collapsed');
                $('.popup-dashboardleft-section').toggleClass('collapsed');
            });
        },

        popuprightdashboard: function(e){
            function updateSidebar() {
                if ($(window).width() >= 1600) {
                    $('.popup-dashboardright-btn').removeClass('collapsed');
                    $('.popup-dashboardright-section').removeClass('collapsed');
                } else {
                    $('.popup-dashboardright-btn').addClass('collapsed');
                    $('.popup-dashboardright-section').addClass('collapsed');
                }
            }
            // Hide sidebars by default
            $('.popup-right-btn, .popup-right-section, .rbt-main-content, .rbt-static-bar').hide();

            // Initial setup on page load
            updateSidebar();

            // Show sidebars after determining the appropriate state
            $('.popup-right-btn, .popup-right-section, .rbt-main-content, .rbt-static-bar').show();
        
            // Update on window resize
            $(window).on('resize', function () {
                updateSidebar();
            });
        
            // Toggle classes on button click
            $('.popup-dashboardright-btn').on('click', function (e) {
                $('.popup-dashboardright-btn').toggleClass('collapsed');
                $('.popup-dashboardright-section').toggleClass('collapsed');
            });
        },

        
        preloaderInit: function(){
            aiwaveJs._window.on('load', function () {
                $('.preloader').fadeOut('slow', function () {
                    $(this).remove();
                });
            });
        },
        
        showMoreBtn: function () {
            $.fn.hasShowMore = function () {
                return this.each(function () {
                    $(this).toggleClass('active');
                    $(this).text('Show Less');
                    $(this).parent('.has-show-more').toggleClass('active');

                    
                    if ($(this).parent('.has-show-more').hasClass('active')) {
                        $(this).innerHTML('Show Less');
                    } else {
                        $(this).text('Show More');
                    }
                    
                });
            };
            $(document).on('click', '.rbt-show-more-btn', function () {
                $(this).hasShowMore();
            });
        },


        

        slickSliderActivation: function () {
            $('.testimonial-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>'
            });

            $('.sm-slider-carosel-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                adaptiveHeight: true,
                cssEase: 'linear',
            });

            $('.slider-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>'
            });

            $('.blog-carousel-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                adaptiveHeight: true,
                cssEase: 'linear',
                responsive: [
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                  ]
            });

            $('.rainbow-service-slider-actvation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: true,
                arrows: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
                cssEase: 'linear',
                responsive: [
                    {
                      breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                      breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                  ]
            });

            $('.slider-brand-activation').not('.slick-initialized').slick({
                centerMode: true,
                draggable: false,
                centerPadding: '150px',
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 0,
                speed: 8000,
                pauseOnHover: true,
                cssEase: 'linear',
                responsive: [
                    {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 4,
                    }
                    },
                    {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3,
                    }
                    },
                    {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2,
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                    }
                ]
            });


            $('.brand-carousel-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                  ]
            });

            $('.banner-imgview-carousel-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                autoplay: true,
                arrows: false,
                adaptiveHeight: true,
                centerMode:true,
                centerPadding: '100px',
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                  ]
            });

            $('.vedio-popup-carousel-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                autoplay: false,
                arrows: false,
                adaptiveHeight: true,
                centerMode:true,
                centerPadding: '200px',
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                  ]
            });

            $('.brand-carousel-init').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                  ]
            });


            $('.about-app-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
            });



            $('.template-galary-activation').not('.slick-initialized').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                centerMode: false,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-sharp fa-regular fa-arrow-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 581,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                  ]
            });




        },

        salActive: function () {
            sal({
                threshold: 0.01,
                once: true,
            });
        },

        backToTopInit: function () {
            var scrollTop = $('.rainbow-back-top');
            $(window).scroll(function () {
                var topPos = $(this).scrollTop();
                if (topPos > 150) {
                    $(scrollTop).css('opacity', '1');
                } else {
                    $(scrollTop).css('opacity', '0');
                }
            });
            $(scrollTop).on('click', function () {
                $('html, body').animate({
                    scrollTop: 0,
                    easingType: 'linear',
                }, 10);
                return false;
            });
        },

        headerSticky: function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.header-sticky').addClass('sticky')
                } else {
                    $('.header-sticky').removeClass('sticky')
                }
            })
        },

        counterUpActivation: function () {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        },

        wowActivation: function () {
            new WOW().init();
        },

        headerTopActivation: function () {
            $('.bgsection-activation').on('click', function () {
                $('.header-top-news').addClass('deactive')
            })
        },

        radialProgress: function () {
            $('.radial-progress').waypoint(function () {
                $('.radial-progress').easyPieChart({
                    lineWidth: 10,
                    scaleLength: 0,
                    rotate: 0,
                    trackColor: false,
                    lineCap: 'round',
                    size: 220
                });
            }, {
                triggerOnce: true,
                offset: 'bottom-in-view'
            });
        },


        contactForm: function () {
            $('.rainbow-dynamic-form').on('submit', function (e) {
				e.preventDefault();
				var _self = $(this);
				var __selector = _self.closest('input,textarea');
				_self.closest('div').find('input,textarea').removeAttr('style');
				_self.find('.error-msg').remove();
				_self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
				var data = $(this).serialize();
				$.ajax({
					url: 'mail.php',
					type: "post",
					dataType: 'json',
					data: data,
					success: function (data) {
						_self.closest('div').find('button[type="submit"]').removeAttr('disabled');
						if (data.code == false) {
							_self.closest('div').find('[name="' + data.field + '"]');
							_self.find('.rainbow-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
						} else {
							$('.error-msg').hide();
							$('.form-group').removeClass('focused');
							_self.find('.rainbow-btn').after('<div class="success-msg"><p>' + data.success + '</p></div>');
							_self.closest('div').find('input,textarea').val('');

							setTimeout(function () {
								$('.success-msg').fadeOut('slow');
							}, 5000);
						}
					}
				});
			});
        },

        onePageNav: function () {
            $('.onepagenav').onePageNav({
                currentClass: 'current',
                changeHash: false,
                scrollSpeed: 500,
                scrollThreshold: 0.2,
                filter: '',
                easing: 'swing',
            });
        },
    }
    aiwaveJs.i();

})(window, document, jQuery)


// Bg flashlight
    let cards = document.querySelectorAll('.bg-flashlight')
    cards.forEach(bgflashlight => {
        bgflashlight.onmousemove = function(e){
            let x = e.pageX - bgflashlight.offsetLeft;
            let y = e.pageY - bgflashlight.offsetTop;

            bgflashlight.style.setProperty('--x', x + 'px');
            bgflashlight.style.setProperty('--y', y + 'px');
        }
    });

// Bg flashlight
let shapes = document.querySelectorAll('.blur-flashlight')
shapes.forEach(bgflashlight => {
    bgflashlight.onmousemove = function(e){
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

        bgflashlight.style.setProperty('--x', x+70 + 'px');
        bgflashlight.style.setProperty('--y', y+200 +'px');
    }
});




// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


// Expand Textarea
// function expandTextarea(id) {
//     document.getElementById(id).addEventListener('keyup', function() {
//         this.style.overflow = 'hidden';
//         this.style.height = 0;
//         this.style.height = this.scrollHeight + 'px';
//     }, false);
// }

// expandTextarea('txtarea');





//Check All JS Activation
$(function() {
    var propFn = typeof $.fn.prop === 'function' ? 'prop' : 'attr';

    $('#checkall').click(function() {
        $(this).parents('fieldset:eq(0)').find(':checkbox')[propFn]('checked', this.checked);
    });
    $("input[type=checkbox]:not(#checkall)").click(function() {
        if (!this.checked) {
            $("#checkall")[propFn]('checked', this.checked);
        } else {
            $("#checkall")[propFn]('checked', !$("input[type=checkbox]:not(#checkall)").filter(':not(:checked)').length);
        }

    });
});




// Unified error handling for signup and signin forms
function showFormError(input, message) {
    const inputSection = input.closest('.input-section');
    let error = inputSection.nextElementSibling;
    if (!error || !error.classList.contains('input-error')) {
        error = document.createElement('div');
        error.className = 'input-error';
        error.style.color = 'red';
        error.style.fontSize = '13px';
        error.style.marginTop = '2px';
        inputSection.parentNode.insertBefore(error, inputSection.nextSibling);
    }
    error.textContent = message;
}
function clearFormError(input) {
    const inputSection = input.closest('.input-section');
    let error = inputSection.nextElementSibling;
    if (error && error.classList.contains('input-error')) {
        error.textContent = '';
    }
}

['signup', 'signin'].forEach(function(actionType) {
    var form = document.querySelector('form[action*="' + actionType + '"]');
    if (form) {
        form.addEventListener('submit', function (e) {
            let valid = true;
            const name = form.querySelector('input[name="username"], input[placeholder*="Name"]');
            const email = form.querySelector('input[type="email"], input[name="email"]');
            const password = form.querySelectorAll('input[type="password"], input[name="password"]')[0];
            const confirmPassword = form.querySelectorAll('input[type="password"], input[name="confirm_password"]')[1];
            // Name check (only for signup)
            if (name && actionType === 'signup') {
                clearFormError(name);
                if (!name.value.trim()) {
                    showFormError(name, 'Name is required.');
                    valid = false;
                }
            }
            // Email check
            if (email) {
                clearFormError(email);
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email.value.trim()) {
                    showFormError(email, 'Email is required.');
                    valid = false;
                } else if (!emailPattern.test(email.value.trim())) {
                    showFormError(email, 'Enter a valid email address.');
                    valid = false;
                }
            }
            // Password check
            if (password) {
                clearFormError(password);
                if (!password.value) {
                    showFormError(password, 'Password is required.');
                    valid = false;
                } else if (password.value.length < 6) {
                    showFormError(password, 'Password must be at least 6 characters.');
                    valid = false;
                }
            }
            // Confirm password check (only for signup)
            if (confirmPassword && actionType === 'signup') {
                clearFormError(confirmPassword);
                if (!confirmPassword.value) {
                    showFormError(confirmPassword, 'Please confirm your password.');
                    valid = false;
                } else if (password && password.value !== confirmPassword.value) {
                    showFormError(confirmPassword, 'Passwords do not match.');
                    valid = false;
                }
            }
            if (!valid) e.preventDefault();
        });
        // Clear error on input
        form.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => clearFormError(input));
        });
    }
});


    // Chat Box Reply

    const txtarea = document.getElementById('txtarea');
    const chatContainer = document.getElementById('chatContainer');
    const sessionListEl = document.getElementById('sessionList');
    const newChatButton = document.getElementById('newChatBtn');  
    const newChatBtn = document.getElementById('newChatBtn');
    const messageFeedbackState = {};
    const botMode = window.BOT_MODE

    // Initialize controller for aborting fetch requests
    let abortController = null;
    // Track the current chat session ID
    let currentSessionId = null;
    let feedbackTargetMessageId = null;
    let feedbackType = null;
    let userMessage = '';

    // const chatForm = document.getElementById('chatInput');
    // if (chatForm) {
    //     chatForm.addEventListener('submit', function(e) {
    //         // Ngăn chặn hành vi mặc định ngay lập tức
    //         e.preventDefault();
    //         // Sau đó gọi hàm sendMessage của chúng ta
    //         sendMessage(e);
    //     });
    // }


    if (null != txtarea)  {
        txtarea.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            // Giờ đây, thay vì gọi trực tiếp sendMessage, chúng ta có thể trigger sự kiện submit của form
            chatForm.requestSubmit();
            }
        });
    };


    // On page load, set currentSessionId from window.INITIAL_SESSION_ID if present
    if (window.INITIAL_SESSION_ID) {
        currentSessionId = window.INITIAL_SESSION_ID;
    }

    async function generateAutoReply(userMessage, sessionId) {
        try {
            const fd = new FormData();
            fd.append('chatMessage', userMessage);
            fd.append('sessionId', sessionId);
            // fd.append('botMode', window.BOT_MODE || 'text');
            const chatForm = document.getElementById('chatInput');
            const botMode = chatForm.dataset.botMode || 'text';
            fd.append('botMode', botMode);
            
            // Append additional parameters if available
            const visibleLeftPanel = $('.rbt-left-panel:visible');
            
            const numQuestions = visibleLeftPanel.find('.num-questions-input').val() || '10';
            const difficulty = visibleLeftPanel.find('.difficulty-select option:selected').val() || 'dễ';;
            
            console.log(`Đang gửi đi với Số câu: ${numQuestions}, Độ khó: ${difficulty}`);

            fd.append('numQuestions', numQuestions);
            fd.append('difficulty', difficulty);

            const response = await fetch('/aiwave/text-generator/', {
                method: 'POST',
                body: fd,
                headers: {
                    'X-CSRFToken': csrftoken,
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            if (!response.ok){
                handleError('Error generating reply:', error);
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            // Return the generated text from the backend
            return data
        } catch (error) {
            handleError('Error generating reply:', error);
            return {
                generated_text: "Sorry, there was an error generating a response.",
                message_id: null
            };
        }
    }

    // function resetchatContainer() {
    //     if (!chatContainer) return; // Prevent error if element is missing
    //     chatContainer.innerHTML = '<div class="placeholder flex items-center justify-center h-full min-h-[300px] text-neutral-500 dark:text-neutral-400" style="height:100%;min-height:345px;">Bắt đầu tạo đề của bạn bằng cách nhập yêu cầu ở dưới.</div>';
    //     if (txtarea) {
    //         txtarea.value = '';
    //         txtarea.placeholder = 'Gửi yêu cầu của bạn...';
    //     }
    // }

    function groupSessionsByDate(sessions) {
        const now = new Date();
        const oneDayMs = 24 * 60 * 60 * 1000;

            return sessions.reduce((buckets, session) => {
              const d = new Date(session.modified_at);
              const diffDays = Math.floor((now - d) / oneDayMs);
            
              let label;
              if (diffDays === 0) {
                label = 'Today';
              } else if (diffDays === 1) {
                label = 'Yesterday';
              } else if (diffDays <= 7) {
                label = 'Last 7 days';
              } else if (diffDays <= 30) {
                label = 'Last 30 days';
              } else if (d.getFullYear() === now.getFullYear()) {
                label = 'Earlier this year';
              } else {
                label = 'Last year';
              }
            
              if (!buckets[label]) buckets[label] = [];
              buckets[label].push(session);
              return buckets;
        }, {});
    }
      
          /**
           * Fetch all chat sessions from the server and render them.
           * Groups sessions by date headers, then lists each session.
           */

    // async function fetchSessions() {
    //     if (!sessionListEl) return;
    //     try {
    //         const res = await fetch(`/aiwave/get-sessions/?botMode=${encodeURIComponent(botMode)}`);
    //         if (!res.ok) throw new Error(res.statusText);
    //         const { sessions } = await res.json();

    //         sessionListEl.innerHTML = '';

    //         if (!sessions.length) {
    //             sessionListEl.innerHTML = '<li class="text-neutral-600">Chưa có đoạn chat</li>';
    //             return;
    //         }

    //         // Group sessions by date
    //         const grouped = groupSessionsByDate(sessions);

    //         // Flatten all sessions for modal use
    //         const allSessionItems = [];
    //         Object.entries(grouped).forEach(([bucketLabel, items]) => {
    //             items.forEach(s => allSessionItems.push({ ...s, group: bucketLabel }));
    //         });

    //         // Show only first 8 sessions in the sidebar
    //         let shown = 0;
    //         let showMoreInserted = false;
    //         Object.entries(grouped).forEach(([bucketLabel, items]) => {
    //             const visibleItems = items.slice(0, Math.max(0, 8 - shown));
    //             if (!visibleItems.length || shown >= 8) return;
    //             const section = document.createElement('div');
    //             section.className = 'chat-history-section';

    //             // Date header
    //             const header = document.createElement('h6');
    //             header.className = 'title';
    //             header.textContent = bucketLabel;
    //             section.appendChild(header);

    //             // Session list
    //             const ul = document.createElement('ul');
    //             ul.className = 'chat-history-list';

    //             visibleItems.forEach((s, idx) => {
    //                 if (shown >= 8) return;
    //                 const li = document.createElement('li');
    //                 li.className = 'history-box' + (currentSessionId === s.session_id ? ' active' : '');

    //                 // Session title
    //                 const titleSpan = document.createElement('span');
    //                 titleSpan.className = 'session-title';
    //                 titleSpan.innerHTML = window.marked ? marked.parse(s.title || 'New Conversation') : makeHumanReadable(s.title || 'New Conversation');
    //                 li.appendChild(titleSpan);

    //                 // Dropdown for actions
    //                 const dropdownDiv = document.createElement('div');
    //                 dropdownDiv.className = 'dropdown history-box-dropdown';
    //                 dropdownDiv.innerHTML = `
    //                     <button type="button" class="more-info-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    //                         <i class="fa-regular fa-ellipsis"></i>
    //                     </button>
    //                     <ul class="dropdown-menu style-one">
    //                         <li><a class="dropdown-item delete-item" href="#"  onclick="event.preventDefault(); deleteSession('${s.session_id}')"><i class="fa-solid fa-trash-can"></i> Delete Chat</a></li>
    //                     </ul>
    //                 `;
    //                 li.appendChild(dropdownDiv);

    //                 // Click event for selecting session
    //                 li.addEventListener('click', (e) => {
    //                     if (e.target.closest('.dropdown')) return;
    //                     currentSessionId = s.session_id;
    //                     fetchMessages(currentSessionId);
    //                     sessionListEl.querySelectorAll('.history-box').forEach(el => el.classList.remove('active'));
    //                     li.classList.add('active');
                        
    //                     // Update titles in main area
    //                     const mainTitleElement = document.querySelector('.chat-top-bar .title');
    //                     if (mainTitleElement) {
    //                         mainTitleElement.textContent = s.title || 'New Conversation';
    //                     }
    //                 });

    //                 ul.appendChild(li);
    //                 shown++;
    //             });

    //             // Only append section if there are visible items
    //             if (ul.children.length > 0) {
    //                 section.appendChild(ul);
    //                 sessionListEl.appendChild(section);
    //             }
    //         });

    //         // Show More button if there are more than 8 sessions
    //         if (allSessionItems.length > 8) {
    //             const showMoreBtn = document.createElement('button');
    //             showMoreBtn.type = 'button';
    //             showMoreBtn.className = 'btn-default bg-solid-primary d-flex align-items-center justify-content-center mx-auto my-3 px-4 py-3 rounded-2 fw-500 gap-2 show-more-btn';
    //             showMoreBtn.innerHTML = `
    //                 <span class="icon"><i class="fa-regular fa-chevron-down"></i></span>
    //                 <span>Show More</span>
    //             `;

    //             showMoreBtn.addEventListener('click', (e) => {
    //                 // Toggle active class for animation
    //                 showMoreBtn.classList.toggle('active');
    //                 openSessionModal();
    //             });
    //             sessionListEl.appendChild(showMoreBtn);
    //         }

    //         // Modal logic
    //         function openSessionModal() {
    //             renderModalSessions(allSessionItems);
    //             const modal = document.getElementById('sessionModalOverlay');
    //             modal.style.display = 'block';
    //             setTimeout(() => modal.classList.add('show'), 10); // for fade effect
    //             document.body.style.overflow = 'hidden';
    //         }

    //         function closeSessionModal() {
    //             const modal = document.getElementById('sessionModalOverlay');
    //             const showMoreBtn = document.querySelector('.show-more-btn');

    //             modal.classList.remove('show');
    //             if (showMoreBtn) {
    //                 showMoreBtn.classList.remove('active');
    //             }

    //             setTimeout(() => { 
    //                 modal.style.display = 'none';
    //             }, 200);

    //             document.body.style.overflow = '';
    //         }

    //         // Modal close button
    //         document.getElementById('closeSessionModal').onclick = closeSessionModal;

    //         // Modal backdrop click
    //         document.getElementById('sessionModalOverlay').addEventListener('mousedown', function(e) {
    //             if (e.target === this || e.target.classList.contains('modal-backdrop')) closeSessionModal();
    //         });

    //         // Render all sessions in modal, grouped
    //         function renderModalSessions(items) {
    //             const modalSessionList = document.getElementById('modalSessionList');
    //             modalSessionList.innerHTML = '';
            
    //             // Group again for modal (to ensure correct order)
    //             const modalGroups = {};
    //             items.forEach(s => {
    //                 if (!modalGroups[s.group]) modalGroups[s.group] = [];
    //                 modalGroups[s.group].push(s);
    //             });
            
    //             Object.entries(modalGroups).forEach(([bucketLabel, groupItems]) => {
    //                 // Section header
    //                 const section = document.createElement('div');
    //                 section.className = 'chat-history-section';
                
    //                 const header = document.createElement('h6');
    //                 header.className = 'title';
    //                 header.textContent = bucketLabel;
    //                 section.appendChild(header);
                
    //                 const ul = document.createElement('ul');
    //                 ul.className = 'chat-history-list';
                
    //                 groupItems.forEach(s => {
    //                     const li = document.createElement('li');
    //                     li.className = 'history-box' + (currentSessionId === s.session_id ? ' active' : '');
                    

    //                     // Session title
    //                     const titleSpan = document.createElement('span');
    //                     titleSpan.className = 'session-title';
    //                     titleSpan.innerHTML = window.marked ? marked.parse(s.title || 'New Conversation') : makeHumanReadable(s.title || 'New Conversation');
    //                     li.appendChild(titleSpan);
                    
    //                     // Dropdown for actions
    //                     const dropdownDiv = document.createElement('div');
    //                     dropdownDiv.className = 'dropdown history-box-dropdown';
    //                     dropdownDiv.innerHTML = `
    //                         <button type="button" class="more-info-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    //                             <i class="fa-regular fa-ellipsis"></i>
    //                         </button>
    //                         <ul class="dropdown-menu style-one">
    //                             <li><a class="dropdown-item delete-item" href="#"  onclick="event.preventDefault(); deleteSession('${s.session_id}')"><i class="fa-solid fa-trash-can"></i> Delete Chat</a></li>
    //                         </ul>
    //                     `;
    //                     li.appendChild(dropdownDiv);
                    
    //                     li.addEventListener('click', (e) => {
    //                         if (e.target.closest('.dropdown')) return;
    //                         currentSessionId = s.session_id;
    //                         fetchMessages(currentSessionId);
    //                         closeSessionModal();
    //                         // Optionally update chat title bar
    //                         const chatTitleElement = document.querySelector('.chat-top-bar .title');
    //                         if (chatTitleElement) {
    //                             chatTitleElement.textContent = s.title || 'New Conversation';
    //                         }
    //                         // Update active styling in sidebar
    //                         sessionListEl.querySelectorAll('.history-box').forEach(el => el.classList.remove('active'));
    //                     });
                    
    //                     ul.appendChild(li);
    //                 });
                
    //                 section.appendChild(ul);
    //                 modalSessionList.appendChild(section);
    //             });
    //         }    
    //     } catch (e) {
    //         showError('Failed to load sessions.');
    //         handleError(e);
    //     }
    // }
      
          /**
           * Fetch and render all messages for a given session ID.
           */
    async function fetchMessages(sessionId) {
        try {
            
            const res = await fetch(`/aiwave/get-messages/?sessionId=${sessionId}&botMode=${encodeURIComponent(botMode)}`);
            if (!res.ok) throw new Error(res.statusText);
            const { messages, session_title  } = await res.json();
    
            // Update the chat title in both sidebar and main area
            const sidebarTitleElement = document.querySelector('.chat-sidebar-single h6');
            const mainTitleElement = document.querySelector('.chat-top-bar .title');
            
            if (sidebarTitleElement) {
                sidebarTitleElement.innerHTML = window.marked ? marked.parse(session_title || 'New Conversation') : makeHumanReadable(session_title || 'New Conversation');
            }
            if (mainTitleElement) {
                // Render the title as HTML using marked (Markdown renderer)
                mainTitleElement.innerHTML = window.marked ? marked.parse(session_title || 'New Conversation') : makeHumanReadable(session_title || 'New Conversation');
            }

            chatContainer.innerHTML = ''; // Clear chat pane

            messages.forEach(m => {
                messageFeedbackState[m.message_id] = m.feedback_type || 'none';
                // Map server fields to expected fields
                const sender = m.is_bot_response ? 'AiWave' : 'You';
                const text = m.message;
                const speechClass = m.is_bot_response ? 'ai-speech' : 'author-speech';
                const avatar = m.is_bot_response
                    ? (window.botImageUrl || '/static/images/team/avater.png')
                    : (window.userProfilePic || '/static/images/team/team-01sm.jpg');
                const isEditable = !m.is_bot_response;
            
                const el = isEditable
                    ? createEditableMessage(sender, text, speechClass, avatar)
                    : createMessageWithReactions(sender, text, speechClass, avatar, m.message_id);
            
                appendMessage(el);
            });

            scrollChatToBottom();

            chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
        } catch (e) {
            showError('Failed to load messages.');
            handleError(e);
        }
    }

    async function deleteSession(sessionId) {
        try {
            // Confirm before deleting
            if (!confirm('Are you sure you want to delete this chat?')) {
                return;
            }

            const response = await fetch(`/aiwave/delete-session/${sessionId}/`, {
                method: 'DELETE',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken,
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // If we deleted the current session, reset the chat UI
            // if (sessionId === currentSessionId) {
            //     currentSessionId = null;
            //     resetchatContainer();

            //     // Update chat title if it exists
            //     const chatTitleElement = document.querySelector('.chat-top-bar .title');
            //     if (chatTitleElement) {
            //         chatTitleElement.textContent = 'New Chat';
            //     }
            // }

            // Remove session from list if it exists
            const sessionElement = document.querySelector(`[data-session-id="${sessionId}"]`);
            if (sessionElement) {
                sessionElement.remove();
            }

            // Refresh sessions list
            // await fetchSessions();

            // Close modal if it's open
            const modal = document.getElementById('sessionModalOverlay');
            if (modal && modal.classList.contains('show')) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 200);
            }

        } catch (error) {
            handleError('Error deleting session:', error);
            showError('Failed to delete session. Please try again.');
        }
    }


    // Add this helper for the loading bubble
    function appendLoadingBubble() {
        const chatContainer = document.getElementById('chatContainer');
        if (!chatContainer) return;
        // Remove any existing loading bubble first
        const old = chatContainer.querySelector('.aiwave-loading-bubble');
        if (old) old.remove();
        const loadingBubble = document.createElement('div');
        loadingBubble.className = 'chat-box ai-speech aiwave-loading-bubble';
        loadingBubble.innerHTML = `
            <div class="inner">
                <div class="chat-section">
                    <div class="author">
                            <img class="w-100" src="${window.botImageUrl || '/static/images/team/avater.png'}" alt="AiWave">
                    </div>
                    <div class="chat-content">
                        <h6 class="title">AiWave <span class="rainbow-badge-card"><i class="fa-sharp fa-regular fa-check"></i> Bot</span></h6>
                        <div class="aiwave-loader-dots">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        chatContainer.appendChild(loadingBubble);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function removeLoadingBubble() {
        const chatContainer = document.getElementById('chatContainer');
        if (!chatContainer) return;
        const loadingBubble = chatContainer.querySelector('.aiwave-loading-bubble');
        if (loadingBubble) loadingBubble.remove();
    }

    // Update sendMessage to show/hide loading bubble
    // async function sendMessage(e) {
    //     e.preventDefault();

    //     userMessage = txtarea.value.trim();
    //     if (userMessage === '') return;

    //     // Generate a new session ID if not present
    //     if (!currentSessionId) {
    //         try {
    //             currentSessionId = crypto.randomUUID();
    //         } catch {
    //             currentSessionId = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    //                 (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    //             );
    //         }
    //         // Optionally, clear chat UI for new session
    //         resetchatContainer();
    //     }

    //     const userMessageElement = createEditableMessage('You', userMessage, 'author-speech', window.userProfilePic || '/static/images/team/team-01sm.jpg');
    //     appendMessage(userMessageElement);

    //     // Show loading bubble
    //     appendLoadingBubble();

    //     const autoReply = await generateAutoReply(userMessage, currentSessionId);

    //     // Remove loading bubble
    //     removeLoadingBubble();

    //     if (autoReply.is_test && autoReply.test_data_json) {
    //         // === BẮT ĐẦU LOGIC DỰNG FORM HOÀN CHỈNH ===
    //         const testData = autoReply.test_data_json;
    //         window.currentTestAnswers = testData; // Lưu đáp án đúng để chấm điểm

    //         const formId = `quiz-form-${Date.now()}`;
    //         // Bắt đầu dựng chuỗi HTML cho form
    //         let testHtml = `<div class="chat-box ai-speech interactive-test">
    //                             <div class="inner"><div class="chat-section">
    //                                 <div class="author"><img class="w-100" src="${window.botImageUrl}" alt="HOC MAI"></div>
    //                                 <div class="chat-content">
    //                                     <h6 class="title">HOC MAI</h6>
    //                                     <form id="${formId}">
    //                                         <h4>${testData.meta.subject} (Mức độ: ${testData.meta.difficulty})</h4>
    //                                         <p>Số câu: ${testData.meta.num_questions}</p>
    //                                         <hr>`;

    //         // Lặp qua từng câu hỏi trong JSON để tạo các trường input
    //         testData.questions.forEach(q => {
    //             testHtml += `<div class="quiz-question mb-4" id="${q.id}">
    //                             <p><strong>Câu ${q.id.replace('Q', '')} (${q.points} điểm):</strong> ${q.stem}</p>`;
    //             if (q.source_excerpt) {
    //                 testHtml += `<div class="source-excerpt p-3 border rounded mb-2" style="border-color: #444 !important;"><em>${q.source_excerpt}</em></div>`;
    //             }

    //             if (q.type === 'MCQ' && q.options) {
    //                 testHtml += `<div class="quiz-options">`;
    //                 q.options.forEach((option, index) => {
    //                     const optionValue = option.substring(0, 1); // Lấy ký tự A, B, C, D
    //                     const optionText = option.substring(3); // Lấy nội dung
    //                     testHtml += `<div class="form-check">
    //                                     <input class="form-check-input" type="radio" name="${q.id}" id="${q.id}-${optionValue}" value="${optionValue}">
    //                                     <label class="form-check-label" for="${q.id}-${optionValue}">
    //                                         <strong>${optionValue}.</strong> ${optionText}
    //                                     </label>
    //                                 </div>`;
    //                 });
    //                 testHtml += `</div>`;
    //             } else { // SHORT_ANSWER hoặc ESSAY
    //                 testHtml += `<textarea name="${q.id}" class="form-control" rows="3" placeholder="Nhập câu trả lời của bạn..."></textarea>`;
    //             }
    //             testHtml += `</div>`;
    //         });

    //         testHtml += `<button type="submit" class="btn-default mt-3">Nộp bài</button>
    //                     </form>
    //                 </div></div></div></div>`;
            
    //         // Đưa form vào khung chat và gắn sự kiện "Nộp bài"
    //         appendMessageHTML(testHtml);
    //         console.log(`Đang tìm form với ID: #${formId}`);
    //         const quizForm = document.getElementById(formId);
    //         if (quizForm) {
    //             console.log("Đã tìm thấy form! Đang gắn sự kiện 'submit'.");
    //             quizForm.addEventListener('submit', handleQuizSubmit);
    //         } else {
    //             console.error(`LỖI: Không tìm thấy form với ID: #${formId}`);
    //         }

    //     } else {
    //         // Nếu không phải bài test, hiển thị text như bình thường
    //         const botReplyHtml = autoReply.rendered_html || "Sorry, an unknown error occurred.";
    //         const autoReplyElement = createMessageWithReactions('AiWave', botReplyHtml, 'ai-speech', window.botImageUrl, autoReply.message_id);
    //         appendMessage(autoReplyElement);
    //     }
    //     txtarea.value = '';

    //     fetchSessions();
    // }

    /**
     * Chèn một chuỗi HTML vào cuối khung chat và tự động cuộn xuống.
     * @param {string} htmlString - Chuỗi HTML cần chèn.
     */
    function appendMessageHTML(htmlString) {
        const chatContainer = document.getElementById('chatContainer');
        if (!chatContainer) {
            console.error("Lỗi: Không tìm thấy 'chatContainer'.");
            return;
        }

        const placeholder = chatContainer.querySelector('.placeholder');
        if (placeholder) placeholder.remove();

        // Dùng một div tạm để chuyển chuỗi HTML thành một đối tượng DOM
        const tempDiv = document.createElement('div');
        // Thêm .trim() để loại bỏ các khoảng trắng thừa ở đầu và cuối chuỗi HTML
        tempDiv.innerHTML = htmlString.trim();

        // Dùng .firstElementChild thay vì .firstChild để đảm bảo luôn lấy đúng element HTML
        const messageElement = tempDiv.firstElementChild; 

        // Thêm kiểm tra để chắc chắn element tồn tại trước khi chèn
        if (messageElement) {
            chatContainer.appendChild(messageElement);
            scrollChatToBottom();
        } else {
            console.error("Lỗi: Không thể tạo element từ chuỗi HTML được cung cấp.", htmlString);
        }
    }

    /**
     * Xử lý sự kiện nộp bài, chấm điểm và hiển thị kết quả.
     * @param {Event} e - Sự kiện submit của form.
     */
    function handleQuizSubmit(e) {
        console.log("!!! handleQuizSubmit ĐÃ ĐƯỢC GỌI !!!");
        e.preventDefault(); // Ngăn trang web tải lại
        console.log("1. Nộp bài thành công, bắt đầu chấm điểm...");

        const form = e.target;
        const formData = new FormData(form);
        const userAnswers = Object.fromEntries(formData.entries());

        console.log("2. Đã lấy được câu trả lời của bạn:", userAnswers);
        // Lấy đáp án đúng đã được lưu trước đó
        if (!window.currentTestAnswers || !window.currentTestAnswers.questions) {
            console.error("Không tìm thấy đáp án để chấm điểm.");
            return;
        }

        let score = 0;
        let totalPoints = 0;
        const correctAnswersData = window.currentTestAnswers;

        // Bắt đầu lặp qua các câu hỏi để chấm điểm
        correctAnswersData.questions.forEach(q => {
            // Chuyển đổi q.points sang số để tính toán
            const questionPoints = parseFloat(q.points);
            if (!isNaN(questionPoints)) {
                totalPoints += questionPoints;
                const userAnswer = userAnswers[q.id];
                if (q.type === 'MCQ' && userAnswer && userAnswer.trim().toUpperCase() === q.answer.trim().toUpperCase()) {
                    score += questionPoints;
                }
            }
        });

        console.log(`3. Chấm điểm xong. Điểm: ${score.toFixed(2)} / ${totalPoints.toFixed(2)}`);

        // Vô hiệu hóa form sau khi nộp để tránh gửi lại
        form.querySelectorAll('input, textarea, button').forEach(el => el.disabled = true);

        // Tạo HTML cho tin nhắn kết quả
        const resultHtml = `
            <div class="chat-box ai-speech">
                <div class="inner">
                    <div class="chat-section">
                        <div class="author">
                            <img class="w-100" src="${window.botImageUrl}" alt="HOC MAI">
                        </div>
                        <div class="chat-content">
                            <h6 class="title">HOC MAI</h6>
                            <p><strong>Kết quả bài làm của bạn:</strong></p>
                            <p style="font-size: 1.2em; font-weight: bold;">Điểm số: ${score.toFixed(2)} / ${totalPoints.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        console.log("4. Đã tạo HTML kết quả. Chuẩn bị hiển thị...");
        // Chèn kết quả vào khung chat
        appendMessageHTML(resultHtml);
        console.log("5. Đã gọi hàm appendMessageHTML. Hoàn tất!");
    }

    function createEditableMessage(title, message, speechClass, imgSrc) {
        const messageElement = createMessageElement(title, message, speechClass, imgSrc, true);
        return messageElement;
    }

    function createMessageWithReactions(title, message, speechClass, imgSrc, messageId) {
        const messageElement = createMessageElement(title, message, speechClass, imgSrc, false, messageId);
        return messageElement;
    }

    function createMessageElement(title, message, speechClass, imgSrc, isEditable, messageId) {
        const isBot = title === 'AiWave'; // or use m.is_bot_response if available
        const displayMessage = isBot ? makeHumanReadable(message) : message;

        const botReplyId = isBot ? `bot-reply-${Date.now()}-${Math.floor(Math.random()*10000)}` : '';

        const messageElement = document.createElement('div');
        messageElement.className = `chat-box ${speechClass}`;
        messageElement.innerHTML = `
        <div class="inner">
            <div class="chat-section">
            <div class="author">
                <img class="w-100" src="${imgSrc}" alt="${title}">
            </div>
            <div class="chat-content">
                <h6 class="title">${title}</h6>
                <p class="${isEditable ? 'editable' : ''}" ${isEditable ? 'contenteditable="true"' : ''}>${displayMessage}</p>
                ${isEditable ? getEditButtons() : getReactionButtons(messageId)}
            </div>
            </div>
        </div>
        `;
        return messageElement;
    }

    function getEditButtons() {
        return `
        
        `;
    }

    function getReactionButtons(messageId) {
        const feedback = messageFeedbackState[messageId] || 'none';
        const likeActive = feedback === 'like' ? 'active' : '';
        const dislikeActive = feedback === 'dislike' ? 'active' : '';
        return `
        <div class="reaction-section">
        <div class="btn-grp">
        <div class="left-side-btn dropup">
            <button  class="react-btn btn-default btn-small btn-border ${likeActive}" onclick="handleFeedbackButtonClick('${messageId}', 'like')"><i class="${likeActive ? 'fa-solid' : 'fa-regular'} fa-thumbs-up"></i></button>
            <button  class="react-btn btn-default btn-small btn-border${dislikeActive}" onclick="handleFeedbackButtonClick('${messageId}', 'dislike')"><i class="${dislikeActive ? 'fa-solid' : 'fa-regular'} fa-thumbs-down"></i></button>
            <button type="button" class="react-btn btn-default btn-small btn-border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-regular fa-ellipsis-vertical"></i>
            </button>
            <ul class="dropdown-menu style-one">
                <li><a class="dropdown-item" href="#" onclick="copyMessage(this); return false;"><i class="fa-sharp fa-solid fa-copy"></i> Copy</a></li>
                <li><a class="dropdown-item delete-item" href="#"><i class="fa-solid fa-trash-can"></i> Delete Chat</a></li>
            </ul>
        </div>
    </div>
        </div>
        `;
    }

    function makeHumanReadable(text) {
        if (!text) return '';

        // First, handle code blocks with language specification
        text = text.replace(/```(\w*)\n([\s\S]*?)```/g, function(_, lang, code) {
            const language = lang || 'plaintext';
            return `<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded my-3 overflow-x-auto">
                <div class="text-xs text-gray-500 mb-2 font-mono">${language}</div>
                <pre class="whitespace-pre-wrap break-words">${escapeHtml(code.trim())}</pre>
            </div>`;
        });

        // Then handle simple code blocks without language
        text = text.replace(/```([\s\S]*?)```/g, function(_, code) {
            return `<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded my-3 overflow-x-auto">
                <pre class="whitespace-pre-wrap break-words">${escapeHtml(code.trim())}</pre>
            </div>`;
        });

        // Inline code
        text = text.replace(/`([^`]+)`/g, function(match, code) {
            return `<code class="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono text-red-600 dark:text-red-300">${escapeHtml(code)}</code>`;
        });

        // Handle HTML content that might be in the text
        text = text.replace(/&lt;(\/?[a-z][a-z0-9]*)&gt;/gi, '<$1>');

        // Headers
        text = text.replace(/^###\s+(.+)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>');
        text = text.replace(/^##\s+(.+)$/gm, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>');
        text = text.replace(/^#\s+(.+)$/gm, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>');

        // Bold and italic
        text = text.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>');
        text = text.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');

        // Lists - handle both * and - for bullet points
        text = text.replace(/^[\s]*[*\-+]\s+(.+)$/gm, '<li class="mb-1">$1</li>');
        
        // Numbered lists
        text = text.replace(/^[\s]*\d+\.\s+(.+)$/gm, '<li class="mb-1 list-decimal list-inside">$1</li>');
        
        // Handle multi-line list items
        text = text.replace(/(<li[^>]*>.*)(?:\n(?!<li>|\s*[\-*+]\s|\d+\.\s|$))(.*)/g, '$1 $2');
        
        // Wrap list items in <ul> or <ol>
        text = text.replace(/(<li[^>]*>.*<\/li>\n?)+/g, function(match) {
            const isOrdered = match.includes('list-decimal');
            const tag = isOrdered ? 'ol' : 'ul';
            return `<${tag} class="space-y-1 my-2 pl-5">${match}</${tag}>`;
        });

        // Blockquotes
        text = text.replace(/^>\s+(.+)$/gm, '<blockquote class="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-2 text-gray-600 dark:text-gray-300">$1</blockquote>');

        // Horizontal rule
        text = text.replace(/^[-*_]{3,}$/gm, '<hr class="my-4 border-t border-gray-200 dark:border-gray-700">');

        // Simple JSON formatting (if it looks like JSON)
        text = text.replace(/(\{[\s\S]*?\})/g, function(match) {
            try {
                const obj = JSON.parse(match);
                return `<div class="bg-gray-50 dark:bg-gray-800 p-4 rounded my-3 overflow-x-auto">
                    <div class="text-xs text-gray-500 mb-2 font-mono">JSON</div>
                    <pre class="text-xs">${escapeHtml(JSON.stringify(obj, null, 2))}</pre>
                </div>`;
            } catch (e) {
                return match;
            }
        });

        // Handle paragraphs - split by double newlines
        let parts = text.split(/\n\s*\n/);
        text = parts.map(part => {
            if (!part.trim().startsWith('<') || part.trim().startsWith('<li>')) {
                return `<p class="my-2">${part}</p>`;
            }
            return part;
        }).join('\n');

        // Clean up any empty paragraphs
        text = text.replace(/<p[^>]*>\s*<\/p>/g, '');

        return text;
    }

    // Helper: escape HTML for code blocks and inline code
    function escapeHtml(str) {
        return str.replace(/[&<>"']/g, function (m) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[m];
        });
    }

    


    async function sendFeedback(isRemove = false) {
        const textarea = document.getElementById('feedbackText');
        let feedbackText = '';
        
        if (!isRemove && textarea) {
            feedbackText = textarea.value;
        }

            const response = await fetch('/aiwave/message-feedback/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({
                    message_id: feedbackTargetMessageId,
                    feedback_type: isRemove ? 'none' : feedbackType,
                    message_feedback: isRemove ? '' : feedbackText
                })
            });
            
        const data = await response.json();

        if (data.success) {
            if (isRemove) {
                messageFeedbackState[feedbackTargetMessageId] = 'none';
            } else {
                messageFeedbackState[feedbackTargetMessageId] = feedbackType;
            }
            document.activeElement.blur();
            $('#likeModal').modal('hide');
            $('#dislikeModal').modal('hide');
            if (textarea) textarea.value = '';


        fetchMessages(currentSessionId);
        }
    }



    function appendMessage(messageElement) {
        const chatContainer = document.getElementById('chatContainer');
        const placeholder = chatContainer.querySelector('.placeholder');
        if (placeholder) placeholder.remove();
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function editMessage(button) {
        const chatContent = button.parentElement.parentElement.parentElement;
        const editable = chatContent.querySelector('.editable');
        editable.contentEditable = 'true';
        editable.focus();
    }

    async function saveAndRegenerateMessage(button) {
        const chatContent = button.parentElement.parentElement.parentElement;
        const editable = chatContent.querySelector('.editable');
        userMessage = editable.textContent.trim();
        editable.contentEditable = 'false';

        // Save the edited message (you can send it to a server, etc.)

        // Regenerate a new message
        const regeneratedMessage = await generateAutoReply(userMessage, currentSessionId);
        const regeneratedMessageElement = createMessageWithReactions('AiWave', regeneratedMessage, 'ai-speech', 'assets/images/team/avater.png');
        appendMessage(regeneratedMessageElement);
    }

    function cancelEdit(button) {
        const chatContent = button.parentElement.parentElement.parentElement;
        const editable = chatContent.querySelector('.editable');
        editable.contentEditable = 'false';
        // Optionally, you can revert the content to the original state
    }

    async function regenerateMessage() {
        const regeneratedMessage = await generateAutoReply(userMessage, currentSessionId);
        const regeneratedMessageElement = createMessageWithReactions('AiWave', regeneratedMessage, 'ai-speech', 'assets/images/team/avater.png');
    }

    function copyMessage(button) {
        const lines = button.closest('.chat-content')?.innerText.split('\n') || [];
        const text = lines.slice(1, -3).join('\n');
        navigator.clipboard.writeText(text)
    }
    
    function handleFeedbackButtonClick(messageId, type) {
        // type: 'like' or 'dislike'
        const currentFeedback = messageFeedbackState[messageId];
        if (!currentFeedback || currentFeedback === 'none') {
            // No feedback yet, open the modal for feedback
            openFeedbackModal(type, messageId);
        } else if (currentFeedback === type) {
            // Already liked/disliked, remove feedback
            feedbackTargetMessageId = messageId;
            feedbackType = 'none';
            sendFeedback(true); // Remove feedback
        } else {
            // Switch feedback type (from like to dislike or vice versa)
            openFeedbackModal(type, messageId);
        }
    }

    // Like/Dislike button handlers
    function likeMessage(messageId) {
        openFeedbackModal('like', messageId);
    }
    function dislikeMessage(messageId) {
        openFeedbackModal('dislike', messageId);
    }

    // Open modal and set target message
    function openFeedbackModal(type, messageId) {
        feedbackTargetMessageId = messageId;
        feedbackType = type;
        if (type === 'like') {
            $('#likeModal').modal('show');
        } else if (type === 'dislike') {
            $('#dislikeModal').modal('show');
        }
    }

    function handleError(context, error) {
        showError(typeof error === 'string' ? error : (error.message || 'An error occurred.'));
    }

    function showError(msg) {
        alert(msg);
    }

    // function scrollChatToBottom() {
    //     const chatContainer = document.getElementById('chatContainer');
    //     if (chatContainer) {
    //         chatContainer.scrollTop = chatContainer.scrollHeight;
    //     }
    // }

    // if (newChatBtn) {
    //     newChatBtn.addEventListener('click', function() {
    //         currentSessionId = null;
    //         resetchatContainer();
    //     });
    // }
    // if (null != txtarea)  {
    //     txtarea.addEventListener('keydown', function (e) {
    //         if (e.key === 'Enter' && !e.shiftKey) {
    //         e.preventDefault();
    //         sendMessage(e);
    //         }
    //     });
    // };


// if (!window.INITIAL_SESSION_ID) {
//     resetchatContainer();
// }
// fetchSessions();

// Add theme-matching loader CSS
const style = document.createElement('style');
style.innerHTML = `
.aiwave-loader-dots {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 10px 0 10px 0;
    height: 24px;
}
.aiwave-loader-dots span {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-primary, #805AF5);
    opacity: 0.7;
    animation: aiwave-bounce 1.2s infinite both;
}
.aiwave-loader-dots span:nth-child(2) {
    animation-delay: 0.2s;
}
.aiwave-loader-dots span:nth-child(3) {
    animation-delay: 0.4s;
}
@keyframes aiwave-bounce {
    0%, 80%, 100% { transform: scale(0.8); opacity: 0.7; }
    40% { transform: scale(1.2); opacity: 1; }
}
`;
document.head.appendChild(style);

// Helper to get CSRF token from cookie
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// Usage: get CSRF token
const csrftoken = getCookie('csrftoken');

// Helper to strip markdown (bold, italics, code, etc.) from session titles
function stripMarkdown(text) {
    if (!text) return '';
    // Remove bold (**text**) and italic (*text* or _text_)
    return text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\*(.*?)\*/g, '$1')
        .replace(/_(.*?)_/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\[(.*?)\]\(.*?\)/g, '$1'); // [text](link)
}


document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-exam-btn');
    if (startButton) {
        startButton.addEventListener('click', startExam);
    }
});

let examData = null; 
let currentQuestionIndex = 0;
let userAnswers = {};
async function startExam() {
    const startButton = document.getElementById('start-exam-btn');
    // Lấy bot_mode từ data-attribute của form chat cũ (nếu còn) hoặc đặt cố định
    // const subject = document.getElementById('chatInput')?.dataset.botMode || 'ngu-van';
    const subject = document.querySelector('[data-subject]').dataset.subject;
    
    startButton.textContent = "Đang tải đề...";
    startButton.disabled = true;

    try {
        // Gọi API backend để lấy dữ liệu đề thi
        const response = await fetch(`/aiwave/api/generate-exam/${subject}/`);
        const data = await response.json();

        if (data.questions) {
            examData = data;
            userAnswers = {};
            // Ẩn giao diện bắt đầu, hiện giao diện làm bài
            document.getElementById('exam-start-container').style.display = 'none';
            document.getElementById('exam-body-container').style.display = 'block';
            
            renderQuestionNavigation();
            displayQuestion(0); // Hiển thị câu hỏi đầu tiên
            startTimer(60 * 60, document.getElementById('timer')); // Bắt đầu đếm 60 phút

        } else { throw new Error(data.error || 'Không thể tải dữ liệu đề thi.'); }
    } catch (error) {
        alert('Lỗi khi tạo đề: ' + error.message);
        startButton.textContent = "Thử lại";
        startButton.disabled = false;
    }
}


function renderQuestionNavigation() {
    const navList = document.getElementById('question-nav-list');
    navList.innerHTML = '';
    examData.questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.id = `nav-btn-${q.id}`;
        button.textContent = index + 1;
        button.onclick = () => displayQuestion(index);
        
        navList.appendChild(button);
    });
}



function displayQuestion(index) {
    const totalQuestions = examData.questions.length;
    currentQuestionIndex = (index + totalQuestions) % totalQuestions;

    const question = examData.questions[currentQuestionIndex];
    const displayArea = document.getElementById('question-display');
    
    document.querySelectorAll('#question-nav-list button').forEach((btn, i) => {
        btn.classList.toggle('active', i === currentQuestionIndex);
    });

    let questionHtml = `
        <div class="quiz-question" id="${question.id}">
            <h4>Câu ${currentQuestionIndex + 1}</h4>
            <p class="lead">${question.stem}</p>`;
    
    if (question.source_excerpt) {
        questionHtml += `<div class="source-excerpt p-3 border rounded mb-3" style="border-color: #444 !important;"><em>${question.source_excerpt}</em></div>`;
    }

    if (question.type === 'MCQ' && question.options) {
        questionHtml += `<div class="quiz-options">`;
        question.options.forEach(option => {
            const optionValue = option.substring(0, 1);
            const inputId = `${question.id}-${optionValue}`;
            const isChecked = userAnswers[question.id] === optionValue ? 'checked' : '';
            questionHtml += `
                <div class="form-check my-2">
                    <input class="form-check-input" type="radio" name="${question.id}" id="${inputId}" value="${optionValue}" ${isChecked}>
                    <label class="form-check-label" for="${inputId}">${option}</label>
                </div>`;
        });
        questionHtml += `</div>`;
    }

    questionHtml += `
        <button class="btn-default btn-small btn-border mt-4" onclick="toggleHint('${question.id}')">Gợi ý</button>
        <div class="hint-box" id="hint-${question.id}" style="display: none; padding: 15px; margin-top: 10px; background-color: #2a2b3f; border-radius: 5px;"><p>${question.hint}</p></div>
        <div class="question-nav-buttons mt-5 d-flex justify-content-between">
            <button class="btn-default" onclick="displayQuestion(${currentQuestionIndex - 1})">&laquo; Câu trước</button>
            <button id="submit-exam-btn" class="btn-default bg-solid-primary">Nộp bài</button>
            <button class="btn-default" onclick="displayQuestion(${currentQuestionIndex + 1})">Câu tiếp &raquo;</button>
        </div>`;

    questionHtml += `</div>`;
    displayArea.innerHTML = questionHtml;

    document.getElementById('submit-exam-btn').addEventListener('click', () => handleExamSubmit(false));

    const optionsContainer = displayArea.querySelector('.quiz-options');
    if (optionsContainer) {
        optionsContainer.addEventListener('change', (event) => {
            if (event.target.type === 'radio') {
                userAnswers[event.target.name] = event.target.value;
                const navButton = document.getElementById(`nav-btn-${event.target.name}`);
                if (navButton) {
                    navButton.classList.add('answered');
                    navButton.style.borderColor = ''; 
                }
            }
        });
    }
}

/**
 * Ẩn/hiện gợi ý cho một câu hỏi.
 * @param {string} questionId - ID của câu hỏi (ví dụ: 'Q1').
 */

function toggleHint(questionId) {
    const hintBox = document.getElementById(`hint-${questionId}`);
    hintBox.style.display = (hintBox.style.display === 'block') ? 'none' : 'block';
}

function resetExam() {
    // Ẩn modal kết quả
    const resultModalInstance = bootstrap.Modal.getInstance(document.getElementById('resultModal'));
    if (resultModalInstance) {
        resultModalInstance.hide();
    }
    
    // Dừng đồng hồ cũ
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    document.getElementById('timer').textContent = "30:00"; // Reset hiển thị đồng hồ
    
    // Ẩn giao diện làm bài, hiện lại nút bắt đầu
    document.getElementById('exam-start-container').style.display = 'block';
    document.getElementById('exam-body-container').style.display = 'none';

    // Kích hoạt lại nút bắt đầu
    const startButton = document.getElementById('start-exam-btn');
    startButton.textContent = "BẮT ĐẦU LÀM BÀI";
    startButton.disabled = false;

    // Xóa các biến trạng thái cũ
    examData = null;
    userAnswers = {};
    currentQuestionIndex = 0;
}


function handleExamSubmit(isTimeUp = false) {
    const totalQuestions = examData.questions.length;
    const answeredCount = Object.keys(userAnswers).length;

    // Luôn dừng đồng hồ khi nộp bài
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // --- LOGIC KIỂM TRA & CẢNH BÁO ---
    if (!isTimeUp && answeredCount < totalQuestions) {
        const unanswered = [];
        // Reset lại tất cả các viền đỏ cũ
        document.querySelectorAll('#question-nav-list button').forEach(btn => {
            btn.style.borderColor = '#3E4059'; // Reset về màu mặc định
        });

        examData.questions.forEach((q, index) => {
            if (!userAnswers[q.id]) {
                unanswered.push(index + 1);
                const navButton = document.getElementById(`nav-btn-${q.id}`);
                if (navButton) {
                    navButton.style.borderColor = 'red'; // Khoanh đỏ câu chưa làm
                }
            }
        });
    // --- Sẽ sửa lại để chấm khi không làm bài    
        if (unanswered.length > 0) {
            const validationMessage = document.getElementById('validation-message');
            validationMessage.textContent = `Bạn chưa trả lời các câu: ${unanswered.join(', ')}. Vui lòng hoàn thành trước khi nộp bài.`;
            
            const validationModal = new bootstrap.Modal(document.getElementById('validationModal'));
            validationModal.show();
            return; // Dừng lại không chấm điểm
        }
    }

    // --- LOGIC CHẤM ĐIỂM (chỉ chạy khi tất cả đã được trả lời hoặc hết giờ) ---
    let score = 0;
    let totalPoints = 0;
    examData.questions.forEach(q => {
        totalPoints += parseFloat(q.points);
        if (q.type === 'MCQ' && userAnswers[q.id] === q.answer) {
            score += parseFloat(q.points);
        }
    });

    const scoreDisplay = document.getElementById('score-display');
    if (scoreDisplay) {
        scoreDisplay.textContent = `${score.toFixed(2)} / ${totalPoints.toFixed(2)}`;
        document.getElementById('restart-exam-btn').onclick = resetExam;
        const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
        resultModal.show();
    }
}


let timerInterval = null; // Biến để lưu trữ interval của đồng hồ

function startTimer(duration, display) {
    let timer = duration;

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(function () {
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            alert("Đã hết thời gian làm bài! Hệ thống sẽ tự động nộp bài của bạn.");
            // Gọi hàm nộp bài với tham số isTimeUp = true
            handleExamSubmit(true); 
        }
    }, 1000);
}