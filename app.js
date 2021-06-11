$(document).ready(() => {

    var friends = ['Chris', 'Cameron', 'Marques', 'James', 'John'];
    var locations = ['Asgard', 'Genosha', 'Krakoa', 'Attilan', 'Zenn-La', 'Latveria', 'Atlantis', 'Kun-Lun', 'Madripoor', 'Knowhere'];
    var weapons = ['Mjolnir', 'the Ebony Blade', 'All-Black', 'a Pistol', 'the Infinity Guantlet', 'Repulsors', 'Arrows', 'Fists', 'The Shield', 'Vibranium', 'Adamatium', 'Uru', 'Web-Shooters', 'Symbiotes', 'Drones', 'AIs', 'Claws', 'Swords', 'Bombs', 'Knives'];

    // for (var i = 1; i <= 100; i++) {
    //     var h3 = document.createElement('h3');
    //     $('main').append(h3);
    //     h3.innerText = `Accusations ${i}:`
    //     $(h3).click(getAlert(i));
    // }
    for (var i = 1; i <= 100; i++) {
        var $h3 = $("<h3>Accusation " + i + "</h3>");
        $('#container').append($h3);
        $($h3).click(getAlert(i));
    }

    function getAlert(i) {
        var friend = friends[i % 5];
        var location = locations[i % 10];
        var weapon = weapons[i % 20];

        function accuAlert() {
            alert(`Accusation ${i}: I accuse ${friend}, with ${weapon}, in ${location}`);
        }
        return accuAlert;
        
    }

});