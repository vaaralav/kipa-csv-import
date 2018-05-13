# kipa-csv-import

Tulosten tuonti KIPAan CSV:nä.

## Käyttö

Tulosta käyttöohje

```sh
./cli.js --help
```

## CSV-tiedoston muoto

Tiedostossa tulee olla kaksi saraketta ilman otsikkoriviä. Yhdessä tiedostossa tulee olla koko sarja.

```csv
<vartion_numero>,<tulos>
<vartion_numero>,<tulos>
```

### Sarakkeet

* `vartion_numero`
* `tulos`: numero / 'h' = hylätty / 'e' = vartio ei suorittanut tehtävää

Esimerkiksi

```CSV
1,5.0
42,0.0
```
