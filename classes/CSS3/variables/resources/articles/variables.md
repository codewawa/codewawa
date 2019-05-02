# Zmienne CSS
## Po co?
W wielu językach programowania mamy zmienne. Są one bardzo pomocne i ułatwiają życie programiście. Dużo łatwiej jest zmienić wartość zmiennej w jednym miejscu niż zmieniać tą wartość w całym kodzie setki razy. Oprócz tego dzięki dowolnym nazw zmiennych, można dużo łatwiej zorientować się w kodzie. 
## Jak to działa?
Zmienne CSS mogą być globalne albo lokalne. Do tworzenia zmiennych globalnych służy nam pseudoklasa `:root`.
```css
:root {
	--nazwa-klasy: wartość;
}
```
Należy  pamiętać że nazwa klasy musi się zaczynać od dwóch myślników `--`. Oczywiście sama nazwa jest dowolna. W miejsce wartości wpisujemy wartość jaką chcemy zastosować. Przykładowo jeżeli nasza strona ma główny kolor np. niebieski, to zamiast wpisywać wszędzie `blue`, a potem zmieniać to wiele razy jak zmienimy zdanie, stwórzmy zmienną która będzie ten kolor przechowywać.
```css
:root {
	--glowny-kolor: blue;
}
```
Jeżeli chodzi o zmienne lokalne zasada jest dokładnie taka sama tylko zamiast pseudoklasy `:root` używamy danego elementu i wtedy zmienna działa tylko w zakresie tego elementu i jego dzieci.
```css
div {
	--nazwa-zmiennej-lokalnej: wartość;
}
```
## Jak skorzystać ze zmiennej?
Aby skorzystać ze zmiennej wystarczy użyć funkcji `var()`. Przykładowo użycie naszej zmiennej `--glowny-kolor`.
```css
body {
	background: var(--glowny-kolor);
}
```
Jest to równoznaczne z zapisem:
```css
body {
	background: blue;
}
```
## Co jeszcze warto wiedzieć o zmiennych?
Jeżeli utworzymy zmienną globalną i zmienną lokalną o tej samej nazwie, ale różnych wartościach to wartość przypisana do zmiennej lokalnej będzie użyta przez element do którego została przypisana i przez jego dzieci. Natomiast wartość przypisana do zmiennej globalnej będzie użyta wszędzie indziej. Czyli w przypadku takiego dokumentu HTML:
```html
<body>
	<div id="jeden">
		<div class="pudelko"></div>
		<div class="pudelko"></div>
		<div class="pudelko"></div>
	</div>
	<div id="dwa">
		<div class="pudelko"></div>
		<div class="pudelko"></div>
		<div class="pudelko"></div>
	</div>
</body>
```
i CSS:
```css
:root {
	--glowny-color: blue;
}

#dwa {
	--glowny-color: red;
}

.pudelko {
	width: 10px;
	height: 10px;
	background: var(--glowny-color);
}
```
To trzy pudelka w divie jeden będą miały kolor niebieski (wartość zmiennej globalnej), a trzy pudełka w divie dwa będą miały kolor czerwony (wartość zmiennej lokalnej).

Kolejną sprawą wartą uwagi jest to że w funkcji `var()` możemy dodać drugą wartość, która zostanie użyta jeżeli podana zmienna nie istnieje. Na przykład:
```css
/* 
:root {
	--glowny-color: blue; 
}
*/

body {
	background: var(--glowny-color, red);
}
```
W tym przypadku tło będzie czerwone, ponieważ zmienna `--glowny-color` nie została zadeklarowana.
 
