import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Breadcrumb from './navigation/breadcrumb';
import Form from 'react-bootstrap/Form';

interface SpongebobState {
  transformedText: string,
  copied: boolean
}

export default class Spongebob extends React.PureComponent<RouteComponentProps, SpongebobState> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      transformedText: "",
      copied: false
    }
  }

  private textArea: any;
  private userTextInput: any;

  private transformUserText(event: React.FormEvent): void {
    event.preventDefault();

    const textToChange: string = this.userTextInput.value;
    if (textToChange.trim() === "") return;

    let stringBuilder: string[] = [];

    // true = uppercase, false = lowercase
    let prev: boolean = false;
    for (let i = 0; i < textToChange.length; i++) {
      const letter: string = textToChange[i];

      let toAdd: string = letter;

      if (letter.match(/[a-z]/i)) {
        toAdd = prev ? letter.toLocaleUpperCase() : letter.toLocaleLowerCase();
        prev = !prev;
      }

      stringBuilder.push(toAdd);
    }

    const finalResult: string = stringBuilder.join('');
    this.setState({ transformedText: finalResult });
    this.copyTextToClipboard(finalResult);
  }

  private copyTextToClipboard(text: string) {
    var textArea = document.createElement("textarea");

    textArea.style.setProperty('position', 'fixed');
    textArea.style.setProperty('top', '0');
    textArea.style.setProperty('left', '0');

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';

    // We don't need padding, reducing the size if it does flash render.
    textArea.style.setProperty('padding', '0');

    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';

    textArea.value = text;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
    this.showCopiedMessage();
  }

  private copyTransformedText(event: React.MouseEvent): void {
    if (this.state.transformedText.trim() === "") return;

    this.textArea.select();
    document.execCommand('copy')
    this.showCopiedMessage();
  }

  private showCopiedMessage(): void {
    if (this.state.copied) return;

    this.setState({ copied: true });

    setTimeout(() => {
      this.setState({ copied: false });
    }, 5000);
  }

  render(): JSX.Element {
    return (
      <div>
        <Breadcrumb pageTitle="Spongebob Text Transformer" activeItemTitle="Spongebob" />
        <hr className="mt-0" />

        <Form onSubmit={this.transformUserText.bind(this)} autoComplete="off" >
          <Form.Group controlId="spongebob-textInput">
            <Form.Label>Text to Transform</Form.Label>
            <Form.Control type="text" as="input" placeholder="Enter text here"
              ref={(instance) => this.userTextInput = instance} />
          </Form.Group>

          <Form.Group controlId="spongebob-transformedText" onClick={this.copyTransformedText.bind(this)}>
            <Form.Label>Transformed Text</Form.Label>
            <Form.Control as="textarea" placeholder="Enter text to transform"
              readOnly plaintext className="border p-1"
              value={this.state.transformedText}
              ref={(instance) => this.textArea = instance} />
            <Form.Text className="text-success">{this.state.copied ? 'Text Copied !!' : ''}</Form.Text>
          </Form.Group>
        </Form>
      </div>
    );
  }
}