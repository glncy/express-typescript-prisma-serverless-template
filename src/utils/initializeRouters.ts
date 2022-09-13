import { Router, RouterImports } from "@/routers";

export const initializeRouters = (
  routers: Router[],
  imports: RouterImports
) => {
  return routers.map(({ basePath, router }: Router) => {
    return {
      basePath,
      router: router(imports),
    };
  });
};
