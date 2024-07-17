import { useState as o, useCallback as n } from "react";
const m = (e = 0) => {
  const [r, t] = o(e);
  return {
    count: r,
    increment: n(() => t((s) => s + 1), []),
    decrement: n(() => t((s) => s - 1), []),
    reset: n(() => t(e), [e])
  };
}, M = () => {
  const [e, r] = o(/* @__PURE__ */ new Map()), t = n((s, p) => {
    r((u) => {
      const c = new Map(u);
      return c.set(s, p), c;
    });
  }, []);
  return {
    map: e,
    set: t
  };
};
export {
  m as useCount,
  M as useMap
};
