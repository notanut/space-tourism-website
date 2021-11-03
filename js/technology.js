$('#mobile-toggle').on('click', function() {
    $('#menu').addClass('show')
})

$('#close-toggle').on('click', function() {
    $('#menu').removeClass('show')
})

$.getJSON('data.json', function(data) {
    let technology = data.technology
    $.each(technology, function(i, data) {
        if (data.name == 'Launch vehicle') {
            $('.tech-title').append(data.name)
            $('.technology-paragraph').append(data.description)
            $('.technology-img').append('<img src="'+ data.images.portrait +'" alt="" class="portrait"><img src="'+ data.images.landscape +'" alt="" class="landscape">')
        }
    })
})

$('.menu-circle').on('click', function() {
    $('.menu-circle').removeClass('active')
    $(this).addClass('active')

    let menu = $(".none", this).html()
    
    $.getJSON('data.json', function(data) {
        let technology = data.technology
        let title = ''
        let description = ''
        let picture = ''

        $.each(technology, function (i, data) {
            if (data.name == menu) {
                title += data.name
                description += data.description
                picture += '<img src="'+ data.images.portrait +'" alt="" class="portrait"><img src="'+ data.images.landscape +'" alt="" class="landscape">'
            }
        })
        $('.tech-title').html(title)
        $('.technology-paragraph').html(description)
        $('.technology-img').html(picture)
    })
})
