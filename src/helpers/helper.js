export function filterScores(data) {
  const currentDate = new Date();
  const prevThree = new Date(currentDate);
  prevThree.setDate(currentDate.getDate() - 3);

  const nextThree = new Date(currentDate);
  nextThree.setDate(currentDate.getDate() + 14);

  const filteredScores = data.filter((fixture) => {
    const fixtureDate = new Date(fixture.fixture.date);
    return fixtureDate >= prevThree && fixtureDate <= nextThree;
  });

  return filteredScores;
}

export function shortHandTitle(name) {
  return name.replace("Grand Prix", "GP");
}

export function getShortDate(dateToFormat) {
  const date = new Date(dateToFormat);
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    // year: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);
  return formattedDate;
}

export function filterSearchReuslts(newArticles, oldArticles) {
  const allArticles = [...newArticles, ...oldArticles];
  const uniqueArticles = [];
  const titles = new Set();

  for (const article of allArticles) {
    if (!titles.has(article.title)) {
      titles.add(article.title);
      uniqueArticles.push(article);
    }
  }

  return uniqueArticles;
}
