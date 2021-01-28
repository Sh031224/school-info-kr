# school-info-kr

[![Package version](https://img.shields.io/github/package-json/v/Sh031224/school-info-kr)](https://github.com/Sh031224/school-info-kr)
[![Downloads](https://img.shields.io/npm/dy/school-info-kr)](https://www.npmjs.com/package/school-info-kr)
[![Npm version](https://img.shields.io/npm/v/school-info-kr)](https://www.npmjs.com/package/school-info-kr)
<br/>
📦 A package that lets you know information about Korean schools, meals, and schedules.

## Installation

`npm` 을 통해 설치하기

```sh
$ npm install school-info-kr --save
```

또는 `yarn`

```sh
$ yarn add school-info-kr
```

## Usage

```javascript
const school = require("school-info-kr");
school.search("대구소프트웨어고등학교");
```

`TypeScript` 에서

```typescript
import school from "school-info-kr";
school.search("대구소프트웨어고등학교");
```

## Example

```typescript
import school from "school-info-kr";
school.search("대구소프트웨어고등학교");
school.meal(schoolId, officeCode, new Date());
school.schedule(schoolId, officeCode, new Date());
```

## Testing

```sh
npm run test
```
