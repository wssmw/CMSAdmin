import React, { memo } from 'react'
import { useRef } from 'react'
import { CountUp as countUp } from 'countup.js'
import { useEffect } from 'react'
const CountUp = memo((props) => {
    const {end,time} = props
    const  options = {
        useEasing: true, // 过渡动画效果，默认ture
        useGrouping: true, // 千分位效果，例：1000->1,000。默认true
        separator: ',', // 使用千分位时分割符号
        decimal: '.', // 小数位分割符号
        prefix: '', // 前置符号
        suffix: '' // 后置符号，可汉字
    }

  const countupRef = useRef()

  useEffect(()=>{
    let numAnim = new countUp(countupRef.current,end,time,options)
    numAnim.start()
  },[])
  return (
    <div>
      <span ref={countupRef}></span>
    </div>
  )
})

export default CountUp