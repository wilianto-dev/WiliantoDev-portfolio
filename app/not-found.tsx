import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-xs uppercase tracking-widest text-accent mb-4">404</p>
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Halaman tidak ditemukan
      </h1>
      <p className="text-text-muted mb-8 max-w-md">
        Halaman yang Anda cari mungkin sudah dipindahkan atau tidak pernah ada.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}