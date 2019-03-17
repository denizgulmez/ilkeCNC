// Main Page Carousel
$(".slide").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000
});

// Products Carousel
$(document).ready(function() {
  $(".carousel").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
});

// Google Maps API
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.201, lng: 28.939 },
    zoom: 16
  });

  var marker = new google.maps.Marker({
    position: { lat: 40.201, lng: 28.939 },
    map: map
  });
}
