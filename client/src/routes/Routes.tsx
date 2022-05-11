import React, { Suspense } from "react";

import ErrorBoundary from "../components/loaders/ErrorBoundary";
import Preloader from "../components/loaders/Preloader";

import { QueryResult, useQuery } from "@apollo/react-hooks";
import ME_QUERY from "../apollo/graphql/queries/me";

import RenderPrivateRoutes from "./RenderPrivateRoutes";
import RenderPublicRoutes from "./RenderPublicRoutes";

const Routes: React.FC = () => {
  const { data }: QueryResult = useQuery(ME_QUERY);

  const { me } = data || {};

  return (
    <ErrorBoundary>
      <Suspense fallback={<Preloader />}>
        {me ? <RenderPrivateRoutes /> : <RenderPublicRoutes />}
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
