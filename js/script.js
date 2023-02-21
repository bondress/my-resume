// Functions to get elements
const getOne = (element) => { return document.querySelector(element)};
const getAll = (elements) => { return document.querySelectorAll(elements)};

// Script to ensure that year is always current
let siteYear = getOne(".copyright-year");
siteYear.innerHTML = new Date().getFullYear();