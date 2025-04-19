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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-12 w-full max-w-md mb-2" />
                <Skeleton className="h-6 w-full max-w-sm mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Skeleton className="h-12 w-40" />
                  <Skeleton className="h-12 w-40" />
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                  <Skeleton className="absolute inset-4 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <Skeleton className="h-6 w-24 mx-auto mb-2" />
              <Skeleton className="h-10 w-full max-w-md mx-auto mb-2" />
              <Skeleton className="h-4 w-full max-w-sm mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <Skeleton key={i} className="h-64 w-full rounded-lg" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
