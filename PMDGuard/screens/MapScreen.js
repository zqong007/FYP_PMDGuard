import { View, Text, Alert } from 'react-native';
import { useState, useRef, useEffect } from 'react';

import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';

import { styles } from '../styles/styles';

// map api 
const mapHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- leaflet map stylesheet -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>

  <!-- leaflet javacsript library -->
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

  <style>

    * {margin: 0; padding: 0;box-sizing: border-box}

    html,
    body,
    #map {
      width: 100%;
      height: 100vh;
    }

    <!-- map legend -->
    .legend {
      position: absolute;
      bottom: 20px;
      left: 10px;
      z-index: 1000;

      background: rgba(0, 0, 0, 0.85);
      border: 1px solid #2C2C2E;
      border-radius: 10px;

      padding: 10px 14px;

      color: #FFFFFF;
      font-family: sans-serif;
      font-size: 12px;
      line-height: 1.8;
    }

    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 6px;
    }

    /* marker popup text */
    .leaflet-popup-content {
      font-family: sans-serif;
      font-size: 12px;
      line-height: 1.6;
    }

  </style>
</head>

<body>

  <!-- leaflet map container -->
  <div id="map"></div>

  <!-- map marker legend -->
  <div class="legend">

    <b style="font-size: 13px;">Nearby Safety Points</b><br>
    <span class="dot" style="background:#FFD60A"></span> Your Location<br>
    <span class="dot" style="background:#FF3B30"></span>Fire Stations<br>
    <span class="dot" style="background:#30D158" ></span>Hospitals<br>

  </div>


  <script>

    // create the map centered on singapore
    const map = L.map('map', { zoomControl: true }).setView([1.3521, 103.8198],12);

    // display openstreetmap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
      }
    ).addTo(map);


    // fire stations locations on map
    const fireStations = [

      {name: 'Central Fire Station', lat: 1.29207, lng: 103.84882, postal: '179367', tel: '6332 3000'},
      {name: 'Jurong Fire Station', lat: 1.34788, lng: 103.70529, postal: '648126', tel: '6267 4700'},
      {name: 'Clementi Fire Station', lat: 1.32188, lng: 103.76167, postal: '129577', tel: '6341 1100'},
      {name: 'Ang Mo Kio Fire Station', lat: 1.38499, lng: 103.84563, postal: '569783', tel: '6484 3101'},
      {name: 'Tampines Fire Station', lat: 1.35800, lng: 103.92938, postal: '528777', tel: '6587 8344'},
      {name: 'Woodlands Fire Station', lat: 1.43079, lng: 103.76236, postal: '738782', tel: '6884 1771'},
      {name: 'Paya Lebar Fire Station', lat: 1.33422, lng: 103.89311, postal: '408827', tel: '6848 1850'},
      {name: 'Alexandra Fire Station', lat: 1.28843, lng: 103.80283, postal: '149073', tel: '6471 7481'},

    ];

    // create a red marker for fire stations
    const fireStationIcon = L.divIcon({

      html:'<div style="background:#FF3B30;width:14px;height:14px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 8px #FF3B30"></div>',

      iconSize: [14, 14],
      className: ''

    });

    // add each fire station to the map with a popup showing its name, postal code and contact number
    fireStations.forEach((station) => {

      L.marker([station.lat, station.lng], { icon: fireStationIcon })
        .addTo(map)
        .bindPopup('<b>' + station.name + '</b><br><small>SCDF Fire Station</small><br><small>Postal: ' + station.postal + '</small><br><small>Tel: ' +
          station.tel +'</small>');
    });


    // hospitals locations on map
    const hospitals = [

      {name: 'Singapore General Hospital', lat: 1.27950, lng: 103.83470, postal: '169608', tel: '6222 3322'},
      {name: 'Tan Tock Seng Hospital', lat: 1.32161, lng: 103.84594, postal: '308433', tel: '6256 6011'},
      {name: 'National University Hospital', lat: 1.29480, lng: 103.78320, postal: '119074', tel: '6779 5555'},
      {name: 'Changi General Hospital', lat: 1.34056, lng: 103.94917, postal: '529889', tel: '6788 8833'},
      {name: "KK Women's & Children's Hospital", lat: 1.31056, lng: 103.84694, postal: '229899', tel: '6225 5554'},
      {name: 'Sengkang General Hospital', lat: 1.39550, lng: 103.89340, postal: '544886', tel: '6930 5000'},
      {name: 'Ng Teng Fong General Hospital', lat: 1.33330, lng: 103.74460, postal: '609606', tel: '6716 2000'},

    ];

    // create a green marker for hospitals
    const hospitalIcon = L.divIcon({

      html:'<div style="background:#30D158;width:14px;height:14px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 8px #30D158"></div>',
      iconSize: [14, 14],
      className: ''

    });

    // add each hospital to the map with a popup showing its name, postal code and contact number
    hospitals.forEach((hospital) => {

      L.marker([hospital.lat, hospital.lng], {icon: hospitalIcon })
        .addTo(map)
        .bindPopup('<b>' + hospital.name + '</b><br><small>Public Hospital</small><br><small>Postal: ' + hospital.postal + '</small><br><small>Tel: ' + hospital.tel + '</small>');

    });


    // user location marker and accuary circle
    let userMarker = null;
    let userCircle = null;

    // add or update the user's live location on the map
    function updateUserLocation(latitude, longitude) {

      // create a yellow marker for the user's location
      const userIcon = L.divIcon({
        html: '<div style="background:#FFD60A;width:16px;height:16px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 12px #FFD60A"></div>',
        iconSize: [16, 16],
        className: ''
      });

      // create the marker when the location is first received
      if (!userMarker) {
        userMarker = L.marker([latitude, longitude], {icon: userIcon})
          .addTo(map)
          .bindPopup('<b>You are here</b>');

        userCircle = L.circle([latitude, longitude], {
            radius: 80,
            color: '#FFD60A',
            fillColor: '#FFD60A',
            fillOpacity: 0.15
          }).addTo(map);

        // center the map on the user's location 
        map.setView([latitude, longitude], 15);
      } else {

        // update the marker and circle position when the location changes
        userMarker.setLatLng([latitude, longitude]);
        userCircle.setLatLng([latitude, longitude]);
      }
    }

    // receive location updates from the React Native app and update the map accordingly
    document.addEventListener('message', function(event) {
      const data = JSON.parse(event.data);

      // recenter the map to singapore if the user is outside singapore
      if (data.recenterSingapore) {
        map.setView([1.3521, 103.8198], 12);
        return;
      }

      updateUserLocation(data.latitude, data.longitude);
    });

    // receive location updates from the React Native app and update the map accordingly for ios
    window.addEventListener('message', function(event) {
      const data = JSON.parse(event.data);

      // recenter the map to singapore if the user is outside singapore
      if (data.recenterSingapore) {
        map.setView([1.3521, 103.8198], 12);
        return;
      }

      updateUserLocation(data.latitude, data.longitude);
    });
  </script>
