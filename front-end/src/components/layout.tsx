import { UsernameProvider } from "../utils/hooks/name-provider";
import RouterComponent from "../utils/router-utils/router-utils";

export default function Layout() {
  return (
    <UsernameProvider>
        <RouterComponent/>
    </UsernameProvider>
  )
}
