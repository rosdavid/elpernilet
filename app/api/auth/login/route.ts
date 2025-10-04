import { NextRequest, NextResponse } from "next/server";
import { authenticate, createSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const isValid = await authenticate(username, password);

    if (isValid) {
      await createSession();
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: "Credenciales incorrectas" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Error del servidor" },
      { status: 500 }
    );
  }
}
