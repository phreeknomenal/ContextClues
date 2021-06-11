$(document).ready(() => {

    // Arrays
    var friends = ['Chris', 'Cameron', 'Marques', 'James', 'John'];
    var locations = ['Asgard', 'Genosha', 'Krakoa', 'Attilan', 'Zenn-La', 'Latveria', 'Atlantis', 'Kun-Lun', 'Madripoor', 'Knowhere'];
    var weapons = ['Mjolnir', 'the Ebony Blade', 'All-Black', 'a Pistol', 'the Infinity Guantlet', 'Repulsors', 'Arrows', 'Fists', 'The Shield', 'Vibranium', 'Adamatium', 'Uru', 'Web-Shooters', 'Symbiotes', 'Drones', 'AIs', 'Claws', 'Swords', 'Bombs', 'Knives'];

    // For loop that prints 100 h3 elements
    for (var i = 1; i <= 100; i++) {
        var $h3 = $("<h3>Accusation " + i + "</h3>");
        $('#container').append($h3);
        // add listener for click and triggers getAlert function
        // pass in {i} to get click instance of i
        $($h3).click(getAlert(i));
    }

    // Get alert loop
    function getAlert(i) {
        // Modulur math
        var friend = friends[i % 5];
        var location = locations[i % 10];
        var weapon = weapons[i % 20];

        // Compile the alert message in plug in variables. 
        function compAlert() {
            alert(`Accusation ${i}: I accuse ${friend}, with ${weapon}, in ${location}`);
        }
        // send results back to getAlert.
        return compAlert;
        
    }

});