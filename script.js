const emailRegex = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
)
const bannerForm = document.querySelector(".banner-form")
const button = bannerForm.querySelector("button")
const input = bannerForm.querySelector("input")

button.addEventListener("click", (e) => {
  const inputValue = input.value
  if (!inputValue.match(emailRegex)) {
    e.preventDefault()
    bannerForm.classList.add("show-error")
  }
})
