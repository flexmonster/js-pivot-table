var pivot = $("#pivot-container").flexmonster({
  componentFolder: "https://s3.amazonaws.com/flexmonster/2.3/",
  width: "100%",
  height: 430,
  toolbar: true,
  report: {
    dataSource: {
      dataSourceType: "csv",
      filename: "https://s3.amazonaws.com/flexmonster/2.3/data/data.csv"
    },
    slice: {
      columns: [{
        uniqueName: "Color"
      }],
      rows: [{
        uniqueName: "Country"
      }, {
        uniqueName: "[Measures]"
      }],
      measures: [{
        uniqueName: "Price",
        format: "currency"
      }, {
        uniqueName: "Discount",
        format: "currency"
      }],
    },
    formats: [{
      name: "currency",
      currencySymbol: "$",
      currencySymbolAlign: "left",
      thousandsSeparator: ",",
      decimalPlaces: 2
    }],
    conditions: [{
      formula: "if(#value < 2000, 'trueStyle')",
      measure: "Discount",
      trueStyle: {
        backgroundColor: "#CCFFCC",
      }
    }, {
      formula: "if(AND(#value > 2000, #value < 4000), 'trueStyle')",
      measure: "Discount",
      trueStyle: {
        backgroundColor: "#FFFF99",
      }
    }],
    options: {
      configuratorActive: false
    }
  }
});
