'use client'

import { useEffect, useState } from 'react'
import { ROUTE_PATH, isParentRoute, routePaths, routes } from '@/routes'

const ItemClient = ({ params: { item } }: { params: { item: string[] } }) => {
  const [mounted, setMounted] = useState(false) // 마운트 여부 확인

  const path = ['', ...item].join('/') as ROUTE_PATH
  const route = routes[path]

  // 컴포넌트가 마운트(브라우저 로딩) 된 후에만 true로 변경
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!routePaths.includes(path) || isParentRoute(route) || !route.children) return null

  // 서버(빌드) 중일 때는 아무것도 그리지 마 (에러 방지 핵심)
  if (!mounted) return null

  const Component = route.children
  return <Component />
}

export default ItemClient