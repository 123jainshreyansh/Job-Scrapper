import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../model/User";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    // ── Basic validation ──────────────────────────────────────────────────────
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { message: "Password must be at least 8 characters." },
        { status: 400 }
      );
    }

    // ── DB connection ─────────────────────────────────────────────────────────
    await dbConnect();

    // ── Duplicate email check ─────────────────────────────────────────────────
    const existing = await User.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return NextResponse.json(
        { message: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // ── Hash password & create user ───────────────────────────────────────────
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name: `${firstName.trim()} ${lastName.trim()}`,
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      provider: "credentials",
    });

    return NextResponse.json(
      { message: "Account created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("[/api/auth/register]", error);
    return NextResponse.json(
      { message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
