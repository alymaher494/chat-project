import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #f97316",
        }}
      >
        <span
          style={{
            color: "#f97316",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          #
        </span>
      </div>
    ),
    { ...size }
  );
}
