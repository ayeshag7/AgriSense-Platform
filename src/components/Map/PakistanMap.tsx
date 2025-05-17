'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L, { GeoJSON as LeafletGeoJSON, Layer, PathOptions } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Feature, FeatureCollection, Geometry } from 'geojson';

type DistrictInfo = {
  name: string;
  majorCrops: string[];
  emergingCrops?: string[];
  irrigation?: string;
  soilTypes?: string;
  challenges?: string[];
  livestock?: {
    cattle?: number;
    buffaloes?: number;
    sheep?: number;
    goats?: number;
    poultry?: number;
  };
};

// District-based crop info
const cropData: Record<string, {
  majorCrops: string[];
  emergingCrops?: string[];
  irrigation?: string;
  soilTypes?: string;
  challenges?: string[];
  livestock?: {
    cattle?: number;
    buffaloes?: number;
    sheep?: number;
    goats?: number;
    poultry?: number;
  };
}> = {
  Lahore: {
    majorCrops: ['Wheat', 'Rice', 'Sugarcane'],
    irrigation: 'High irrigation coverage via Ravi and canal networks',
    soilTypes: 'Fertile alluvial soils',
    challenges: ['Urban expansion reducing agricultural land'],
    livestock: {
      cattle: 340000,
      buffaloes: 379000,
      sheep: 99000,
      goats: 471000,
      poultry: 1000000,
    },
  },
  Multan: {
    majorCrops: ['Cotton', 'Mango'],
    emergingCrops: ['Chili', 'Sunflower'],
    irrigation: 'Canal irrigation from the Chenab River',
    soilTypes: 'Alluvial soils with good fertility',
    challenges: ['Pest infestations affecting cotton yield'],
    livestock: {
      cattle: 340000,
      buffaloes: 379000,
      sheep: 99000,
      goats: 471000,
      poultry: 1000000,
    },
  },
  Faisalabad: {
    majorCrops: ['Wheat', 'Maize', 'Sugarcane'],
    emergingCrops: ['Vegetables', 'Fruits'],
    irrigation: 'Irrigated via Lower Chenab Canal',
    soilTypes: 'Loamy soils suitable for diverse crops',
    challenges: ['Waterlogging and salinity in some areas'],
    livestock: {
      cattle: 369547,
      buffaloes: 455064,
      sheep: 163122,
      goats: 508488,
      poultry: 1000000,
    },
  },
  Quetta: {
    majorCrops: ['Apples', 'Grapes', 'Pomegranates'],
    irrigation: 'Karez system and tube wells',
    soilTypes: 'Sandy loam soils',
    challenges: ['Water scarcity and harsh climatic conditions'],
    livestock: {
      cattle: 11244,
      buffaloes: 25547,
      sheep: 163799,
      goats: 120384,
      poultry: 128331,
    },
  },
  Sargodha: {
    majorCrops: ['Kinnow (Citrus)', 'Wheat', 'Sugarcane'],
    irrigation: 'Irrigated by Jhelum tributaries',
    soilTypes: 'Fertile loamy soils',
    challenges: ['Citrus canker disease affecting orchards'],
    livestock: {
      cattle: 369547,
      buffaloes: 455064,
      sheep: 163122,
      goats: 508488,
      poultry: 1000000,
    },
  },
  Hyderabad: {
    majorCrops: ['Sugarcane', 'Banana', 'Mango', 'Chilies'],
    irrigation: 'Relies on Indus canal irrigation',
    soilTypes: 'Clayey soils with good moisture retention',
    challenges: ['Water scarcity during dry seasons'],
    livestock: {
      cattle: 76484,
      buffaloes: 309163,
      sheep: 29134,
      goats: 295962,
      poultry: 1000000,
    },
  },
  Mianwali: {
    majorCrops: ['Wheat', 'Cotton', 'Gram', 'Rice'],
    emergingCrops: ['Moong', 'Mash', 'Sesame', 'Guar', 'Sunflower'],
    irrigation: 'Canal-fed areas (Thal, Mohajir, Dullewala canals) and rain-fed zones',
    soilTypes: 'Loamy-clay in Piplan (irrigated), sandy in rain-fed zones',
    challenges: ['Whitefly infestation affecting cotton yields', 'Scanty rainfall averaging 44mm annually'],
    livestock: {
      cattle: 324895,
      buffaloes: 117243,
      sheep: 245220,
      goats: 367131,
      poultry: 694138,
    },
  },
  Islamabad: {
  majorCrops: ['Wheat', 'Maize', 'Vegetables'],
  emergingCrops: ['Barley', 'Fruits'],
  irrigation: 'Mostly rain-fed with some tube well irrigation',
  soilTypes: 'Silty loam to clay loam in Margalla foothills',
  challenges: ['Erratic rainfall patterns', 'Urban sprawl affecting farm area'],
  livestock: {
    cattle: 47250,
    buffaloes: 68612,
    sheep: 55000,
    goats: 124000,
    poultry: 750000,
  },
},

Bahawalpur: {
  majorCrops: ['Cotton', 'Wheat', 'Sugarcane'],
  emergingCrops: ['Sunflower', 'Vegetables'],
  irrigation: 'Sutlej River and canal network (Sadiqia Canal system)',
  soilTypes: 'Sandy loam and desert loam in Cholistan area',
  challenges: ['Desertification risk', 'Water shortages in tail-end areas'],
  livestock: {
    cattle: 468000,
    buffaloes: 409000,
    sheep: 393000,
    goats: 716000,
    poultry: 1300000,
  },
},

Peshawar: {
  majorCrops: ['Wheat', 'Sugarcane', 'Tobacco'],
  emergingCrops: ['Fruits (Plums, Apricots)', 'Vegetables'],
  irrigation: 'Irrigated by Warsak Canal from Kabul River',
  soilTypes: 'Deep silty clay loam with good water retention',
  challenges: ['Declining water table', 'Urbanization'],
  livestock: {
    cattle: 293000,
    buffaloes: 171000,
    sheep: 79000,
    goats: 205000,
    poultry: 1100000,
  },
},
};

