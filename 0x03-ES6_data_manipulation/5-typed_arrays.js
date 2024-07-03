const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
};
export default createInt8TypedArray;
