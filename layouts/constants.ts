import { iconFactory } from "~~/plugins/icons";
export const mainLinks = [
  {
    text: "Get Started",
    to: "/",
  },
  {
    text: "FORM & INPUTS",
    group: true,
    items: [
      {
        text: "form",
        to: "/form",
      },
      {
        text: "Text Fields",
        to: "/form/text-fields",
      },
      {
        text: "selects",
        to: "/form/selects",
      },
      {
        text: "checkboxes",
        to: "/form/checkboxes",
      },
      {
        text: "switches",
        to: "/form/switches",
      },
      {
        text: "radio buttons",
        to: "/form/radio-buttons",
      },
    ],
  },

  {
    text: "CONTAINMENT",
    group: true,
    items: [
      {
        text: "schedule",
        to: "/containment/schedule",
      },
      {
        text: "buttons",
        to: "/containment/buttons",
      },
      {
        text: "icons",
        to: "/containment/icons",
      },
      {
        text: "Date Picker",
        to: "/containment/date-picker",
      },
      {
        text: "Expansion Panel",
        to: "/containment/expansion-panel",
      },
      {
        text: "menu",
        to: "/containment/menu",
      },
      {
        text: "chips",
        to: "/containment/chips",
      },
      {
        text: "dialog",
        to: "/containment/dialog",
      },
      {
        text: "Tabs",
        to: "/containment/tabs",
      },
      {
        text: "Lists",
        to: "/containment/lists",
      },
    ],
  },
  {
    text: "LAYOUT",
    group: true,
    items: [
      {
        text: "Drawer",
        to: "/layout/drawer",
      },
    ],
  },

  // {
  //     icon: iconFactory.checking,
  //     text: 'Fichajes',
  //     to: 'checking'
  // },
  // {
  //     icon: iconFactory.holidays,
  //     text: 'Permisos',
  //     to: '/holidays'
  // },
  // {
  //     icon: iconFactory.replacements,
  //     text: 'Sustituciones',
  //     to: '/replacements'
  // },
  // {
  //     icon: iconFactory.message,
  //     text: 'Mensajes',
  //     to: '/message'
  // },
  // {
  //     icon: iconFactory.reports,
  //     text: 'reportes',
  //     to: '/reports'
  // },
  // {
  //     icon: iconFactory.remuneration,
  //     text: 'retribucion',
  //     to: '/remuneration'
  // },
  // {
  //     icon: iconFactory.accounting,
  //     text: 'contabilidad',
  //     to: '/accounting'
  // },
  // {
  //     icon: iconFactory.ads,
  //     text: 'publicidad',
  //     to: '/ads'
  // },
  // {
  //     icon: iconFactory.customer,
  //     text: 'Clientes',
  //     to: '/customers'
  // },
  // {
  //     icon: iconFactory.providers,
  //     text: 'Proveedores',
  //     to: '/providers'
  // },
  // {
  //     icon: iconFactory.incidents,
  //     text: 'Incidencias',
  //     to: 'incidents'
  // },
];
