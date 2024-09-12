let twoLetterIso = ['au', 'br', 'ca', 'cn', 'eg', 'fr', 'de', 'gr', 'hk', 'in', 'ie', 'il', 'it', 'jp', 'nl', 'no', 'pk', 'pe', 'ph', 'pt', 'ro', 'ru', 'sg', 'es', 'se', 'ch', 'tw', 'ua', 'gb', 'us'];

let isoCounteries = {
    'au': 'Australia',
    'br': 'Brazil',
    'ca': 'Canada',
    'cn': 'China',
    'eg': 'Egypt',
    'fr': 'France',
    'de': 'Germany',
    'gr': 'Greece',
    'hk': 'Hong Kong',
    'in': 'India',
    'ie': 'Ireland',
    'il': 'Israel',
    'it': 'Italy',
    'jp': 'Japan',
    'nl': 'Netherlands',
    'no': 'Norway',
    'pk': 'Pakistan',
    'pe': 'Peru',
    'ph': 'Philippines',
    'pt': 'Portugal',
    'ro': 'Romania',
    'ru': 'Russian Federation',
    'sg': 'Singapore',
    'es': 'Spain',
    'se': 'Sweden',
    'ch': 'Switzerland',
    'tw': 'Taiwan',
    'ua': 'Ukraine',
    'gb': 'United Kingdom',
    'us': 'United States'
};

let counteries = [];
twoLetterIso.forEach(ele => {
    let obj = {
        iso_2_alpha: ele,
        png: `https://flagcdn.com/32x24/${ele}.png`,
        countryName: getCountryName(ele.toUpperCase())
    }

    counteries.push(obj);
});

function getCountryName(countryCode) {
    if (isoCounteries.hasOwnProperty(countryCode)) {
        return isoCounteries[countryCode];
    }

    return countryCode;
}

console.log(counteries);

export default counteries;