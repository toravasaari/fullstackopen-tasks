# Osa 0 tehtävät

Tässä on tehtävien 0.4 - 0.6 vastaukset. Kts. https://fullstackopen.com/osa0/web_sovelluksen_toimintaperiaatteita 

Tehtävissä pyydetään piirtämään erilaisia sekvenssikaavioita. Tässä on käytetty [mermaid](https://mermaid-js.github.io/mermaid/) nimistä laajennusta, jonka diagrammeja GitHub osaa automaattisesti renderöidä.


## Tehtävä 0.4

Tee kaavio, joka kuvaa tilannetta, jossa käyttäjä luo uuden muistiinpanon sivulla https://studies.cs.helsinki.fi/exampleapp/notes

### Vastaus

```mermaid
sequenceDiagram
    selain->>palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note<br>'note=uusi+viesti'
    palvelin-->>selain: HTTP 302 /exampleapp/notes

    Note over selain: selain tekee http-kutsun<br>palvelimen antamaan<br>uudelleenohjausosoitteeseen

    selain->>palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    palvelin-->>selain: HTML-dokumentti
    selain->>palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    palvelin-->>selain: main.css
    selain->>palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    palvelin-->>selain: main.js

    Note over selain: js-koodi haetuttaa JSON-datan

    selain->>palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    palvelin-->>selain: [{ content: "uusi viesti", date: "2022-12-08" }, ...]

    Note over selain: selain renderöi sivun
```


## Tehtävä 0.5

Tee kaavio tilanteesta, jossa käyttäjä menee selaimella osoitteeseen https://studies.cs.helsinki.fi/exampleapp/spa eli muistiinpanojen Single Page App-versioon.

### Vastaus

```mermaid
sequenceDiagram
    selain->>palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    palvelin-->>selain: HTML-dokumentti

    selain->>palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    palvelin-->>selain: main.css

    selain->>palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    palvelin-->>selain: spa.js

    Note over selain: spa.js-koodi haetuttaa JSON-datan

    selain->>palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    palvelin-->>selain: [{ content: "uusi viesti", date: "2022-12-08" }, ...]

    Note over selain: selain renderöi sivun
```


## Tehtävä 0.6

Tee kaavio tilanteesta, jossa käyttäjä luo uuden muistiinpanon single page -versiossa.

### Vastaus

```mermaid
sequenceDiagram
    Note over selain: spa.js lisää viestin listaan<br>ja lähettää tiedot selaimelle

    selain->>palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa<br>{"content": "spa viesti", "date": "2022-12-08T12:11:16Z"}
    palvelin-->>selain: HTTP 201<br>{"content": "note created"}
```
