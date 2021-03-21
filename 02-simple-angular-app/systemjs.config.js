System.config({
  paths: { npm: "/node_modules/" },
  map: {
    app: "dist/app",
    "@angular/core": "/node_modules/@angular/core/bundles/core.umd.js",
    "@angular/common": "/node_modules/@angular/common/bundles/common.umd.js",
    "@angular/compiler":
      "/node_modules/@angular/compiler/bundles/compiler.umd.js",
    "@angular/platform-browser":
      "/node_modules/@angular/platform-browser/bundles/platform-browser.umd.js",
    "@angular/platform-browser-dynamic":
      "/node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
    "core-js": "/node_modules/core-js",
    "zone.js": "/node_modules/zone.js",
    rxjs: "/node_modules/rxjs",
    "rxjs-compat": "/node_modules/rxjs-compat",
    tslib: "/node_modules/tslib/tslib.js",
  },
  packages: {
    "dist/app": {},
    rxjs: { main: "index.js", defaultExtension: "js" },
    "rxjs/operators": { main: "index.js", defaultExtension: "js" },
    "rxjs/internal-compatibility": { main: "index.js", defaultExtension: "js" },
    "rxjs/testing": { main: "index.js", defaultExtension: "js" },
    "rxjs/ajax": { main: "index.js", defaultExtension: "js" },
    "rxjs/webSocket": { main: "index.js", defaultExtension: "js" },
    "rxjs-compat": { main: "index.js", defaultExtension: "js" },
    "core-js": {},
    "zone.js": {},
  },
});
