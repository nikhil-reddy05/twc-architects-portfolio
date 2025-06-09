import Image from "next/image";

export default function ProjectGallery({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(({ id, title, image }) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-xl shadow-lg group"
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full h-60 sm:h-64 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
