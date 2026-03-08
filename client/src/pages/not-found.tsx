import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="card-maple max-w-md mx-4 text-center">
        <AlertCircle className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="text-2xl font-extrabold text-foreground mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
