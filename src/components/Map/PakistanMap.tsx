'use client';

import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L, { GeoJSON as LeafletGeoJSON, Layer, PathOptions } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Feature, FeatureCollection, Geometry } from 'geojson';

type DistrictInfo = {
  name: string;
  facts: string[];
};

const setDistrictStyle = (): PathOptions => ({
  color: '#1e3a8a',
  weight: 0.5,
  fillOpacity: 0.3,
});

// District-based crop info
const cropData: Record<string, string[]> = {
  Lahore: [
    'Major crops: Wheat, Rice, Sugarcane',
    'High irrigation coverage via Ravi and canal networks',
    'Double cropping is common — Rabi (wheat) and Kharif (rice)',
  ],
  Multan: [
    'Major crops: Cotton and Mango',
    'Semi-arid climate and canal irrigation',
    'Important agribusiness center in southern Punjab',
  ],
  Faisalabad: [
    'Dominant crops: Wheat, Maize, Sugarcane',
    'Irrigated via Lower Chenab Canal',
    'High cropping intensity with minimal fallow land',
  ],
  Quetta: [
    'Known for orchards: Apples, Grapes, Pomegranates',
    'Short growing season, uses kareze and tube wells',
    'Cold and dry climate, limited wheat cultivation',
  ],
  Sargodha: [
    'Key citrus zone (notably Kinnow)',
    'Also produces wheat, sugarcane and fodder',
    'Irrigated by Jhelum tributaries',
  ],
  Hyderabad: [
    'Produces Sugarcane, Banana, Mango, Chilies',
    'Relies on Indus canal irrigation',
    'Requires water-efficient cropping practices',
  ],
};

export default function PakistanMap() {
  const [adm3, setAdm3] = useState<FeatureCollection | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictInfo | null>(null);

  // ✅ Stable reference to always access latest set function
  const setDistrictRef = useRef(setSelectedDistrict);
  setDistrictRef.current = setSelectedDistrict;

  useEffect(() => {
    fetch('/map-data/PAK_adm3.json')
      .then((res) => res.json())
      .then((data: FeatureCollection) => setAdm3(data));
  }, []);

  const onEachDistrict = (feature: Feature<Geometry, any>, layer: Layer) => {
    const name = feature.properties?.NAME_3 || 'Unknown';

    layer.bindTooltip(name, {
      permanent: false,
      direction: 'top',
      className: 'leaflet-tooltip',
    });

    layer.on({
      click: () => {
        const facts = cropData[name] || ['No crop data available for this district.'];
        setDistrictRef.current({ name, facts });
      },
      mouseover: () => (layer as LeafletGeoJSON).setStyle({ fillOpacity: 0.6 }),
      mouseout: () => (layer as LeafletGeoJSON).setStyle({ fillOpacity: 0.3 }),
    });
  };

  return (
    <div className="px-8 pt-8 flex flex-col justify-start">
      <h1 className="text-xl font-bold text-gray-800 mb-8 mt-8">
        Region-Specific Crop Insights
      </h1>

      <div className="flex flex-col items-center w-full">
        {/* Map */}
        <div style={{ height: '600px', width: '100%' }}>
          <MapContainer
            center={[30.3753, 69.3451]}
            zoom={5}
            scrollWheelZoom
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {adm3 && (
              <GeoJSON
                data={adm3}
                style={setDistrictStyle}
                onEachFeature={onEachDistrict}
              />
            )}
          </MapContainer>
        </div>

        {/* Crop Info Section */}
        {selectedDistrict && (
          <div className="mt-8 bg-white border border-gray-300 rounded-lg p-6 shadow-md w-full max-w-5xl">
            <h2 className="text-xl font-bold text-gray-800 bg-[#64FF64] mb-2 w-fit px-3 py-1 rounded">
              {selectedDistrict.name}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {selectedDistrict.facts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