</body>
</html>
`;

// screen to display the safety map with fire stations, hospitals and user's live location
export default function MapScreen({ onEmergencyReady }) {

  // track if the map has finished loading 
  const [mapReady, setMapReady] = useState(false);

  // track the user's live location
  const [location, setLocation] = useState(null);

  // reference to the webview to send messages to the map
  const webViewRef = useRef(null);

  // prevent showing the outside Singapore alert multiple times
  const outsideSingaporeAlert = useRef(false);

  // check if the user's location is within Singapore
  const isInSingapore = (latitude, longitude) => {
    return (
      latitude >= 1.15 &&
      latitude <= 1.50 &&
      longitude >= 103.60 &&
      longitude <= 104.10
    );
  };

  // unlock emergency ready badge when safety map is opened
  useEffect(() => {
    if (mapReady) {onEmergencyReady();}
  }, [mapReady, onEmergencyReady]);

  // request to track user's live location
  useEffect(() => {
    let locationSubscription;
    const startLocationTracking = async () => {

      // request location permission from the user
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      // check if the user granted location permission
      if (status !== 'granted') {
        Alert.alert(
          'Location Permission Needed',
          'Please allow location access to show your live location on the safety map.'
        );
        return;
      }

      // start tracking the user's location with high accuracy and update every 3 seconds or 5 meters
      locationSubscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 3000,
            distanceInterval: 5,
          },

          (currentLocation) => {

            const coordinates = {
              latitude: currentLocation.coords.latitude,
              longitude: currentLocation.coords.longitude,
            };


            setLocation(coordinates);
            
            // check if the user is within Singapore
            const userIsInSingapore = isInSingapore(
              coordinates.latitude,
              coordinates.longitude
            );

            // inform users outside Singapore
             if (!userIsInSingapore) {

                // show warning once
                if (!outsideSingaporeAlert.current) {

                  Alert.alert(
                    'Singapore-Based Safety Map',
                    'This Safety Map is designed for use in Singapore. The fire stations, hospitals and emergency information shown are based in Singapore.',
                    [{ text: 'OK' }]
                  );

                  outsideSingaporeAlert.current = true;
                }



                // recenter map back to Singapore
                if (webViewRef.current) {

                  webViewRef.current.postMessage(
                    JSON.stringify({
                      recenterSingapore: true
                    })
                  );
                }

                return;
              }

              // send the user's live location to the webview to update the map
              if (webViewRef.current) {
                webViewRef.current.postMessage(
                  JSON.stringify(coordinates)
                );
              }
          }
        );
    };

    startLocationTracking();

    // remove the location subscription when the leaving the map screen
    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
    };
  }, []);


  return (

    <View style={styles.mapContainer}>
      <View style={styles.mapHeader}>
        <Text style={styles.sectionTitle}>Safety Map</Text>
        <Text style={styles.mapSubtitle}>Fire stations, hospitals & your live location</Text>
      </View>

      {/* display the safety map in a webview */}
      <WebView
        ref={webViewRef}
        source={{ html: mapHtml }}
        style={styles.mapWebView}
        onLoad={() => {

          // mark the map as ready after webview has loaded
          setMapReady(true);

          // send latest location to the webview after map is ready
          if (location && webViewRef.current) {

            if (
              isInSingapore(
                location.latitude,
                location.longitude
              )
            ) {

              webViewRef.current.postMessage(
                JSON.stringify(location)
              );

            } else {

              // keep the map centered on Singapore if the user is outside Singapore
              webViewRef.current.postMessage(
                JSON.stringify({
                  recenterSingapore: true
                })
              );

            }
          }
        }}
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
}