export function freezeBody() {
  if (document.body.classList.contains("no-scroll")) {
    return;
  }

  document.body.classList.add("no-scroll");
}

export function unfreezeBody() {
  document.body.classList.remove("no-scroll");
}
