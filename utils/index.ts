export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': 'ae13168bd7mshf66a404d4ee49f0p164c1bjsn909c8bf948b9',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',{
        headers:headers,
    })

    const result = await response.json()

    return result
}

export const calculateCarRent = (city_mpg : number,year:number) =>{
    const basePricePerDay = 50
    const mileageFactor = 0.01
    const ageFactor = 0.05
    const mileageRate = city_mpg * mileageFactor
    const ageRate = (new Date().getFullYear() - year) * ageFactor
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate
    return rentalRatePerDay.toFixed(0)
}