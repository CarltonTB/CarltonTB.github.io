const getYearsOfExperience = (): string => {
  const fiveYearsDate = new Date(2022, 10, 1);
  const years: number = 5 + (new Date().getFullYear() - fiveYearsDate.getFullYear());
  return String(years);
}

document.getElementById('yearsOfExperience')!.textContent = getYearsOfExperience();
export {}
