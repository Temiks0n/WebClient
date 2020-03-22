function getCountriesWithMaxCountCities(countries) {
    var list = null;
    var count = 0;

    countries.forEach(function (country) {
        if (country.cities.length > count) {
            count = country.cities.length;
            list = [];
        }

        if (country.cities.length === count) {
            list.push(country.name)
        }
    });

    return list;
}

function getCountriesWithTotalPopulations(countries) {
    var countriesTotalPopulation = {};

    countries.forEach(function (country) {
        countriesTotalPopulation[country.name] = country.cities
            .reduce(function (total, city) {
                return total + city.population;
            }, 0);
    });

    return countriesTotalPopulation;
}

function main() {
    var countries = [
        {
            name: "Russia",
            cities: [
                moscow = {
                    name: "Moscow",
                    population: 12692466
                },
                stPetersburg = {
                    name: "Saint-Petersburg",
                    population: 5392992
                },
                novosibirsk = {
                    name: "Novosibirsk",
                    population: 1618039
                },
                yekaterinburg = {
                    name: "Yekaterinburg",
                    population: 1483119
                }
            ]
        },
        {
            name: "China",
            cities: [
                beijing = {
                    name: "Beijing",
                    population: 21150000
                },
                shanghai = {
                    name: "Shanghai",
                    population: 24150000
                },
                chungking = {
                    name: "Chungking",
                    population: 30165000
                }
            ]
        },
        {
            name: "Germany",
            cities: [
                berlin = {
                    name: "Berlin",
                    population: 3520031
                },
                hamburg = {
                    name: "Hamburg",
                    population: 1787408
                },
                munich = {
                    name: "Munich",
                    population: 1450381
                }
            ]
        }];

    console.log("Страны в массиве с максимальной численностью городов: ", getCountriesWithMaxCountCities(countries));
    console.log("Общее количество населения стран из массива: ", getCountriesWithTotalPopulations(countries));
}

main();
