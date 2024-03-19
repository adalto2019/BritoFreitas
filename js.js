 
//Funções 
var m = document.getElementById('ModalCadastros')

function abrirModal(){
    m.style.display = 'block'
}

function fecharModal(){
    m.style.display = 'none'
}

//Funções Modal Anúncios
let anuncio = document.getElementById('ModalAnuncio')
 
function ModalAnuncio(){
    anuncio.style.display = 'block'
}

function fecharModalAnuncio(){
    anuncio.style.display = 'none'
}


//******************************************** */
function addMarcador(latitude, longetude, pontos) {
    var location = document.getElementById("formattedAddress").innerText;
    var latitude = document.getElementById("latitude").innerText;
    var longitude = document.getElementById("longitude").innerText;


    var ponto = { lat: parseFloat(latitude), lng: parseFloat(longitude) };

    var points = JSON.parse(localStorage.getItem('mapPoints')) || [];

    points.push(ponto);

    localStorage.setItem('mapPoints', JSON.stringify(points));

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: ponto
    });

    points.forEach((value, index, array) => {
        var marker = new google.maps.Marker({
            position: value,
            map: map
        });
    })
}

function limparCampos(latitude, longetude, pontos) {
    document.getElementById("formattedAddress").innerText = '';
    document.getElementById("latitude").innerText = '';
    document.getElementById("longitude").innerText = '';
    localStorage.setItem('mapPoints', []);
    console.log(localStorage.getItem('mapPoints'));
}

function getStreetInfo() {
    var address = document.getElementById("address").value;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var formattedAddress = results[0].formatted_address;
            var location = results[0].geometry.location;
            var latitude = location.lat();
            var longitude = location.lng();

            document.getElementById("formattedAddress").innerText = formattedAddress;
            document.getElementById("latitude").innerText = latitude;
            document.getElementById("longitude").innerText = longitude;
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}
function initMap(lat = -3.793790817260742, lng = -38.60097122192383) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, 
        center: { lat: lat, lng: lng } 
    });

    localStorage.setItem('mapPoints', JSON.stringify([]));

    // // Get points array from localStorage or initialize as empty array
    var points = JSON.parse(localStorage.getItem('mapPoints')) || [];

}