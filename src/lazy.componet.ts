import { lazy } from "react";

export const PublicacionesPage = lazy(() =>
  import("./pages/publicaciones/views/publicaciones.view").then(
    ({ PublicacionesPage }) => ({ default: PublicacionesPage })
  )
);

