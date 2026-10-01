import { getPhotos } from "@/app/features/photos/api/getPhotos"
import PhotoList from "@/app/features/photos/components/Photolist"

export default async function Photos() {

  const photos = await getPhotos()

  console.log(photos)

  return (
    <>
     <PhotoList photos={photos} />
    </>
  )
}
