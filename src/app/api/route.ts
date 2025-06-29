export async function GET() {
  return Response.json({ message: "Hello World" });
}

export async function HEAD() {
  return Response.json({ message: "Hello World" });
}

export async function POST(request: Request) {
  console.log("request", request);
  return Response.json({ message: "Hello World" });
}

export async function PUT(request: Request) {
  console.log("request", request);
  return Response.json({ message: "Hello World" });
}

export async function DELETE(request: Request) {
  console.log("request", request);
  return Response.json({ message: "Hello World" });
}

export async function PATCH(request: Request) {
  console.log("request", request);
  return Response.json({ message: "Hello World" });
}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
export async function OPTIONS(request: Request) {
  console.log("request", request);
  return Response.json({ message: "Hello World" });
}
