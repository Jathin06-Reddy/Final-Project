import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const SentimentChart = ({ data }) => {
  const chartData = {
    labels: data.map(r => r.timestamp ? new Date(r.timestamp).toLocaleDateString() : 'Unknown'),
    datasets: [
      {
        label: 'Positive',
        data: data.map(r => r.sentiment === 'positive' ? 1 : 0),
        borderColor: 'green',
        fill: false
      },
      {
        label: 'Negative',
        data: data.map(r => r.sentiment === 'negative' ? 1 : 0),
        borderColor: 'red',
        fill: false
      },
      {
        label: 'Neutral',
        data: data.map(r => r.sentiment === 'neutral' ? 1 : 0),
        borderColor: 'gray',
        fill: false
      }
    ]
  };

  return <Line data={chartData} />;
};

export default SentimentChart;
