# WiliantoDev Portfolio

Portfolio personal **Wilianto** — Full-Stack Developer (Laravel & Flutter).

Live target domain: `https://wiliantodev.my.id`

## Stack

- Next.js 15 (App Router, Server Components default)
- TypeScript (strict)
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Instalasi

```bash
npm install
```

## Development

```bash
npm run dev
```

Buka http://localhost:3000.

## Scripts

| Script | Fungsi |
|--------|--------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Jalankan hasil build |
| `npm run typecheck` | Cek TypeScript |
| `npm run lint` | ESLint (lihat catatan di bawah) |

## Struktur

- `app/` — route, layout, metadata, sitemap, robots, OG image
- `components/` — komponen UI (Navbar, MobileMenu, Hero, Projects, dll.)
- `data/` — data profil, proyek, skills, services, navigation, social
- `lib/` — tipe TypeScript + DTO publik

## Cara Menambah Proyek

1. Buka `data/projects.ts`.
2. Tambahkan objek `Project` baru. Set `published: true` untuk memunculkannya.
3. Isi `editorialNotes` dengan catatan internal (tidak akan dirender).
4. Untuk screenshot:
   - Letakkan file di `public/projects/[slug]/`.
   - Isi `cover: { src, alt, kind, width, height }`.
   - Isi `gallery: [...]` jika ada beberapa gambar.
5. DTO publik (`lib/dto.ts`) otomatis menyaring field internal.

## Kontak & Sosial

- Email/WA: edit `data/profile.ts` → `contact.email` / `contact.whatsapp`.
- GitHub/LinkedIn/Instagram: edit `data/social.ts`.

Selama `null`, tombol/link tidak akan dirender.

## Deployment (Vercel)

1. Push ke GitHub.
2. Import repo di Vercel.
3. Tambahkan domain `wiliantodev.my.id` di **Project Settings → Domains**.
4. Ikuti record DNS yang ditampilkan Vercel (jangan menebak IP/CNAME).
5. Verifikasi HTTPS dan canonical setelah deploy.

## Catatan Tooling

- `eslint-config-next` harus selaras dengan major Next.js. Pada Next 15, gunakan `eslint-config-next@^15`.
- `next lint` di Next 15.5+ deprecated. Jika ingin lint non-interaktif, gunakan ESLint CLI + `eslint.config.mjs` (lihat dokumentasi Next).

## Keterbatasan

- Form kontak **belum aktif**. Semua kanal kontak `null`.
- Belum ada screenshot asli. Media proyek dirender sebagai *editorial cover* berlabel "Cover proyek".
- Data JDIH, tahun/peran proyek, dan stack Equator Online belum terkonfirmasi.