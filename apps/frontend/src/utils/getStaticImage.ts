export function getStaticImagePath(path: string) {
  return import.meta.env.VITE_STATIC_IMAGE_PATH + path;
}
