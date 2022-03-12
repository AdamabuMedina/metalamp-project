import $ from "../vendor/jquery.min"

const dateInput = ".calendar-input"

$(dateInput).datepicker({
  clearButton: true,
  todayButton: true,
  multipleDates: 2,
  // minDate: new Date(),
  toggleSelected: false,
  offset: 5,
  range: true,
  prevHtml: '<svg><path d="M 13,10 l -7,7 l 7,7"></path><path d="M 6,17 l 16,0"></path></svg>',
  nextHtml: '<svg><path d="M 19,10 l 7,7 l -7,7"></path><path d="M 26,17 l -16,0"></path></svg>',
  language: {
    today: 'Применить',
  },
  navTitles: {
    days: 'MM yyyy',
  },
  // classes: "cards-number--five"
})
