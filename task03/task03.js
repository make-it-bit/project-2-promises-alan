const fetchCountry = async (countryCode) => {
  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryAndNeighbors = async () => {
  const estonia = await fetchCountry("est");

  const neighbors = await Promise.all(
    estonia.borders.map((border) => fetchCountry(border))
  );

  console.log(neighbors);
};

fetchCountryAndNeighbors();
