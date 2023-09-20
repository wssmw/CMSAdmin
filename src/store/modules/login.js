import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAuthMenuListApi } from '../../service/module/login';
const data = [{
  "path": "/home/index",
  "name": "home",
  "component": "/home/index",
  "meta": {
    "icon": "HomeFilled",
    "title": "工作台",
    "isLink": "",
    "isHide": false,
    "isFull": false,
    "isAffix": true,
    "isKeepAlive": true
  }
},
{
  "path": "/dataScreen",
  "name": "dataScreen",
  "component": "/dataScreen/index",
  "meta": {
    "icon": "BarChartOutlined",
    "title": "数据大屏",
    "isLink": "",
    "isHide": false,
    "isFull": true,
    "isAffix": false,
    "isKeepAlive": true
  }
},
{
  "path": "/proTable",
  "name": "proTable",
  "redirect": "/proTable/useProTable",
  "meta": {
    "icon": "TableOutlined",
    "title": "超级表格",
    "isLink": "",
    "isHide": false,
    "isFull": false,
    "isAffix": false,
    "isKeepAlive": true
  },
  "children": [{
    "path": "/proTable/useProTable",
    "name": "useProTable",
    "component": "/proTable/useProTable/index",
    "meta": {
      "icon": "InsertRowAboveOutlined",
      "title": "简单表格",
      "isLink": "",
      "isHide": false,
      "isFull": false,
      "isAffix": false,
      "isKeepAlive": true
    },
    "children": [{
      "path": "/proTable/useProTable/detail/:id",
      "name": "useProTableDetail",
      "component": "/proTable/useProTable/detail",
      "meta": {
        "icon": "FileTextOutlined",
        "title": "用户详情",
        "activeMenu": "/proTable/useProTable",
        "isLink": "",
        "isHide": true,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    }]
  }]
},
{
  "path": "/dashboard",
  "name": "dashboard",
  "redirect": "/dashboard/dataVisualize",
  "meta": {
    "icon": "DashboardOutlined",
    "title": "仪表盘",
    "isLink": "",
    "isHide": false,
    "isFull": false,
    "isAffix": false,
    "isKeepAlive": true
  },
  "children": [{
      "path": "/dashboard/dataVisualize",
      "name": "dataVisualize",
      "component": "/dashboard/dataVisualize/index",
      "meta": {
        "icon": "FundViewOutlined",
        "title": "主控台",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/dashboard/embedded",
      "name": "embedded",
      "component": "/dashboard/embedded/index",
      "meta": {
        "icon": "chromeOutlined",
        "title": "内嵌页面",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    }
  ]
},
{
  "path": "/form",
  "name": "form",
  "redirect": "/form/proForm",
  "meta": {
    "icon": "FileTextOutlined",
    "title": "表单",
    "isLink": "",
    "isHide": false,
    "isFull": false,
    "isAffix": false,
    "isKeepAlive": true
  },
  "children": [{
      "path": "/form/basicForm",
      "name": "basicForm",
      "component": "/form/basicForm/index",
      "meta": {
        "icon": "ProfileOutlined",
        "title": "基础表单",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/form/dynamicForm",
      "name": "dynamicForm",
      "component": "/form/dynamicForm/index",
      "meta": {
        "icon": "FileAddOutlined",
        "title": "动态表单",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/form/substepForm",
      "name": "substepForm",
      "component": "/form/substepForm/index",
      "meta": {
        "icon": "BarsOutlined",
        "title": "分步表单",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    }
  ]
},
{
  "path": "/auth",
  "name": "auth",
  "redirect": "/auth/menu",
  "meta": {
    "icon": "LockOutlined",
    "title": "权限管理",
    "isLink": "",
    "isHide": false,
    "isFull": false,
    "isAffix": false,
    "isKeepAlive": true
  },
  "children": [{
      "path": "/auth/menu",
      "name": "authMenu",
      "component": "/auth/menu/index",
      "meta": {
        "icon": "AppstoreOutlined",
        "title": "菜单权限",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/auth/button",
      "name": "authButton",
      "component": "/auth/button/index",
      "meta": {
        "icon": "KeyOutlined",
        "title": "按钮权限",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    }
  ]
},
{
  "path": "/function",
  "name": "function",
  "redirect": "/function/rightMenu",
  "meta": {
    "icon": "ControlOutlined",
    "title": "功能示例",
    "isLink": "",
    "isHide": false,
    "isFull": false,
    "isAffix": false,
    "isKeepAlive": true
  },
  "children": [{
    "path": "/function/rightMenu",
    "name": "authMenu",
    "component": "/function/rightMenu/index",
    "meta": {
      "icon": "AlignRightOutlined",
      "title": "右键菜单",
      "isLink": "",
      "isHide": false,
      "isFull": false,
      "isAffix": false,
      "isKeepAlive": true
    }
  }]
},
{
  "path": "/assembly",
  "name": "assembly",
  "redirect": "/assembly/guide",
  "meta": {
    "icon": "ToolOutlined",
    "title": "常用组件",
    "isLink": "",
    "isHide": false,
    "isFull": false,
    "isAffix": false,
    "isKeepAlive": true
  },
  "children": [{
      "path": "/assembly/guide",
      "name": "guide",
      "component": "/assembly/guide/index",
      "meta": {
        "icon": "BulbOutlined",
        "title": "引导页",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/assembly/tabs",
      "name": "tabs",
      "component": "/assembly/tabs/index",
      "meta": {
        "icon": "ThunderboltOutlined",
        "title": "标签页操作",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "children": [{
        "path": "/assembly/tabs/detail/:id",
        "name": "tabsDetail",
        "component": "/assembly/tabs/detail",
        "meta": {
          "icon": "AppstoreOutlined",
          "title": "Tab 详情",
          "activeMenu": "/assembly/tabs",
          "isLink": "",
          "isHide": true,
          "isFull": false,
          "isAffix": false,
          "isKeepAlive": true
        }
      }]
    },
    {
      "path": "/assembly/selectIcon",
      "name": "selectIcon",
      "component": "/assembly/selectIcon/index",
      "meta": {
        "icon": "AppstoreOutlined",
        "title": "图标选择器",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/assembly/selectFilter",
      "name": "selectFilter",
      "component": "/assembly/selectFilter/index",
      "meta": {
        "icon": "ClusterOutlined",
        "title": "分类筛选器",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/assembly/treeFilter",
      "name": "treeFilter",
      "component": "/assembly/treeFilter/index",
      "meta": {
        "icon": "AppstoreOutlined",
        "title": "树形筛选器",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/assembly/select",
      "name": "select",
      "component": "/assembly/select/index",
      "meta": {
        "icon": "AppstoreOutlined",
        "title": "选择器",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/assembly/uploadFile",
      "name": "uploadFile",
      "component": "/assembly/uploadFile/index",
      "meta": {
        "icon": "AppstoreOutlined",
        "title": "文件上传",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/assembly/batchImport",
      "name": "batchImport",
      "component": "/assembly/batchImport/index",
      "meta": {
        "icon": "UploadOutlined",
        "title": "批量添加数据",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/assembly/wangEditor",
      "name": "wangEditor",
      "component": "/assembly/wangEditor/index",
      "meta": {
        "icon": "AppstoreOutlined",
        "title": "富文本编辑器",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/assembly/draggable",
      "name": "draggable",
      "component": "/assembly/draggable/index",
      "meta": {
        "icon": "DragOutlined",
        "title": "拖拽组件",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/assembly/digitalScrolling",
      "name": "digitalScrolling",
      "component": "/assembly/digitalScrolling/index",
      "meta": {
        "icon": "PropertySafetyOutlined",
        "title": "数字滚动",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    }
  ]
},
{
  "path": "/echarts",
  "name": "echarts",
  "redirect": "/echarts/waterChart",
  "meta": {
    "icon": "FundOutlined",
    "title": "图表",
    "isLink": "",
    "isHide": false,
    "isFull": false,
    "isAffix": false,
    "isKeepAlive": true
  },
  "children": [{
      "path": "/echarts/waterChart",
      "name": "waterChart",
      "component": "/echarts/waterChart/index",
      "meta": {
        "icon": "AppstoreOutlined",
        "title": "水型图",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/echarts/columnChart",
      "name": "columnChart",
      "component": "/echarts/columnChart/index",
      "meta": {
        "icon": "BarChartOutlined",
        "title": "柱状图",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/echarts/lineChart",
      "name": "lineChart",
      "component": "/echarts/lineChart/index",
      "meta": {
        "icon": "AreaChartOutlined",
        "title": "折线图",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/echarts/pieChart",
      "name": "pieChart",
      "component": "/echarts/pieChart/index",
      "meta": {
        "icon": "PieChartOutlined",
        "title": "饼图",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/echarts/radarChart",
      "name": "radarChart",
      "component": "/echarts/radarChart/index",
      "meta": {
        "icon": "RadarChartOutlined",
        "title": "雷达图",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    }
  ]
},
{
  "path": "/directives",
  "name": "directives",
  "redirect": "/directives/copyDirect",
  "meta": {
    "icon": "FireOutlined",
    "title": "自定义指令",
    "isLink": "",
    "isHide": false,
    "isFull": false,
    "isAffix": false,
    "isKeepAlive": true
  },
  "children": [{
      "path": "/directives/copyDirect",
      "name": "CopyOutlined",
      "component": "/directives/copyDirect/index",
      "meta": {
        "icon": "CopyOutlined",
        "title": "复制指令",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/directives/watermarkDirect",
      "name": "watermarkDirect",
      "component": "/directives/watermarkDirect/index",
      "meta": {
        "icon": "FormatPainterOutlined",
        "title": "水印指令",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/directives/dragDirect",
      "name": "dragDirect",
      "component": "/directives/dragDirect/index",
      "meta": {
        "icon": "DragOutlined",
        "title": "拖拽指令",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/directives/debounceDirect",
      "name": "debounceDirect",
      "component": "/directives/debounceDirect/index",
      "meta": {
        "icon": "ShakeOutlined",
        "title": "防抖指令",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/directives/throttleDirect",
      "name": "throttleDirect",
      "component": "/directives/throttleDirect/index",
      "meta": {
        "icon": "HourglassOutlined",
        "title": "节流指令",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/directives/longpressDirect",
      "name": "longpressDirect",
      "component": "/directives/longpressDirect/index",
      "meta": {
        "icon": "LikeOutlined",
        "title": "长按指令",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    }
  ]
},
{
  "path": "/menu",
  "name": "menu",
  "redirect": "/menu/menu1",
  "meta": {
    "icon": "MenuOutlined",
    "title": "菜单嵌套",
    "isLink": "",
    "isHide": false,
    "isFull": false,
    "isAffix": false,
    "isKeepAlive": true
  },
  "children": [{
      "path": "/menu/menu1",
      "name": "AppstoreOutlined",
      "component": "/menu/menu1/index",
      "meta": {
        "icon": "AppstoreOutlined",
        "title": "菜单1",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/menu/menu2",
      "name": "menu2",
      "redirect": "/menu/menu2/menu21",
      "meta": {
        "icon": "AppstoreOutlined",
        "title": "菜单2",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "children": [{
          "path": "/menu/menu2/menu21",
          "name": "menu21",
          "component": "/menu/menu2/menu21/index",
          "meta": {
            "icon": "AppstoreOutlined",
            "title": "菜单2-1",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        },
        {
          "path": "/menu/menu2/menu22",
          "name": "menu22",
          "redirect": "/menu/menu2/menu22/menu221",
          "meta": {
            "icon": "AppstoreOutlined",
            "title": "菜单2-2",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          },
          "children": [{
              "path": "/menu/menu2/menu22/menu221",
              "name": "menu221",
              "component": "/menu/menu2/menu22/menu221/index",
              "meta": {
                "icon": "AppstoreOutlined",
                "title": "菜单2-2-1",
                "isLink": "",
                "isHide": false,
                "isFull": false,
                "isAffix": false,
                "isKeepAlive": true
              }
            },
            {
              "path": "/menu/menu2/menu22/menu222",
              "name": "menu222",
              "component": "/menu/menu2/menu22/menu222/index",
              "meta": {
                "icon": "AppstoreOutlined",
                "title": "菜单2-2-2",
                "isLink": "",
                "isHide": false,
                "isFull": false,
                "isAffix": false,
                "isKeepAlive": true
              }
            }
          ]
        },
        {
          "path": "/menu/menu2/menu23",
          "name": "menu23",
          "component": "/menu/menu2/menu23/index",
          "meta": {
            "icon": "AppstoreOutlined",
            "title": "菜单2-3",
            "isLink": "",
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": true
          }
        }
      ]
    },
    {
      "path": "/menu/menu3",
      "name": "menu3",
      "component": "/menu/menu3/index",
      "meta": {
        "icon": "AppstoreOutlined",
        "title": "菜单3",
        "isLink": "",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    }
  ]
},
{
  "path": "/link",
  "name": "link",
  "redirect": "/link/gitee",
  "meta": {
    "icon": "PaperClipOutlined",
    "title": "外部链接",
    "isLink": "",
    "isHide": false,
    "isFull": false,
    "isAffix": false,
    "isKeepAlive": true
  },
  "children": [{
      "path": "/link/gitee",
      "name": "gitee",
      "component": "/link/gitee/index",
      "meta": {
        "icon": "AppstoreOutlined",
        "title": "Gitee 仓库",
        "isLink": "https://gitee.com/Y_lao/GuYue-Admin",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/link/github",
      "name": "github",
      "component": "/link/github/index",
      "meta": {
        "icon": "GithubOutlined",
        "title": "GitHub 仓库",
        "isLink": "https://github.com/Y-Lao",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/link/geekerDocs",
      "name": "geekerDocs",
      "component": "/link/geekerDocs/index",
      "meta": {
        "icon": "FileSearchOutlined",
        "title": "项目文档",
        "isLink": "https://www.yuque.com/dashboard",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    },
    {
      "path": "/link/juejin",
      "name": "juejin",
      "component": "/link/juejin/index",
      "meta": {
        "icon": "ThunderboltOutlined",
        "title": "掘金主页",
        "isLink": "https://juejin.cn/user/4068638047082029/posts",
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      }
    }
  ]
},
{
  "path": "/about/index",
  "name": "about",
  "component": "/about/index",
  "meta": {
    "icon": "ProjectOutlined",
    "title": "关于项目",
    "isLink": "",
    "isHide": false,
    "isFull": false,
    "isAffix": false,
    "isKeepAlive": true
  }
}
]

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {  
  getAuthMenuListApi().then(res=>{
    dispatch(changeMenuAction(res.data))
  })
})


const loginSlice = createSlice({
  name: "login",
  initialState: {
    token:'',
    menu:[],
  },
  reducers: {
    changeTokenAction(state, { payload }) {
      console.log("payload",payload);
      state.token = payload
    },
    changeMenuAction(state,{payload}){
      state.menu = [...payload]
    },

  },
})

export const { 
  changeTokenAction, 
  changeMenuAction,
} = loginSlice.actions

export default loginSlice.reducer
