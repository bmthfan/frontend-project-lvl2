install:
	npm install

gendiff:
	node bin/index.js

lint:
	npx eslint

test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
