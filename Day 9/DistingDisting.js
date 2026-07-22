let companies = "NeuralLink Tesla Apple Microsoft Nvidia";
let China_companies = "Moonshot kimi BYD Xiaomi Honor Huawi";
let Korean = "Samsung Miyako LG"

let Global_companies = companies.concat(China_companies, Korean);

let company = Global_companies.split(' ');

console.log(company);
company = company.join(' ');

console.log(company);