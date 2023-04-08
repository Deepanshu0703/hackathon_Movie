import Login from "./login";
import Registration from "./registrationpage";
import { useContext } from "react";
import {LoginContextProvider} from "./context";
function Main() {
  const loginctx = useContext(LoginContextProvider);

  return (
    <div>
   <Login />

      {/* <Registration /> */}
    </div>
  );
}
export default Main;
