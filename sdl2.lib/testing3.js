package SimpleStocks.Model;

import java.util.Date;

/**
 * done
 */
public interface ITrade {
    IStock GetTradedStock();
    Date GetTradeTimestamp();
    int GetTradedQuantity();
    TradeIndicator GetTradeIndicator();
    double GetTradedPrice();
}