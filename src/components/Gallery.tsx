import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

// Gallery images - using direct Imgur links (i.imgur.com with file extension)
const galleryImages = [
  {
    id: 1,
    src: "https://i.imgur.com/xXyMopr.jpg",
    alt: "Island Peak summit at sunrise with Everest in background",
    placeholder: false,
  },
  {
    id: 2,
    src: "https://i.imgur.com/sOTdMp2.jpg",
    alt: "Climber crossing crevasse on Island Peak headwall",
    placeholder: false,
  },
  {
    id: 3,
    src: "https://i.imgur.com/KGnBaCq.jpg",
    alt: "High Camp setup with Imja Glacier below",
    placeholder: false,
  },
  {
    id: 4,
    src: "https://i.imgur.com/NM1XGlY.jpg",
    alt: "Team roped up on the summit ridge",
    placeholder: false,
  },
  {
    id: 5,
    src: "https://i.imgur.com/CIqdxN4.jpg",
    alt: "Prayer flags at Island Peak Base Camp",
    placeholder: false,
  },
  {
    id: 6,
    src: "https://i.imgur.com/57LXYNU.jpg",
    alt: "Panoramic view from Island Peak summit",
    placeholder: false,
  },
  {
    id: 7,
    src: "https://i.imgur.com/aXcKPns.jpg",
    alt: "Sherpa guide fixing ropes on headwall",
    placeholder: false,
  },
  {
    id: 8,
    src: "https://imgur.com/LHfK8JJ.jpg",
    alt: "Namche Bazaar with Kongde peak behind",
    placeholder: false,
  },
  {
    id: 9,
    src: "https://imgur.com/rpHkxvU.jpg",
    alt: "Namche Bazaar with Kongde peak behind",
    placeholder: false,
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative bg-slate-deep py-24 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-snow md:text-4xl lg:text-5xl">
            Summit <span className="text-gradient-glacier">Memories</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="mx-auto max-w-3xl font-inter text-lg text-muted-foreground">
            Moments captured at the roof of the world. Each image tells a story
            of determination, teamwork, and the indescribable beauty of the
            Himalayas.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4 break-inside-avoid"
            >
              <button
                onClick={() => openLightbox(index)}
                className="group relative block w-full overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl"
              >
                {image.placeholder ? (
                  <div
                    className="flex flex-col items-center justify-center bg-card border border-border"
                    style={{ height: `${200 + (index % 3) * 80}px` }}
                  >
                    <ImageIcon className="h-12 w-12 text-muted-foreground/50 mb-3" />
                    <p className="font-inter text-sm text-muted-foreground text-center px-4">
                      Image {index + 1}
                    </p>
                    <p className="font-inter text-xs text-muted-foreground/70 text-center px-4 mt-1">
                      Add your photo URL
                    </p>
                  </div>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-inter text-sm text-snow">
                    {image.alt}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Add Images CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="font-inter text-muted-foreground">
            Ready to add your own summit photos?{" "}
            <span className="text-primary">
              Replace the placeholder URLs in the Gallery component
            </span>
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-muted p-2 text-snow transition-colors hover:bg-muted-foreground/20"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-10 rounded-full bg-muted p-3 text-snow transition-colors hover:bg-muted-foreground/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-10 rounded-full bg-muted p-3 text-snow transition-colors hover:bg-muted-foreground/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-h-[80vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryImages[currentIndex].placeholder ? (
              <div className="flex h-96 w-96 flex-col items-center justify-center rounded-xl bg-card border border-border">
                <ImageIcon className="h-16 w-16 text-muted-foreground/50 mb-4" />
                <p className="font-inter text-muted-foreground">
                  Add your photo URL here
                </p>
              </div>
            ) : (
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="max-h-[80vh] max-w-full rounded-lg object-contain"
              />
            )}
            
            {/* Caption */}
            <p className="absolute -bottom-12 left-0 right-0 text-center font-inter text-sm text-muted-foreground">
              {galleryImages[currentIndex].alt}
            </p>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-muted px-4 py-2">
            <span className="font-montserrat text-sm text-snow">
              {currentIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
