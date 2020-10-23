class Form {
    constructor(){

    }
    display(){
        var title = createElement('h3');
        title.html('carRacing');
        title.position(130,20);
        var input = createInput('Name');
        input.position(130,170);
        var button = createButton('Play');
        button.position(250,200);
        var greeting = createElement('h4');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html('Welcome')
            greeting.position(130,160);
        })

        
    }
}