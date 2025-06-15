// app/components/ProjectGallery.jsx
import Image from "next/image";
import Link from "next/link";

export default function ProjectGallery({ projects, basePath }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(({ id, title, image, description, slug }) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-xl shadow-lg group"
        >
          <Link href={`/${basePath}/${slug}`} className="block w-full h-full">
            {/* 1) The image */}
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="object-cover w-full h-60 sm:h-64 lg:h-72 group-hover:brightness-50 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-1 w-full  flex justify-center xl:hidden">
              <h4 className="text-white text-sm text-center w-[70%] bg-[#0a0a0a]/90 backdrop-blur-sm font-semibold mb-2 rounded-2xl flex justify-center">
                {title}
              </h4>
            </div>
            {/* 3) Info overlay (title + description) */}
            <div
              className="
              absolute inset-0
              flex flex-col items-center justify-center
              p-4 text-center
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              z-20
            "
            >
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                {title}
              </h3>
              <p className="text-white text-sm sm:text-base">{description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
