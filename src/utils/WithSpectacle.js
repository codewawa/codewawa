import React from 'react'
import styled from '@emotion/styled';
const spectacleExports = [
    "Anim",
    "Appear",
    "BlockQuote",
    "Cite",
    "CodePane",
    "Code",
    "ComponentPlayground",
    "Deck",
    "Fill",
    "Fit",
    "Heading",
    "Image",
    "GoToAction",
    "Layout",
    "Link",
    "ListItem",
    "List",
    "Magic",
    "Markdown",
    "MarkdownSlides",
    "Notes",
    "Quote",
    "S",
    "Slide",
    "SlideSet",
    "TableBody",
    "TableHeader",
    "TableHeaderItem",
    "TableItem",
    "TableRow",
    "Table",
    "Text",
    "Typeface",
    "themes"
  ];
const setToFalse = (state, key) => ({ ...state, [key]: false });
const setTo = spectacle => (state, key) => ({
  ...state,
  [key]: spectacle[key]
});
const isReady = o => Object.values(o).every(x => !!x);

const SpectacleWrapper = styled.div`
  *{
    font-family:Montserrat !important;
  }
`
export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = spectacleExports.reduce(setToFalse, {});
  }
  componentDidMount() {
    const spectacle = require("spectacle");

    this.setState(spectacleExports.reduce(setTo(spectacle), {}));
  }
  render() {
    if (!isReady(this.state)) return null;

    return (
      <SpectacleWrapper>
        {this.props.render(this.state)}
      </SpectacleWrapper>
    )
  }
}