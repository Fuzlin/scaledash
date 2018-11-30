import * as Routes from "next-routes";

// @ts-ignore
export default (new Routes() as Routes.default)
  .add("home", "/", "/Home/Home")
  .add("settings", "/settings", "/Settings/Settings");
