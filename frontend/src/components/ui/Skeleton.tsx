interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div className={`skeleton ${className}`} />
  );
}

export function WorkshopCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-56 h-52 sm:h-auto skeleton" />
        <div className="flex-1 p-5 space-y-3">
          <Skeleton className="h-4 w-20 rounded-lg" />
          <Skeleton className="h-6 w-3/4 rounded-lg" />
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-2/3 rounded-lg" />
          <div className="flex gap-3 mt-4">
            <Skeleton className="h-4 w-16 rounded-lg" />
            <Skeleton className="h-4 w-16 rounded-lg" />
            <Skeleton className="h-4 w-24 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkshopDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-72 sm:h-80 lg:h-96 w-full skeleton" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-4">
              <Skeleton className="h-6 w-40 rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4 rounded-lg" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-24 rounded-xl" />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-4">
              <Skeleton className="h-6 w-48 rounded-lg" />
              <div className="grid sm:grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-10 rounded-lg" />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-96 space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
              <Skeleton className="h-10 w-32 rounded-lg" />
              <Skeleton className="h-12 w-full rounded-lg" />
              <Skeleton className="h-12 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-2.5 w-full rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-2xl border border-gray-200 p-4 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="flex-1 space-y-3">
              <div className="flex gap-2">
                <Skeleton className="h-5 w-16 rounded-lg" />
                <Skeleton className="h-5 w-20 rounded-lg" />
              </div>
              <Skeleton className="h-5 w-2/3 rounded-lg" />
              <Skeleton className="h-4 w-1/2 rounded-lg" />
            </div>
            <Skeleton className="h-9 w-24 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
}
