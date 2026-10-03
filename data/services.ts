export type ServiceIconKey =
  | "globe"
  | "layout"
  | "code"
  | "smartphone"
  | "server"
  | "wrench";

export type Service = {
  id: string;
  icon: ServiceIconKey;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "01",
    icon: "globe",
    title: "Website Bisnis",
    description:
      "Pengembangan website untuk menyajikan profil perusahaan, layanan, dan informasi kontak dalam struktur yang jelas dan responsif.",
  },
  {
    id: "02",
    icon: "layout",
    title: "Landing Page",
    description:
      "Pengembangan halaman khusus untuk produk, layanan, atau kampanye dengan informasi terarah dan alur navigasi yang jelas.",
  },
  {
    id: "03",
    icon: "code",
    title: "Aplikasi Web",
    description:
      "Pengembangan aplikasi berbasis Laravel untuk pengelolaan data, pencatatan, dan proses operasional bisnis.",
  },
  {
    id: "04",
    icon: "smartphone",
    title: "Aplikasi Android",
    description:
      "Pengembangan aplikasi menggunakan Flutter dengan antarmuka dan fungsi yang disesuaikan dengan kebutuhan pengguna.",
  },
  {
    id: "05",
    icon: "server",
    title: "Backend & REST API",
    description:
      "Pengembangan backend dan API untuk autentikasi, pengelolaan data, serta integrasi antara aplikasi dan layanan.",
  },
  {
    id: "06",
    icon: "wrench",
    title: "Pemeliharaan Website",
    description:
      "Penanganan kendala teknis, pembaruan fitur, dan penyesuaian website terhadap kebutuhan operasional.",
  },
];