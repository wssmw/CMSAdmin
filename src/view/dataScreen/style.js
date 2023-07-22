import styled from "styled-components";
import pic from './images/bg.png'
import headerLeft from './images/dataScreen-header-left-bg.png'
import headerCenter from './images/dataScreen-header-center-bg.png'
import headerLeftBtn from "./images/dataScreen-header-btn-bg-l.png"
import headerRightBtn from "./images/dataScreen-header-btn-bg-r.png"
import headerCenterWarn from "./images/dataScreen-header-warn-bg.png"
import mainLeftTop from "./images/dataScreen-main-lt.png"
import mainLeftCenter from "./images/dataScreen-main-lc.png"
import mainLeftBottom from "./images/dataScreen-main-lb.png"
import mapbg from "./images/map-title-bg.png"
export const DataScreenWrapper = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:url(${pic}) no-repeat;
  background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-size: 100% 100%;
	background-size: cover;
  display: flex;
  justify-content:center;
  align-items:center;
  .dataScreen_content {
    display: flex;
    flex-direction:column;
    position:fixed;
    width:1920px;
    height:1080px; 
    .dataScreen_header {
			display: flex;
			width: 100%;
			height: 38px;
			.header-lf,
			.header-rg {
				position: relative;
				width: 567px;
				height: 100%;
				background: url(${headerLeft}) no-repeat;
				background-size: 100% 100%;
			}
			.header-ct {
				position: relative;
				flex: 1;
				height: 100%;
				.header-ct-title {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 82px;
					font-family: YouSheBiaoTiHei;
					font-size: 32px;
					line-height: 78px;
					color: #05e8fe;
					text-align: center;
					letter-spacing: 4px;
					background: url(${headerCenter}) no-repeat;
					background-size: 100% 100%;
					.header-ct-warning {
						position: absolute;
						bottom: -42px;
						left: 50%;
						width: 622px;
						height: 44px;
						font-family: YouSheBiaoTiHei;
						font-size: 14px;
						line-height: 44px;
						color: #ffffff;
						text-align: center;
						letter-spacing: 1px;
						background: url(${headerCenterWarn}) no-repeat;
						background-size: 100% 100%;
						transform: translateX(-50%);
					}
				}
			}
			.header-screening,
			.header-download {
				position: absolute;
				top: 0;
				right: 0;
				z-index: 9;
				box-sizing: border-box;
				width: 136px;
				height: 42px;
				padding-right: 4px;
				font-family: YouSheBiaoTiHei;
				font-size: 18px;
				font-weight: 400;
				line-height: 42px;
				color: #29fcff;
				text-align: center;
				cursor: pointer;
				background: url(${headerLeftBtn}) no-repeat;
				background-size: 100% 100%;
			}
			.header-download {
				left: 0;
				padding-right: 0;
				background: url(${headerRightBtn}) no-repeat;
			}
			.header-time {
				position: absolute;
				top: 0;
				right: 14px;
				width: 310px;
				font-family: YouSheBiaoTiHei;
				font-size: 17px;
				font-weight: 400;
				line-height: 38px;
				color: #05e8fe;
				white-space: nowrap;
			}
		}
    .dataScreen_main {
			box-sizing: border-box;
			display: flex;
			flex: 1;
			width: 100%;
      /* height:100%; */
			padding: 12px 42px 20px;
			.dataScreen-lf {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 394px;
				height: 100%;
				margin-right: 40px;
				.dataScreen-top,
				.dataScreen-center,
				.dataScreen-bottom {
					position: relative;
					box-sizing: border-box;
					width: 100%;
					padding-top: 54px;
				}
				.dataScreen-top {
					height: 37%;
					background: url(${mainLeftTop}) no-repeat;
					background-size: 100% 100%;
				}
				.dataScreen-center {
					height: 30%;
					background: url(${mainLeftCenter}) no-repeat;
					background-size: 100% 100%;
				}
				.dataScreen-bottom {
					height: 27%;
					margin-bottom: 0;
					background: url(${mainLeftBottom}) no-repeat;
					background-size: 100% 100%;
				}
			}
			.dataScreen-ct {
				display: flex;
				flex: 1;
				flex-direction: column;
				justify-content: space-between;
				height: 100%;
				margin-right: 40px;
				.dataScreen-map {
					position: relative;
					box-sizing: border-box;
					flex: 1;
					width: 100%;
					margin-top: 78px;
					.dataScreen-map-title {
						position: absolute;
						top: 10px;
						left: 0;
						z-index: 99;
						box-sizing: border-box;
						display: flex;
						align-items: center;
						width: 270px;
						height: 25px;
						padding-left: 30px;
						font-size: 14px;
						color: #ffffff;
						letter-spacing: 5px;
						background: url(${mapbg}) no-repeat;
						background-size: 100% 100%;
					}
					.dataScreen-alarm {
						position: absolute;
						top: 0;
						left: 0;
						z-index: 99;
						box-sizing: border-box;
						width: 100%;
						height: 76px;
						padding: 2px 30px;
						overflow: hidden;
						background: url("./images/dataScreen-warn-bg.png") no-repeat;
						background-size: 100% 100%;
						.map-item {
							display: flex;
							align-items: center;
							height: 37px;
							cursor: pointer;
							img {
								width: 15px;
								height: 15px;
								margin-top: 3px;
								margin-right: 6px;
							}
							span {
								font-size: 18px;
								color: rgb(255 183 0 / 74.7%);
							}
						}
					}
				}
				.dataScreen-cb {
					position: relative;
					box-sizing: border-box;
					width: 100%;
					height: 252px;
					padding-top: 54px;
					background: url("./images/dataScreen-main-cb.png") no-repeat;
					background-size: 100% 100%;
				}
			}
			.dataScreen-rg {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 394px;
				height: 100%;
				.dataScreen-top,
				.dataScreen-center,
				.dataScreen-bottom {
					position: relative;
					box-sizing: border-box;
					width: 100%;
					padding-top: 54px;
				}
				.dataScreen-top {
					height: 37%;
					background: url("./images/dataScreen-main-rt.png") no-repeat;
					background-size: 100% 100%;
				}
				.dataScreen-center {
					height: 30%;
					background: url("./images/dataScreen-main-rc.png") no-repeat;
					background-size: 100% 100%;
				}
				.dataScreen-bottom {
					height: 27%;
					margin-bottom: 0;
					background: url("./images/dataScreen-main-rb.png") no-repeat;
					background-size: 100% 100%;
				}
			}
			.dataScreen-main-title {
				position: absolute;
				top: 1px;
				left: 0;
				display: flex;
				flex-direction: column;
				span {
					margin-bottom: 12px;
					font-family: YouSheBiaoTiHei;
					font-size: 18px;
					line-height: 16px;
					color: #ffffff;
					letter-spacing: 1px;
				}
				img {
					width: 68px;
					height: 7px;
				}
			}
			.dataScreen-main-chart {
				width: 100%;
				height: 100%;
			}
		}
  }
  
`