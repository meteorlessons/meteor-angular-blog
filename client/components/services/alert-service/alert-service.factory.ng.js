function alertService($rootScope, $timeout) {
    $rootScope.alerts = [];

    return {
        add: function (type, msg) {
            return $rootScope.alerts.push({
                type: type,
                msg: msg,
                autoclose: this.timeout(),
                close: function () {
                    return this.closeAlert(this);
                },
                closeAlert: function (alert) {
                    return this.closeAlertIdx($rootScope.alerts.indexOf(alert));
                },
                closeAlertIdx: function (index) {
                    return $rootScope.alerts.splice(index, 1);
                }
            });
        },
        clear: function () {
            $rootScope.alerts = [];
        },
        timeout: function () {
            $timeout(function () {
                return $rootScope.alerts.splice(this, 1);
            }, 3000);
        }
    };
}

angular.module('app')
    .factory('alertService', alertService);
