// File: app/api/register/route.js
import User from "@/models/User";
import initDB from "@/utils/db";

initDB();

export async function POST(req) {
  const { name, email, password } = await req.json();

  try {
    let user = await User.findOne({ email });
    if (user) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    user = new User({ name, email, password });
    await user.save();

    return new Response(JSON.stringify({ message: "Account created" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
