// import classes from "./layout.module.css";
import MainNavigation from "./mainNavigation";
function Layout(props) {
  return (
    
    <div>
        <MainNavigation />
      <main> {props.children}</main>
    </div>
  );
}
export default Layout;
