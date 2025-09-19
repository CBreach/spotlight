import { Redirect } from "expo-router";

export default function Index() {
  return (
    <Redirect href="/(tabs)" /> // k, so this is where we redirect to the tab layout
    // important note: just redirect to /(tabs) not /(tabs)/index
  );
}
