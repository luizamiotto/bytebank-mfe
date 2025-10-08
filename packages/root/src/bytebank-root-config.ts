import { ResponsiveProvider, useResponsive } from "./contexts/ResponsiveContext";
import { registerApplication, start, LifeCycles } from "single-spa";
import "@bytebank/styles";

export { ResponsiveProvider, useResponsive };

registerApplication({
  name: "@bytebank/header",
  app: () => System.import<LifeCycles>("//localhost:8500/bytebank-header.js"),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@bytebank/sidebar",
  app: () => System.import<LifeCycles>("//localhost:8501/bytebank-sidebar.js"),
  activeWhen: (location) => location.pathname === '/',
});

// registerApplication({
//   name: "@bytebank/welcome",
//   app: () => System.import<LifeCycles>("//localhost:8502/bytebank-welcome.js"),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@bytebank/statement",
//   app: () => System.import<LifeCycles>("//localhost:8503/bytebank-statement.js"),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@bytebank/transaction",
//   app: () => System.import<LifeCycles>("//localhost:8504/bytebank-transaction.js"),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@bytebank/investments",
//   app: () => System.import<LifeCycles>("//localhost:8505/bytebank-investments.js"),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
