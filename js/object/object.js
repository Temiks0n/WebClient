function getCountriesWithMaxCountCities(countries) {
    var list = [];

    countries.filter(function (country) {
        return country.cities.length === getMaxCountCities(countries);
    })
        .forEach(function (country) {
            list.push(country.name);
        });

    return list;
}

function getMaxCountCities(countries) {
    return countries.reduce(function (maxCount, country) {
        if (country.cities.length > maxCount) {
            maxCount = country.cities.length;
        }
        return maxCount
    }, 0);
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

(function () {
    var countries = [
        {
            name: "Russia",
            cities: [
                {
                    name: "Moscow",
                    population: 12692466
                },
                {
                    name: "Saint-Petersburg",
                    population: 5392992
                },
                {
                    name: "Novosibirsk",
                    population: 1618039
                },
                {
                    name: "Yekaterinburg",
                    population: 1483119
                }
            ]
        },
        {
            name: "China",
            cities: [
                {
                    name: "Beijing",
                    population: 21150000
                },
                {
                    name: "Shanghai",
                    population: 24150000
                },
                {
                    name: "Chungking",
                    population: 30165000
                }
            ]
        },
        {
            name: "Germany",
            cities: [
                {
                    name: "Berlin",
                    population: 3520031
                },
                {
                    name: "Hamburg",
                    population: 1787408
                },
                {
                    name: "Munich",
                    population: 1450381
                }
            ]
        }
    ];

    console.log("Страны в массиве с максимальной численностью городов: ", getCountriesWithMaxCountCities(countries));
    console.log("Общее количество населения стран из массива: ", getCountriesWithTotalPopulations(countries));
}());
