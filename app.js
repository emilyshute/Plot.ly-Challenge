//create plot function
function getPlots(id) {

    // Read in samples.json using d3 library
    var url = "/Users/matthewvicario/Desktop/Plot.ly-Challenge/Data/samples.json"
    d3.json(url).then(sampleData =>{
        console.log(sampleData)
    
        //store variables
        var IDs = sampleData.samples[0].otu_ids;
        console.log(ids)

        var values = sampleData.samples[0].sample_values.slice(0,10).reverse();
        console.log(values)

        var labels = sampleData.sample[0].otu_labels.slice(0,10);
        console.log(labels)

        var top_OTUs = (sampleData.samples[0].otu_IDs.slice(0,10)).reverse();

        var top_IDs = top_OTUs.map(d => "OTU" + d);
        console.log(`OTU IDs: ${top_IDs}`)

        var labels = sampleData.samples[0].otu_labels.slice(0,10);
        console.log(`OTU IDs: ${labels}`)

        //create trace for bar
        var trace = {
            x: values,
            y: labels,
            type: 'bar',
            orientation: 'h',
            color: 'blue'
    };

        //plot layout
        var data = [trace];

        var layout = {
            title: 'TOP 10 OTU',
            x_axis: {title: 'Sample Values'},
            y_axis: {title: 'OTU IDs'}
        };

    //creating the bar plot
    Plotly.newPlot("bar", data, layout);

    //create trace for bubble chart
    var bub_trace = {
        x: sampleData.samples[0].otu_ids,
        y: sampleData.samples[0].sample_values,
        text: sampleData.sample[0].otu_labels
    };

    //plot layout
    var  bub_data = [bub_trace];

    var bub_layout = {
        title: 'OTU ID',
        height: 400,
        width: 700
    };

     //creating the bubble plot
     Plotly.newPlot("bubble", bub_data, bub_layout);
});
}

//create demoinfo function
function getDemoInfo(id) {

    // Read in data
    d3.json(url).then((data) =>{
        // get metadata info
        var metadata = data.metadata;
        console.log(metadata)

        //use filter function by id
        var field = metadata.filter(meta => meta.id.toString() === id)[0];
        
        var demographicInfo = d3.select("#sample-metadata");
        demographicInfo.html("");

        Object.entries(field).forEach((key) => {
            demographicInfo.append("h5").text(key[0].toUpperCase()+ ": " + key[1] + "\n");
        });
    });
}

// create option changed event
function optionChanged(id) {
    getPlots(id);
    getDemoInfo(id);
}

// create the function for the initial data rendering
function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // read the data 
    d3.json(url).then((data)=> {
        console.log(data)

        // get the id data to the dropdwown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        // call the functions to display the data and the plots to the page
        getPlots(data.names[0]);
        getDemoInfo(data.names[0]);
    });
}
init();