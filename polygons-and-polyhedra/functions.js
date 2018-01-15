// =============================================================================
// Polygons and Polyhedra
// (c) Mathigon
// =============================================================================


import { clamp } from '@mathigon/core';
import { Browser, slide } from '@mathigon/boost';

import './components/tessellation';
import './components/polyhedron';
import './components/folding';
import './components/anibutton';


export function angles($section) {
  const totals = [360, 540];

  $section.$$('x-anibutton').forEach(($b, i) => {
    $section.model.watch(() => $b.setAttr('text', '???'));
    $b.on('click', () => {
      // TODO warning if lines overlap
      $b.play();
      $b.setAttr('text', totals[i] + '°');
      $section.score('angle-' + i);
    });
  });
}

export function escher($section) {
  const $img = $section.$('.metamorph img');
  let translate = 0;
  let max = 3000;

  slide($img, {
    move(p, start, last) {
      translate += last.x - p.x;
      translate = clamp(translate, 0, max);
      $img.transform = `translateX(-${translate}px)`;
    }
  });

  Browser.resize(({width}) => { max = 3000 - Math.min(760, width - 60); });
}

export function penrose($section) {
  let $g = $section.$$('svg g');

  $g[1].setAttr('opacity', 0);
  $g[2].setAttr('opacity', 0);

  $section.$('x-slider').on('move', (n) => {
    $g[0].setAttr('opacity', n < 50 ? 1-n/77 : 0.35);
    $g[1].setAttr('opacity', n < 50 ? n/50 : 1.5-n/100);
    $g[2].setAttr('opacity', n < 50 ? 0 : n/50-1);
  });
}
