import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
    return <DashboardSkeleton />;
}

// return <div>Loading...</div>;
// loading.tsxSuspense를 기반으로 구축된 특수한 Next.js 파일로, 페이지 콘텐츠가 로드되는 동안 대체 UI로 표시되는 폴백 UI를 생성할 수 있습니다.
// DashboardSkeleton 개쩐다
