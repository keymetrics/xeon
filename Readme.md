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

# PMX smart Alert tester

Tests current implementation of pmx Probe Alert vs datasets in `samples` folder

```bash

$ node testpmx.js

```

Should print `[filename] has been called !` in case of true positive and `[filename] should not have been called` in case of false positive

# ToDo

- Put more info when alert pops (value, median...) + color and time passed indications

- More diverse generation algorithm

- Automate and label precisely the generation and visualisation process

