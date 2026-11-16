import { Plugin, Style } from "@opencode/plugin/gui"
import css from "./custom-logo.css?inline"

export default Plugin.define({
  id: "custom-550p-logo",
  setup(ctx) {
    ctx.add(Style, css)
  },
})
