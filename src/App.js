// import AddClientModal from "./components/AddClientModal";
// import Clients from "./components/Clients";
// import Header from "./components/Header";
// // import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import Projects from "./components/Projects";

// // const cache = new InMemoryCache({
// //   typePolicies: {
// //     Query: {
// //       fields: {
// //         clients: {
// //           merge(existing, incoming) {
// //             return incoming;
// //           },
// //         },
// //         projects: {
// //           merge(existing, incoming) {
// //             return incoming;
// //           },
// //         },
// //       },
// //     },
// //   },
// // });

// // const client = new ApolloClient({
// //   uri: "http://localhost:5000/graphql",
// //   cache: cache,
// // });

// function App() {
//   return (
//     <>
//       {/* <ApolloProvider client={client}> */}
//       <Header />
//       <div className="container">
//         <Projects />
//         <hr />
//         <AddClientModal />
//         <Clients />
//       </div>
//       {/* </ApolloProvider> */}
//     </>
//   );
// }

// export default App;
