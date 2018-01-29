Super Simple Stocks Technical Test


Requirements

    For a given stock

    Given a market price as input, calculate the dividend yield
    Given a market price as input, calculate the P/E Ratio
    Record a trade, with timestamp, quantity of shares, buy or sell indicator andtrade        price
    Calculate Volume Weighted Stock Price based on trades in past 15 minute
    Calculate the GBCE All Share Index using the geometric mean of prices for all stocks




****************************************************************************************

    Calculate Dividend Yield for given stock with given market price 

    Dividend Yield for TEA with market price 10.0 is: 0.0
    Dividend Yield for POP with market price 10.0 is: 0.8
    Dividend Yield for ALE with market price 10.0 is: 2.3
    Dividend Yield for GIN with market price 10.0 is: 1.0
    Dividend Yield for JOE with market price 10.0 is: 1.3
****************************************************************************************
Calculate P/E Ratio for given stock with given market price 

    Dividend for Stock TEA is 0.
    PE Ratio for TEA with market price 100.0 is: Infinity
    PE Ratio for POP with market price 100.0 is: 12
    PE Ratio for ALE with market price 100.0 is: 4.3478260869565215
    PE Ratio for GIN with market price 100.0 is: 10.0
    PE Ratio for JOE with market price 100.0 is: 7.6923076923076925

****************************************************************************************

Record a trade, with timestamp, quantity of shares, buy or sell indicator and trade price 

     Trade:
      Timestamp:  Fri Feb 26 14:10:22 GMT 2018
      Stock : TEA
      Quantity: 100
      Trade Indicator: BUY
      Trade Price: 100.0

****************************************************************************************
Calculate Volume Weighted Stock Price based on trades in past 15 minutes

Creating 3 trades for each stock

    Trade:
    Timestamp: Fri Feb 26 14:20:50 GMT 2018
    Stock : GIN
    Quantity: 10
    Trade Indicator: BUY
    Trade Price: 22.0

    Trade:
    Timestamp: Fri Feb 26 14:22:35 GMT 2018
    Stock : GIN
    Quantity: 20
    Trade Indicator: BUY
    Trade Price: 3.0

    Trade:
    Timestamp: Fri Feb 26 14:25:18 GMT 2018
    Stock : GIN
    Quantity: 36
    Trade Indicator: BUY
    Trade Price: 40.0

     Trade:
    Timestamp: Fri Feb 26 14:30:20 GMT 2018
    Stock : GIN
    Quantity: 1
    Trade Indicator: BUY
    Trade Price: 1.0

Volume Weighted Stock Price for GIN is: 26.060606060606062

****************************************************************************************
Calculate the GBCE All Share Index using the geometric mean of prices for all stocks

Creating 3 trades for each stock

     Trade:
    Timestamp: Fri Feb 26 14:40:20 GMT 2018
    Stock : TEA
    Quantity: 67
    Trade Indicator: BUY
    Trade Price: 40.0
    
    Trade:
    Timestamp: Fri Feb 26 14:44:35 GMT 2018
    Stock : TEA
    Quantity: 29
    Trade Indicator: BUY
    Trade Price: 72.0
    
    Trade:
    Timestamp: Fri Feb 26 14:49:04 GMT 2018
    Stock : TEA
    Quantity: 46
    Trade Indicator: BUY
    Trade Price: 4.0
    
    Trade:
    Timestamp: Fri Feb 26 14:52:18 GMT 2018
    Stock : POP
    Quantity: 36
    Trade Indicator: BUY
    Trade Price: 95.0
    
    Trade:
    Timestamp: Fri Feb 26 14:56:20 GMT 2018
    Stock : POP
    Quantity: 34
    Trade Indicator: BUY
    Trade Price: 69.0
    
    Trade:
    Timestamp: Fri Feb 26 14:10:22 GMT 2018
    Stock : POP
    Quantity: 54
    Trade Indicator: BUY
    Trade Price: 77.0
    
    Trade:
    Timestamp: Sat Nov 05 20:06:23 GMT 2016
    Stock : ALE
    Quantity: 56
    Trade Indicator: BUY
    Trade Price: 53.0
    
    Trade:
    Timestamp: Sat Nov 05 20:06:23 GMT 2016
    Stock : ALE
    Quantity: 20
    Trade Indicator: BUY
    Trade Price: 53.0
    
    Trade:
    Timestamp: Sat Nov 05 20:06:23 GMT 2016
    Stock : ALE
    Quantity: 2
    Trade Indicator: BUY
    Trade Price: 44.0

    Trade:
    Timestamp: Sat Nov 05 20:06:23 GMT 2016
    Stock : GIN
    Quantity: 54
    Trade Indicator: BUY
    Trade Price: 80.0
    
    Trade:
    Timestamp: Sat Nov 05 20:06:23 GMT 2016
    Stock : GIN
    Quantity: 90
    Trade Indicator: BUY
    Trade Price: 81.0
    
    Trade:
    Timestamp: Sat Nov 05 20:06:23 GMT 2016
    Stock : GIN
    Quantity: 58
    Trade Indicator: BUY
    Trade Price: 64.0
    
    Trade:
    Timestamp: Sat Nov 05 20:06:23 GMT 2016
    Stock : JOE
    Quantity: 19
    Trade Indicator: BUY
    Trade Price: 85.0
    
    Trade:
    Timestamp: Sat Nov 05 20:06:23 GMT 2016
    Stock : JOE
    Quantity: 22
    Trade Indicator: BUY
    Trade Price: 13.0
    
    Trade:
    Timestamp: Sat Nov 05 20:06:23 GMT 2016
    Stock : JOE
    Quantity: 16
    Trade Indicator: BUY
    Trade Price: 97.0
    
    Trade:
    Timestamp: Sat Nov 05 19:50:23 GMT 2016
    Stock : GIN
    Quantity: 1
    Trade Indicator: BUY
    Trade Price: 1.0
Geometric mean of prices in GBCE is : 39.26680645059213


****************************************************************************************
