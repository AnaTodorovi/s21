$(document).ready(function () {

    //Add header bg on scroll




    function checkHeader() {
        let scrollFromTop = $(window).scrollTop();
        if (scrollFromTop > 100) {
            $('header').addClass('has-bg py-lg-1').removeClass('py-lg-4');
        } else {
            $('header').removeClass('has-bg py-lg-1').addClass('py-lg-4');

        }
    }
    checkHeader();



    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 150) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });

    }



    animation();

    $(window).scroll(function () {
        animation();
        checkHeader();
    });



    if ($('.number').length > 0) {
        $('.number').counterUp();
    }

    if ($('.team-slider').length > 0) {
        $('.team-slider').owlCarousel({
            autoplay: true,
            loop: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 2,
                    margin: 20
                },
                768: {
                    items: 3,
                    margin: 20
                },
                992: {
                    items: 4,
                    margin: 20
                }
            }
        });
    }


    $(function () {
        $(".subscribe-form").validate({
            highlight: function (element) {
                $(element).addClass("is-invalid").removeClass("is-valid");
                $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
            },
            unhighlight: function (element) {
                $(element).removeClass('is-invalid').addClass('is-valid');
                $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
            },
            rules: {
                name: {
                    required: true,
                    rangelength: [2, 20]
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 6,
                    checklower: true,
                    checkupper: true,
                    checkdigit: true
                            //passwordCheck: true
                },
                re_password: {
                    required: true,
                    equalTo: '#password'
                },
                course: {
                    required: true
                },
                message: {
                    required: true,
                    maxlength: 255
                }


            },
            messages: {
                name: {
                    required: 'Ime je obavezno polje',
                    rangelength: 'Ime mora bitii izmedju 2 i 20 karaktera'
                },
                email: {
                    required: 'Email je obavezno polje',
                    email: 'Unesite validan email'
                },
                password: {
                    required: 'Lozinka je obavezno polje',
                    minlength: 'Lozinka mora imati min 6 karaktera',
                    checklower: 'Malo slovo nema',
                    checkupper: 'Veliko slovo nema',
                    checkdigit: 'Broj nema',
                    passwordCheck: 'Lozinka mora imate bar jedno veliko slovo, bar jedno malo slovo i bar jedan broj'
                },
                repassword: {
                    required: ' Ponovi Lozinku je obavezno polje',
                    minlength: 'Ponovi Lozinku mora imati min 6 karaktera',
                    equalTo: 'Lozinke se ne poklapaju',
                },
                course: {
                    required: 'Kurs je obavezno polje'
                },
                message: {
                    required: 'Poruka je obavezno polje',
                    maxlength: 'Poruka ne sme imati vise od 255 karaktera'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
            }

        });
    });
});