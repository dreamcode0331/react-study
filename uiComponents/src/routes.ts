import Accordions from "./components/01_accordion"

export const routePaths = [
  '/',
  '/accordion',
  '/tabMenu',
  '/tooltip',
  '/modal',
  '/carousel',
  '/selectBox',
] as const
export type ROUTE_PATH = (typeof routePaths)[number]

type BaseRoute = {
  key: ROUTE_PATH
  link: ROUTE_PATH
  name: string
}
export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[]
}
export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null
}
export type ROUTE = ParentRoute | ChildRoute

export const routes: Record<ROUTE_PATH, ROUTE> = {
  '/': {
    key: '/',
    link: '/',
    name: 'root',
    children: [
      '/accordion',
      '/tabMenu',
      '/tooltip',
      '/modal',
      '/carousel',
      '/selectBox',
    ],
  },
  '/accordion': {
    key: '/accordion',
    link: '/accordion',
    name: '01. 아코디언',
    children: Accordions,
  },
  '/tabMenu': {
    key: '/tabMenu',
    link: '/tabMenu',
    name: '02. 탭메뉴',
    children: null,
  },
  '/tooltip': {
    key: '/tooltip',
    link: '/tooltip',
    name: '03. 툴팁',
    children: null,
  },
  '/modal': {
    key: '/modal',
    link: '/modal',
    name: '04. 모달',
    children: null,
  },
  '/carousel': {
    key: '/carousel',
    link: '/carousel',
    name: '05. 캐러셀',
    children: null,
  },
  '/selectBox': {
    key: '/selectBox',
    link: '/selectBox',
    name: '06. 셀렉트 박스',
    children: null,
  },
}

export const isParentRoute = (route: ROUTE): route is ParentRoute => Array.isArray(route.children)

export const gnbRootList = (routes['/'] as ParentRoute).children.map(r => routes[r])
