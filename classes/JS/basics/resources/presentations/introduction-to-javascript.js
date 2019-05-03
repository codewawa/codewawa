import React from 'react';
import WithSpectacle from '../../../../../src/utils/WithSpectacle';
import 'prismjs'
import 'prismjs/themes/prism.css'
import PrismCode from 'react-prism'
export default props => (
  <WithSpectacle render={({ Deck, Slide, Heading, Appear, Text, Layout, Fill, List, ListItem }) => (
    <Deck transition={["fade"]}>
      <Slide transition={["zoom"]} bgColor="primary">

        <Heading fit="fit">Wprowadzenie do JavaScript'u</Heading>
      </Slide>
      <Slide>
        <Heading size={3} fit>Let's back to 90s...</Heading>
      </Slide>
      <Slide>
        <Heading size={3} textColor="white" margin="1em">Główny cel</Heading>
        <Appear>
          <Heading size={2}>Manipulacja dokumentem</Heading>
        </Appear>
      </Slide>
      <Slide>
        <Heading fit textColor="black">Jak umieścić JS na naszej stronie?</Heading>
      </Slide>
      <Slide>
      <PrismCode component="pre" className="language-markup">
{`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <title>Awesome website</title>
  </head>
  <body>
    <!-- Rest of your site -->
    <script src="./scripts.js"></script>
  </body>
</html>
`}
</PrismCode>
       
      </Slide>
      <Slide>
<Heading size={4}>Zmienne</Heading>
        <Appear>
          
        <PrismCode component="pre" className="language-javascript"> 
            let message = 'Hello world!'
  </PrismCode>
        </Appear>
        <Appear>
<Heading size={4} style={{marginTop: '2em'}}>Stałe</Heading>
        </Appear>
        <Appear>
        <PrismCode component="pre" className="language-javascript"> 
            const PI = 3.14
  </PrismCode>
        </Appear>
      </Slide>
      <Slide>
        <Heading size={3} fit>Instrukcja warunkowa</Heading>
        <Appear>
           <PrismCode component="pre" className="language-javascript"> 
  {`if(true){
    doSomething();
  }else{
    doSomethingElse();
  }`}
  </PrismCode>
        </Appear>
      </Slide>
      <Slide>
        <Heading size={3} fit>Czy działa?</Heading>
        <Appear><Heading size={4} textColor="white" margin="1em">Sprawdź w konsoli</Heading></Appear>
      </Slide>
      <Slide>
   <PrismCode component="pre" className="language-javascript"> 
{`let x = 4;
console.log(x); // 4
`}
</PrismCode>
</Slide>
<Slide>
  <Heading>Napiszmy coś!</Heading>
  <Text margin="2em">Jeżeli 2 jest większe od zera, wypisz "2 jest liczbą dodatnią", w przeciwnym wypadku wypisz "2 jest liczbą niedodatnią"</Text>
</Slide>
  <Slide>
    <Heading fit textColor="black">Operatory logiczne</Heading>
    <PrismCode component="pre" className="language-javascript"> 
{`if(true == false) // jest równe
if(true === false) // jest identyczne
if(true != false) // nie jest równe
if(true !== false) // nie jest identyczne
if(2 > 1) // jest większe
if(2 < 1) // jest mniejsze
  `}
      </PrismCode>
 
  </Slide>
  <Slide>
    <Heading size={5}>Coś extra...</Heading>
         <PrismCode component="pre" className="language-javascript"> 
{`let y = 2;
let z = 3;
console.log(y + z); // ?
`}
</PrismCode>
<Appear>
   <PrismCode component="pre" className="language-javascript"> 
   console.log(y + z); // 5   Dlaczego nie 4?
   </PrismCode></Appear>
      </Slide>
      <Slide>
      <PrismCode component="pre" className="language-javascript"> 
      {`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Awesome website</title>
  </head>
  <body>
    <h1>Hello world!</h1>
    <input />
    <script src="./scripts.js"></script>
  </body>
</html>
`}
</PrismCode>
      </Slide>
      <Slide>
        <Heading fit textColor="black">Document Object Model</Heading>
        <Heading size={4} textColor="white">DOM</Heading>
      </Slide>
      <Slide>
<Layout>
      <Fill>
         <PrismCode component="pre" className="language-javascript"> const element = document.getElementByClassName('elementClass')</PrismCode>
         <PrismCode component="pre" className="language-javascript"> const element = document.getElementById('elementID')</PrismCode>
         <PrismCode component="pre" className="language-javascript" style={{marginTop: '2em'}}>const element = document.getElementByTagName('div')</PrismCode>
      </Fill>
</Layout>
</Slide>
<Slide>
  <Layout>
        <Fill>
         <PrismCode component="pre" className="language-javascript"> const element = document.querySelector('#elementID')</PrismCode>
         <PrismCode component="pre" className="language-javascript"> const element = document.querySelector('.elementClass')</PrismCode>
         <PrismCode component="pre" className="language-javascript"> const element = document.querySelector('div')</PrismCode>
    </Fill>
</Layout>
      </Slide>
      <Slide>
        <Heading textColor="black" fit>Modyfikowanie elementu</Heading>
      </Slide>
      <Slide>
        <Heading size={3}>Edycja tekstu</Heading>
         <PrismCode component="pre" className="language-javascript"> element.innerHTML = 'Foo'</PrismCode>
         <PrismCode component="pre" className="language-javascript"> element.innerText = 'Bar'</PrismCode>
        <Appear>
           <PrismCode component="pre" className="language-javascript"> {`element.innerText = '<b>Foo bar</b>'`}</PrismCode>
        </Appear>
      </Slide>
      <Slide>
        <Heading size={3}>Edycja stylów</Heading>
         <PrismCode component="pre" className="language-javascript"> element.style.color = 'red'</PrismCode>
         <PrismCode component="pre" className="language-javascript"> element.style.background = '#000'</PrismCode>
      </Slide>
      <Slide>
      <PrismCode component="pre" className="language-css"> 
{`#element{
  font-size: 2em;
}
`}</PrismCode>
 <PrismCode component="pre" className="language-javascript"> element.style.fontSize = '2em'</PrismCode>
      </Slide>
      <Slide>
        <Heading size={3} textColor="white">Dodatkowe</Heading>
        <List>
        <ListItem>Jak ustawić wartość pola tekstowego?</ListItem>
        <ListItem>Jak pobrać wartość pola tekstowego?</ListItem>
        <ListItem>Dynamiczne dodawanie klasy do elementu</ListItem>
        </List>
      </Slide>
<Slide>
<Heading>Gdzie szukać?</Heading>
<List>
  <ListItem>StackOverflow</ListItem>
  <ListItem>Mozilla Developer Network</ListItem>
  <ListItem>Youtube</ListItem>
  <ListItem>Scotch</ListItem>
  <ListItem>w3schools</ListItem>
</List>
</Slide>
<Slide>
  <Heading fit>Dziękuję za uwagę</Heading>
  <Heading size={4} margin="1em">Michał Oręziak</Heading>
  <Text margin="0.5em" size={6}>Na podstawie materiałów MDN.</Text>
</Slide>
    </Deck>
  )}/>
)

