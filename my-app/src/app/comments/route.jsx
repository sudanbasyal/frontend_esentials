import { headers } from "next/headers";
import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request) {
  const comment = await request.json();
  const newComment = { id: comments.length + 1, text: comment.text };
  comments.push(newComment);
  //
  return Response.json(newComment, { status: 201 });
}

