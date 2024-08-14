import { CarProps, FilterProps } from "@/types"

export async function fetchCars(filters:FilterProps) {

    const {manufacturer,year,model,limit,fuel} = filters
        const headers = {
        'x-rapidapi-key': 'ae13168bd7mshf66a404d4ee49f0p164c1bjsn909c8bf948b9',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
        headers:headers,
    })
    

    const result = await response.json()
    // console.log({result})

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

export const generateCarImageUrl = (car: CarProps, angle? : string) => {
    const url= new URL ('https:/cdn.imagin.studio/getimage')
// console.log();


    const {make,year,model} = car;

    url.searchParams.append('customer','hrjavascript-mastery')
    // how to get the key
    url.searchParams.append('make',make)
    url.searchParams.append('modelFamily',model.split(' ')[0])
    url.searchParams.append('zoomType','fullscreen')
    url.searchParams.append('modalYear',`${year}`)
    url.searchParams.append('angle',`${angle}`)
console.log({url});

    return `${url}`
    
}

export const updateSearchParams = (type:string,value:string) => {
    const searchParams = new URLSearchParams(window.location.search)
            searchParams.set(type,value)
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        return newPathname;
} 