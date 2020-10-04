// Read in samples.json using d3 library
var url = "Users/matthewvicario/Desktop/Plot.ly-Challenge/Data/samples.json"
d3.json(url).then(sampleData) => {
    console.log(sampleData)
    
    var IDs = sampleData.samples[0].otu_IDs;
    console.log(ids)

    var values = sampleData.samples[0]sample_values.slice(0,10).reverse();
    console.log(values)

    var labels = sampleData.sample[0].otu_labels.slice(0,10);
    console.log(labels)
}