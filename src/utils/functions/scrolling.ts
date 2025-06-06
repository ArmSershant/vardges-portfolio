export function scrolling(
  e: React.MouseEvent<Element, MouseEvent>,
  viewName: string
) {
  e.preventDefault();
  document
    .querySelector(`#${viewName}`)
    ?.scrollIntoView({ behavior: "smooth" });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
}
