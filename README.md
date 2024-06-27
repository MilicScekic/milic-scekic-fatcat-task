## FatCat Homework Task

### Installation

```bash
git clone git@github.com:MilicScekic/milic-scekic-fatcat-task.git
```

```bash
cd milic-scekic-fatcat-task
```

```bash
yarn install
```

```bash
yarn dev
```

### Features

List items component - I created a reusable component that takes in three props, useData - for fetching API, renderItem which renders a single item component, and heading which is the name of the list item component. This way we can reuse List items since we can change everything (API that we fetch, component that we render for each item, and list name)

Form component - Very similar to List items this component also has a heading for displaying form name, render prop (renderForm) which will display all inputs for form, validation schema to check for each input if it is valid and useMutation prop where react query hook is passed to send post request for this form.

Page generator - Page is generated from an array with objects that present the layout we will use. I created two layouts flex and grid. Each layout has its props (only title for now but here we can add for example description, or some css class like color, fontSize for title etc.). The layout also has an array of components. I used already created components. Each component have type, and props. For props I added children which will render components we pass here. So i just map through array show every layout for each layout I map throught it's components and display them.
