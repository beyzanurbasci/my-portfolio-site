import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const cvPages = ["/cv/page-1.png", "/cv/page-2.png"];

const CVPage = () => (
  <main className="min-h-screen bg-background text-foreground">
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-4 px-4 py-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="btn-secondary flex items-center gap-2 px-5 py-3 text-sm"
        >
          <ArrowLeft size={18} /> Geri Dön
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        {cvPages.map((page, index) => (
          <img
            key={page}
            src={page}
            alt={`Beyzanur Başçı CV sayfa ${index + 1}`}
            className="w-full rounded-lg border border-border bg-card shadow-2xl"
          />
        ))}
      </div>
    </div>
  </main>
);

export default CVPage;