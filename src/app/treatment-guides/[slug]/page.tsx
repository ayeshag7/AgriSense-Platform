'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import DarkModeToggle from '@/components/ui/DarkModeToggle';

// Simulated guide content data
const guideData: Record<
  string,
  {
    title: string;
    image: string;
    sections: { heading: string; body: string }[];
  }
> = {
  'leaf-blight': {
    title: 'Leaf Blight Treatment Guide',
    image: '/images/leaf-blight.png',
    sections: [
      {
        heading: 'Overview',
        body: `Leaf blight is a common fungal disease affecting wheat and maize. It typically manifests as yellow to brown lesions that spread rapidly under moist conditions. Early detection and intervention are crucial for reducing crop loss.`,
      },
      {
        heading: 'Symptoms & Diagnosis',
        body: `- Yellowing and necrosis of leaf tips\n- Oval lesions with dark margins\n- Premature leaf senescence\n- Can be confirmed via visual inspection or lab culture`,
      },
      {
        heading: 'Recommended Treatment',
        body: `Use Mancozeb or Propiconazole-based fungicides. Apply as a foliar spray at a concentration of 2 ml/L. Spray during early morning or late evening to avoid phytotoxicity. Repeat every 7–10 days during the infection period.`,
      },
      {
        heading: 'Best Practices for Prevention',
        body: `- Ensure proper drainage to reduce humidity\n- Practice crop rotation\n- Use resistant varieties\n- Avoid overhead irrigation during wet seasons`,
      },
    ],
  },
  'rust-disease': {
    title: 'Rust Disease Management',
    image: '/images/rust-guide.png',
    sections: [
      {
        heading: 'Overview',
        body: `Rust is caused by various species of *Puccinia*. It thrives in cool, moist environments and appears as reddish-brown pustules on leaf surfaces.`,
      },
      {
        heading: 'Control Measures',
        body: `- Apply Tebuconazole or Triazole fungicides early\n- Remove infected debris from the field\n- Use resistant cultivars\n- Avoid excessive nitrogen fertilization`,
      },
      {
        heading: 'Surveillance Tips',
        body: `Monitor during early growth stages, especially during pre-flowering. Apply fungicide at the first sign of rust to minimize spread.`,
      },
    ],
  },
  'fungal-spray': {
    title: 'Fungal Spray Application Guide',
    image: '/images/fungal-spray.png',
    sections: [
      {
        heading: 'Overview',
        body: `Fungal infections such as Alternaria, Fusarium, and Rhizoctonia are common across cereal crops. Efficient fungicide application is key to containment.`,
      },
      {
        heading: 'Spraying Technique',
        body: `- Use a backpack or boom sprayer with fine nozzles\n- Maintain uniform pressure (20–30 psi)\n- Avoid spraying during midday to reduce evaporation`,
      },
      {
        heading: 'Fungicides',
        body: `Common choices include Mancozeb, Tebuconazole, and Chlorothalonil. Use at manufacturer-recommended rates and rotate actives to prevent resistance.`,
      },
    ],
  },
  'wheat-care': {
    title: 'Wheat Crop Care Best Practices',
    image: '/images/wheat-care.png',
    sections: [
      {
        heading: 'Soil and Sowing',
        body: `Ensure loamy, well-drained soil with pH 6.5–7.5. Optimum sowing time is mid-November. Use certified seeds with proper seed treatment.`,
      },
      {
        heading: 'Irrigation Schedule',
        body: `- Crown root initiation (20–25 DAS)\n- Tillering stage (40–45 DAS)\n- Flowering and grain filling\nAvoid water stress during flowering.`,
      },
      {
        heading: 'Fertilizer Strategy',
        body: `Apply NPK in a 120:60:40 ratio per hectare. Use split doses of nitrogen to reduce leaching.`,
      },
    ],
  },
  'rice-disease': {
    title: 'Rice Disease Control Manual',
    image: '/images/rice-disease.png',
    sections: [
      {
        heading: 'Key Diseases',
        body: `- Blast: Caused by *Magnaporthe oryzae*, leads to spindle-shaped lesions\n- Sheath blight: Caused by *Rhizoctonia solani*, forms lesions at the water line`,
      },
      {
        heading: 'Control Methods',
        body: `- Seed treatment with Tricyclazole (for blast)\n- Application of Azoxystrobin or Validamycin\n- Maintain 15x15 cm spacing to improve aeration`,
      },
      {
        heading: 'Cultural Practices',
        body: `Avoid excess nitrogen, drain fields periodically, and use disease-free seeds.`,
      },
    ],
  },
  'pest-management': {
    title: 'Integrated Pest Management (IPM)',
    image: '/images/pest-guide.png',
    sections: [
      {
        heading: 'Overview',
        body: `Pests such as stem borers, aphids, and thrips can reduce crop productivity by 30–40%. IPM is a sustainable, eco-friendly approach.`,
      },
      {
        heading: 'Biological Control',
        body: `- Introduce *Trichogramma* wasps for egg predation\n- Use neem-based botanical sprays (5%)\n- Attract beneficial insects using floral margins`,
      },
      {
        heading: 'Chemical Interventions',
        body: `Only apply pesticides when economic threshold level (ETL) is exceeded. Rotate insecticides to delay resistance.`,
      },
    ],
  },
};

export default function TreatmentGuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = guideData[slug];

  if (!guide) return notFound();

  return (
  <main className="min-h-screen px-12 pt-8 pb-12 bg-gray-100 dark:bg-[#1e1e1e] relative">

    <div className='flex flex-row justify-between items-center mb-8'>
        {/* Back Arrow */}
        <Link
            href="/treatment-guides"
            className="flex items-center gap-2 text-black dark:text-white hover:text-[#64FF64] dark:hover:text-[#64FF64] transition-colors"
          >
            <IconArrowLeft className="w-8 h-8" />
        </Link>

        {/* Theme Toggle */}
        <DarkModeToggle/>
    </div>

    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-10 mt-6">{guide.title}</h1>

    <div className="flex flex-col md:flex-row gap-10 items-start">
      {/* Image */}
      <div className="w-full md:w-5/12">
        <Image
          src={guide.image}
          alt={guide.title}
          width={400}
          height={300}
          className="rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-7/12 space-y-6 bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
        {guide.sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-md font-bold text-black dark:text-black bg-[#64FF64] px-3 py-1 rounded-md inline-block mb-3">
              {section.heading}
            </h2>

            {section.body.includes('\n-') ? (
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 leading-relaxed space-y-1">
                {section.body
                  .split('\n')
                  .filter((line) => line.trim())
                  .map((line, idx) =>
                    line.trim().startsWith('-') ? (
                      <li key={idx}>{line.replace(/^-\s*/, '')}</li>
                    ) : (
                      <p key={idx} className="mt-2">{line}</p>
                    )
                  )}
              </ul>
            ) : (
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {section.body}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  </main>
);

}
