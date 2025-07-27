import { Suspense } from "react";
import RouteResultsClient from "./RouteResultsClient";

export const dynamic = "force-dynamic";

export default function RouteResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="flex justify-center items-center h-64 text-orange-600">
          <svg className="animate-spin h-6 w-6 mr-3 text-orange-500" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading route data...
      </div>
      </div>
    }>
      <RouteResultsClient />
    </Suspense>
  );
}
