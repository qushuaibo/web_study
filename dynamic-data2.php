<!DOCTYPE html>
<html style="height: 100%;">
  <head>
    <meta charset="utf-8" />
  </head>
  <body style="height: 100%; margin: 0;">
    <div id="container" style="height: 100%;"></div>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts-gl/dist/echarts-gl.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts-stat/dist/ecStat.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts/dist/extension/dataTool.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts/map/js/china.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts/map/js/world.js"
    ></script>
    <script
      type="text/javascript"
      src="https://api.map.baidu.com/api?v=2.0&ak=xfhhaTThl11qYVrqLZii6w8qE5ggnhrY&__ec_v__=20190126"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/echarts/dist/extension/bmap.min.js"
    ></script>
    <script type="text/javascript">
      var dom = document.getElementById("container");
      var myChart = echarts.init(dom);
      var app = {};
      option = null;
      function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
            Math.round(value),
          ],
        };
      }

      var data = [];
      var now = +new Date(1997, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var value = Math.random() * 1000;
      for (var i = 0; i < 1000; i++) {
        data.push(randomData());
      }

      option = {
        title: {
          text: "动态数据 + 时间坐标轴",
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear() +
              " : " +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false,
          },
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "模拟数据",
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            data: data,
          },
        ],
      };

      setInterval(function () {
        for (var i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }

        myChart.setOption({
          series: [
            {
              data: data,
            },
          ],
        });
      }, 1000);
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
    </script>
  </body>
</html>
