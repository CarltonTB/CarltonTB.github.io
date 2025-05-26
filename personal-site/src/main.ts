const getYearsOfExperience = (): string => {
    const startYear = 2017;
    const currentYear = new Date().getFullYear();
    const yoe: number = currentYear - startYear;
    return `${yoe} years`;
}

document.getElementById('yearsOfExperience')!.textContent = getYearsOfExperience();

export { }
