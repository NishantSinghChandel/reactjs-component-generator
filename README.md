# react-component-generator

A CLI generator for React components, pages, styled-components and redux store, HTTP services, redux-box store, redux module.

## Install

```console
$ npm install -g reactjs-component-generator
```

## Usage

The most basic command runs a wizard to create a component.

```console
$ rg
```

**Note**: Names can be inputted in any format (slug-case, camelCase, PascalCase, UPPERCASE, lowercase etc.).

#### functional component

Directly create a functional component based on the current settings.

```console
$ rg functional-component <name>
```

#### class component

Directly create a class component based on the current settings.

```console
$ rg component <name>
```

#### Typescript component

Directly create a component with typeScript config based on the current settings.

```console
$ rg tscomponent <name>
```

The generated file will be
`*filename.ts *filename.scss`

#### Page [Recommended for Next.js]

Directly create a page based on the current settings.

```console
$ rg page <name>
```

The generated file will be
`*filename.js *index.js *filename.scss`

Arguments:

- `name`: The name you want to use for the component.

Options:

- `-d, --destination <destination>`: Override the destination for component.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'component' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a component. By default it's impossible to create a component if the destination path doesn't exist. This option forces the creation of a component and will generates the destination folders if they don't exist.

Examples:

```console
$ rg component check-box
$ rg component RadioButton -d ./components/ui
$ rg component videoPlayer -d ./src/components/players/ -t base-video-component -f
```

The generated file will be
`*filename.css *index.js *filename.js`

#### Typescript Page [Recommended for Next.js + typeScript]

Directly create a page with typeScript config based on the current settings.

```console
$ rg tspage <name>
```

The generated file will be
`*filename.ts *index.ts *filename.scss`

#### styled component

Directly create a component based on the current settings with styled component.

```console
$ rg-styled <name>
```

Arguments:

- `name`: The name you want to use for the component.

Options:

- `-d, --destination <destination>`: Override the destination for component.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'component' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a component. By default it's impossible to create a component if the destination path doesn't exist. This option forces the creation of a component and will generates the destination folders if they don't exist.

Examples:

```console
$ rg-styled check-box
$ rg-styled RadioButton -d ./my-component/ui
$ rg-styled videoPlayer -d ./src/my-component/players/ -t base-video-component -f
```

The generated file will be
`*filename.styled.js *index.js *filename.js`

#### redux [Recommended for redux]

Directly create a store based on the current settings.

```console
$ rg redux <name>
```

Arguments:

name: The name doen't have any impact here but required.
Options:

- `-d, --destination <destination>`: Override the destination for store.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'src' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a store. By default it's impossible to create a store if the destination path doesn't exist. This option forces the creation of a component and will generates the destination folders if they don't exist.

Examples:

```
$ rg redux user
$ rg redux shopping-cart -d ./modules
$ rg redux Car -t complex-store
```

The generated file will be

```
$ user [Default module]
$ index.js [Container all the reducer]
```

#### redux module [Recommended for redux]

Directly create a store module based on the current settings.

```console
$ rg redux-module <name>
```

Arguments:

name: The name doesn't have any impact here but required.
Options:

- `-d, --destination <destination>`: Override the destination for store module.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'store' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a store module. By default it's impossible to create a store module if the destination path doesn't exist. This option forces the creation of a store module and will generates the destination folders if they don't exist.

Examples:

```
$ rg redux-module user
$ rg redux-module shopping-cart -d ./modules
$ rg redux-module Car -t complex-store
```

The generated file will be

- action.js [All actions related to module]
- mutations.js [All mutations related to module]
- reducer.js [All reducer related to module]
- state.js [All state variable related to module]

#### services

Directly create a services based on the current settings.

```console
$ rg services <name>
```

Arguments:

name: The name doen't have any impact here but required.
Options:

- `-d, --destination <destination>`: Override the destination for services.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'src' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a services. By default it's impossible to create a services if the destination path doesn't exist. This option forces the creation of a services and will generates the destination folders if they don't exist.

Examples:

```
$ rg services user
$ rg services shopping-cart -d ./modules
$ rg services Car -t complex-store
```

The generated file will be

- config [folder contains http request method, local storage methods, and api url file]
- user.js [Defaul service for api call]

#### service module

Directly create a service module based on the current settings.

```console
$ rg service-module <name>
```

Arguments:

name: The name you want to use for the service module.
Options:

- `-d, --destination <destination>`: Override the destination for service module.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'src/services' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a service module. By default it's impossible to create a service module if the destination path doesn't exist. This option forces the creation of a service module and will generates the destination folders if they don't exist.

