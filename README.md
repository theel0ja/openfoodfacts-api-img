# openfoodfacts-api-img

Fetch image URLs from OpenFoodFacts

## Public API
Example:

https://openfoodfacts-api-img.herokuapp.com/image_search/5410041001204

Example response (not actually pretty printed):

```json
{
  "images": {
    "ingredients": {
      "thumb": {
        "da": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_da.62.100.jpg",
        "de": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_de.48.100.jpg",
        "es": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_es.66.100.jpg",
        "fr": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_fr.8.100.jpg",
        "sv": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_sv.53.100.jpg",
        "en": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_en.44.100.jpg",
        "it": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_it.58.100.jpg"
      },
      "small": {
        "it": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_it.58.200.jpg",
        "fr": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_fr.8.200.jpg",
        "de": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_de.48.200.jpg",
        "da": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_da.62.200.jpg",
        "es": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_es.66.200.jpg",
        "sv": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_sv.53.200.jpg",
        "en": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_en.44.200.jpg"
      },
      "display": {
        "it": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_it.58.400.jpg",
        "sv": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_sv.53.400.jpg",
        "en": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_en.44.400.jpg",
        "fr": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_fr.8.400.jpg",
        "de": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_de.48.400.jpg",
        "da": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_da.62.400.jpg",
        "es": "https://static.openfoodfacts.org/images/products/541/004/100/1204/ingredients_es.66.400.jpg"
      }
    },
    "front": {
      "thumb": {
        "fr": "https://static.openfoodfacts.org/images/products/541/004/100/1204/front_fr.6.100.jpg"
      },
      "display": {
        "fr": "https://static.openfoodfacts.org/images/products/541/004/100/1204/front_fr.6.400.jpg"
      },
      "small": {
        "fr": "https://static.openfoodfacts.org/images/products/541/004/100/1204/front_fr.6.200.jpg"
      }
    },
    "nutrition": {
      "thumb": {
        "fr": "https://static.openfoodfacts.org/images/products/541/004/100/1204/nutrition_fr.21.100.jpg"
      },
      "display": {
        "fr": "https://static.openfoodfacts.org/images/products/541/004/100/1204/nutrition_fr.21.400.jpg"
      },
      "small": {
        "fr": "https://static.openfoodfacts.org/images/products/541/004/100/1204/nutrition_fr.21.200.jpg"
      }
    }
  }
}
```
