# Xeon

![Grap](https://raw.githubusercontent.com/keymetrics/xeon/master/spikeChart.png)

Xeon is a module designed to visualize datasets and test algorithm performance over error detection

It allows you to:

- **Visualize time series**
- **Generate simple datasets**
- **Test a detection algorithm on datasets**

# Data generator

Outputs a dataset of 1800 points following the selected algorithm:

```bash

$ node gen.js spike > spike.json

```

### Possible algorithms: 

- flat
- Random with 2 % variance
- spike of current + 2 * initial value

### options

- `-o` Outputs to specified file (data.json default)

# Visualisation Tool

First use the data generator or make sure you have a data.json file in source folder.

Create local server (ex: `php -S localhost:8080`) in main folder and access visual.html via navigator to check the graph

