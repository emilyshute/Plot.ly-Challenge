// Read in samples.json using d3 library
var url = "Users/matthewvicario/Desktop/Plot.ly-Challenge/Data/samples.json"
d3.json(url).then(sampleData) => {
    console.log(sampleData)
}