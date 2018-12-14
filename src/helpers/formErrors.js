const transforErrors = (errors = []) => {
  let errorMap = {};
  errors.forEach(e => (errorMap[e.field] = e.message));
  return errorMap;
};

export default transforErrors;
