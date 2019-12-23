import { iso3366 } from './index'


test('Spain', () => {
  expect(iso3366('es')).toEqual({
    "espName": "España",
    "engName": "Spain",
    "alfa2Code": "ES",
    "alfa3code": "ESP",
    "numericCode": 724,
    "iso": "ISO 3166-2:ES",
    "independent": "Yes"
  })
})

test('Western Sahara', () => {
  expect(iso3366('eh')).toEqual({
    "espName": "Sahara Occidental",
    "engName": "Western Sahara",
    "alfa2Code": "EH",
    "alfa3code": "ESH",
    "numericCode": 732,
    "iso": "ISO 3166-2:EH",
    "independent": "No"
  })
})


test('United Kingdom of Great Britain and Northern Ireland', () => {
  expect(iso3366('gb')).toEqual({
    "espName": "Reino Unido",
    "engName": "United Kingdom of Great Britain and Northern Ireland",
    "alfa2Code": "GB",
    "alfa3code": "GBR",
    "numericCode": 826,
    "iso": "ISO 3166-2:GB",
    "independent": "Yes"
  })
})

test('Greece', () => {
  expect(iso3366('gr')).toEqual({
    "espName": "Grecia",
    "engName": "Greece",
    "alfa2Code": "GR",
    "alfa3code": "GRC",
    "numericCode": 300,
    "iso": "ISO 3166-2:GR",
    "independent": "Yes"
  })
})

test('Greece', () => {
  expect(iso3366('zm')).toEqual({
    "espName": "Zambia",
    "engName": "Zambia",
    "alfa2Code": "ZM",
    "alfa3code": "ZMB",
    "numericCode": 894,
    "iso": "ISO 3166-2:ZM",
    "independent": "Yes"
  })
})

test('Cocos (Keeling) Islands', () => {
  expect(iso3366('cc')).toEqual({
    "espName": "Isla del Coco",
    "engName": "Cocos (Keeling) Islands",
    "alfa2Code": "CC",
    "alfa3code": "CCK",
    "numericCode": 166,
    "iso": "ISO 3166-2:CC",
    "independent": "No"
  })
})

test('Cocos (Keeling) Islands', () => {
  expect(iso3366('li')).toEqual({
    "espName": "Liechtenstein",
    "engName": "Liechtenstein",
    "alfa2Code": "LI",
    "alfa3code": "LIE",
    "numericCode": 438,
    "iso": "ISO 3166-2:LI",
    "independent": "Yes"
  })
})