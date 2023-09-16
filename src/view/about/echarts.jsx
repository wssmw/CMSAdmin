/**
 * 折线组件组件
 *
 * @format
 */

import React from "react";
// import ReactEcharts from 'echarts'
import _ from "lodash";

const Echart = (props) => {
  const { data } = props;
  const getOptions = () => {
    const myOptions = {
      grid: [
        {
          left: "28%",
          right: "12%",
          top: "8%",
          bottom: "10%",
        },
      ],
      yAxis: [
        {
          //就是一月份这个显示为一个线段，而不是数轴那种一个点点
          show: true,
          boundaryGap: true,
          inverse: true,
          type: "category",
          name: "时间",
          data: [1, 2, 3, 4, 5, 6, 7, 8],
          axisLine: {
            //y轴
            show: false,
          },
          axisTick: {
            //y轴刻度线
            show: false,
          },
          axisLabel: {
            formatter: function (v) {
              if (String(v).length > 6) {
                return v.substring(0, 6) + "...";
              } else {
                return v;
              }
            },

            textStyle: {
              color: "#A6B9C8",
            },
          },
          splitLine: {
            //网格线
            show: false,
          },
          triggerEvent: true,
        },
      ],
      xAxis: [
        {
          show: false,
          type: "value",
          name: "销量(kg)",
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          // name: [1,6,3,8,5],
          type: "bar",
          barWidth: 15,
          showSymbol: false,
          label: {
            show: false,
          },
          lineStyle: {
            color: "#1A71FF", //改变折线颜色
          },
          itemStyle: {
            normal: {
              barBorderRadius: [5, 5, 5, 5],
              color: function (params) {
                let colorList = [
                  "#FF4747",
                  "#FA6400",
                  "#FA6400",
                  "#04DCFF",
                  "#04DCFF",
                ];
                if (colorList[params.dataIndex]) {
                  return colorList[params.dataIndex];
                }
                return "#04DCFF";
              },
              label: {
                show: true,
                position: "right",
                textStyle: { color: "#00C1DE" },
                formatter: "{c}件",
              },
            },
          },
          data: [1, 2, 3, 4, 5, 6, 7],
        },
      ],
    };
    return myOptions;
  };
  const myOptions = getOptions(80);

  const mouseover = {
    mouseover: (params) => {
      if (params.componentType == "yAxis") {
        let offsetX = params.event.event.clientX;
        let offsetY = params.event.event.clientY;
        let xAxisTip = document.querySelector(".x-axis-tip");
        xAxisTip.innerText = params.value;
        xAxisTip.style.left = offsetX + "px";
        xAxisTip.style.top = offsetY + 11 + "px";
        xAxisTip.style.display = "block";
      }
    },
    mouseout: () => {
      let xAxisTip = document.querySelector(".x-axis-tip");
      xAxisTip.style.display = "none";
    },
  };
  return (
    <div>abc</div>
    //     <ReactEcharts
    //     lazyUpdate
    //     notMerge
    //     option={myOptions}
    //     style={{
    //         width: '100%',
    //         height: '100%',
    //     }}
    //     onEvents={mouseover}
    // />
  );
};
Echart.defaultProps = {
  data: [],
};
export default Echart;
