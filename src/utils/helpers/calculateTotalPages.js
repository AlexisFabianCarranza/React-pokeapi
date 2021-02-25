export default (totalItems, limit) => {
  return totalItems % limit === 0
    ? totalItems / limit
    : Math.trunc(totalItems / limit) + 1;
};
