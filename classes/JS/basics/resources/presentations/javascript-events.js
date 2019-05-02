import React from 'react';
import WithSpectacle from '../../../../../src/utils/WithSpectacle';
import 'prismjs'
import 'prismjs/themes/prism.css'
import PrismCode from 'react-prism'

import jsLogo from '../../assets/jslogo-transparent.png';
import SplashImage from '../../assets/signal.jpg';
import doSomethingGreatImage from '../../assets/doSomethingGreat.jpg';
import wrongWayImage from '../../assets/wrongWay.jpg';
import bubblingCapturingImage from '../../assets/bubbling-capturing.jpg';

export default props => (
  <WithSpectacle render={({ 
    Appear,
    BlockQuote,
    Cite,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
  }) => (
    <Deck transition={["fade"]}>
      <Slide transition={["zoom"]} bgColor="primary">
        <Image src={jsLogo} fit height="30vh"/>

        <Heading size={1}>Javascript Events</Heading>
      </Slide>
      <Slide bgImage={SplashImage} bgDarken={0.5} transition={["spin"]} align="center flex-end">
      <Appear>
        <Heading size={3} fit textColor="primary">Event, czyli co?</Heading>
      </Appear>
      </Slide>
      <Slide>
          <Heading size={2}>Dynamiczność</Heading>
      </Slide>
      <Slide bgColor="black">
      <Heading size={2} textColor="primary">Basic events</Heading>
      <List textColor="white">
      <Appear><ListItem>click</ListItem></Appear>
      <Appear><ListItem>mouseover</ListItem></Appear>
      <Appear><ListItem>mouseout</ListItem></Appear>
      <Appear><ListItem>change</ListItem></Appear>
      <Appear><ListItem>input</ListItem></Appear>
      <Appear><ListItem>keyup</ListItem></Appear>
      <Appear><ListItem>copy</ListItem></Appear>
      <Appear><ListItem>paste</ListItem></Appear>
      </List>
      </Slide>
      <Slide>
        <Heading fit textColor="black">Easy...</Heading>
        <Appear><Heading fit textColor="white">Have done it</Heading></Appear>
      </Slide>
      <Slide align="center flex-start">
      <PrismCode component="pre" className="language-markdown">
      {`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Awesome website</title>
  </head>
  <body>
    <button onClick="doSomething()">Click me!</button>
    <script src="./scripts.js"></script>
    <!-- ^ doSomething function inside -->
  </body>
</html>
`}
</PrismCode>
      </Slide>
      <Slide bgImage={wrongWayImage} bgDarken={0.9} transition={["zoom"]}>
      <Appear>
      <BlockQuote>
  <Quote>For a start, it is not a good idea to mix up your HTML and your JavaScript,
    keeping your JavaScript all in one place is better;</Quote>
  <Cite>Mozilla Developer Network</Cite>
</BlockQuote>
</Appear>
      </Slide>
      <Slide align="center flex-start">
        <PrismCode component="pre" className="language-javascript">
      {`
function(callback)\{
  let rand = Math.random()
  if (typeof callback === 'function')\{
    callback(rand)
    return
  \}
  throw 'Callback argument is not a function'
  \}
`}
</PrismCode>
      </Slide>

      <Slide align="flex-start">
        <PrismCode component="pre" className="language-javascript">
          {`const btn = document.querySelector('button')
btn.onclick = function()\{
  alert('Anyhow :( ')
\}`}
</PrismCode>



      <Layout>
            <Fill>
              <Appear>
              <PrismCode component="pre" className="language-javascript">
            {`const btn = document.querySelector('button')
btn.addEventListener('click', function()\{
  alert("I'm professional!");
\})`}
  </PrismCode>
      </Appear>
  </Fill>
        </Layout>
      </Slide>
      <Slide>
      <Layout>
            <Fill>
            <PrismCode component="pre" className="language-javascript">
            {`const btn = document.querySelector('button')
btn.addEventListener('click', function(e)\{
  console.log(e)
\})`}
 </PrismCode>
  </Fill>
        </Layout>
      </Slide>
      <Slide>
      <Layout>
            <Fill>
            <PrismCode component="pre" className="language-javascript">
            {`const btn = document.querySelector('button')
function changeText()\{
  btn.innerText = 'clicked'
\}
btn.addEventListener('click', changeText)`}
 </PrismCode>
  </Fill>
        </Layout>
      </Slide>
      <Slide bgColor="black">
      <Heading fit  textColor="primary">Zalety</Heading>
      <Heading size={2} textColor="white">addEventListener</Heading>
      </Slide>
      <Slide>
      <Layout>
            <Fill>
            <PrismCode component="pre" className="language-javascript">
            {`const btn = document.querySelector('button')
function changeText()\{
  btn.innerText = 'clicked'
\}
btn.addEventListener('click', changeText)
btn.removeEventListener('click', changeText)`
}
  </PrismCode>
  </Fill>
        </Layout>
      </Slide>
      <Slide>
      <Layout>
            <Fill>
            <PrismCode component="pre" className="language-javascript">
            {`const btn = document.querySelector('button')
btn.addEventListener('click', someFunction)
btn.addEventListener('click', anotherFunction)`
}
  </PrismCode>
  </Fill>
        </Layout>
      </Slide>
<Slide>
<Image src={bubblingCapturingImage} />
</Slide>
<Slide bgImage={doSomethingGreatImage}>
</Slide>
<Slide>
  <Heading fit>Dziękuję za uwagę</Heading>
  <Heading size={4} margin="1em">Michał Oręziak</Heading>
  <Text margin="0.5em" size={6}>Na podstawie materiałów MDN. Zdjęcia - Unsplash</Text>
</Slide>
    </Deck>
  )} />
)
