## gql 로 해결할 수 있는 문제

- overFetching
  안쓰는 정보까지 다 맏는 오버 패칭을 줄일 수 있다.

- underFetching
  한 페이지를 완성하기 위해 여러번 통신하는 언더패칭을 줄일 수 있다.

## Intro

-schema 란? data 형식
-query 데이터 받을때 사용
-mutation 데이터 변형이 일어날때 사용 단 로그인은 mutation 임.

## Usage

- 간단한 서버 구성

```
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
```

- 스키마는 .gql 파일에서 -> gql`` 방식으로 바뀐듯 하다.(아폴로 doc 참고)

```
const typeDefs = gql`
  type Person {
    id: Int!
    name: String!
    age: Int!
  }`
```

- resolver 는 js 함수라고 생각하면된다. arguments 가 context 부터 arg 까지 있는데 잘 구분해서 사용해야 한다.

```
const resolvers = {
  Query: {
    person: (_, { id }) => {
      return data.find((d) => d.id === id);
    },
    people: () => data,
    getData: (_, { limit }) => getData(limit),
  },
  Mutation: {
    delete: (_, { id }) => {
      return deleteMovies(id);
    },
    update: (_, args) => {
      return updateMovie(args);
    },
    addMovie: (_, args) => {
      return addMovie(args);
    },
  },
};
```

## rest api 는 gql로 감싸서 오히려 더 효율적으로 사용 할 수 있다.

```
//resolver 는 패치 한 데이터 갖고도 할 수 있다. 메모리에 있던 db에 있던 어디에 있던 다 할수 있다.
export const getData = async (limit) => {
  const newUrl = url(limit);
  const {
    data: { movies },
  } = await (await fetch(newUrl)).json();
  return movies;
};

```
