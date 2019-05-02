#### Problem
 Chcemy stworzyć internetowy kalkulator umożliwiający wykonywanie podstawowych działań arytmetycznych (dodawanie, odejmowanie, mnożenie, dzielenie), wzorowany na kalkulatorze Windowsa. Nie wymagamy, aby uwzględniał on kolejności wykonywania działań.
#### Budowa 
 Do prawidłowego działania będziemy potrzebowali przycisków cyfr od 0 do 9, czterech przycisków działań, przycisku obliczającego, kilku przycisków czyszczenia tj. CE, C, backspace oraz przycisku przecinka. Ich ułożenie może być identyczne z tym na kalkulatorze Windowsa. Poza tym użyjemy dużego pola do pokazania aktualnie przetwarzanej liczby. Tak jak w kalkulatorze Windowsa, dodamy nad nim jeszcze mniejsze pole do pokazania całego działania.
## Kod HTML
Wewnątrz `body` tworzymy `div`, który będzie zawierał cały kalkulator. 
Następnie, w jego wnętrzu tworzymy kolejny `div` - nasze pole do wyświetlania. Dodajemy do niego dwa mniejsze kontenery - pole, wyświetlające całe działanie i drugie, pokazujące sam wynik.
```HTML
<div id="main">
  <div id="area">
    <div id="inarea"></div>
    <div id="inarea2">0</div>
  </div>
</div>
```
Teraz musimy jeszcze dodać do głównego kontenera 20 przycisków z liczbami i operacjami. 
```HTML
<div id="main">
  <div id="area">
    <div id="inarea"></div>
    <div id="inarea2">0</div>
  </div>
    <button id= "CE">CE</button>
    <button id= "C">C</button>
    <button id= "backspace"><i class="fas fa-backspace"></i></button>
    <button class = "operation" id= "divide"><i class="fas fa-divide"></i></button>
    <button class = "number" id = "n7">7</button>
    <button class = "number" id = "n8">8</button>
    <button class = "number" id = "n9">9</button>
    <button class = "operation" id= "times"><i class="fas fa-times"></i></button>
    <button class = "number" id = "n4">4</button>
    <button class = "number" id = "n5">5</button>
    <button class = "number" id = "n6">6</button>
    <button class = "operation" id= "minus"><i class="fas fa-minus"></i></button>
    <button class = "number" id = "n1">1</button>
    <button class = "number" id = "n2">2</button>
    <button class = "number" id = "n3">3</button>
    <button class = "operation" id= "plus"><i class="fas fa-plus"></i></button>
    <button></button>
    <button class = "number" id = "n0">0</button>
    <button class = "comma" id = "comma">,</button>
    <button class = "operation" id= "equals"><i class="fas fa-equals"></i></button>
</div>
```
Znaczniki `<i>`, które użyliśmy to ładnie wyglądające ikonki ze strony [Font Awesome](https://fontawesome.com/). Dlatego, aby się poprawnie wyświetlały, musimy jeszcze dodać do `head` linijkę
```HTML
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
```
## Kod CSS
W celu równomiernego ułożenia elementów wewnątrz głównego kontenera, musimy użyć `display: grid` i podzielić kontener na 7 wierszy i 4 kolumny.
```CSS
#main {
  display: grid;
  width: 320px;
  height: 420px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  border: 1px solid black;
}
```
Chcemy teraz, aby `div #area` zajmował 4 kolumny szerokości i 2 wiersze wysokości. 
```CSS
#area {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  position: relative;
  padding-top: 30px;
}
```
Następnie umieszczamy `#inarea` w prawym górnym rogu `#area` i ustawiamy mały rozmiar czcionki (np. 16px). Chcemy, aby tekst pojawiał się przy prawej krawędzi kalkulatora.
```CSS
#inarea {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 16px;
  text-align: right;
  padding-top: 10px;
  padding-right: 5px;
}
```
Teraz ustawiamy w `#inarea2` duży rozmiar czcionki i wyrównanie tekstu do prawej krawędzi.
```CSS
#inarea2 {
  font-size: 47px;
  text-align: right;
}
```
W ten oto sposób zbudowaliśmy już szkielet naszego kalkulatora. Możemy zatem przejść do najważniejszej rzeczy, czyli zaprogramowana jego działania.