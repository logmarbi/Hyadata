import ClearIcon from '@material-ui/icons/DeleteSweep';
import { he } from 'apexcharts'

export const DaysBar = theme => ({
  options: {
    chart: {
      // locales: [he],
      // defaultLocale: 'he',
      // redrawOnParentResize: false,
      // redrawOnWindowResize: false,
      id: 'basic-bar',
      height: 220,
      width: '100%',
      toolbar: {
        tools: {
          // download: '<img src="https://cdn.onlinewebfonts.com/svg/img_3513.png" class="ico-download" width="5" height="20">'
        }
      }
    },
    xaxis: {
      categories: [
        // "שבת",
        // "שישי",
        // "חמישי",
        // "רביעי",
        // "שלישי",
        // "שני",
        // "ראשון"
        "תבש",
        "ישיש",
        "ישימח",
        "יעיבר",
        "ישילש",
        "ינש",
        "ןושאר"
      ],
      labels: {
        style: {
          colors: theme.palette.text.primary,
          dir: "rtl"

        }
      }
    },
    yaxis: {
      opposite: true,
      labels: {
        offsetX: -10,
        style: {
          colors: theme.palette.text.primary
        },
        formatter: function (value) {
          return value + "K";
        }
      },
    },
    fill: {
      colors: [function ({ value, seriesIndex, w }) {
        if (value < 10) {
          //   return '#74C69D'
          // } else if (value >= 10 && value < 50) {
          //   return '#40916C'
          // } else {
          //   return '#1B4332'
          return '#7SC088'
        } else if (value >= 10 && value < 50) {
          return '#397D54'
        } else {
          return '#235D3A'
        }
      }]
    },

    grid: {
      show: false
    },
    // title: {
    //   text: 'נסיעות מול ימים',
    //   style: {
    //     align: "right",
    //     direction: "ltr",
    //     color: theme.palette.text.primary,
    //     fontSize: '24px',
    //     cssClass: 'apexcharts-yaxis-title'
    //   }
    // },
    dataLables: {
      style: {
        colors: theme.palette.text.primary
      }
    },
    theme: {
      palette: 'palette5',
    }
  },
  series: [
    {
      name: 'נוסעים',
      data: [
        9, 25, 65, 42, 40, 35, 55
      ]
    }
  ]
})

export const HoursBar = theme => ({

  options: {

    chart: {
      id: 'basic-bar',
      height: 220,
      width: '100%',
      download: ClearIcon
    },
    xaxis: {
      categories: ["23", "22", "21", "20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
      labels: {

        style: {
          colors: theme.palette.text.primary,
          cssClass: 'apexcharts-xaxis-label',
        },
        // offsetX: -11,
        // offsetY: 20,
      }
    },
    yaxis: {
      opposite: true,

      labels: {
        offsetX: -10,
        style: {
          colors: theme.palette.text.primary
        },
        formatter: function (value) {
          return value + "K";
        },
      },
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      colors: [function ({ value, seriesIndex, w }) {
        if (value < 10) {
          //   return '#74C69D'
          // } else if (value >= 10 && value < 50) {
          //   return '#40916C'
          // } else {
          //   return '#1B4332'
          return '#7SC088'
        } else if (value >= 10 && value < 50) {
          return '#397D54'
        } else {
          return '#235D3A'
        }
      }]
    },
    grid: {
      show: false
    },
    // title: {
    //   text: "יובל",
    //   align: "center"
    // },
    // title: {
    //   text: 'נסיעות מול ימים',
    //   style: {
    //     align: "right",
    //     direction: "ltr",
    //     color: theme.palette.text.primary,
    //     fontSize: '24px',
    //     cssClass: 'apexcharts-yaxis-title'
    //   }
    // },
    dataLables: {
      style: {
        colors: theme.palette.text.primary
      }
    },
    theme: {
      palette: 'palette5',
    }
  },
  series: [
    {
      name: 'נוסעים',
      data: [
        9, 25, 38, 33, 40, 58, 65, 55, 43, 22, 17, 10, 14, 25, 35, 42, 64, 32, 16, 8, 4, 2, 4, 8,
      ]
    }
  ]
})
