function letsShop(){
    $("#js-shopping-list-form").submit(function(){
        event.preventDefault();
        let item = $(this).find('input').val();
        $('ul').append(`<li><span class="shopping-item">${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`)
    });
        
    $('ul').on('click','.shopping-item-toggle', function(){
    $(this).parents('li').find('.shopping-item').toggleClass('shopping-item__checked')    
    });

    $('ul').on('click',".shopping-item-delete",function(){
        $(this).parents('li').remove();
    })
}


$(letsShop());