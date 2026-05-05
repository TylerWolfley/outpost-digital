const year = document.querySelector("[data-year]");
const quoteForms = document.querySelectorAll("[data-quote-form]");

if (year) {
  year.textContent = new Date().getFullYear();
}

quoteForms.forEach((quoteForm) => {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(quoteForm);
    const name = String(data.get("name") || "").trim();
    const business = String(data.get("business") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const projectType = String(data.get("projectType") || "").trim();
    const goal = String(data.get("goal") || "").trim();
    const assets = String(data.get("assets") || "").trim();
    const need = String(data.get("need") || "").trim();

    const message = [
      "Website quote request",
      name ? `Name: ${name}` : "",
      business ? `Business: ${business}` : "",
      phone ? `Phone: ${phone}` : "",
      projectType ? `Project type: ${projectType}` : "",
      goal ? `Main goal: ${goal}` : "",
      assets ? `Assets/domain: ${assets}` : "",
      need ? `Need: ${need}` : "",
    ].filter(Boolean).join("\\n");

    window.location.href = `sms:+13073494694?body=${encodeURIComponent(message)}`;
  });
});
