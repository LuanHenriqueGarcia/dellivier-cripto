import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';
import { format } from 'date-fns';

const TradingChart = ({ symbol }) => {
  const chartContainerRef = useRef();
  const chartRef = useRef();
  const [timeframe, setTimeframe] = useState('1D');

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: '#1e2035' },
        textColor: '#d1d4dc',
      },
      grid: {
        vertLines: { color: '#252847' },
        horzLines: { color: '#252847' },
      },
      crosshair: {
        mode: 'normal',
        vertLine: {
          width: 1,
          color: '#00ff88',
          style: 2,
        },
        horzLine: {
          width: 1,
          color: '#00ff88',
          style: 2,
        },
      },
      timeScale: {
        borderColor: '#252847',
        timeVisible: true,
        secondsVisible: false,
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#00ff88',
      downColor: '#ff3838',
      borderVisible: false,
      wickUpColor: '#00ff88',
      wickDownColor: '#ff3838',
    });

    const volumeSeries = chart.addHistogramSeries({
      color: '#26a69a',
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '', // Escala separada para o volume
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });

    // Gerar dados de exemplo mais realistas
    const generateData = () => {
      const data = [];
      const volumeData = [];
      let basePrice = 1000;
      let lastClose = basePrice;
      
      for (let i = 0; i < 100; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (100 - i));
        
        const volatility = 0.02;
        const change = lastClose * volatility * (Math.random() - 0.5);
        const open = lastClose;
        const close = open + change;
        const high = Math.max(open, close) + Math.abs(change) * Math.random();
        const low = Math.min(open, close) - Math.abs(change) * Math.random();
        
        lastClose = close;
        
        data.push({
          time: format(date, 'yyyy-MM-dd'),
          open,
          high,
          low,
          close,
        });

        volumeData.push({
          time: format(date, 'yyyy-MM-dd'),
          value: Math.floor(Math.random() * 1000000),
          color: close > open ? '#00ff8850' : '#ff383850',
        });
      }
      
      return { candleData: data, volumeData };
    };

    const { candleData, volumeData } = generateData();
    candlestickSeries.setData(candleData);
    volumeSeries.setData(volumeData);

    // Adicionar legenda
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.zIndex = '2';
    container.style.top = '10px';
    container.style.left = '10px';
    container.style.padding = '8px';
    container.style.backgroundColor = '#1e2035';
    container.style.borderRadius = '4px';
    container.style.fontSize = '12px';
    chartContainerRef.current.appendChild(container);

    chart.subscribeCrosshairMove(param => {
      if (param.time) {
        const data = param.seriesData.get(candlestickSeries);
        if (data) {
          container.innerHTML = `
            <div style="color: #00ff88">
              O: ${data.open.toFixed(2)} 
              H: ${data.high.toFixed(2)} 
              L: ${data.low.toFixed(2)} 
              C: ${data.close.toFixed(2)}
            </div>
          `;
        }
      }
    });

    // Responsividade
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    chartRef.current = chart;

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [symbol, timeframe]);

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-4">
        {['1m', '5m', '15m', '1h', '4h', '1D', '1W'].map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`px-3 py-1 rounded ${
              timeframe === tf
                ? 'bg-[#00ff88] text-[#1a1c34]'
                : 'bg-[#1e2035] text-white hover:bg-[#252847]'
            }`}
          >
            {tf}
          </button>
        ))}
      </div>
      <div className="relative">
        <div ref={chartContainerRef} className="w-full" />
      </div>
    </div>
  );
};

export default TradingChart;