const n = (e = (/* @__PURE__ */ new Date()).getFullYear(), r) => {
  if (!Number.isInteger(e) || !Number.isInteger(r))
    throw new Error("Error: year and month must be integer numbers");
  if (r < 1 || r > 12)
    throw new Error("Invalid month. Month must be between 1 and 12.");
  return [4, 6, 9, 11].includes(r) ? 30 : r === 2 ? e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0) ? 29 : 28 : 31;
}, t = (e = (/* @__PURE__ */ new Date()).getFullYear()) => {
  if (Number.isInteger(e))
    return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
  throw new Error("Error: year must be an integer number");
};
export {
  t as checkIfLeapYear,
  n as getDaysInMonth
};
