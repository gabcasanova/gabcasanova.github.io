import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';

// Event photos are full-resolution originals, so resize them at build time (vite-imagetools):
// small square thumbnails for the grid and a capped size for the fullscreen modal.
const thumbImages = import.meta.glob('../assets/img/events/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: { w: '400', h: '400', fit: 'cover', format: 'webp', quality: '70' },
  import: 'default'
}) as Record<string, string>;

const fullImages = import.meta.glob('../assets/img/events/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: { w: '1600', h: '1600', fit: 'inside', withoutEnlargement: 'true', format: 'webp', quality: '80' },
  import: 'default'
}) as Record<string, string>;

interface EventImage {
  thumb: string;
  full: string;
}

// Group images by event folder, shuffled once per page load
const galleries: Record<string, EventImage[]> = {};
for (const path of Object.keys(thumbImages)) {
  const folder = path.split('/').slice(-2)[0];
  (galleries[folder] ??= []).push({ thumb: thumbImages[path], full: fullImages[path] });
}
for (const images of Object.values(galleries)) {
  images.sort(() => Math.random() - 0.5);
}

interface EventItem {
  name: string;
  date: string;
  description: string;
  pics: string;
  logo?: string;
}

export const Events = () => {
  const { t } = useTranslation("events");
  
  // Get events array from i18n JSON
  const events = t('eventsList', { returnObjects: true }) as EventItem[];

  const [currentGallery, setCurrentGallery] = useState<EventImage[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Modal navigation helpers
  const handleOpenModal = (index: number, gallery: EventImage[]) => {
    setSelectedIndex(index);
    setCurrentGallery(gallery);
  };

  return (
    <Page>
      {/* Page title */}
      <h1 className="mb-10 uppercase font-fredoka text-center xl:text-left">
        {t('common:pages.events.title')}
      </h1>
      
      <div className="max-w-[1000px] ml-auto mr-auto space-y-13">
        {Array.isArray(events) && events.map((event, eventIdx) => {
          const images = galleries[event.pics] || [];

          return (
            <div key={eventIdx} className="border-b border-gray-300 pb-13 last:border-none">
              <div className="flex items-center">
                {/* Institution Logo */}
                {event.logo && (
                  <img className="h-[70px] w-[70px] mr-3 border-1 p-1" src={event.logo} alt={event.name} />
                )}

                {/* Name and Description */}
                <div>
                  <h2 className="text-4xl font-walkaway">{event.name}</h2>
                  <p className="font-fredoka text-gray-500">{event.date}</p>
                </div>
              </div>

              <div>
                <p className="mt-7 text-justify font-fredoka break-words xl:break-normal">
                  {event.description}
                </p>
              </div>

              {/* Images */}
              <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 m-auto">
                {images.map((image, index) => (
                  <img
                    key={image.thumb}
                    src={image.thumb}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[172px] object-cover hover:brightness-110 hover:cursor-pointer "
                    onClick={() => handleOpenModal(index, images)}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* Fullscreen Overlay Modal */}
        {selectedIndex !== null && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setSelectedIndex(null)} // clicking background closes modal
          >
            {/* MODAL CONTENT that prevents background closing */}
            <div
              className="relative max-w-[100%] max-h-[100%] xl:max-w-[90%] xl:max-h-[90%]"
              onClick={(e) => e.stopPropagation()} // clicking image doesn't close
            >
              {/* IMAGE */}
              <img
                src={currentGallery[selectedIndex].full}
                alt="Enlarged event view"
                className="max-w-full max-h-[90vh] object-contain rounded-md"
              />
            </div>

            {/* ✕ CLOSE button (fixed to screen) */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="fixed top-0 right-5 text-white text-[90px] p-2 hover:cursor-pointer hover:text-gray-400 z-[999]"
              aria-label="Close image"
            >
              ×
            </button>

            {/* ‹ PREVIOUS button (if not first image) */}
            {selectedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(selectedIndex - 1);
                }}
                className="fixed top-1/2 left-5 transform -translate-y-1/2 text-white text-[90px] p-2 hover:text-gray-400 hover:cursor-pointer z-[999]"
              >
                ‹
              </button>
            )}

            {/* › NEXT button (if not last image) */}
            {selectedIndex < currentGallery.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(selectedIndex + 1);
                }}
                className="fixed top-1/2 right-5 transform -translate-y-1/2 text-white text-[90px] p-2 hover:text-gray-400 hover:cursor-pointer z-[999]"
              >
                ›
              </button>
            )}
          </div>
        )}
      </div>
    </Page>
  );
};