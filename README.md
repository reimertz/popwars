# buildstrap

A collection of tools for building sites to bootstrap my development of new
projects. It includes:

* The complete source for a starter project, using swig for templating, less for
  CSS, and `@depend`-style JavaScript concatenation.
* A Gruntfile for compiling CSS and JavaScript as you make changes.
* A lightweight demo server to run the starter project.
* Some of my favorite OSS JavaScript and CSS packages.

## Usage

1. Clone the repo: `git clone https://github.com/josheverett/buildstrap.git`
2. Install dependencies: `npm install`
3. Build the starter project and watch for changes: `grunt`
4. Run the demo server: `npm start`
6. Visit `http://localhost:3000/` in your browser.
7. Edit away.

## Project Structure

    buildstrap/
    ├── controllers/
    ├── src/
    │   ├── css/
    │   │   ├── <platform>/
    │   │   │   └── <theme>/
    │   │   ├── lib/
    │   │   └── third-party/
    │   ├── html/
    │   │   └── <platform>/
    │   │       └── <theme>/
    │   ├── img/
    │   │   └── <platform>/
    │   │       └── <theme>/
    │   └── js/
    │       ├── <platform>/
    │       │   └── <theme>/
    │       ├── lib/
    │       └── third-party/
    ├── Gruntfile.js
    ├── package.json
    └── server.js

## What's Inside

* backbone.js (1.0.0)
* bootstrap (2.3.2)
* Font Awesome (3.2.1)
* jquery (2.0.3)
* rekwire (0.1.1)
* swig (1.0.0-rc3)
* underscore.js (1.5.0)
