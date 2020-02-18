var russia = {
    name: "Russia",
    cities: [
        moscow = {
            name: "Moscow",
            population: 12_692_466
        },
        stPetersburg = {
            name: "Saint-Petersburg",
            population: 5_392_992
        },
        novosibirsk = {
            name: "Novosibirsk",
            population: 1_618_039
        },
        yekaterinburg = {
            name: "Yekaterinburg",
            population: 1_483_119
        }
    ]
};

var china = {
    name: "China",
    cities: [
        beijing = {
            name: "Beijing",
            population: 21_150_000
        },
        shanghai = {
            name: "Shanghai",
            population: 24_150_000
        },
        chungking = {
            name: "Chungking",
            population: 30_165_000
        }
    ]
};

var germany = {
    name: "Germany",
    cities: [
        berlin = {
            name: "Berlin",
            population: 3_520_031
        },
        hamburg = {
            name: "Hamburg",
            population: 1_787_408
        },
        munich = {
            name: "Munich",
            population: 1_450_381
        }
    ]
};

var countries = [russia, china, germany];

function getCountryWithMaxCountCities(countries) {
    var name;
    var count = 0;

    for (var country in countries) {
        if (countries[country].cities.length > count) {
            count = countries[country].cities.length;
            name = [];
        }

        if (countries[country].cities.length === count) {
            name.push(countries[country].name)
        }
    }

    return name;
}

function getCountriesWithTotalPopulations(countries) {
    var countriesTotalPopulation = {};

    for (var country in countries) {
        var name = countries[country].name;

        var totalPopulation = countries[country].cities.reduce((total, city) => total + city.population, 0);

        countriesTotalPopulation[name] = totalPopulation;
    }

    return countriesTotalPopulation;
}

console.log(getCountryWithMaxCountCities(countries));
console.log(getCountriesWithTotalPopulations(countries));


