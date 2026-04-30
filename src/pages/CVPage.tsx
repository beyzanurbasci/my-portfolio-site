import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CVPage = () => (
  <main className="min-h-screen bg-background text-foreground">
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-4 px-4 py-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="btn-secondary flex items-center gap-2 px-5 py-3 text-sm"
        >
          <ArrowLeft size={18} /> Geri Dön
        </Link>
      </div>

      <iframe
        title="Beyzanur Başçı CV"
        src="/Beyzanur-Basci-CV.pdf#toolbar=1&navpanes=0"
        className="h-[calc(100vh-7rem)] w-full rounded-lg border border-border bg-card"
      />
    </div>
  </main>
);

export default CVPage;