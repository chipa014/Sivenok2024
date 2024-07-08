import { sendEmail } from "./sendEmail.js";

document
  .querySelectorAll("form")
  .forEach((form) => form.addEventListener("submit", sendEmail));
