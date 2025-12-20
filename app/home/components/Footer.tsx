export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-center text-sm text-background/80">
          © {new Date().getFullYear()} Abdulwaheed Tella. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
