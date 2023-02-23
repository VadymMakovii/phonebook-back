const asyncHandler = async (func) => {
  try {
    return func;
  } catch (error) {
    console.warn(`Something went wrong! Error message:${error.message}`);
  }
};

module.exports = asyncHandler;