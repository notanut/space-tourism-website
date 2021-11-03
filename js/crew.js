$('#mobile-toggle').on('click', function() {
    $('#menu').addClass('show')
})

$('#close-toggle').on('click', function() {
    $('#menu').removeClass('show')
})

$.getJSON('data.json', function(data) {
    let crew = data.crew
    $.each(crew, function(i, data) {
        if (data.name == 'Douglas Hurley') {
            $('.info').append('<p class="crew-role">'+ data.role +'</p><h1 class="crew-name">'+ data.name +'</h1><p class="crew-paragraph">'+ data.bio +'</p>')
            $('picture').append('<source srcset="'+ data.images.webp +'" type="image/webp"><img src="'+ data.images.png +'" alt="">')
        }
    })
})

$('.dot').on('click', function() {
    $('.dot').removeClass('active')
    $(this).addClass('active')

    let menu = $(".name", this).html()

    $.getJSON('data.json', function(data) {
        let crew = data.crew
        let info = ''
        let picture = ''

        $.each(crew, function (i, data) {
            if (data.name == menu) {
                info += '<p class="crew-role">'+ data.role +'</p><h1 class="crew-name">'+ data.name +'</h1><p class="crew-paragraph">'+ data.bio +'</p>'

                picture += '<source srcset="'+ data.images.webp +'" type="image/webp"><img src="'+ data.images.png +'" alt="">'
            }
        })
        $('.info').html(info)
        $('picture').html(picture)

    })
})