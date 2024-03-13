import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { ChartContainer } from './WeatherChart.styles'
import { RxDocument } from 'rxdb';
import { useSubscription } from 'observable-hooks';
import { WeatherMethodsType } from '../../db/weather/methods';
import { WeatherDataType } from '../../types';
import StorageService from '../../services/storageService';

interface TemperatureGraphProps {
    storageService?: StorageService
}

export const TemperatureGraph = ({ storageService = new StorageService() }: TemperatureGraphProps) => {
    const chartContainer = useRef(null);
    const chartInstance = useRef<Chart<"line", never[], never> | null>(null);
    const [weather, setWether] = useState<RxDocument<WeatherDataType, WeatherMethodsType>[] | null>(null);
    useSubscription(storageService.getWeatherDataObservable(), setWether)

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            chartInstance.current = new Chart(chartContainer.current, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Temperature (°C)',
                        data: [],
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderColor: 'rgba(255, 102, 102, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.2)'
                            },
                            ticks: {
                                color: "rgba(255, 255, 255, 0.6)"
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.2)'
                            },
                            ticks: {
                                color: "rgba(255, 255, 255, 0.6)"
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },

                }
            });
        }
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (chartInstance.current && weather && weather.length > 0) {
            chartInstance.current.data.labels = weather.map(w => w.timepoint) as never;
            chartInstance.current.data.datasets[0].data = weather.map(w => w.temp2m) as never;
            chartInstance.current.update();
        }
    }, [weather]);

    return (
        <ChartContainer>
            <canvas ref={chartContainer}></canvas>
        </ChartContainer>
    );
};
