import $ from "../vendor/jquery.min"

const dateInput = ".calendar-input"

$(dateInput).datepicker({
  clearButton: true,
  todayButton: new Date(),
})
