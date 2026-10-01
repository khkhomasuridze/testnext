import { Photo } from "../types"

interface PhotoListPropType {
  photos: Photo[]
}

export default function PhotoList({ photos }: PhotoListPropType) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <img
            src={photo.url}
            alt={photo.title}
            className="h-48 w-full object-cover"
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {photo.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
