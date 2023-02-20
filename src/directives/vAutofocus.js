//! we can custom other event (like mounted, unmounted.....)
export const vAutofocus =  {
 mounted: (el) => {
  el.focus();
 }
}