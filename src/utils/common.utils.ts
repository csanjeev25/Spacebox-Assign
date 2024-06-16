export const isNullOrEmptyArray = (array: any[] | null) =>
  !(Array.isArray(array) && array.length > 0);

export const generateGuid = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
