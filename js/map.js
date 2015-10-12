$(document).ready(function(){

  var latlng = new google.maps.LatLng(46.567578, 20.367209); /* latitude and longitude for the center of the map*/
    
     var image = '../../img/logo.png';



    var myOptions = {
        zoom: 12, /* zoom level of the map */
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,      /* disable the Satelite-Roadmap switch */
        panControl: false,          /* disable the pan controller */
        streetViewControl: false,   /* disable the streetView option */
        zoomControl: false,         /*disable the zoom level buttons, the user will still be able to control the zoom by scrolling  

        scaleControl: true,         /* optional: shows the scale of the map */
        scaleControlOptions: {
            /* since we decided to show the scale, we tell the script to show it in the corner we like, in this case Bottom Left */
            position: google.maps.ControlPosition.BOTTOM_LEFT
        }
    };
  
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions); /* show the map in the element with the id: map_canvas */

    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: image,
      title: 'Hello World!'
    });

});

