import { registerApplication, start, LifeCycles } from "single-spa";
import "@bytebank/styles";
import "@bytebank/context";
import "@bytebank/components";

const getEl = (id: string) => () => document.getElementById(id);

registerApplication({
  name: "@bytebank/header",
  app: () => System.import<LifeCycles>("//localhost:8500/bytebank-header.js"),
  activeWhen: ["/"],
  customProps: { domElement: getEl('mf-header')() },
});

registerApplication({
  name: "@bytebank/sidebar",
  app: () => System.import<LifeCycles>("//localhost:8501/bytebank-sidebar.js"),
  activeWhen: ["/"],
  customProps: { domElement: getEl('mf-sidebar')() },
});

registerApplication({
  name: "@bytebank/central-box",
  app: () => System.import<LifeCycles>("//localhost:8502/bytebank-central-box.js"),
  activeWhen: ["/"],
  customProps: { 
    domElement: getEl('mf-central-box')(),
    content: "welcome"
  },
});

registerApplication({
  name: "@bytebank/statement",
  app: () => System.import<LifeCycles>("//localhost:8503/bytebank-statement.js"),
  activeWhen: ["/"],
  customProps: { domElement: getEl('mf-statement')() },
});

registerApplication({
  name: "@bytebank/transaction",
  app: () => System.import<LifeCycles>("//localhost:8504/bytebank-transaction.js"),
  activeWhen: ["/"],
  customProps: { domElement: getEl('mf-transaction')() },
});

registerApplication({
  name: "@bytebank/investments",
  app: () => System.import<LifeCycles>("//localhost:8505/bytebank-investments.js"),
  activeWhen: ["/"],
  customProps: { domElement: getEl('mf-investments')() },
});

start({
  urlRerouteOnly: true,
});
