import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'less-app/models/test';

F.attach(QUnit);

QUnit.module('less-app functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('less-app main page shows up', function() {
  F('title').text('less-app', 'Title is set');
});
