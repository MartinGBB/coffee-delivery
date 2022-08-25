import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/default";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello world</h1>
    </ThemeProvider>
  )
}
