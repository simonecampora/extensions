import { closeMainWindow, open } from "@raycast/api";

export default async function Command() {
  const url = "cleanshot://capture-previous-area";
  open(url);
  await closeMainWindow();
}
