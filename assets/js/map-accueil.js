/*leaflet*/


$(function () {


    let map = L.map('map')
        .setView([47.0853, 2.3945], 14);


    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiY2VsaW5lY2hlbWFpbiIsImEiOiJja2JhbzA0NDcwamp0MzBud2o4ZzY5eTBmIn0.ABZtH9yjXHv0VFOSC2kNNg'
    }).addTo(map);


    let LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'assets/img/icone-shadow.png',
            iconSize: [57, 72],
            shadowSize: [35, 37],
            iconAnchor: [22, 94], // point de l'icone qui correspond à la position du marker
            shadowAnchor: [0, 68],  // // point de l'icone qui correspond à la position de l'ombre
            popupAnchor: [-3, -76],
        }
    });

    let boulangerieicone = new LeafIcon({iconUrl: 'assets/img/icone-boulangerie.svg'}),
        moulinicone = new LeafIcon({iconUrl: 'assets/img/icone-moulin.svg'}),
        exploitationicone = new LeafIcon({iconUrl: 'assets/img/icone-exploitation.svg'}),
        activeicone = new LeafIcon({iconUrl: 'assets/img/icone-active.png'}); /*mouseover*/


    let content1 = "<img src='assets/img/slider-image1.jpg'>" +
        "<b>Boulangerie 1</b>" +
        "<br/><b>adresse</b>" +
        "<br/><b>code postal</b>" +
        "<br/><b>02 00 00 00 00</b>" +
        "<br/><b>ouvert du lundi au samedi de 8h à 19h</b>" +
        "<br/><a href='https://www.google.fr' target='_blank'>le site de la boulangerie 1</a>";

    let marker1 = L.marker([47.0853, 2.3945], {icon: exploitationicone}).addTo(map).bindPopup(content1);

    marker1.on('mouseover', function(e) {
        this.setIcon(activeicone);

    });


    let content2 = "<img src='assets/img/slider-image2.jpg'>" +
        "<b>Boulangerie 2</b>" +
        "<br/><b>adresse</b>" +
        "<br/><b>code postal</b>" +
        "<br/><b>02 00 00 00 00</b>" +
        "<br/><b>ouvert du lundi au samedi de 8h à 19h</b>" +
        "<br/><a href='https://www.google.fr' target='_blank'>le site de la boulangerie 2</a>";

    let marker2 = L.marker([47.0867918, 2.3850926], {icon: moulinicone}).addTo(map).bindPopup(content2);


    let content3 = "<img src='assets/img/slider-image3.jpg'>" +
        "<b>Boulangerie 3</b>" +
        "<br/><b>adresse</b>" +
        "<br/><b>code postal</b>" +
        "<br/><b>02 00 00 00 00</b>" +
        "<br/><b>ouvert du lundi au samedi de 8h à 19h</b>" +
        "<br /><a href='https://www.google.fr' target='_blank'>le site de la boulangerie 3</a>";

    let marker3 = L.marker([47.0967918, 2.3850926], {icon: moulinicone}).addTo(map).bindPopup(content3);

    let content4 = "<img src='assets/img/slider-image4.jpg' >" +
        "<b>Boulangerie 4</b>" +
        "<br/><b>adresse</b>" +
        "<br/><b>code postal</b>" +
        "<br/><b>02 00 00 00 00</b>" +
        "<br/><b>ouvert du lundi au samedi de 8h à 19h</b>" +
        "<br /><a href='https://www.google.fr' target='_blank'>le site de la boulangerie 4</a>";

    let marker4 = L.marker([47.0767918, 2.3850926], {icon: boulangerieicone}).addTo(map).bindPopup(content4);





    /*action au clic sur image exterieur*/


    $("#boulangerie1").click(function () {

        marker1.bindPopup(content1).openPopup();

        // alert( "ouvrir une popup");


    });

    $("#boulangerie2").click(function () {

        marker2.bindPopup(content2).openPopup();

    });

    $("#boulangerie3").click(function () {

        marker3.bindPopup(content3).openPopup();

    });

    $("#boulangerie4").click(function () {

        marker4.bindPopup(content4).openPopup();

    });


});









