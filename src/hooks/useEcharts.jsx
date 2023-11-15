import { useEffect } from "react"
import * as echarts from 'echarts';
import { useRef } from "react";
export const useEcharts = (options) =>{
    const mainRef = useRef()
    useEffect(()=>{
        const myEcharts = echarts.init(mainRef.current)
        myEcharts.setOption(options)
        window.addEventListener('resize',()=>{
            myEcharts.resize()
        })
        return () =>{
            window.removeEventListener('resize',()=>{
                myEcharts.resize()
            })
            myEcharts.dispose()
        }
    },[])
    return (
        <div ref={mainRef} className="main" style={{width:'100%',height:'100%'}}></div>
    )
}