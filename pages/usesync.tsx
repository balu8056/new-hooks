import React, { useSyncExternalStore } from "react";

export default function UseSync() {
  const width = useSyncExternalStore((listener) => {
      window.addEventListener("resize", listener);
      return () => {
        window.removeEventListener("resize", listener);
      };
    },
    () => window.innerWidth, 
    () => 1
  );

  return <>Size: {width}</>;
};
