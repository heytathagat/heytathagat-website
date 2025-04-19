import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-10 w-32" />
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Skeleton className="h-6 w-24 mx-auto mb-4" />
              <Skeleton className="h-12 w-full max-w-xl mx-auto mb-4" />
              <Skeleton className="h-6 w-full max-w-md mx-auto mb-8" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-12 w-40" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <Skeleton className="h-8 w-64 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />

                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Skeleton className="h-5 w-5 shrink-0 mt-0.5" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-40 mx-auto mb-4" />
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="p-3 bg-gray-50 rounded-lg">
                        <Skeleton className="h-8 w-12 mx-auto mb-1" />
                        <Skeleton className="h-4 w-20 mx-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
