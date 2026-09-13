import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';

// Import to dynamically grab all event images from src/assets
const allEventImages = import.meta.glob(
  '../assets/img/events/**/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
) as Record<string, string>;

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

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);

  const shuffledEvents = useMemo(() => {
    if (!Array.isArray(events)) return {};

    const mapped: Record<string, string[]> = {};

    events.forEach((event) => {
      mapped[event.pics] = Object.entries(allEventImages)
        .filter(([path]) => path.includes(event.pics))
        .map(([, src]) => src)
        .sort(() => Math.random() - 0.5);
    });

    return mapped;
  }, [events]);

  // Modal navigation helpers
  const handleOpenModal = (imageSrc: string, gallery: string[]) => {
    setSelectedImage(imageSrc);
    setCurrentGallery(gallery);
  };

  const selectedIndex = selectedImage ? currentGallery.indexOf(selectedImage) : -1;

  return (
    <Page>
      {/* Page title */}
      <h1 className="mb-10 uppercase font-fredoka text-center xl:text-left">
        {t('common:pages.events.title')}
      </h1>
      
      <div className="max-w-[1000px] ml-auto mr-auto space-y-13">
        {Array.isArray(events) && events.map((event, eventIdx) => {
          const images = shuffledEvents[event.pics] || [];

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
                {images.map((src) => (
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[172px] object-cover hover:brightness-110 hover:cursor-pointer "
                    onClick={() => handleOpenModal(src, images)}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* Fullscreen Overlay Modal */}
        {selectedImage !== null && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)} // clicking background closes modal
          >
            {/* MODAL CONTENT that prevents background closing */}
            <div
              className="relative max-w-[100%] max-h-[100%] xl:max-w-[90%] xl:max-h-[90%]"
              onClick={(e) => e.stopPropagation()} // clicking image doesn't close
            >
              {/* IMAGE */}
              <img
                src={selectedImage}
                alt="Enlarged event view"
                className="max-w-full max-h-[90vh] object-contain rounded-md"
              />
            </div>

            {/* ✕ CLOSE button (fixed to screen) */}
            <button
              onClick={() => setSelectedImage(null)}
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
                  setSelectedImage(currentGallery[selectedIndex - 1]);
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
                  setSelectedImage(currentGallery[selectedIndex + 1]);
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