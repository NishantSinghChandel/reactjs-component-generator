# reactjs-component-generator
A CLI generator for Reactjs components

## Install

```console
$ npm install -g reactjs-component-generator
```

## Usage

The most basic command runs a wizard to create a component.

```console
$ rg
```

**Note**: Names can be inputted in any format (slug-case, camelCase, PascalCase etc.).

#### component

Directly create a component based on the current settings.

```console
$ rg component <name>
```

Arguments:

* ```name```: The name you want to use for the component.

Options:

* ```-d, --destination <destination>```: Override the destination for component.
* ```-p, --template-path <template-path>```: Override template path.
* ```-t, --template <template>```: Override template type. By default it uses the 'component' folder from the template path. With this option you can use a different template folder.
* ```-f, --force```: Force creation of a component. By default it's impossible to create a component if the destination path doesn't exist. This option forces the creation of a component and will generates the destination folders if they don't exist.

Examples:
```console
$ rg component check-box
$ rg component RadioButton -d ./components/ui
$ rg component videoPlayer -d ./src/components/players/ -t base-video-component -f
```

The generated file will be
`*filename.css
*index.js
*filename.js`

#### styled component

Directly create a component based on the current settings with styled component.

```console
$ rg styled <name>
```

Arguments:

* ```name```: The name you want to use for the component.

Options:

* ```-d, --destination <destination>```: Override the destination for component.
* ```-p, --template-path <template-path>```: Override template path.
* ```-t, --template <template>```: Override template type. By default it uses the 'component' folder from the template path. With this option you can use a different template folder.
* ```-f, --force```: Force creation of a component. By default it's impossible to create a component if the destination path doesn't exist. This option forces the creation of a component and will generates the destination folders if they don't exist.

Examples:
```console
$ rg components check-box
$ rg components RadioButton -d ./my-component/ui
$ rg components videoPlayer -d ./src/my-component/players/ -t base-video-component -f
```

The generated file will be
*filename.styled.js
*index.js
*filename.js
