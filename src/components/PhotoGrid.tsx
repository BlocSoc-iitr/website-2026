const images = [
  '/images/1.JPG',
  '/images/2.JPG',
  '/images/3.JPG',
  '/images/4.JPG',
];

const PhotoGrid = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto pointer-events-auto">
      <h2 className="font-display font-bold text-2xl text-foreground mb-6 border-b-2 border-foreground pb-2 inline-block bg-background pr-4">
        Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-foreground mt-6">
        {images.map((src, i) => (
          <div key={i} className="border border-foreground overflow-hidden">
            <img
              src={src}
              alt={`BlocSoc community photo ${i + 1}`}
              className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGrid;
