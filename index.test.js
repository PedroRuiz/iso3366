/**
 * @author Pedro Ruiz Hidalgo <ruizhidalgopedro@gmail.com>
 * @pedroruizhidalg
 *
 * coding the world since 1983
 *
 * date 2019-12-23
 *
  *
 * Name: index.js
 *
 * Purpose: This privide all countries codes and names according iso3366-2
 *
 */

import { iso3366, iso3366Provinces, iso3366AutonomousCommunities } from './index'


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

test('Andalucía', () => {
  expect(iso3366AutonomousCommunities('ES-AN')).toEqual({
    "Subdivision category": "autonomous community",
    "3166-2 code": "ES-AN*",
    "Subdivision name": "Andalucía",
    "Local variant": "Junta de Andalucía",
    "Language code": "es",
    "Romanization system": "",
    "Parent subdivision": ""
  })
})

test('Asturias', () => {
  expect(iso3366AutonomousCommunities('ES-AS')).toEqual({
    "Subdivision category": "autonomous community",
    "3166-2 code": "ES-AS",
    "Subdivision name": "Asturias",
    "Local variant": "Principado de Asturias",
    "Language code": "",
    "Romanization system": "es",
    "Parent subdivision": ""
  })
})

test('Comunidad de Madrid', () => {
  expect(iso3366AutonomousCommunities('ES-MD')).toEqual({
    "Subdivision category": "autonomous community",
    "3166-2 code": "ES-MD",
    "Subdivision name": "Madrid",
    "Local variant": "Comunidad de Madrid",
    "Language code": "",
    "Romanization system": "es",
    "Parent subdivision": ""
  })
})

test('Provincia de Granada', () => {
  expect(iso3366Provinces('ES-GR')).toEqual({
    "Subdivision category": "province",
    "3166-2 code": "ES-GR",
    "Subdivision name": "Granada",
    "Local variant": "",
    "Language code": "es",
    "Romanization system": "",
    "Parent subdivision": "ES-AN"
  })
})

test('Provincia de Madrid', () => {
  expect(iso3366Provinces('ES-M')).toEqual({
    "Subdivision category": "province",
    "3166-2 code": "ES-M",
    "Subdivision name": "Madrid",
    "Local variant": "",
    "Language code": "es",
    "Romanization system": "",
    "Parent subdivision": "ES-MD"
  })
})

