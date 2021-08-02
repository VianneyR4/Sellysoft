import { Link as RouterLink } from 'react-router-dom';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { Icon } from '@iconify/react';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { Box, Button, Card, CardHeader } from '@material-ui/core';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [{ data: [1380, 1200, 1100, 690, 580, 540, 470, 448, 430, 400] }];

export default function AppConversionRates() {
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 3 }
    },
    xaxis: {
      categories: [
        'Pain - 1',
        'Fromage - 2',
        'Jus - 3',
        'Sossis - 4',
        'Lait - 5',
        'Chocolat - 6',
        'Vin - 7',
        'Fanta - 8',
        'Paumme - 9',
        'Ships - 10'
      ]
    }
  });

  return (
    <Card>
      <CardHeader title="Produits plus vendu" subheader={`Pendant ce mois (${'Aout'})`} />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
