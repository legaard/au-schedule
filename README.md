# AU Schedule Generator
This project sets out to make life easier for students, at the Science and Technology department at Aarhus University (AU), by offering a simple way to generate schedules for one person or multiple people (e.g. a study group). Using this generator the student can:

- Generate a weekly schedule for courses at the current semester.
- Add multiple people to the same schedule and easily toggle between the various students.
- Filter all courses shown; e.g. name of the course, day or type of course (lecture, exercises, etc.).
- Under development: see exams for the various courses

*Note: The data used in this project is retrieved from [timetable.scitech.au.dk](http://timetable.scitech.au.dk/apps/skema/VaelgElevskema.asp?webnavn=skema) – always make sure the generated schedule is correct using this website.*

## Maintainers
The following people are currently maintaining on the schedule generator:

- [Lasse Legaard](https://legaard.xyz) – Angular (client-side) and Node.JS (server-side)
- [Jonas Techen](https://dk.linkedin.com/in/jonastechen/en) – Icons and UI-design

However, feel free to make a pull request if you want to improve the project or add new features/functionality - we are better together 😄

## Technologies
This project is based on Angular 4, therefore uses uses [TypeScript](https://www.typescriptlang.org/), and utilize [Sass](http://sass-lang.com/) for styling. The data used in the project is provided by a Node.js application (running on a DigitalOcean droplet) which scrapes an official AU website. The Node.js application is running on [au-service.legaard.xyz](http://au-service.legaard.xyz).

## How to work with the project
The project is generated with the generated with [Angular CLI](https://github.com/angular/angular-cli). Run `ng serve` for a dev server and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build for production
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.