Examples:

```
$ rg service-module user
$ rg service-module shopping-cart -d ./modules
$ rg service-module Car -t complex-store
```

The generated file will be

- filename.js [contains api call request]

#### config [create a service configuration]

Directly create a service configuration based on the current settings.

```console
$ rg config <name>
```

Arguments:

name: The name you want to use for the config.
Options:

- `-d, --destination <destination>`: Override the destination for config.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'src/services' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a config. By default it's impossible to create a config if the destination path doesn't exist. This option forces the creation of a config and will generates the destination folders if they don't exist.

Examples:

```
$ rg config util
$ rg config shopping-cart -d ./modules
$ rg config Car -t complex-store
```

The generated file will be

- apiUrl.js [contains api url ]
- request.js [contains http request methods (get, post, put, delete, patch, update)]
- storage.js [contains methods for local storage]

#### request

Directly create a request module based on the current settings.

```console
$ rg request <name>
```

Arguments:

name: The name you want to use for the request module.
Options:

- `-d, --destination <destination>`: Override the destination for request module.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'src/services/config' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a config. By default it's impossible to create a request if the destination path doesn't exist. This option forces the creation of a request and will generates the destination folders if they don't exist.

Examples:

```
$ rg request apiRequest
$ rg request shopping-cart -d ./modules
$ rg request Car -t complex-store
```

The generated file will be

- filename.js [contains http request methods (get, post, put, delete, patch, update)]

#### storage

Directly create a storage module based on the current settings.

```console
$ rg storage <name>
```

Arguments:

name: The name you want to use for the storage module.
Options:

- `-d, --destination <destination>`: Override the destination for storage module.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'src/services/config' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a storage. By default it's impossible to create a storage if the destination path doesn't exist. This option forces the creation of a storage and will generates the destination folders if they don't exist.

Examples:

```
$ rg storage localStorage
$ rg storage shopping-cart -d ./modules
$ rg storage Car -t complex-store
```

The generated file will be

- storage.js [contains methods for local storage]

#### setup

Directly create a setup for store and services based on the current settings.

```console
$ rg setup <name>
```

Arguments:

name: The name is required but doesn't have any impact.
Options:

- `-d, --destination <destination>`: Override the destination for setup.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'src' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a setup. By default it's impossible to create a setup if the destination path doesn't exist. This option forces the creation of a setup and will generates the destination folders if they don't exist.

Examples:

```
$ rg setup text
$ rg setup shopping-cart -d ./modules
$ rg setup Car -t complex-store
```

This will generate the store and services module, the structure is mentioned above.

#### store [Recommended for redux-box]

Directly create a store module based on the current settings.

```console
$ rg store <name>
```

Arguments:

name: The name you want to use for the store module.
Options:

- `-d, --destination <destination>`: Override the destination for store module.
- `-p, --template-path <template-path>`: Override template path.
- `-t, --template <template>`: Override template type. By default it uses the 'store' folder from the template path. With this option you can use a different template folder.
- `-f, --force`: Force creation of a store. By default it's impossible to create a component if the destination path doesn't exist. This option forces the creation of a component and will generates the destination folders if they don't exist.

Examples:

```
$ rg store user
$ rg store shopping-cart -d ./modules
$ rg store Car -t complex-store
```

**Note**:This store is specifically for Redux-box users.
Take a look at redux-box : `https://www.npmjs.com/search?q=redux-box`

The generated file will be
`*action.js *index.js *mutations.js *sagas.js *state.js`

#### settings

Set or display settings. Without any options it will display the settings. By default it will set the settings locally in a .reactgenerator file.
You can also set global settings by using the global option ```-g --global```.

```console
$ rg settings
```

Options:

* ```-v, --view-destination <destination>```: Set default view destination.
* ```-c, --component-destination <destination>```: Set default component destination.
* ```-s, --store-destination <destination>```: Set default store destination.
* ```-t, --template-path <template-path>```: Set template path.
* ```-l, --log```: Log global or local settings depending on the global flag.
* ```-g, --global```: Set global settings.

Examples:
```console
$ rg settings -l
$ rg settings -v ./view -c ./component -s ./store/modules -t ./template
$ rg settings -g -c ./components
```

#### reset

Reset global settings to the defaults.

```console
$ rg reset
```

#### show-templates

Open the default template directory. The default templates can be edited to fit your needs. 

```console
$ rg show-templates
```

#### copy-templates

Copy the default templates to another directory. This is handy when you want to customize the default templates. 
Don't forget to run ```rg init``` or set the template path with ```rg settings```.

```console
$ rg copy-templates
```

