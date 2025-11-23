async function intiMap(position) {
    const {Map}= await google.maps.importLibrary("maps");
    const {AdvancedMarkerElement}= await google.maps.importLibrary("marker");
    const geocoder = new google.maps.Geocoder();
    const map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: position,
        mapId: "DEMO_MAP_ID",
    });
    const marker = new AdvancedMarkerElement({ 
        map: map,
        position: position,
        title: "Hello World!",
        content: `<div style="background-color: blue; color: white; padding: 5px; border-radius: 5px;">You are here</div>`,
    });
    geocoder.geocode({ location: position }, (results, status) => {
        if (status === "OK") {
            if (results[0]) {
                console.log("Address: " + results[0].formatted_address);
                const infoWindow = new google.maps.InfoWindow({
                    content: results[0].formatted_address,
                    position: position,
                });
                infoWindow.open(map, marker);
            } else {
                console.log("No results found");
            }
        } else {
            console.log("Geocoder failed due to: " + status);
        }
    });
}