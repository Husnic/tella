"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Something went wrong
          </h1>
          <p className="mt-3 text-sm text-muted">
            Please try again. If this persists, contact Abdulwaheed.
          </p>
          <p className="mt-2 text-xs text-muted">
            {error.digest ? `Error ID: ${error.digest}` : null}
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
            >
              Retry
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
