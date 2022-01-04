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
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
