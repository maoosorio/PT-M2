var link = 'http://localhost:5000/amigos';

$('#boton').click(function () {
    $('#lista').empty();
    $.get(`${link}`, function (friends) {
        friends.forEach(f => {
            $('#lista').append(`<li id="${f.id}">${f.name} X</li>`)
        })
    })
});

$('#search').click(function () {
    let id = $('#input').val();
    if (id) {
        $.get(`${link}/${id}`, function (friend) {
            $('#amigo').text(`${friend.name}`)
        })
    }else{
        $('#amigo').text('ingresar un id');
    }
});

$('#delete').click(function () {
    let id = $('#inputDelete').val();
    if (id) {
        $.ajax({
            url:`${link}/${id}`,
            type:'DELETE',
            success:function(){
                $('#success').text('se elimino correctamente');
                $('#inputDelete').val('');
            }
        })
    }else{
        $('#success').text('ingresar un id');
    }
});

