import sortFlight from "../utils/sortFlight.js"

describe("sort flight by depature date", () =>{
    test("sort 2 flight", () =>{
        const atcual = sortFlight({
            flights : [{
                id: 2,
                name: "HS-654",
                plane: "GX658",
                departureDate: "2024-08-16 20:05:00",
                origin: "ARE",
                arrivalDate: "2024-08-16 21:05:00",
                destination: "BGR",
                stop: "3"


            },
            {
                id: 1,
                name: "VQ-503",
                plane: "BG125FF",
                departureDate: "2024-08-15 10:05:00",
                origin: "BEL",
                arrivalDate: "2024-08-15  12:05:00",
                destination: "COP",
                stop: "0"

            }

        ]
        })
        expect(actual).toEqual([
            {
                id: 1,
                name: "VQ-503",
                plane: "BG125FF",
                departureDate: "2024-08-15 10:05:00",
                origin: "BEL",
                arrivalDate: "2024-08-15  12:05:00",
                destination: "COP",
                stop: "0"

            },
{
            id: 2,
            name: "HS-654",
            plane: "GX658",
            departureDate: "2024-08-16 20:05:00",
            origin: "ARE",
            arrivalDate: "2024-08-16 21:05:00",
            destination: "BGR",
            stop: "3"


        }

        ])
    })
})