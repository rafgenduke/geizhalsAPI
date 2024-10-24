# geizhalsAPI
NodeJS script to fetch data from geizhals

## Documentation

Currently, there is only one function in the API that extracts information from searchresults.

| Method                                    | Description                                                   |
| ----------------------------------------- | ------------------------------------------------------------- |
| getResultsBySearchString(string, integer) | string: Searchstring, integer: Maximum number of return items |

Note that this code isn't really optimized yet and is more like a proof of concept.

It currently only works for geizhals.at.

**Example Code:**

```javascript
import geizhals from "../app.js";

let searchResult = await geizhals.getResultsBySearchString("playstation 5", 10);
```

**Example Result:**

```json
  [
  {
    "name": "Sony PlayStation 5 Slim Digital Edition - 1TB",
    "price": "€ 409,00",
    "rating": "Bewertung: 4.9 von 5 Sternen",
    "ratingAmount": 170,
    "offerAmount": 40,
    "link": "https://geizhals.at/sony-playstation-5-digital-edition-1tb-v142667.html",
    "specs": [
      { "title": "Auflösung", "descrption": "max. 8192x4608" },
      { "title": "CPU", "descrption": "AMD Zen 2 (8-Core)" },
      { "title": "GPU", "descrption": "AMD Radeon (10.28 TFLOPS)" },
      { "title": "RAM", "descrption": "16GB GDDR6" },
      { "title": "Speicher", "descrption": "1TB SSD" },
      { "title": "Laufwerk", "descrption": "ohne" }
    ]
  },
  {
    "name": "Sony PlayStation 5 Slim Digital Edition - 1TB weiß",
    "price": "€ 409,00",
    "rating": "Bewertung: 4.8 von 5 Sternen",
    "ratingAmount": 157,
    "offerAmount": 25,
    "link": "https://geizhals.at/sony-playstation-5-slim-digital-edition-1tb-weiss-1000040657-a3039142.html",
    "specs": [
      { "title": "Auflösung", "descrption": "max. 8192x4608" },
      { "title": "CPU", "descrption": "AMD Zen 2 (8-Core)" },
      { "title": "GPU", "descrption": "AMD Radeon (10.28 TFLOPS)" },
      { "title": "RAM", "descrption": "16GB GDDR6" },
      { "title": "Speicher", "descrption": "1TB SSD" },
      { "title": "Laufwerk", "descrption": "ohne" }
    ]
  }
]

```