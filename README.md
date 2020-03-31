## Simple example ProseMirror example application
The purpose of the application is to create a reproducable example of a ProseMirror custom mark being changed recursivley when there are two instances of the mark.

The custom mark is built with webcomponents using LitElement.

This sample repository is modeled around our application's use cases. The application it is modeled after contains a custom menu bar where, this sample application does not. Within the main application, the mark in the menu is used to create these custom marks.


## Description
A custom mark is added to the schema, the marks purpose is to parse the dom node `<my-custom-mark>`, and allow the user of the editor to insert these custom marks around text nodes. For simplicity's sake, and because I had started this sample repo using the `prosemirror-example-setup`, I added the custom mark to the editors content directly via html in the `index.html` file.

## Run-down
`index.html`
 
Imports the webcomponent modules. Creates the ProseMirror editor with some emulated defualt content, as well as a custom mark
```html
<prosemirror-editor>
    <p>some text here</p>
    <my-custom-mark reflected-attribute="default">some wrapped text</my-custom-mark>
</prosemirror-editor>
```
The custom mark is defined with an attribute `reflected-attribute` a reflected attribute is a concept in LitElement that allows changes from the dom to be reflected in the webcomponent. [More information here.](https://lit-element.polymer-project.org/guide/properties#reflected-attributes)

`<prosemirror-editor>` is the component for the ProseMirror view, state. model and schema.
<hr />

`src/client/components/custom-mark/custom-mark.ts`

Simple webcomponent with a slot and shadowRoot. 
Contains a reflected proprty named appropriatley `reflectedAttribute` that will contain the value from the DOM.

It is here where we can examine changes to our attributes properties from the DOM with the toAttribute and fromAttribute converters from the property.

During the event where the component is being changes infinitely, we can observe the changes to the webcomponent here, it may also be that the binding here to the dom itself is creating an issue with lit-elements own state comparison. If the prosemirror alters the dom it will be reflected here. See the alert [here](https://lit-element.polymer-project.org/guide/properties#observed-attributes) for details.

## Steps to reproduce
Here we will be creating an infite loop that will change the attributes of our custom mark indefinitely until our browser runs out of memeory. It is advisable that we keep the console open to observe anything before executing the "breaking code"

Lets start by setting up our project, this repo uses `es-dev-server` to host the application.
### what you need
 - 2 terminal panes
 - node and npm or yarn

I have commited the dist, but you can rebuild by running:
```
npm run watch
```

start the web application
```
npm run start
```
application will serve itself at `localhost:8080`

By default the application will show with one custom mark in the dom, with the reflected-attribute you may click on it to change it's attribute, this is to show case that changes from the component itself to the dom do not create this infinite loop, it's modeled after our application being able to change it's properties if needed.

**Breaking code**: remove the comment on line 15 of the `index.html` to create two instances of a custom mark component. If the application is being watched, the app will enter an infitie loop upon save of the `index.html` file.

We should ensure that the attribute is properly being set while being sent to the dom in prosemirror via the marks `toDOM()` the marks definition can be found at `src/client/components/editor/marks.ts`