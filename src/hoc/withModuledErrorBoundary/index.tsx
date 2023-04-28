import { FC, Suspense } from "react";

import ErrorBoundary from "./ErrorBoundary";

const withModuledErrorBoundary =
  <T extends object>(Component: FC) =>
  (props: T) =>
    (
      <ErrorBoundary>
        <Suspense>
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    );

export default withModuledErrorBoundary;
