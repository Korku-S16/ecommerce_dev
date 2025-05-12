export default function ImageGallery() {
  const images = [
    "/image_57.png",
    "/image_61.png",
    "/image_62.png",
    "/image_63.png",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex md:flex-col gap-2">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="iPhone variant"
            className="w-16 h-20 object-fit border rounded"
          />
        ))}
      </div>
      <img
        src={images[0]}
        alt="Main iPhone"
        className="w-full max-w-md object-contain rounded"
      />
    </div>
  );
}
