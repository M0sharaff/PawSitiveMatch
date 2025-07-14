export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <p className="text-center text-sm text-foreground/60">
          © {new Date().getFullYear()} PawsitiveMatch. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
