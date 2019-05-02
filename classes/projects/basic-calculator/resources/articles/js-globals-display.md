## Kod JavaScript
#### Zmienne globalne
Jak już wspomniałem, do działania kalkulatora potrzebne jest pamiętanie dwóch liczb, obecnego działania arytmetycznego i pozycji w tabeli aktualnie przetwarzanej liczby. Potrzebujemy również zmiennej, sprawdzającej, czy został kliknięty przycisk wstawiający na końcu liczby przecinek. Zatem na początku kodu musimy ustawić ich początkowe wartości.
```JS
var nums = [0, null];
var cur = 0;
var operation = " ";
var add_comma = false;
```
#### Wyświetlanie
Zaczniemy teraz od funkcji `show()`, której używać będziemy do wyświetlania w odpowiednim miejscu aktualnych liczb i działania arytmetycznego. Na jej potrzeby zdefiniujemy pomocniczą funkcję `myToString()`. Będzie ona działać jak zwykłe `toString()`, ale w przypadku wartości null, zamiast błędu zwróci puste słowo.
```JS
function myToString(x){
	if(x != null){
  	return x.toString();
  }
  else{
  	return "";
  }
}
```
Teraz możemy zająć się naszą właściwą funkcją do wyświetlania. Na początek definiujemy zmienną `x`, która będzie słownym zapisem `nums[cur]`. Teraz musimy sprawdzić czy `x` nie jest pustym słowem. Dzieje się tak wtedy, gdy użytkownik klika na przycisk operacji arytmetycznej - `cur` zmienia się na 1, zaś wartość `nums[1]` wynosi nadal `null`. W takim przypadku pod `x` podstawiamy słowny zapis `nums[0]`.
```JS
function show(){
  let x = myToString(nums[cur]);
  if(x === ""){
  	x = myToString(nums[0]);
  }
}
```
Maksymalna długość napisu, który będziemy wyświetlać w większym polu to 22 znaki. Dlatego musimy zadbać, aby zmieściły się na ekranie. Dla odpowiednio dużej długości `x` zmniejszymy czcionkę w `#inarea2`. Do funkcji `show()` dodajemy poniższy kod.
```JS
let len = x.length;
switch (len) {
  case 14:
    document.querySelector("#inarea2").style.fontSize = "46px";
    break;
  case 15:
    document.querySelector("#inarea2").style.fontSize = "43px";
    break;
  case 16:
    document.querySelector("#inarea2").style.fontSize = "40px";
    break;
  case 17:
    document.querySelector("#inarea2").style.fontSize = "37px";
    break;
  case 18:
    document.querySelector("#inarea2").style.fontSize = "34px";
    break;
  case 19:
    document.querySelector("#inarea2").style.fontSize = "31px";
    break;
  case 20:
    document.querySelector("#inarea2").style.fontSize = "28px";
    break;
}
```
Pozostaje nam jeszcze to, co najważniejsze, czyli samo wyświetlanie. Ustawiamy napis w `#inarea2` na `x`, a w `#inarea` wpisujemy całe wyrażenie - `nums[0]`, `operation` i `nums[1]`. Używamy ponownie funkcji `myToString()`, aby w przypadku wartości `null` wyświetlić pusty ciąg znaków.
```JS
document.querySelector("#inarea2").innerHTML = x;
document.querySelector("#inarea").innerHTML = myToString(nums[0])+operation+myToString(nums[1]);
```