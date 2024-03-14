if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  $('html').attr("data-bs-theme", "dark");
} else {
  $('html').attr("data-bs-theme", "light");
};