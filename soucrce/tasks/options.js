"use strict";

//
//  O P T I O N S
//
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let p = require("../package.json");
let path = require("./paths.js");

module.exports = {
  // SCSS
  cleaner: {
    sources: [path.to.root + "*.html", path.to.js.destination + "*.js"],
    ignore: [/js-/, /body/]
  },
  normalize: {
    browsers: ["last 3 versions"]
  },
  autoprefixer: {
    browsers: ["last 3 versions"]
  },
  // SVG
  sprite: {
    dest: path.to.svg.destination,
    shape: {
      id: {
        generator: n => `icon-${n.slice(0, -4)}`
      }
    },
    mode: {
      symbol: {
        sprite: "symbols",
        inline: true
      }
    }
  },
  // jsDoc
  jsDoc: {
    tags: {
      allowUnknownTags: true
    },
    opts: {
      destination: path.to.js.doc
    },
    plugins: ["plugins/markdown"],
    templates: {
      systemName: p.name,
      cleverLinks: false,
      monospaceLinks: false,
      default: {
        outputSourceFiles: true
      },
      path: "ink-docstrap",
      theme: "paper",
      navType: "vertical",
      linenums: true,
      dateFormat: "MMMM Do YYYY, h:mm:ss a",
      syntaxTheme: "dark",
      search: false
    }
  },
  // Deploy
  aws: {
    bucket: "",
    region: "",
    credential: "", // <project name>
    gzip: false
  }
};
