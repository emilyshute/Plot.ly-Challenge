// Read in samples.json using d3 library
var url = "Users/matthewvicario/Desktop/Plot.ly-Challenge/Data/samples.json"
d3.json(url).then(sampleData) => {
    console.log(sampleData)
    
    //store variables
    var IDs = sampleData.samples[0].otu_ids;
    console.log(ids)

    var values = sampleData.samples[0]sample_values.slice(0,10).reverse();
    console.log(values)

    var labels = sampleData.sample[0].otu_labels.slice(0,10);
    console.log(labels)

    var top_OTUs = (sampleData.samples[0].otu_IDs.slice(0,10)).reverse();

    var top_IDs = top_OTUs.map(d => "OTU" + d);
    console.log(`OTU IDs: ${top_IDs}`)

    var labels = sampleData.samples[0].otu_labels.slice(0,10);
    console.log(`OTU IDs: ${labels}`)

    //create trace
    var trace = {
        x: values,
        y: labels,
        type: 'bar'
        orientation: 'h'
        color: 'blue'
    };

    //plot layout
    var data = [trace];

    var layout = {
        title: 'TOP 10 OTU'
        x_axis: {title: 'Sample Values'}
        y_axis: {title: 'OTU IDs'}
    };

    //creating the bar plot
    Plotly.newPlot("bar", data, layout);


    




}