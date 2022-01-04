input.onButtonPressed(Button.A, function () {
    RTC_DS1307.DateTime(
    2022,
    1,
    4,
    19,
    30,
    0
    )
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("cas: " + RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND))
})
basic.showIcon(IconNames.Happy)
