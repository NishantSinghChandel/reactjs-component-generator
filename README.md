# reactjs-component-generator
A CLI generator for Reactjs components,styled-components and store.

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
$ rg-styled <name>
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
$ rg-styled check-box
$ rg-styled RadioButton -d ./my-component/ui
$ rg-styled videoPlayer -d ./src/my-component/players/ -t base-video-component -f
```

The generated file will be
`*filename.styled.js
*index.js
*filename.js`

#### store
Directly create a store module based on the current settings.

$ vg store <name>
Arguments:

name: The name you want to use for the store module.
Options:

* ```-d, --destination <destination>```: Override the destination for store module.
* ```-p, --template-path <template-path>```: Override template path.
* ```-t, --template <template>```: Override template type. By default it uses the 'store' folder from the template path. With this option you can use a different template folder.
* ```-f, --force```: Force creation of a store. By default it's impossible to create a component if the destination path doesn't exist. This option forces the creation of a component and will generates the destination folders if they don't exist.

Examples:
```
$ vg store user
$ vg store shopping-cart -d ./modules
$ vg store Car -t complex-store
```

**Note**:This store is specifically for Redux-box users.
Take a look at redux-box : ```https://www.npmjs.com/search?q=redux-box```

The generated file will be
`
*action.js
*index.js
*mutations.js
*sagas.js
*state.js
`
