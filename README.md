# Water My Plants API
## https://ft-water-my-plants-3.herokuapp.com
#### Plants

##### [GET] /api/plants
See the full array of plants
<details>
```JSON
[
    {
        "plant_id": 1,
        "nickname": "Fish",
        "species": "gillyweed",
        "h20_frequency": 3,
        "image": null,
        "plant_owner_id": 1,
        "plant_owner": "connie"
    },
    {
        "plant_id": 2,
        "nickname": "Tailss",
        "species": "dirigible plum",
        "h20_frequency": 3,
        "image": null,
        "plant_owner_id": 2,
        "plant_owner": "michael"
    },
    {
        "plant_id": 3,
        "nickname": "Tyke",
        "species": "mandrake",
        "h20_frequency": 3,
        "image": null,
        "plant_owner_id": 3,
        "plant_owner": "dave"
    },
    {
        "plant_id": 4,
        "nickname": "Pussy Patty",
        "species": "bubotuber",
        "h20_frequency": 3,
        "image": null,
        "plant_owner_id": 4,
        "plant_owner": "veronica"
    },
    {
        "plant_id": 5,
        "nickname": "Wiggles",
        "species": "venomous tentacula",
        "h20_frequency": 3,
        "image": null,
        "plant_owner_id": 5,
        "plant_owner": "jonathan"
    },
    {
        "plant_id": 6,
        "nickname": "Turtle",
        "species": "shrivelpig",
        "h20_frequency": 3,
        "image": null,
        "plant_owner_id": 6,
        "plant_owner": "daniel"
    }
]
```
</details>

##### [GET] /api/plants/:plant_id
See the plant data (including plant owner) at a :plant_id
<details>
/api/plants/1
```JSON
{
    "plant_id": 1,
    "nickname": "Fish",
    "species": "gillyweed",
    "h20_frequency": 3,
    "image": null,
    "plant_owner_id": 1,
    "plant_owner": "connie"
}
```
</details>

##### [POST] /api/plants/user/:user_id
Post a plant to a user's data using their user id
<details>
/api/plants/user/2
```JSON
{
    "plant_id": 9,
    "nickname": "Spike",
    "species": "cactus",
    "h20_frequency": 1200,
    "image": null
}
```
</details>

##### [PUT] /api/plants/:user_id/:plant_id
Edit a plant's information using the user id and the plant id
<details>
```JSON
{
    "nickname": "Spikey",
    "species": "cactus",
    "h20_frequency": 1200
}
```
</details>

##### [DELETE] /api/plants/:user_id/:plant_id
Remove a plant using the user id and the plant id
<details>
```JSON
{
    "message": "Did your plant die? That's okay. I'm only judging you the slightest bit."
}
```
</details>