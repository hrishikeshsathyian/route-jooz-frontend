// components/RouteMap.tsx
"use client";

import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";


type Point = {
  address: number;
  lat: number;
  lng: number;
  name: string;
};


type Props = {
  routes: Point[][];
  selectedDriver: number | null;
  colors: string[];
};

export default function RouteMap({ routes, selectedDriver, colors }: Props) {
  return (
    <MapContainer center={[1.3521, 103.8198]} zoom={11} scrollWheelZoom className="h-full w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
      />

      {(selectedDriver !== null ? [selectedDriver] : routes.map((_, i) => i)).map((driverIdx) => (
        <Polyline
          key={driverIdx}
          positions={routes[driverIdx].map(p => [p.lat, p.lng])}
          color={colors[driverIdx % colors.length]}
        />
      ))}

      {(selectedDriver !== null ? routes[selectedDriver] : routes.flat()).map((point, i) => (
        <Marker key={i} position={[point.lat, point.lng]}>
          <Popup>
            <strong>{point.name}</strong><br />
            {point.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
