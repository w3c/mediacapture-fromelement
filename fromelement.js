var respecConfig = {
  // specification status (e.g. WD, LCWD, NOTE, etc.). If in doubt use ED.
  specStatus:           "ED", // "base",

  // the specification's short name, as in http://www.w3.org/TR/short-name/
  shortName:            "mediacapture-fromelement",
  // if your specification has a subtitle that goes below the main
  // formal title, define it here
  // subtitle   :  "an excellent document",

  // if you wish the publication date to be other than today, set this
  // publishDate:  "2009-08-06",

  // new ability to override the copyright completely
  // overrideCopyright:  "This document is licensed under a <a href='http://creativecommons.org/licenses/by-nd/4.0/legalcode'>Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) License. </a> Copyright 2014 Mozilla. ",

  // if the specification's copyright date is a range of years, specify
  // the start date here:
  copyrightStart: "2015",

  // if there is a previously published draft, uncomment this and set its YYYY-MM-DD
  // prevED: "http://dev.w3.org/2011/webrtc/editor/archives/20140321/screenshare.html",

  // if there a publicly available Editor's Draft, this is the link
  edDraftURI:           "https://w3c.github.io/mediacapture-fromelement/",

  // if this is a LCWD, uncomment and set the end of its review period
  // lcEnd: "2009-08-05",

  // if you want to have extra CSS, append them to this list
  // it is recommended that the respec.css stylesheet be kept
  //extraCSS:             ["http://dev.w3.org/2009/dap/ReSpec.js/css/respec.css"],
  //extraCSS:           ["../../../2009/dap/ReSpec.js/css/respec.css"],

  // editors, add as many as you like
  // only "name" is required
  editors:  [
    // { name: "Your Name", url: "http://example.org/",
    // company: "Your Company", companyURL: "http://example.com/" },
    {
        name: "Martin Thomson",
        company: "Mozilla",
        w3cid: 68503
    }, {
        name: "Miguel Casas-Sanchez",
        company: "Google, Inc.",
        companyURL: "http://www.google.com",
        url: "mailto:mcasas@chromium.org?subject=MediaCapture%20fromElement%20W3C%20Spec",
        w3cid: 82825,
        note: "Media Element parts."
    }, {
        name: "Emircan Uysaler",
        company: "Google, Inc.",
        companyURL: "http://www.google.com",
        url: "mailto:emircan@chromium.org?subject=MediaCapture%20fromElement%20W3C%20Spec",
        w3cid: 89334,
        note: "Canvas Element parts."
    }
  ],

  // authors, add as many as you like.
  // This is optional, uncomment if you have authors as well as editors.
  // only "name" is required. Same format as editors.

  //authors:  [
  //    { name: "Your Name", url: "http://example.org/",
  //      company: "Your Company", companyURL: "http://example.com/" },
  //],

  group: "webrtc",

  // name (without the @w3.org) of the public mailing to which comments are due
  wgPublicList: "public-webrtc",

  testSuiteURI: "https://github.com/web-platform-tests/wpt/tree/master/mediacapture-fromelement",
  github: "https://github.com/w3c/mediacapture-fromelement/",
  xref: ["html", "webidl", "mediacapture-streams"],
  otherLinks: [
    {
      key: "Participate",
      data: [
        {
          value: "Mailing list",
          href: "https://lists.w3.org/Archives/Public/public-webrtc/"
        }
      ]
    }
  ]
};
