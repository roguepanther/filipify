let map;

// Initialize and add the map
function initMap() {
    // The location of Dublin
    const dublin = { lat: 53.350140, lng: -6.266155 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: dublin,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: dublin,
      map: map,
    });
  }


  // Dark Mode Color Toggle

  function toggleMode() {
      var element = document.body;
      var button = document.getElementById("modeButton");
      if (button.innerHTML=="Dark Mode") button.innerHTML = "Light Mode";
      else button.innerHTML = "Dark Mode";
      element.classList.toggle("dark-theme");
  }

  // Cookie Banner 

  function setCookie() {
      localStorage.setItem("cookie", "set");
      $("#cookie-banner").delay(500).fadeOut(400);
    //   document.getElementById("cookie-banner").style.display = "none";
  }

  function dismissBanner() {
    document.getElementById("cookie-banner").style.display = "none";
  }
  
  window.addEventListener("load", function() {
//    localStorage.setItem('cookie', 'set');
      if(localStorage.getItem("cookie") != "set") {
        $('#cookie-banner').delay(500).fadeIn(400);
        // document.getElementById("cookie-banner").style.display = "inline";

      } else {
          console.log("cookie has been set");
      }
  });