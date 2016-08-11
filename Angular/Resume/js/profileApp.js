(function() {
    var app = angular.module("profileApp", []);
    app.controller("resumeCTRL", function() {
        this.person = profile;
    });
    var dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    var profile = {
        firstname: "Volodymyr",
        lastname: "Ilemskyi",
        fullname: function() {
            return this.firstname + " " + this.lastname;
        },
        livingPlace: "Ivano-Frankivsk, Ukraine",
        dateOfBirth: (new Date("1985, 12, 25")).toLocaleString("en", dateOptions),
        phone: "+38-050-373-4002",
        email: "v.ilemsky@gmail.com",
        skype: "vovail80",
        skills: ["Technical: HTML, CSS, Java Script, JQuery",
            "Software: Atom, Microsoft Office packages, Adobe Photoshop",
            "Strong sales and communication skills",
            "High self-motivation",
            "Ability to learn quikly"
        ]

    };

})();
