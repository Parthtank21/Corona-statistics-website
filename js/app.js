angular.module("covidApp", []).controller("covidCtrl", ($scope, $http) => {
    $scope.statistics = [];
    $scope.countries = [];
    $scope.dataAvail = false;

    $scope.initiateAPI = () => {
        $http({
            "method": 'GET',
            url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
            headers: {
                'x-rapidapi-host': '',
                'x-rapidapi-key': ''
            }
        }).then((res) => {
            $scope.dataAvail = true;
            $scope.statistics = res.data.data;
            console.log($scope.statistics);
        })

        $http({
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/statistics',
            headers: {
                'x-rapidapi-host': '',
                'x-rapidapi-key': ''
            }
            }).then((res) => {
                $scope.dataAvail = true;
                $scope.countries = res.data.response;
                // console.log(res.data.response[0]);
                console.log($scope.countries);
            })
            
    }
    $scope.initiateAPI();
})
