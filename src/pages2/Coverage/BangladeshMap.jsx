import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const position = [23.8103, 90.4125]; // center of Bangladesh

// Optional: custom icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Helper component to move map
function FlyToDistrict({ coords }) {
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 14, { duration: 1.5 });
  }
  return null;
}

const BangladeshMap = ({ serviceCenter }) => {
  const [searchText, setSearchText] = useState("");
  const [activeCoords, setActiveCoords] = useState(null);
  const [activeDistrict, setActiveDistrict] = useState(null);
  //   console.log(searchText);
  const handleSearch = (e) => {
    e.preventDefault();
    const district = serviceCenter.find((d) =>
      d.district.toLowerCase().includes(searchText.toLowerCase())
    );
    if (district) {
      setActiveCoords([district.latitude, district.longitude]);
      setActiveDistrict(district.district);
    }
  };
  return (
    <div className="h-[800px] w-full rounded-lg overflow-hidden shadow-lg relative">
      <form
        onSubmit={handleSearch}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-md px-4 flex bg-gray-400">
        <input
          type="text"
          placeholder="Search district..."
          className="flex-1 px-4 py-2 border rounded-11md outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-900">
          Search
        </button>
      </form>

      {/* map container */}
      <MapContainer
        center={position}
        zoom={8}
        scrollWheelZoom={false}
        // style={{ height: "100%", width: "100%" }}
        className="h-full w-full z-0">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        <FlyToDistrict coords={activeCoords} />
        {serviceCenter.map((center, index) => (
          <Marker
            key={index}
            position={[center.latitude, center.longitude]}
            icon={customIcon}>
            <Popup autoOpen={center.district === activeDistrict}>
              <strong>{center.district}</strong>
              <br />
              {center.covered_area.join(",")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
