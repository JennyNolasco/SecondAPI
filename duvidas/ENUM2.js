const seasons = {
	SUMMER: {
		BEGINNING: "beginning",
		ENDING: "summer.ending",
	},
	WINTER: "winter",
	SPRING: "spring",
	AUTUMN: "autumn",
}

let season = seasons.SUMMER.BEGINNING
console.log(season)

if (!season) {
	throw new Error("Season is not defined")
}

switch (season) {
	case seasons.SUMMER.BEGINNING:
	console.log(seasons.SUMMER.BEGINNING)
	case seasons.SUMMER.ENDING:
	// Do something for summer ending
	case seasons.SUMMER:
	// This will work if season = seasons.SUMMER
	// Do something for summer (generic)
	case seasons.WINTER:
	//Do something for winter
	case seasons.SPRING:
	//Do something for spring
	case seasons.AUTUMN:
	//Do something for autumn
}