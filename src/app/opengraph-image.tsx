import { ImageResponse } from "next/og";
import { profile, stats } from "@/data/content";

export const runtime = "edge";
export const alt = "Muhammad Shahbaz — Full Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0E14",
          backgroundImage:
            "radial-gradient(900px circle at 80% 0%, rgba(59,130,246,0.22), transparent 55%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#3B82F6",
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {"</>"}
          </div>
          <div style={{ color: "#8B949E", fontSize: 26, letterSpacing: 1 }}>
            mshahbaz.dev
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#E6EDF3", fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ color: "#60A5FA", fontSize: 40, fontWeight: 700, marginTop: 12 }}>
            {profile.role}
          </div>
          <div style={{ color: "#8B949E", fontSize: 30, marginTop: 10 }}>
            {profile.tagline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 48 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#22D3EE", fontSize: 44, fontWeight: 800 }}>
                {s.display}
              </div>
              <div style={{ color: "#8B949E", fontSize: 22 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
