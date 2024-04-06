import Handlebars from "handlebars";

Handlebars.registerHelper("row", function (base, index, amount) {
  return base + index * amount;
});

export { Handlebars };
