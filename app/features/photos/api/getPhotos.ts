import { Photo } from "../types"

export const getPhotos = async (): Promise<Photo[]> =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=5')
  
  if (!response.ok) {
    throw new Error(`Failed to fetch photos: ${response.status}`);
  }

  return response.json()
}