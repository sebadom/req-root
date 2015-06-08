root-require
============

A simple package that takes care requiring relative packages on your apps.

This littly utility helps you dealing with stuff like:

    var something = require('../../../../something');

Relative requires can be a mess sometimes so instead of the above, you can simple do (assuming 'something' is at to root of your app)

    var r = require('root-require'),
        something = r('something');

or if it's in a second level deep

    var r = require('root-require'),
        something = r('parent/something');

It will require files using the standard require call from node so it will try to get an index.js if the target is a dir or you can even require a particular js file

    └── path

Example
-------

Given this structure:

    .
    └── module
        └── module.js
    └── othermodule
        └── index.js
    └── some
        └── nested
            └── path
                └── index.js
    └── other
        └── deep
            └── require
                └── call
                    └── foo.js

Lets say you are in foo.js and want to require othermodule/index.js, then you'd do this

    var r = require('root-require'),
        something = r('./othermodule');