#Topic Cloud Project

Topic Cloud application built using backbone, bower and webpack. Testing with Karma and Jasmine.

Required -
,,,
webpack
bower
karma
,,,

Installing dependencies -
,,,
npm install && bower install
,,,

To run -
,,,
grunt
,,,

You can create a production bundle.js file using the following -
,,,
grunt build
,,,

Tests can be run with -
,,,
karma start
,,,

Todo -
1. Look at rendering performance of topic cloud
2. Improve test coverage
3. Work on better scale for topic sizing within the cloud

References -
[http://stackoverflow.com/questions/342687/algorithm-to-implement-a-word-cloud-like-wordle]
[http://stackoverflow.com/questions/6824391/drawing-a-spiral-on-an-html-canvas-using-javascript]
