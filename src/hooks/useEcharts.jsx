import { useEffect } from "react"
import * as echarts from 'echarts';
import { useRef } from "react";
export const useEcharts = (options) =>{
    const mainRef = useRef()
    let myEcharts = useRef()
    useEffect(()=>{
        myEcharts.current = echarts.init(mainRef.current)
        myEcharts.current.setOption(options)
        debugger
        myEcharts.current.resize()

        window.addEventListener('resize',()=>{
            myEcharts.current.resize()
        })
        return () =>{
            window.removeEventListener('resize',()=>{
                myEcharts.current.resize()
            })
            myEcharts.current.dispose()
        }
    },[])
    useEffect(()=>{
        myEcharts.current.resize()

        myEcharts.current.setOption(options)
    },[options])
    return (
        <div ref={mainRef} className="main" style={{width:'100%',height:'100%'}}></div>
    )
}
