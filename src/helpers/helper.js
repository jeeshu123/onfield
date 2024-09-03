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
