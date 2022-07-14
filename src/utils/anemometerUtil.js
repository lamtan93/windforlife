

const getDataForDetailWindChart = (readings) => {
    const datesLabel = [];
    const data = [];
    readings?.sort((a,b) => {
        return new Date(a?.timestamp) -  new Date(b?.timestamp);
    });

    readings?.map(r => datesLabel.push(new Date(r?.timestamp).toLocaleDateString()));
    readings?.map(r => data.push(`${r?.force}`));

    const dataForDetailWindChart = {
        datesLabel,
        data,
    }
    return dataForDetailWindChart;
}


const anemometerUtil = {
    getDataForDetailWindChart,
}

export default anemometerUtil;