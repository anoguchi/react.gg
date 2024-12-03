async function searchHackerNews(searchTerm) {
  try {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${searchTerm}`
    );

    if (response.ok) {
      return await response.json();
    }

    throw new Error("Oh no.");
  } catch (error) {
    console.error(error);
    return {
      error: "Something went wrong",
    };
  }
}

export default searchHackerNews;
