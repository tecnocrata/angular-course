// interface Link {
//   description?: string;
//   id?: number;
//   url: string;
// }

// function filterByTerm(input: Array<Link>, searchTerm: string) {
//   if (!searchTerm) throw Error("searchTerm cannot be empty");
//   if (!input.length) throw Error("input cannot be empty");
//   const regex = new RegExp(searchTerm, "i");
//   return input.filter(function (arrayElement) {
//     return arrayElement.url.match(regex);
//   });
// }

// const obj1: Link = { url: "string1" };
// const obj2: Link = { url: "string2" };
// const obj3: Link = { url: "string3" };

// const arrOfLinks: Array<Link> = [obj1, obj2, obj3];

// const term: string = "java";

// let result = filterByTerm(arrOfLinks, term);
// console.log("result ", result);
