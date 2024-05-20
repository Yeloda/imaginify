import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    // '/',
]);
const isPublicRoute = createRouteMatcher([
    '/',
    '/api/webhooks/clerk',
    '/api/webhooks/stripe',
]);

// export default clerkMiddleware();
export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req) && !isPublicRoute(req)) auth().protect();
  });

export const config = {
//   matcher: ["/((?!.*\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};