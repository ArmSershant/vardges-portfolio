export function scrolling(e: any, viewName: string) {
  e.preventDefault();
  document
    .querySelector(`#${viewName}`)
    ?.scrollIntoView({ behavior: "smooth" });
}
