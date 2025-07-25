import { Suspense } from "react";
import RouteResultsClient from "./RouteResultsClient";

export const dynamic = "force-dynamic";

export default function RouteResultsPage() {
  return (
    <Suspense fallback={<p className="p-8 text-orange-600">Loading results...</p>}>
      <RouteResultsClient />
    </Suspense>
  );
}
