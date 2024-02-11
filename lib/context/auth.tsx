import { useContext } from "react";
import { AuthContext } from "./auth.context";

const RequireAuth = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <> isAuthenticated </> : <> notAuthenticated</>;
};

export default RequireAuth;
