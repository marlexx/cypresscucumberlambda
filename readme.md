This is the powershell command to run and upload tests:

npx cypress run ; junitparser merge --glob "reports/TEST-*" "reports/junit-report.xml" ; trcli -y -h https://malimarlex.testrail.io --project "Cucumber Lambda" --username x2junior02@gmail.com --password Testerisanje@alas1 parse_junit --title "Basic Testrun" -f  "./reports/junit-report.xml" ; remove-item -fo "./reports/TEST-*"