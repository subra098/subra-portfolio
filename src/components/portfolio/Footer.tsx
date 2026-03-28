import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="font-mono text-xs">
        &copy; {new Date().getFullYear()} Subrajit Jena. All rights reserved.
      </p>
    
    </div>
  </footer>
);

export default Footer;
