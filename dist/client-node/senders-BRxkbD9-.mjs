import { defineComponent as te, onMounted as ne, onServerPrefetch as se, ref as W, unref as t, withCtx as l, createTextVNode as y, toDisplayString as $, createVNode as m, openBlock as S, createBlock as w, Fragment as re, renderList as ie, useSSRContext as oe } from "vue";
import { ssrRenderComponent as c, ssrInterpolate as T, ssrRenderList as le } from "vue/server-renderer";
import { useFetchPagination as ae, PageTitle as de, PageSubtitle as ue, ZButton as p, Icon as f, ZDialogForm as N, ZDataTable as ce, ZAlertButton as A, Badge as J, Switch as M } from "@sidekick-coder/zenith-kit/components";
import { validator as G } from "@sidekick-coder/zenith-kit/shared";
import { defineColumns as me, defineFormFields as fe, fetcher as C, toast as q } from "@sidekick-coder/zenith-kit/client";
const i = G.v, be = i.object({
  id: i.string(),
  name: i.string(),
  enabled: i.boolean(),
  trigger_events: i.array(i.string()),
  request_url: i.string(),
  request_method: i.optional(i.picklist(["GET", "POST", "PUT", "DELETE"])),
  request_headers: i.optional(i.record(i.string(), i.string())),
  request_body: i.optional(i.union([i.string(), i.record(i.string(), i.any())]))
}), V = i.omit(be, ["id", "enabled"]);
i.partial(V);
const H = /* @__PURE__ */ te({
  __name: "senders",
  __ssrInlineRender: !0,
  setup(j) {
    const { items: P, loading: h, load: g, hydrate: D } = ae("/api/webhook/senders", { limit: 100 }), Y = me([
      {
        id: "enabled",
        label: $t("Enabled"),
        field: "enabled"
      },
      {
        id: "name",
        label: $t("Name"),
        field: "name"
      },
      {
        id: "event",
        label: $t("Event"),
        field: "trigger_events"
      },
      { id: "actions" }
    ]);
    ne(D), se(D);
    const R = G.create((e) => e.intersect([
      e.omit(V, ["request_headers", "trigger_events"]),
      e.object({
        request_headers: e.optional(e.string()),
        trigger_events: e.string()
      })
    ])), O = fe({
      name: {
        component: "text-field",
        label: $t("Name"),
        placeholder: $t("New user notify")
      },
      trigger_events: {
        component: "textarea",
        label: $t("Events"),
        hint: $t('Separated by semicolons. ex "user:created;user:deleted"')
      },
      request_url: {
        component: "text-field",
        label: $t("Request URL"),
        placeholder: "https://example.com/webhook"
      },
      request_method: {
        component: "select",
        label: $t("Request Method"),
        options: [
          {
            label: "POST",
            value: "POST"
          },
          {
            label: "GET",
            value: "GET"
          },
          {
            label: "PUT",
            value: "PUT"
          },
          {
            label: "DELETE",
            value: "DELETE"
          }
        ]
      },
      request_headers: {
        component: "textarea",
        label: $t("Request Headers"),
        // split with new line, and key value with ":"
        hint: $t('One header per line, key and value separated by ":". ex "Content-Type: application/json"')
      },
      request_body: {
        component: "textarea",
        label: $t("Request Body"),
        hint: $t("You can use {{data.event}} to include the variables in the request body.")
      }
    });
    function L(e) {
      const s = {
        name: e.name,
        request_url: e.request_url,
        request_method: e.request_method,
        request_body: e.request_body,
        request_headers: e.request_headers || {}
      };
      if (e.trigger_events && (s.trigger_events = e.trigger_events.join(";")), e.request_headers) {
        const o = [];
        for (const [x, r] of Object.entries(e.request_headers))
          o.push(`${x}: ${r}`);
        s.request_headers = o.join(`
`);
      }
      return e.request_body && (s.request_body = JSON.stringify(e.request_body, null, 2)), s;
    }
    function U(e) {
      const s = {
        name: e.name,
        request_url: e.request_url,
        request_method: e.request_method,
        request_body: e.request_body
      };
      if (e.trigger_events && (s.trigger_events = e.trigger_events.split(`

;`).map((o) => o.trim())), e.request_headers) {
        const o = {};
        e.request_headers.split(`
`).forEach((r) => {
          const [n, u] = r.split(":").map((a) => a.trim());
          n && u && (o[n] = u);
        }), s.request_headers = o;
      }
      if (e.request_body)
        try {
          s.request_body = JSON.parse(e.request_body);
        } catch {
          throw q.error($t("Invalid JSON in request body.")), new Error("Invalid JSON in request body.");
        }
      return s;
    }
    const E = W([]), _ = W([]);
    async function K(e) {
      const [s] = await C.try("/api/webhook/senders", {
        method: "POST",
        data: U(e)
      });
      if (s) {
        q.error($t("Failed to create."));
        return;
      }
      q.success($t("Created successfully.")), g();
    }
    async function F(e, s) {
      const [o] = await C.try(`/api/webhook/senders/${e}`, {
        method: "PUT",
        data: U(s)
      });
      o || (q.success($t("Updated successfully.")), g());
    }
    async function z(e) {
      E.value.push(e);
      const [s] = await C.try(`/api/webhook/senders/${e}`, { method: "DELETE" });
      if (s) {
        E.value = [];
        return;
      }
      await new Promise((o) => setTimeout(o, 1e3)), q.success($t("Deleted successfully.")), g();
    }
    async function B(e) {
      _.value.push(e.id);
      const [s] = await C.try(`/api/webhook/senders/${e.id}/toggle`, { method: "POST" });
      if (s) {
        _.value = [];
        return;
      }
      await new Promise((o) => setTimeout(o, 800)), q.success($t("Updated successfully.")), _.value = [], g();
    }
    return (e, s, o, x) => {
      s('<!--[--><div class="mb-6 flex items-center justify-between gap-4"><div>'), s(c(t(de), null, {
        default: l((r, n, u, a) => {
          if (n)
            n(`${T(e.$t("Webhook senders"))}`);
          else
            return [
              y(
                $(e.$t("Webhook senders")),
                1
                /* TEXT */
              )
            ];
        }),
        _: 1
        /* STABLE */
      }, o)), s(c(t(ue), null, {
        default: l((r, n, u, a) => {
          if (n)
            n(`${T(e.$t("Manage your webhook senders here."))}`);
          else
            return [
              y(
                $(e.$t("Manage your webhook senders here.")),
                1
                /* TEXT */
              )
            ];
        }),
        _: 1
        /* STABLE */
      }, o)), s('</div><div class="flex items-center gap-2">'), s(c(t(p), {
        variant: "outline",
        size: "icon",
        disabled: t(h),
        onClick: t(g)
      }, {
        default: l((r, n, u, a) => {
          if (n)
            n(c(t(f), {
              name: "RefreshCw",
              class: ["size-4", { "animate-spin": t(h) }]
            }, null, u, a));
          else
            return [
              m(t(f), {
                name: "RefreshCw",
                class: ["size-4", { "animate-spin": t(h) }]
              }, null, 8, ["class"])
            ];
        }),
        _: 1
        /* STABLE */
      }, o)), s(c(t(N), {
        fields: t(O),
        title: e.$t("New Webhook Sender"),
        description: e.$t("Create a new webhook sender."),
        "submit-text": e.$t("Create"),
        schema: t(R),
        handle: K,
        onSubmit: t(g)
      }, {
        default: l((r, n, u, a) => {
          if (n)
            n(c(t(p), null, {
              default: l((d, b, v, k) => {
                if (b)
                  b(`${T(e.$t("Add new"))}`);
                else
                  return [
                    y(
                      $(e.$t("Add new")),
                      1
                      /* TEXT */
                    )
                  ];
              }),
              _: 1
              /* STABLE */
            }, u, a));
          else
            return [
              m(t(p), null, {
                default: l(() => [
                  y(
                    $(e.$t("Add new")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ];
        }),
        _: 1
        /* STABLE */
      }, o)), s("</div></div>"), s(c(t(ce), {
        loading: t(h),
        rows: t(P),
        columns: t(Y)
      }, {
        "row-enabled": l(({ row: r }, n, u, a) => {
          if (n)
            _.value.includes(r.id) ? n(c(t(f), {
              name: "Loader2",
              class: "animate-spin"
            }, null, u, a)) : n(c(t(M), {
              "model-value": !!r.enabled,
              onClick: (d) => B(r)
            }, null, u, a));
          else
            return [
              _.value.includes(r.id) ? (S(), w(t(f), {
                key: 0,
                name: "Loader2",
                class: "animate-spin"
              })) : (S(), w(t(M), {
                key: 1,
                "model-value": !!r.enabled,
                onClick: (d) => B(r)
              }, null, 8, ["model-value", "onClick"]))
            ];
        }),
        "row-event": l(({ row: r }, n, u, a) => {
          if (n)
            n(`<div class="flex flex-col gap-1"${a}><!--[-->`), le(r.trigger_events, (d) => {
              n(c(t(J), { key: d }, {
                default: l((b, v, k, Q) => {
                  if (v)
                    v(`${T(d)}`);
                  else
                    return [
                      y(
                        $(d),
                        1
                        /* TEXT */
                      )
                    ];
                }),
                _: 2
                /* DYNAMIC */
              }, u, a));
            }), n("<!--]--></div>");
          else
            return [
              m("div", { class: "flex flex-col gap-1" }, [
                (S(!0), w(
                  re,
                  null,
                  ie(r.trigger_events, (d) => (S(), w(
                    t(J),
                    { key: d },
                    {
                      default: l(() => [
                        y(
                          $(d),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ];
        }),
        "row-actions": l(({ row: r }, n, u, a) => {
          if (n)
            n(`<div class="flex justify-end items-center gap-2"${a}>`), n(c(t(N), {
              fields: t(O),
              title: e.$t("Edit Webhook Sender"),
              description: e.$t("Edit the webhook sender."),
              "submit-text": e.$t("Update"),
              schema: t(R),
              values: L(r),
              handle: (d) => F(r.id, d),
              onSubmit: t(g)
            }, {
              default: l((d, b, v, k) => {
                if (b)
                  b(c(t(p), {
                    variant: "ghost",
                    size: "icon"
                  }, {
                    default: l((Q, I, X, ee) => {
                      if (I)
                        I(c(t(f), { name: "Edit" }, null, X, ee));
                      else
                        return [
                          m(t(f), { name: "Edit" })
                        ];
                    }),
                    _: 2
                    /* DYNAMIC */
                  }, v, k));
                else
                  return [
                    m(t(p), {
                      variant: "ghost",
                      size: "icon"
                    }, {
                      default: l(() => [
                        m(t(f), { name: "Edit" })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ];
              }),
              _: 2
              /* DYNAMIC */
            }, u, a)), n(c(t(A), {
              variant: "ghost",
              loading: E.value.includes(r.id),
              onConfirm: (d) => z(r.id)
            }, {
              default: l((d, b, v, k) => {
                if (b)
                  b(c(t(f), { name: "trash" }, null, v, k));
                else
                  return [
                    m(t(f), { name: "trash" })
                  ];
              }),
              _: 2
              /* DYNAMIC */
            }, u, a)), n("</div>");
          else
            return [
              m("div", { class: "flex justify-end items-center gap-2" }, [
                m(t(N), {
                  fields: t(O),
                  title: e.$t("Edit Webhook Sender"),
                  description: e.$t("Edit the webhook sender."),
                  "submit-text": e.$t("Update"),
                  schema: t(R),
                  values: L(r),
                  handle: (d) => F(r.id, d),
                  onSubmit: t(g)
                }, {
                  default: l(() => [
                    m(t(p), {
                      variant: "ghost",
                      size: "icon"
                    }, {
                      default: l(() => [
                        m(t(f), { name: "Edit" })
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["fields", "title", "description", "submit-text", "schema", "values", "handle", "onSubmit"]),
                m(t(A), {
                  variant: "ghost",
                  loading: E.value.includes(r.id),
                  onConfirm: (d) => z(r.id)
                }, {
                  default: l(() => [
                    m(t(f), { name: "trash" })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "onConfirm"])
              ])
            ];
        }),
        _: 1
        /* STABLE */
      }, o)), s("<!--]-->");
    };
  }
}), Z = H.setup;
H.setup = (j, P) => {
  const h = oe();
  return (h.modules || (h.modules = /* @__PURE__ */ new Set())).add("src/client/pages/senders.vue"), Z ? Z(j, P) : void 0;
};
export {
  H as default
};
