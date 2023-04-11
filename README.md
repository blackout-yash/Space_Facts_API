# Space Facts API

An API that will return random facts about space.

## Credits
Special thanks to `https://www.thefactsite.com/100-space-facts/` for the facts!

## Usage:

+ `https://space-facts.vercel.app/blackout_yash/space-facts/api/all` to get all the facts at once.
+ Change `all` to parameter `?number=` to specify the number of facts you want to receive.
+ Change `all` to parameter `?index=` to specify the index of the fact you are targeting.

## Example:
+ `https://space-facts.vercel.app/blackout_yash/space-facts/api?length=1` returns:
```JSON
[
    {
        "fact": "Neptune takes nearly 165 Earth years to make one orbit of the Sun."
    }
]
```

+ `https://space-facts.vercel.app/blackout_yash/space-facts/api?length=2` returns:
```JSON
[
    {
        "fact": "Asteroids are the byproducts of formations in the solar system, more than 4 billion years ago."
    },
    {
        "fact": "Halley's Comet will pass over Earth again on July 26, 2061."
    }
]
```
