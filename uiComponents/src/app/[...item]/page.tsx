import { routePaths } from '@/routes'
import ItemClient from './ItemClient' // 방금 만든 거 불러오기

// 1. 실제 화면은 ItemClient가 담당함
export default function Page({ params }: { params: { item: string[] } }) {
  return <ItemClient params={params} />
}

// 2. 배포할 때 미리 만들어둘 페이지 목록 (이건 여기서 담당!)
export function generateStaticParams() {
  return routePaths
    .filter((path) => path !== '/')
    .map((path) => ({
      item: [path.replace('/', '')],
    }))
}