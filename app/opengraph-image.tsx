import { ImageResponse } from "next/og";

export const alt = "WiliantoDev — Full-Stack Developer Laravel & Flutter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090B",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#3B82F6",
            letterSpacing: "0.15em",
            marginBottom: 24,
            textTransform: "uppercase",
          }}
        >
          Full-Stack Developer · Laravel & Flutter
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          WiliantoDev
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#A1A1AA",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          Web, aplikasi Android, dan backend API untuk kebutuhan nyata.
        </div>
      </div>
    ),
    size
  );
}