$(document).ready(() => {
    $('#check').on('click', (e) => {
        e.preventDefault();

        const name = $("#name").val();
        console.log(name);

        $.ajax({
            data: {age: name},
            url: '/user/getUser',
            method: "POST",
            success: function(data, a, b) {
                console.log(b);
                
                console.log(data);  
            },
            error: function(err) {
                console.log(err);

                console.log(err);
            }
        })
        
    })
})