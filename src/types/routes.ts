export enum Routes {
  LOGIN = "/login",
  HOME = "/",
  LOOS = '/loos',
  LOO = '/loo'
}

export const PublicRoutes = [Routes.HOME, Routes.LOGIN]
export const PrivateRoutes = [Routes.LOOS, Routes.LOO]