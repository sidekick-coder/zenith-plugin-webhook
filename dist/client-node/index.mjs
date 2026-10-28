import { lifecycle as o, router as t, authGuard as i, menu as d } from "@sidekick-coder/zenith-kit/client";
import { definePlugin as r } from "@sidekick-coder/zenith-kit/shared";
const m = r(async () => {
  const e = "webhook";
  o.on("load", async () => {
    t.auto(/* @__PURE__ */ Object.assign({ "./pages/senders.vue": () => import("./senders-BRxkbD9-.mjs") }), {
      strip: ["pages"],
      prefix: `/admin/${e}`,
      guards: [i],
      refine: (n) => n.map((a) => (a.meta = {
        layout: "admin"
      }, a))
    }), d.add({
      label: $t("Senders"),
      icon: "lucide:send",
      group: $t("Webhook"),
      layout: "admin",
      to: `/admin/${e}/senders`
    });
  });
});
export {
  m as default
};
