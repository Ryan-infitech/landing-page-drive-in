"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function MapBackground() {
  const position: [number, number] = [-0.9342382701432439, 100.35428079717825];
  const [zoom, setZoom] = useState(15);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in animation
    setTimeout(() => setOpacity(0.3), 100);

    // Zoom animation
    const zoomInterval = setInterval(() => {
      setZoom((prev) => {
        if (prev >= 17) return 15;
        return prev + 0.5;
      });
    }, 2000);

    // Cleanup on unmount
    return () => {
      clearInterval(zoomInterval);
      const container = document.querySelector(".leaflet-container");
      if (container) {
        (container as any)._leaflet_id = null;
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: opacity,
        }}
      >
        <MapContainer
          center={position}
          zoom={zoom}
          scrollWheelZoom={false}
          zoomControl={false}
          dragging={false}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Lokasi Drive-in</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60 pointer-events-none"></div>

      {/* Animated overlay circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/10 rounded-full animate-pulse"
          style={{ animationDuration: "2s" }}
        ></div>
      </div>
    </div>
  );
}
