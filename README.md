# iso3366
Country names in Spanish and English, alphanumeric codes of two and three characters, iso 3166 for each code and Boolean depending on whether the country is independent

## Exports
index.js esports:
  - countryCodes, is an oject with all countries described in iso3366 with the following information 
  `code : {
    espName : "Name in Spanish",
    engName : "Name in English",
    alfa2Code : "XX",
    alfa3code : "XXX",
    numericCode : NNN,
    iso : "ISO 3166-2:XX",
    independent : "Yes | No"
  }`
  - iso3366 function:
  `export function iso3366( country ) 
{
  return countryCodes[country]
}
`

Thats all