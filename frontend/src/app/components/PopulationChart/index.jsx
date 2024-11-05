'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function PopulationChart({ populationData }) {
    if (!populationData?.length) return <p>No population data available</p>;

    const chartData = populationData
        .map(item => ({
            year: item.year,
            Population: item.value
        }))
        .sort((a, b) => a.year - b.year)
        .filter(item => item.year % 5 === 0);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    background: '#2c303a',
                    padding: '12px',
                    border: '1px solid #353945',
                    borderRadius: '4px'
                }}>
                    <p style={{ color: '#fff', margin: '0 0 5px' }}>
                        Year: {label}
                    </p>
                    <p style={{ color: '#fff', margin: 0 }}>
                        Population: {new Intl.NumberFormat('en').format(payload[0].value)}
                    </p>
                </div>
            );
        }
        return null;
    };

    const CustomLegend = ({ payload }) => {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                color: '#fff',
                marginTop: '10px'
            }}>
                {payload.map((entry, index) => (
                    <div key={`item-${index}`} style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        marginRight: '20px'
                    }}>
                        <div style={{
                            width: '10px',
                            height: '10px',
                            backgroundColor: entry.color,
                            marginRight: '5px',
                            borderRadius: '50%'
                        }} />
                        <span>{entry.value}</span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <LineChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
                >
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        stroke="#353945"
                        vertical={false}
                    />
                    <XAxis 
                        dataKey="year"
                        stroke="#fff"
                        tick={{ fill: '#fff' }}
                        tickLine={{ stroke: '#fff' }}
                        axisLine={{ stroke: '#fff' }}
                    />
                    <YAxis 
                        stroke="#fff"
                        tick={{ fill: '#fff' }}
                        tickLine={{ stroke: '#fff' }}
                        axisLine={{ stroke: '#fff' }}
                        tickFormatter={(value) => {
                            if (value >= 1000000) {
                                return `${(value / 1000000).toFixed(1)}M`;
                            }
                            return value;
                        }}
                    />
                    <Tooltip 
                        content={<CustomTooltip />}
                        cursor={{ stroke: '#353945' }}
                    />
                    <Legend 
                        content={<CustomLegend />}
                        verticalAlign="top"
                        height={36}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="Population"
                        name="Population Growth"
                        stroke="#0ea5e9"
                        strokeWidth={2}
                        dot={{ 
                            fill: '#0ea5e9',
                            stroke: '#0ea5e9',
                            r: 4 
                        }}
                        activeDot={{ 
                            fill: '#0ea5e9',
                            stroke: '#fff',
                            strokeWidth: 2,
                            r: 6 
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}