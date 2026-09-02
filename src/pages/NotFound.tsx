import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-muted-foreground/20 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-3">{t.common.notFound}</h2>
      <p className="text-muted-foreground mb-8 max-w-sm">
        {t.projects.notFoundHint}
      </p>
      <Button asChild>
        <Link href="/">
          <Home className="w-4 h-4 mr-2" />
          {t.common.backHome}
        </Link>
      </Button>
    </div>
  );
}
