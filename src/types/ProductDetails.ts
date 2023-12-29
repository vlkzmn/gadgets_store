export interface ProductDetails {
  id: string,
  namespaceId: string,
  name: string,
  capacityAvailable: string[],
  capacity: string,
  priceRegular: number,
  priceDiscount: number,
  colorsAvailable: string[],
  color: string,
  image: string,
  images: string[],
  description: Description[],
  screen: string,
  resolution: string,
  processor: string,
  ram: string,
  camera: string,
  zoom: string,
  cell: string[]
}

export interface Description {
  title: string,
  text: string[]
}