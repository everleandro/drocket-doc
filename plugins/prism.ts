import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-scss";

Prism.manual = true;
export const prism = {
  mounted(el: HTMLDivElement, binding: Record<string, any>) {
    let className = binding.value?.class || binding.value || "language-markup";
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    pre.setAttribute("data-start", binding.value?.dataStart || "1");
    if (!binding.value?.lineNumbers === false)
      className = `${className} line-numbers`;
    code.classList.add(className);
    code.setAttribute("data-prismjs-copy", "COPY");
    for (let i = 0; i < (el.childNodes || []).length; i++) {
      code.appendChild(el.childNodes[i].cloneNode(true));
    }
    while (el.childNodes.length > 0) {
      el.removeChild(el.childNodes[0]);
    }

    pre.appendChild(code);
    el.appendChild(pre);

    Prism.highlightAllUnder(el);
  },
  updated: function (el: HTMLDivElement, binding: Record<string, any>) {
    let className = binding.value?.class || binding.value || "language-markup";
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    pre.setAttribute("data-start", binding.value?.dataStart || "1");
    if (!binding.value?.lineNumbers === false)
      className = `${className} line-numbers`;
    code.classList.add(className);
    code.setAttribute("data-prismjs-copy", "COPY");
    for (let i = 0; i < (el.childNodes || []).length; i++) {
      code.appendChild(el.childNodes[i].cloneNode(true));
    }
    while (el.childNodes.length > 0) {
      el.removeChild(el.childNodes[0]);
    }

    pre.appendChild(code);
    el.appendChild(pre);

    Prism.highlightAllUnder(el);
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("prism", prism);
});
