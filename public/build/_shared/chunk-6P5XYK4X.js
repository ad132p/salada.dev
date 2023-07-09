import {
  require_react,
  useMatches
} from "/build/_shared/chunk-KEZDWIBR.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/utils.js
var import_react2 = __toESM(require_react());
function useMatchesData(id) {
  const matchingRoutes = useMatches();
  const route = (0, import_react2.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  );
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user === "object" && typeof user.email === "string";
}
function useOptionalUser() {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return void 0;
  }
  return data.user;
}
function useUser() {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  }
  return maybeUser;
}

export {
  useUser
};
//# sourceMappingURL=/build/_shared/chunk-6P5XYK4X.js.map
