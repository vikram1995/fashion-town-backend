import { SearchData } from "../../databaseUtils/dbOperations";

const getQuerySyntax = (searchInput) => {
  return [
    {
      $search: {
        index: "default",
        text: {
          query: searchInput,
          path: {
            wildcard: "*",
          },
        },
      },
    },
  ];
};

export async function productBySearchInput(searchInput) {
    const querySyntax = getQuerySyntax(searchInput.searchInput)
    console.log(querySyntax)
  try {
    const data = await SearchData(querySyntax);
    return data;
  } catch (error) {
    console.log(error);
  }
}
