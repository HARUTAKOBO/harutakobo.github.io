function calculateAllocation() {
    var exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    var investmentAmountJPY = parseFloat(document.getElementById('investmentAmountJPY').value);
    var scalingAsset = document.getElementById('scalingAsset').value;
    var scalingShares = parseFloat(document.getElementById('scalingShares').value);

    if (isNaN(exchangeRate) || isNaN(investmentAmountJPY) || isNaN(scalingShares)) {
        alert('正しい為替レート、投資金額(円)、および基準口数を入力してください。');
        return;
    }

    var investmentAmountUSD = investmentAmountJPY / exchangeRate;

    var assetAllocation = {
        'VWO': parseFloat(document.getElementById('VWO').value) / 100,
        'HYG': parseFloat(document.getElementById('HYG').value) / 100,
        'GLD': parseFloat(document.getElementById('GLD').value) / 100,
        'BND': parseFloat(document.getElementById('BND').value) / 100,
        'VTI': parseFloat(document.getElementById('VTI').value) / 100,
        'CASH': parseFloat(document.getElementById('CASH').value) / 100
    };

    var allocation = [], adjustedAllocation = [];
    for (var asset in assetAllocation) {
        var amountInUSD = investmentAmountUSD * assetAllocation[asset];
        var shares = amountInUSD / assetPrices[asset];
        allocation.push({
            Asset: asset,
            USD: amountInUSD.toFixed(2),
            JPY: numberWithCommas((amountInUSD * exchangeRate).toFixed()),
            Shares: shares.toFixed(2)
        });
    }

    // スケーリングファクターの計算
    var baseShares = investmentAmountUSD * assetAllocation[scalingAsset] / assetPrices[scalingAsset];
    var scalingFactor = scalingShares / baseShares;

    // 調整済みの結果の計算
    for (var asset in assetAllocation) {
        var amountInUSD = investmentAmountUSD * assetAllocation[asset];
        var adjustedShares = (amountInUSD / assetPrices[asset]) * scalingFactor;
        adjustedAllocation.push({
            Asset: asset,
            USD: (adjustedShares * assetPrices[asset]).toFixed(2),
            JPY: numberWithCommas(((adjustedShares * assetPrices[asset]) * exchangeRate).toFixed()),
            AdjustedShares: adjustedShares.toFixed(2)
        });
    }

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>分配結果:</h2>';
    for (var i = 0; i < allocation.length; i++) {
        var assetData = allocation[i];
        resultDiv.innerHTML += `<p>${assetData.Asset}: $${assetData.USD} (${assetData.JPY}円) - ${assetData.Shares}口</p>`;
    }
    resultDiv.innerHTML += '<h2>調整済の結果:</h2>';
    for (var i = 0; i < adjustedAllocation.length; i++) {
        var adjustedData = adjustedAllocation[i];
        resultDiv.innerHTML += `<p>${adjustedData.Asset}: $${adjustedData.USD} (${adjustedData.JPY}円) - ${adjustedData.AdjustedShares}口 (調整後)</p>`;
    }
}

var assetPrices = {
    'VWO': 40.39,
    'HYG': 74.77,
    'GLD': 183.67,
    'BND': 70.64,
    'VTI': 223.11,
    'CASH': 1
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}