(function() {
    var app = angular.module("profileApp", []);

    app.controller("resumeCTRL", function() {
        this.person = profile;

        this.tab = "skills";
        this.setTab = function(activeTab) {
            this.tab = activeTab;
        };

        this.dutiesFlag = false;
        this.toggleDuties = function() {
            this.dutiesFlag === false ?
                this.dutiesFlag = true :
                this.dutiesFlag = false;
        }
    });

    app.directive("examplesOne", function() {
        return {
            restrict: "E",
            templateUrl: "examples-one.html"
        }
    });

    var dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    var workExpiriens = [{
        employer: 'JSC “Delta Bank”',
        position: 'Branch Manager',
        period: 'March 2012 – up to now',
        subordinates: '10 subordinates (including 3 workers in a secluded section).',
        duties: ['organization and control of workers;',
            'meetings and negotiations with potential clients;',
            'organization marketing and promotional campaigns of Bank in region;',
            'resolving administrative and economic issues of branch;',
            'analysis of the department’s work and work of individual workers;',
            'enforce of targets;'
        ]
    }, {
        employer: 'JSC “Forum Bank”',
        position: 'Head of department of product sales to customers of micro businesses',
        period: 'November 2010 - August 2011',
        subordinates: '14 functional subordinates',
        duties: ['implementing ways to attract new customers;',
            'develop ways to control the work of subordinates;',
            'meetings with potential clients;',
            'financial and economic analysis of business customers.',
            'support of loan applications during it approval process;',
            'development of marketing products to attract customers;',
            'creation of educational and support materials for more efficient work of subordinates;',
            'training seminars for workers;',
            'analysis of the department’s work and work of individual workers;'
        ]
    }, {
        employer: 'PJC “ProCredit Bank”',
        position: 'Branch Manager (in Kolomyia city)',
        period: 'October 2007 - August 2008 ',
        subordinates: '14 subordinates',
        duties: ['creating of business-plan of branch and it aproval;',
            'implementing ways to attract new customers and meetings with potential clients;',
            'control the work of subordinates;',
            'financial analysis of big customers;',
            'making decisions on credit committee;',
            'organization and realization of advertising campaigns;',
            'resolving administrative and economic issues of branch;',
            'ensuring effective work with problem loans;',
            'analysis of the branch’s work and work of individual workers;'
        ]
    }, {
        employer: 'PJC “ProCredit Bank”',
        position: 'Head of loan department (Head of Business Client department)',
        period: 'May 2007 - October 2007, August 2008 – October 2010',
        subordinates: 'up to 8 subordinates. ',
        duties: ['implementing ways to attract new customers and meetings with potential clients;',
            'control the work of subordinates;',
            'financial analysis of big customers;',
            'making decisions on credit committee;',
            'ensuring effective work with problem loans;',
            'analysis of the department’s work and work of individual workers;'
        ]
    }, {
        employer: 'PJC “ProCredit Bank”',
        position: 'Loan officer (Senior Loan officer)',
        period: 'December 2003 – May 2007 ',
        duties: ['attract credit customers;',
            'financial and economic analysis of the customer;',
            'credit aplication writing and it approval on a credit committee;',
            'work with problem loans;'
        ]
    }]

    var profile = {
        photoSrc: "img/Photo_thumb.jpg",
        firstname: "Volodymyr",
        lastname: "Ilemskyi",
        fullname: function() {
            return this.firstname + " " + this.lastname;
        },
        livingPlace: "Ivano-Frankivsk, Ukraine",
        dateOfBirth: (new Date("1980, 12, 25")).toLocaleString("en", dateOptions),
        phone: "+38-050-373-4002",
        email: "v.ilemsky@gmail.com",
        skype: "vovail80",
        skills: ["Technical: HTML, CSS, Java Script, JQuery",
            "Software: Atom, Microsoft Office packages, Adobe Photoshop",
            "Strong sales and communication skills",
            "High self-motivation",
            "Ability to learn quikly"
        ],
        work: workExpiriens,
        education: {
            main: {
                school: "Ivano-Frankivsk National Technical University of Oil and Gas",
                specialty: "Economic of enterprises, Faculty of Economics and Management, Specialist"
            },
            training: [
                'training "Wholesaler"',
                'training "Meetings that give results"',
                'training "Skills development manager: Delegation. Feedback"',
                'training "Selection and assessment of staff"',
                'training "Management of department"'
            ]
        },
        otherInfo: [{
            header: "Driver's license",
            value: "category B"
        }, {
            header: "Personal qualities",
            value: "dedication, hard work, responsibility, punctuality, I’m good team player"
        }, {
            header: "Hobbies and interests",
            value: "skiing, billiards"
        }]
    };


})();
