export const dynamic = "force-dynamic"; // defaults to auto

// Under_dev
//  Is this secure? ARe these requests secured between the frontend
//  and backend automaticlly or does that need to be done manually?
//  -
//  How is using _this_ different from using server side functions being called
//   on client components.
//  -
//  This isn't in use and is more PoC then anything else
//

export async function GET(request: Request) {
  return new Response("Get's Hello world!");
}
export async function POST(request: Request) {
  return new Response("Post's Hello world!");
}
