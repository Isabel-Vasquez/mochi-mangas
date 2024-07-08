export const validateRut = (rut) => {
  const rutPattern = /^[0-9]+-[0-9kK]{1}$/;
  return rutPattern.test(rut);
};
