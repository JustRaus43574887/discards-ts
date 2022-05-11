import React, { createContext } from "react";

type TContext = {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BottomNavContext = createContext<TContext>({
  setShowNav: () => {},
});
