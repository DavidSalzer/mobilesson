var domain = 'http://ec2-184-73-131-143.compute-1.amazonaws.com/';

var mobilessonApp = angular.module('mobilessonApp', ['ui.router'])

/**** UI Router ****/
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");

    $stateProvider
		.state("dashboard", {
		    url: "/dashboard",
		    views: {
		        "main": {
		            templateUrl: "./components/dashboard/dashboard.html",
		            controller: "dashboard"
		        }
		    }
		})
        .state('courses', {
            url: "/courses",
            views: {
                "main": {
                    templateUrl: "./components/courses/courses.html",
                    controller: "courses"
                }
            }
        })
        .state('course', {
            url: "/course/:courseId",
            views: {
                "main": {
                    templateUrl: "./components/course/course.html",
                    controller: "course"
                }
            }
        })
        .state('employees', {
            url: "/employees",
            views: {
                "main": {
                    templateUrl: "./components/employees/employees.html",
                    controller: "employees"
                }
            }
        })
        .state('department', {
            url: "/department/:departmentId",
            views: {
                "main": {
                    templateUrl: "./components/employees/department.html",
                    controller: "department"
                }
            }
        })
});
