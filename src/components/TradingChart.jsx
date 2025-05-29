import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const TradingChart = ({ symbol }) => {
  const chartContainerRef = useRef();
  const chartRef = useRef();

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

    // Exemplo de dados (substitua por dados reais da sua API)
    const data = [
      { time: '2024-01-01', open: 10, high: 15, low: 8, close: 12 },
      { time: '2024-01-02', open: 12, high: 18, low: 11, close: 15 },
      { time: '2024-01-03', open: 15, high: 16, low: 9, close: 11 },
      // Adicione mais dados aqui
    ];

    candlestickSeries.setData(data);

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
  }, [symbol]);

  return (
    <div className="w-full bg-[#1e2035] rounded-lg p-4">
      <div ref={chartContainerRef} className="w-full" />
    </div>
  );
};

export default TradingChart;