const setDistrictStyle = (): PathOptions => ({
  color: '#1e3a8a',
  weight: 0.5,
  fillOpacity: 0.3,
});

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
      click: () => {
        const data = cropData[name];
        if (data) {
          setSelectedDistrict({ name, ...data });
        } else {
          setSelectedDistrict({ name, majorCrops: ['No crop data available.'] });
        }
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

        {/* Info Panel */}
        {selectedDistrict && (
          <div className="mt-8 bg-white border border-gray-300 rounded-lg p-6 shadow-md w-full max-w-5xl">
            <h2 className="text-xl font-bold text-gray-800 bg-[#64FF64] mb-4 w-fit px-3 py-1 rounded">
              {selectedDistrict.name}
            </h2>

            <div className="space-y-2 text-gray-700">
              <p><strong>Major Crops:</strong> {selectedDistrict.majorCrops.join(', ')}</p>

              {selectedDistrict.emergingCrops && (
                <p><strong>Emerging Crops:</strong> {selectedDistrict.emergingCrops.join(', ')}</p>
              )}

              {selectedDistrict.irrigation && (
                <p><strong>Irrigation:</strong> {selectedDistrict.irrigation}</p>
              )}

              {selectedDistrict.soilTypes && (
                <p><strong>Soil Types:</strong> {selectedDistrict.soilTypes}</p>
              )}

              {selectedDistrict.challenges && (
                <div>
                  <strong>Challenges:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {selectedDistrict.challenges.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedDistrict.livestock && (
                <div>
                  <strong>Livestock:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {Object.entries(selectedDistrict.livestock).map(([type, count]) => (
                      <li key={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}: {count?.toLocaleString()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
