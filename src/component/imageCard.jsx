export default function ImageCard({ src, alt }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">

      {/* IMAGE */}
      <img
        src={src}
        alt={alt}
        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* TEXT LABEL */}
      <div className="absolute bottom-4 left-4 right-4 text-white z-20 
      opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="font-semibold text-lg drop-shadow-lg">{alt}</h3>
        <p className="text-sm text-gray-200 drop-shadow-md">
          Tap to explore more deliciousness
        </p>
      </div>

    </div>
  );
}
