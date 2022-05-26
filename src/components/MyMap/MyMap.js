import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGV5YWxla2h5YSIsImEiOiJjbDNpb3h5YXAwOThxM2RvN2Rwam43NmNlIn0.tCblnD02b3GNW2MqHWH6FA';
export default class App extends React.PureComponent {
    constructor(props) {
    super(props);
    this.state = {
      lng: -90.9,
      lat: 42.35,
      zoom: 9
    };
    this.mapContainer = React.createRef();
  }
    componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/heyalekhya/cl3le7u2p005r15ldtze1vxtx',
      center: [lng, lat],
      zoom: zoom
    });
  }
  render() {
return (
<div>
<div ref={this.mapContainer} className="map-container" />
</div>
);
}
}