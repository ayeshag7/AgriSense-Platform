'use client';

import { useEffect, useState } from 'react';
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

// Dummy crop data — expand this
const cropData: Record<string, string[]> = {
  Lahore: [
    'Major crops: Wheat, Rice, Sugarcane',
    'High irrigation coverage and fertile alluvial soil',
    'Second cropping pattern common: wheat followed by rice',
  ],
  Multan: [
    'Known for Cotton and Mango farming',
    'Moderate wheat yield due to semi-arid climate',
    'Important agribusiness hub in Southern Punjab',
  ],
  Faisalabad: [
    'Wheat and Sugarcane dominate',
    'Irrigated by Lower Chenab Canal',
    'Dense cropping with limited fallow land',
  ],
};

export default function PakistanMap() {
  const [adm3, setAdm3] = useState<FeatureCollection | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictInfo | null>(null);

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
      click: (e: L.LeafletMouseEvent) => {
        e.originalEvent.stopPropagation();
        setSelectedDistrict({
          name,
          facts: cropData[name] || ['No crop data available for this district.'],
        });
      },
      mouseover: () => (layer as LeafletGeoJSON).setStyle({ fillOpacity: 0.6 }),
      mouseout: () => (layer as LeafletGeoJSON).setStyle({ fillOpacity: 0.3 }),
    });
  };

  return (
    <div className='px-8 pt-8 flex flex-col justify-start'>
        <h1 className="text-xl font-bold text-gray-800 mb-8 mt-8">Region-Specific Crop Insights</h1>

        <div className="flex flex-col items-center w-full">

        
        <div style={{ height: '600px', width: '100%' }}>
            <MapContainer
            center={[30.3753, 69.3451]}
            zoom={5}
            scrollWheelZoom={true}
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
            <h2 className="text-xl font-bold text-gray-800 mb-2">
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
