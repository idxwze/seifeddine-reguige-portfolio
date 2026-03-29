import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top left, rgba(56, 215, 255, 0.22), transparent 30%), radial-gradient(circle at bottom right, rgba(45, 112, 255, 0.18), transparent 32%), #020a0e",
          color: "#f1fbff"
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.82 }}>Portfolio</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.06em" }}>{siteConfig.name}</div>
          <div style={{ fontSize: 28, maxWidth: 1000, color: "rgba(241,251,255,0.84)" }}>{siteConfig.heroSubheadline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#79e4ff" }}>{siteConfig.location}</div>
      </div>
    ),
    size
  );
}
