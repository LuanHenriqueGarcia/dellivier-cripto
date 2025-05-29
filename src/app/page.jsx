"use client";
import React, { useState } from "react";
import TradingChart from "../components/TradingChart";

function MainComponent() {
  const [selectedCrypto, setSelectedCrypto] = useState("CSM");
  const [cryptoPrices, setCryptoPrices] = useState([
    { name: "CosmosCoin", symbol: "CSM", price: "12,345.67", change: "+2.34" },
    { name: "QuantumToken", symbol: "QTM", price: "8,901.23", change: "-1.45" },
    { name: "NovaCash", symbol: "NVC", price: "567.89", change: "+3.21" },
    { name: "StardustPay", symbol: "SDP", price: "234.56", change: "-0.98" },
    { name: "LunarChain", symbol: "LNC", price: "789.01", change: "+4.32" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1c34] to-[#0d0f23] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="bg-[#252847] p-6 rounded-xl mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold">{selectedCrypto} Chart</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl font-bold text-[#00ff88]">
                  ${cryptoPrices.find(c => c.symbol === selectedCrypto)?.price}
                </span>
                <span className={`text-sm ${
                  cryptoPrices.find(c => c.symbol === selectedCrypto)?.change.startsWith('+')
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}>
                  {cryptoPrices.find(c => c.symbol === selectedCrypto)?.change}%
                </span>
              </div>
            </div>
            <select
              value={selectedCrypto}
              onChange={(e) => setSelectedCrypto(e.target.value)}
              className="bg-[#1e2035] border-none rounded-lg px-4 py-2 text-[#00ff88] focus:ring-2 focus:ring-[#00ff88] focus:outline-none"
            >
              {cryptoPrices.map(crypto => (
                <option key={crypto.symbol} value={crypto.symbol}>
                  {crypto.name}
                </option>
              ))}
            </select>
          </div>
          <TradingChart symbol={selectedCrypto} />
        </div>
      </div>
    </div>
  );
}

export default MainComponent;