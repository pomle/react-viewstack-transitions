export function addStyle(style: string) {
  const element = document.createElement("style");
  element.textContent = style;
  document.head.appendChild(element);
}
