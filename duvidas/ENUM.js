const seasons = {
	SUMMER: "summer",
	WINTER: "winter",
	SPRING: "spring",
	AUTUMN: "autumn",
}

let season = seasons.SUMMER

if (!season) {''
	throw new Error("Season is not defined")
}
console.log(season)

switch (season) {
	case seasons.SUMMER:
	// Do something for summer
	case seasons.WINTER:
	//Do something for winter
	case seasons.SPRING:
	//Do something for spring
	case seasons.AUTUMN:
	//Do something for autumn
}

//Use enums if there are a definite number of fixed values 
//for any one variable