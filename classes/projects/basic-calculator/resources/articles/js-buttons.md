#### Przyciski usuwania
Teraz musimy do każdego przycisku dodać mechanizm działający po jego kliknięciu. Najpierw zaczniemy od przycisków usuwania. Chcemy, aby po kliknięciu na `CE` wszystko wróciło do wartości początkowych.
```JS
document.querySelector("#CE").addEventListener("click", function(){
  nums[0] = 0;
  nums[1] = null;
  cur = 0;
  operation = " ";
  add_comma = false;
  show();
});
```
Kolejnym przyciskiem, którym się zajmiemy, będzie `C`. Zamiast, tak jak `CE`, wracać do wartości początkowych, będzie on zmieniać wartość `nums[cur]` na 0.
```JS
document.querySelector("#C").addEventListener("click", function(){
  nums[cur] = 0;
  add_comma = false;
  show();
});
```
Trochę trudniejszym jest działanie przycisku `backspace`. Chcemy, aby usuwał on ostatnią cyfrę z `nums[cur]`. Robimy to w ten sposób, że zamieniamy tę liczbę na słowo, tworzymy kolejne, bez ostatniego znaku z poprzedniego słowa i zamieniamy je ponownie na liczbę. Musimy do tego użyć funkcji toString() i Number().  Wartość `cur=-1` zmienna ta w naszym kalkulatorze przyjmuje po kliknięciu przycisku `=`.  To pozornie dziwne rozwiązanie ma swoje cele. Jednym z nich jest właśnie uniemożliwienie użycia `backspace` po `=`. Możesz sprawdzić, że również na kalkulatorze Windowsa (jest to ideał, do którego dążymy)`backspace` nie działa po `=`.
```JS
document.querySelector("#backspace").addEventListener("click", function(){
  if(cur != -1){
    let res = nums[cur].toString(10);
    let res2 = "";
    for(var i = 0; i < res.length; i++)
    {
      if(i < res.length-1){
        res2 += res[i];
      }
    }
    nums[cur] = Number(res2);
    show();
  }
});
```
#### Przycisk przecinka
Jego mechanizm jest bardzo prosty, ponieważ po kliknięciu będzie on ustawiał po prostu wartość `add_comma` na `true`.
```JS
document.querySelector("#comma").addEventListener("click",function(){
	add_comma = true;
});
```
#### Przyciski cyfr
Ponieważ działanie każdego przycisku cyfry jest bardzo podobne, zdefiniujemy funkcję `addDigit()`. Jako parametr otrzymuje ona cyfrę, którą chcemy dodać. Musimy w tej funkcji rozważyć trzy osobne przypadki. Pierwszy z nich, to sytuacja, gdy `nums[cur] != null`. Jest to ten najbardziej intuicyjny przypadek - po prostu na końcu dopisujemy kolejną cyfrę. Musimy jednak sprawdzić, czy `add_comma` jest równe `true`. Jeśli tak, to przed tą cyfrą musimy dopisać jeszcze kropkę.
```JS
function addDigit(num){
  if(nums[cur] != null){
    let x = nums[cur].toString();
    if(add_comma)
    {
      x += ".";
      add_comma = false;
    }
    x += num.toString();
    nums[cur] = Number(x); 
    show();
  }
}
```
Drugi przypadek, czyli `nums[cur] === null` i `cur === 1` zachodzi, gdy użyjemy przycisku cyfry bezpośrednio po operacji arytmetycznej. W tym przypadku nie tyle dopisujemy cyfrę na końcu liczby, ale zmieniamy jej wartość  z `null` na poprawną wartość liczbową. Jednak znowu musimy sprawdzić, czy powinniśmy dodać do liczby kropkę. Jeśli tak, to musimy przed nią wstawić jeszcze 0.
```JS
else if(cur > -1){
  let x = "";
  if(add_comma)
  {
    x += "0.";
    add_comma = false;
  }
  x += num.toString();
  nums[cur] = Number(x);
  show();
}
```
Pozostał nam już teraz tylko trzeci przypadek, czyli `nums[cur] === null` i `cur === -1`. Taka sytuacja ma miejsce, gdy chcemy wpisać liczbę po kliknięciu na przycisk `=`. Właśnie aby wyróżnić ten przypadek ustawiamy wtedy `cur` na `-1`. Jeśli użyjemy `=` na ekranie kalkulatora pojawi się nam wynik poprzedniego zadania. Jak zobaczysz później, ten wynik jest zapisywany również do `nums[0]`, na wypadek, gdyby użytkownik chciał go użyć do kolejnej operacji. Jednak, jeśli bezpośrednio po `=` zostanie kliknięta jakaś cyfra, to oznacza, że kalkulator ma rozpocząć zupełnie nowe działanie. Dlatego tę cyfrę wpisujemy na `nums[0]` i ustawiamy `cur` na `0`. Również w tym przypadku dodajemy do liczby napis `0.`, jeśli tak każe `add_comma`.
```JS
else{
  cur = 0;
  let x = "";
  if(add_comma)
  {
    x += "0.";
    add_comma = false;
  }
  x += num.toString();
  nums[cur] = Number(x);
  show();
}
```
Pozostaje nam już tylko dodanie reakcji przycisków cyfr na kliknięcie, poprzez wywołanie `addDigit()`.
```JS
document.querySelector("#n0").addEventListener("click", function(){
	addDigit(0);
});
```
Powyższy kod dotyczy przycisku `0`. Trzeba go użyć dla wszystkich pozostałych przycisków, odpowiednio zmieniając cyfry.
#### Obliczanie wyniku
Zdefiniujemy pomocniczą funkcję `operate()`, która zwraca nam wynik działania (bądź `Error` przy dzieleniu przez `0`).
```JS
function operate(n1, n2, op){
  let x = 0;
  switch(op){
    case "+":
      x = n1+n2;
      break;
    case "-":
      x = n1-n2;
      break;
    case "*":
      x = n1*n2;
      break;
    case "/":
      if(n2 === 0){
      	return "error";
      }
      x = n1/n2;
      break;
    case " ":
      x = n1;
      break;
  }
  return x;
}
```
Możemy teraz zdefiniować działanie przycisku `=`. Chcemy, aby pod `nums[0]` wstawił on wynik działania, `nums[1]` zmienił na `null`, ustawił `cur` na `-1` i wymazał znak poprzedniej operacji. Oczywiście może się okazać, że pod `nums[0]` daliśmy `Error`. Dlatego w takim przypadku ustawiamy je na `0`. Na wszelki wypadek ustalamy `add_comma` na `false`, aby w kolejnym działaniu nie okazało się, że niepotrzebnie dodaliśmy przecinek.
```JS
document.querySelector("#equals").addEventListener("click",function(){
  add_comma = false;
  nums[0] = operate(nums[0], nums[1], operation);
  nums[1] = null;
  operation = " ";
  show();
  if(nums[0] === "error"){
    nums[0] = 0;
  }
  cur = -1;
});
```
#### Przyciski działań
Nasz kalkulator jest już prawie gotowy, jednak musimy jeszcze dodać mechanizmy przycisków działań arytmetycznych. Również w tutaj musimy rozważyć trzy przypadki. Pierwszy z nich to `cur < 1` (czyli `cur = 0` lub `cur = -1`). W tej sytuacji po prostu ustawiamy odpowiednio znak operacji i przesuwamy `cur` na `1`. Drugi przypadek to `cur = 1` i `nums[cur] != null`. Dzieje się tak wtedy, gdy użytkownik wpisze działanie, ale zamiast kliknąć na przycisk `=`, użyje przycisku działania. Chcemy wtedy, aby ta poprzednia operacja się wykonała i została podstawiona po `nums[0]`. Oprócz tego musimy wtedy odpowiednio zmienić `operation` i wyzerować `nums[1]`. Trzeci przypadek to `cur = 1` i `nums[cur] = null`. Taka sytuacja zachodzi wtedy, gdy użytkownik użyje jakiegoś przycisku działania, a później kliknie na inny. Wystarczy wtedy odpowiednio zmienić wartość `operation`. Tak jak w przypadku przycisku `=`, tutaj też musimy ustawić `add_comma` na `false`. Poniższy kod dotyczy przycisku `+`. Analogicznie powinien on wyglądać dla wszystkich przycisków działań.
```JS
document.querySelector("#plus").addEventListener("click",function(){
  add_comma = false;
  if(cur < 1){
    cur = 1;
    operation  = "+";
  }
  else{
    if(nums[cur] != null){
      nums[0] = operate(nums[0],nums[1],operation);
      nums[1] = 0;
      operation = "+";
    }
    else
    {
      operation = "+";
    }
  }
  show();
});
```
Nasz kalkulator jest teraz w pełni funkcjonalny.
