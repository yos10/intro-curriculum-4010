'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');
const movingButton = $('#moving-button');

scalingButton.on('click', () => {
  scalingButton.css('pointer-events', 'none');
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
  block.promise().done(() => {
    scalingButton.css('pointer-events', 'auto');
  });
});

movingButton.on('click', () => {
  movingButton.css('pointer-events', 'none');
  block.animate({ marginLeft: '500px' }, 500);
  block.animate({ marginLeft: '20px' }, 1000);
  block.promise().done(() => {
    movingButton.css('pointer-events', 'auto');
  });
});
