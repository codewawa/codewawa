Chociaż tworzenie projektów grupowych, zwłaszcza w informatyce, jest bardzo efektywną metodą pracy, to wiąże się z wieloma trudnościami. Jedną z nich jest konieczność zarządzania zmianami, które dokonują członkowie zespołu. Dlatego powstało wiele tzw. **systemów kontroli wersji**. Jednym z najpopularniejszych z nich jest **git**.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png)

Zanim rozpoczniemy pracę nad jakimkolwiek grupowym projektem musimy go pobrać ze [strony Gita](https://git-scm.com/download/). Kolejnym krokiem jest utworzenie własnego repozytorium z kopią projektu. Logujemy się na GitHub i otwieramy repozytorium naszego projektu np. `https://github.com/codewawa/todoapp`. W prawym górnym rogu klikamy przycisk _Fork_. Następnie klikamy na ikonę własnego konta, która się pojawiła. Teraz na swoim koncie powinniśmy mieć repozytorium o takiej nazwie jak grupowy projekt np. `https://github.com/tymek04/todoapp`.

Następnym krokiem jest sklonowanie repozytorium z GitHub na nasz komputer. W tym celu otwieramy wiersz polecenia (lub terminal) i przechodzimy na pulpit za pomocą polecenia:

```bash
cd Desktop
```


Następnie wpisujemy komendę `git clone` i adres naszego repozytorium na GitHub np.

```bash
git clone https://github.com/tymek04/todoapp
```

Za pomocą `cd` przechodzimy do sklonowanego folderu, w tym wypadku:

```bash
cd todoapp
```

![](https://www.linode.com/docs/assets/git-github-workflow-1000w.png)

by linode.com

Teraz musimy sprawić, aby zmiany innych członków w oryginalnym repozytorium pojawiały się na naszym komputerze. Wpisujemy komendę `git remote add upstream` i nazwę grupowego repozytorium. W moim przypadku to polecenie przyjmie postać:

```bash
git remote add upstream https://github.com/codewawa/todoapp
```
Następnie wpisujemy komendę:

```bash
git fetch upstream
```

Teraz, jeśli zobaczymy, że w grupowym repozytorium zaszły zmiany, to możemy użyć poniższych komend, a nasze repozytorium się zaktualizuje.

```bash
git pull upstream master && git push
```


Po wykonaniu tych wszystkich kroków możemy z czystym sumieniem zająć się zmienianiem kodu projektu. Gdy wprowadzimy jakieś znaczące poprawki, zapisujemy je a następnie wchodzimy do wiersza polecenia / terminala i wpisujemy następującą komędę:

```bash
git add .
```

(ta kropka nie kończy zdania, ale jest częścią polecenia). Potem dodajemy komendę `git commit -m` i opis dokonamych przez nas zmian np.

```bash
git commit -m ”Improved index.html and style.css footer added”
```

Jeśli teraz wejdziemy na GitHub, zobaczymy, że zmiany pojawiły się w naszym repozytorium, ale nie w grupowym. Aby nasze zmiany pojawiły się w głównym projekcie musimy stworzyć tzw. _pull request_. Na GitHub, w swoim repozytorium klikamy przycisk _New pull request_ a potem _Create pull request_. Nadajemy jakiś tytuł i ponownie klikamy przycisk _Create pull request_. Teraz musimy poczekać aż zarządzający projektem zaakceptuje nasze zmiany. Aby dowodzący nie spędzał całego czasu na rozpatrywaniu pull requests, nie należy tworzyć ich po każdym commit, ale dopiero, gdy jakaś ich liczba dodaje do projektu znaczącą użyteczność.
