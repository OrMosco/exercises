mapboxgl.accessToken = 'pk.eyJ1Ijoib3Jtb3NjbzQxIiwiYSI6ImNsMW5lYmQyaTBjODkzZXBkd3UzdWlwdmIifQ.e9boa76o2-pZ8SNFH1Wcwg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [34.78, 32.07], // תל אביב
  zoom: 11
});

const geojsonData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [34.78, 32.07]
      },
      "properties": {
        "title": "Tel Aviv"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [35.21, 31.77]
      },
      "properties": {
        "title": "Jerusalem"
      }
    }
  ]
};

map.on('load', () => {
  map.addSource('cities', {
    type: 'geojson',
    data: geojsonData
  });

  map.addLayer({
    id: 'city-points',
    type: 'circle',
    source: 'cities',
    paint: {
      'circle-radius': 8,
      'circle-color': '#007cbf'
    }
  });
});
