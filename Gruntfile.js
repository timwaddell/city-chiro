const sass = require("sass");

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Setup env vars
    app: {
      source: "src",
      dist: "dist",
    },

    // Watch
    watch: {
      sass: {
        files: "assets/styles/**/*.scss",
        tasks: ["sass", "postcss"],
        options: {
          spawn: false,
        },
      },

      assemble: {
        files: ["src/**/*"],
        tasks: ["assemble"],
      },

      scripts: {
        files: ["assets/scripts/**/*.js"],
        tasks: ["uglify:dev"],
        options: {
          spawn: false,
        },
      },
    },

    // Assemble
    assemble: {
      options: {
        layout: "page.hbs",
        layoutdir: "src/bonnet/layouts/",
        partials: "src/bonnet/partials/**/*",
      },
      pages: {
        cwd: "src/content/_pages/",
        dest: "dist/",
        expand: true,
        src: "**/*.hbs",
      },
    },

    // Sass Compilation
    sass: {
      options: {
        implementation: sass,
        sourceMap: false,
        precision: 3,
        outputStyle: "expanded",
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "assets/styles",
            src: "**/*.scss",
            dest: "dist/styles",
            ext: ".css",
          },
        ],
      },
    },

    // PostCSS - Autoprefixer
    postcss: {
      options: {
        map: true,
        processors: [require("autoprefixer")()],
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "dist/styles",
            src: "**/*.css",
            dest: "dist/styles",
          },
        ],
      },
    },

    // Uglify
    uglify: {
      dev: {
        options: {
          mangle: false,
          beautify: {
            width: 80,
            beautify: true,
          },
          screwIE8: true,
        },
        files: {
          "dist/scripts/script.js": [
            "assets/scripts/helpers.js",
            "assets/scripts/toggle-menu.js",
            "assets/scripts/script.js",
          ],
        },
      },
      dist: {
        options: {
          compress: true,
          preserveComments: false,
          report: "gzip",
        },
        files: {
          "dist/scripts/script.js": [
            "assets/scripts/helpers.js",
            "assets/scripts/toggle-menu.js",
            "assets/scripts/script.js",
          ],
        },
      },
    },

    // Connect
    connect: {
      dev: {
        options: {
          port: 8000,
          base: "dist/",
        },
      },
    },

    // Clean
    clean: {
      dev: ["dist"],
      dist: {
        files: [
          {
            dot: true,
            src: ["dist/*"],
          },
        ],
      },
    },

    // SVG Min
    svgmin: {
      options: {
        plugins: [
          {
            cleanupIDs: true,
            removeUselessStrokeAndFill: true,
            removeTitle: true,
            removeAttrs: true,
          },
        ],
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "assets/images",
            src: ["**/*.svg"],
            dest: "dist/images",
          },
        ],
      },
    },

    // Optimise images
    imagemin: {
      options: {
        progressive: true,
        optimizationLevel: 4,
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "assets/images/",
            src: ["**/*.{png,jpg,gif}"],
            dest: "dist/images/",
          },
        ],
      },
    },

    // Copy
    copy: {
      fonts: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: "assets/fonts",
            src: "**/*.{woff,woff2}",
            dest: "dist/fonts",
          },
        ],
      },
      favicons: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: "assets/images/favicons",
            src: "**/*.**",
            dest: "dist",
          },
        ],
      },
      htaccess: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: "src/",
            src: "**/*.htaccess",
            dest: "dist",
          },
        ],
      },
      sitemap: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: "src/",
            src: "**/*sitemap.xml",
            dest: "dist",
          },
        ],
      },
    },

    // Minify HTML
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          minifyJS: true,
          minifyCSS: true,
        },
        files: [
          {
            expand: true,
            cwd: "dist",
            src: "**/*.html",
            dest: "dist",
          },
        ],
      },
    },

    // Minify CSS
    cssmin: {
      options: {
        keepSpecialComments: 0,
        check: "gzip",
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "dist/styles",
            src: ["**/*.css"],
            dest: "dist/styles",
          },
        ],
      },
    },

    // GH Pages
    "gh-pages": {
      options: {
        base: "dist",
      },
      src: ["**"],
    },
  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-gh-pages");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-svgmin");
  grunt.loadNpmTasks("assemble");

  // Serve
  grunt.registerTask("serve", [
    "clean:dev",
    "sass",
    "postcss",
    "imagemin",
    "svgmin",
    "copy",
    "uglify:dev",
    "assemble",
    "connect",
    "watch",
  ]);

  // Build
  grunt.registerTask("build", [
    "clean:dist",
    "sass",
    "postcss",
    "cssmin",
    "imagemin",
    "svgmin",
    "copy",
    "uglify:dist",
    "assemble",
    "htmlmin",
  ]);

  // Default (serve)
  grunt.registerTask("default", ["serve"]);
};
