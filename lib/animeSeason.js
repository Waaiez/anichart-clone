export function animeSeason() {
    let d = new Date();
    let season = d.getMonth() + 1;
    [10, 7, 4, 1].every((val) => {
        if (season >= val) {
            season = val;
            return false;
        }
        return true;
    });

    switch (season) {
        case 1:
            return {
                currentSeason: 'WINTER',
                currentSeasonYear: d.getFullYear(),
                season: {
                    WINTER: {
                        year: d.getFullYear()
                    },
                    SPRING: {
                        year: d.getFullYear()
                    },
                    SUMMER: {
                        year: d.getFullYear()
                    },
                    FALL: {
                        year: d.getFullYear() - 1
                    },
                }
            }
        case 4:
            return {
                currentSeason: 'SPRING',
                currentSeasonYear: d.getFullYear(),
                season: {
                    WINTER: {
                        year: d.getFullYear()
                    },
                    SPRING: {
                        year: d.getFullYear()
                    },
                    SUMMER: {
                        year: d.getFullYear()
                    },
                    FALL: {
                        year: d.getFullYear()
                    },
                }
            }
        case 7:
            return {
                currentSeason: 'SUMMER',
                currentSeasonYear: d.getFullYear(),
                season: {
                    WINTER: {
                        year: d.getFullYear() + 1
                    },
                    SPRING: {
                        year: d.getFullYear()
                    },
                    SUMMER: {
                        year: d.getFullYear()
                    },
                    FALL: {
                        year: d.getFullYear()
                    },
                }
            }
        case 10:
            return {
                currentSeason: 'FALL',
                currentSeasonYear: d.getFullYear(),
                season: {
                    WINTER: {
                        year: d.getFullYear() + 1
                    },
                    SPRING: {
                        year: d.getFullYear() + 1
                    },
                    SUMMER: {
                        year: d.getFullYear()
                    },
                    FALL: {
                        year: d.getFullYear()
                    },
                }
            }


    }
}

export function getPreviousSeason(season, year) {
    switch (season) {
        case 'WINTER':
            return {
                previousSeason: 'FALL',
                previousSeasonYear: year - 1
            }
        case 'SPRING':
            return {
                previousSeason: 'WINTER',
                previousSeasonYear: year
            }
        case 'SUMMER':
            return {
                previousSeason: 'SPRING',
                previousSeasonYear: year
            }
        case 'FALL':
            return {
                previousSeason: 'SUMMER',
                previousSeasonYear: year
            }
    }
}