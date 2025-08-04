import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sheetId = process.env.SHEET_ID;
  if (!sheetId) return res.status(500).end();
  const auth = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    undefined,
    (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
  const sheets = google.sheets({ version: "v4", auth });
  const row = [
    new Date().toISOString(),
    req.headers["x-forwarded-for"] || req.socket.remoteAddress || "",
    req.headers["user-agent"] || ""
  ];
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] }
    });
  } catch (e) {
    console.error(e);
  }
  res.status(200).json({ ok: true });
}