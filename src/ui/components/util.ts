export const getLastImage = (images: { label: string }[]): string => {
  if (images && Array.isArray(images) && images.length > 0) {
    const lastItem = images[images.length - 1];
    return lastItem?.label ?? '';
  }
  return '';
};
