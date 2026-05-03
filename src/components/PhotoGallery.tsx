import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg"].map(
    (file, index) => ({
      url: `${import.meta.env.BASE_URL}${file}`,
      title: `Internship memory ${index + 1}`,
      category: index < 3 ? "Campus" : "OJT",
    })
  );

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === photos.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="section section-ink">
      <div className="section-heading section-heading-wide">
        <span>Photo Notes</span>
        <h2>A visual journal of people, places, and moments around the work.</h2>
      </div>

      <div className="photo-wall">
        {photos.map((photo, index) => (
          <button
            key={photo.url}
            onClick={() => openLightbox(index)}
            className={`photo-tile photo-tile-${index + 1}`}
          >
            <img src={photo.url} alt={photo.title} />
            <span>{photo.category}</span>
          </button>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close image">
            <X size={24} />
          </button>
          <button
            className="lightbox__prev"
            onClick={(event) => {
              event.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>
          <img
            onClick={(event) => event.stopPropagation()}
            src={photos[selectedImage].url}
            alt={photos[selectedImage].title}
          />
          <button
            className="lightbox__next"
            onClick={(event) => {
              event.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  );
}
