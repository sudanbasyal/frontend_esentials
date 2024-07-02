import { comments } from "../data";

export async function GET(_request, { params }) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}

export async function PATCH(request, { params }) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const body = await request.json();
  const { text } = body;
  comments[index].text = text;
  return Response.json(comments);
}

export async function DELETE(_request, { params }) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments.splice(index, 1);
  return Response.json(comments);
}



