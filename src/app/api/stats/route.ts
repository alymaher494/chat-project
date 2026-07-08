import { NextResponse } from "next/server";

export async function GET() {
  // Default network stats — in production, this would query the IRC server
  // via InspIRCd's JSON API or a stats bot.
  // For the static portal build, these are sensible defaults that demonstrate the UI.
  const stats = {
    users: 847,
    channels: 234,
    servers: 3,
    uptime: "99.9%",
  };

  return NextResponse.json(stats, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}