let count = 0;

export const incrementCount = () => {
  return new Promise((res) =>
    setTimeout(() => {
      res((count += 1));
    }, 1000)
  );
};
