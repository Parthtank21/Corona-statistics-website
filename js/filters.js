angular.module("covidApp.filters", []).filter("searchFilter", () => {
    return(countries, searchText) => {
        if(!searchText) {
            return countries;
        }

        let keyword = RegExp(searchText, "i");

        return countries.filter((x) => {
            console.log(keyword.test(x.country));
            return keyword.test(x.country);
        });
    }
});