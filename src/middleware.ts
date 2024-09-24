import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks/(.*)",
]);

const isGuestRoute = createRouteMatcher(["/onboarding(.*)"]);
const isStudentRoute = createRouteMatcher(["/dashboard(.*)"]);
const isTeacherRoute = createRouteMatcher(["/teacher(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware((auth, request) => {
  const { sessionClaims } = auth();

  if (!isPublicRoute(request)) {
    auth().protect();
  }

  const userRole = sessionClaims?.metadata.user_role;

  if (isGuestRoute(request) && userRole !== "GUEST") {
    auth().protect((has) => {
      return has({ permission: "user_role:'GUEST'" });
    });
  }

  if (isStudentRoute(request) && userRole !== "STUDENT") {
    auth().protect((has) => {
      return has({ permission: "user_role:'STUDENT'" });
    });
  }

  if (isTeacherRoute(request) && userRole !== "TEACHER") {
    auth().protect((has) => {
      return has({ permission: "user_role:'TEACHER'" });
    });
  }

  if (isAdminRoute(request) && userRole !== "ADMIN") {
    auth().protect((has) => {
      return has({ permission: "user_role:'ADMIN'" });
    });
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
