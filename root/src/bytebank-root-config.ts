import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@bytebank/header",
  app: () => System.import<LifeCycles>("//localhost:8500/bytebank-header.js"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@bytebank/sidebar",
  app: () => System.import<LifeCycles>("//localhost:8501/bytebank-sidebar.js"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@bytebank/welcome",
  app: () => System.import<LifeCycles>("//localhost:8502/bytebank-welcome.js"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@bytebank/statement",
  app: () => System.import<LifeCycles>("//localhost:8503/bytebank-statement.js"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@bytebank/transaction",
  app: () => System.import<LifeCycles>("//localhost:8504/bytebank-transaction.js"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@bytebank/navbar",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "@bytebank/navbar"
//     ),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
