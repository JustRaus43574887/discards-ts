import React, { useContext, useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import { BottomNavContext } from "../../context/BottomNavContext";

const Lazy: React.FC = () => {
  const { setShowNav } = useContext(BottomNavContext);

  useEffect(() => {
    setShowNav(false);
  }, [setShowNav]);

  return (
    <div style={{ padding: "20px 0px 20px 20px" }}>
      <Skeleton width={214} height={26} />

      <div style={{ marginTop: 30, display: "flex", overflow: "hidden" }}>
        <Skeleton width={165} height={34} style={{ marginRight: 8 }} />
        <Skeleton width={105} height={34} style={{ marginRight: 8 }} />
        <Skeleton width={105} height={34} />
      </div>

      <Skeleton width={165} height={26} style={{ marginTop: 27 }} />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Skeleton style={{ marginTop: 8 }} width={288} height={452} />
        <span
          style={{
            position: "absolute",
            marginLeft: 7,
          }}
        >
          <Skeleton width={164} height={26} style={{ marginBottom: 10 }} />
          <Skeleton width={164} height={394} />
        </span>
      </div>

      <div style={{ marginTop: 24, marginRight: 20, textAlign: "center" }}>
        <Skeleton width={165} height={34} />
      </div>
      <div
        style={{
          marginTop: 20,
          marginRight: 20,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Skeleton width={71} height={53} />
        <Skeleton width={71} height={53} style={{ margin: "0 25px" }} />
        <Skeleton width={71} height={53} />
      </div>
    </div>
  );
};

export default Lazy;
