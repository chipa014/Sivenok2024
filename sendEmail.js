export function sendEmail(event) {
  event.preventDefault();
  emailjs
    .send("service_j6cczgc", "template_9d2y5zc", {
      name: event.target[0].value,
      recipient: event.target[1].value,
    })
    .then(() => {
      alert("Спасибо! Скоро я свяжусь с вами");
    })
    .catch(() => {
      alert("Что-то пошло не так. Попробуйте перезагрузить страницу");
    });
}
