$('#mobile-toggle').on('click', function() {
    $('#menu').addClass('show')
})

$('#close-toggle').on('click', function() {
    $('#menu').removeClass('show')
})

$.getJSON('data.json', function(data){
    let destinations = data.destinations
    $.each(destinations, function(i, data){
        if (data.name == 'Moon'){
            $('picture').append('<source srcset="' + data.images.webp + '"><img src="' + data.images.png + '" alt="">')
            $('.info').append('<h1>'+ data.name +'</h1><p class="destination-paragraph">' + data.description +'</p><div class="destination-sub grid"><div class="destination-sub-info"><p class="sub-title">Avg. distance</p><p class="sub-info">' + data.distance + '</p></div><div class="destination-sub-info"><div class="sub-title">Est. travel time</div><div class="sub-info">' + data.travel + '</div></div>')
        }        
    })
})

$('.destination-name').on('click', function() {
    $('.destination-name').removeClass('dest-active')
    $(this).addClass('dest-active')

    let dest = $(this).html()

    $.getJSON('data.json', function(data) {
        let destinations = data.destinations
        let picture = ''
        let info = ''

        $.each(destinations, function (i, data) {
            if (data.name == dest) {
                picture += '<source srcset="' + data.images.webp + '"><img src="' + data.images.png + '" alt="">'
                
                info += '<h1>'+ data.name +'</h1><p class="destination-paragraph">' + data.description +'</p><div class="destination-sub grid"><div class="destination-sub-info"><p class="sub-title">Avg. distance</p><p class="sub-info">' + data.distance + '</p></div><div class="destination-sub-info"><div class="sub-title">Est. travel time</div><div class="sub-info">' + data.travel + '</div></div>'
            }
        })
        $('picture').html(picture)
        $('.info').html(info)
    })
})