import React, { memo, useEffect, useRef, useState } from 'react'
import { getTableList } from '../../../../service/module/table'
import { Button, Dropdown, Form, Image, Input, Pagination, Popover, Select, Space, Table } from 'antd'
import copy from 'copy-to-clipboard'
import { UseProTableWrapper } from './style';

const options = [
	{ label: "管理员", value: 0 },
	{ label: "项目经理", value: 1 },
	{ label: "部门经理", value: 2 },
	{ label: "人事经理", value: 3 },
	{ label: "销售经理", value: 4 }
];

const UseProTable = memo(() => {
  const [tableList,setTableList] = useState([])
  const getTableInfo = () =>{
    getTableList({
      pageSize:paginationInfo.pageSize,
      pageNum:paginationInfo.current,
      name:nameValue,
      gender:genderValue,
      role:roleValue,
      status:statusValue
    }).then(res=>{
      console.log(res,'res');
      setTableList(res.data.list)
      let newPaginationInfo = paginationInfo
      newPaginationInfo.total = res.data.total
      setPaginationInfo(newPaginationInfo)
    })
  }
  const columns = [
    {
      title:'用户姓名',
      dataIndex:'username',
      width:100,
      fixed:'left',
      align:'center'
    },
    {
      title:'id',
      dataIndex:'id',
      width:200,
      align:'center'
    },
    {
      title:'email',
      dataIndex:'email',
      width:200,
      align:'center'
    },
    {
      title:"用户相册",
      align:'center',
      width:200,
      render:({avatar}) =>{
        const len = avatar?.length
        const content = <div style={{display:'flex'}}>
          {
            avatar.map((item)=>
              <Image width={50} src={item}/>
            )
          }
        </div>
        return (
          <Popover content={content} trigger='hover'>
            <Button>查看{len}个文件</Button>
          </Popover>
        )
      }
    },
    {
      title:'视频链接',
      align:'center',
      width:200,
      render:({introduction}) =>{
        const content = <div style={{width:'200px',height:'auto'}}>
          <video controls style={{width:'100%',height:'100%'}} src={introduction}></video>
        </div>
        const copeClick = () =>{
          copy(introduction)
        }
        return (
          <Popover content={content} trigger='hover'>
            <Button onClick={copeClick}>复制链接</Button>
          </Popover>
        )
      }
    },
    {
      title:'角色',
      align:'center',
      dataIndex:'rolename',
      width:200
    },
    {
      title:'身份证',
      align:'center',
      dataIndex:'idCard',
      width:200
    },
    {
      title:'性别',
      align:'center',
      dataIndex:'gender',
      render:(text)=><span>{text===1?'男':'女'}</span>,
      width:200
    },
    {
      title:'年龄',
      align:'center',
      dataIndex:'user',
      render:(text)=><span>{text.detail.age}</span>,
      width:200
    },
    {
      title:'居住地',
      align:'center',
      dataIndex:'address',
      width:200
    },
    {
      title:'用户状态',
      align:'center',
      dataIndex:'status',
      width:200
    },
    {
      title:'操作',
      align:'center',
      fixed: 'right',
      width:400,
      render:()=>{
        return (
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <Button>查看</Button>
            <Button>编辑</Button>
            <Button>重置密码</Button>
            <Button>删除</Button>
          </div>
        )
      }
    }
  ]
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    fixed:'left',
    columnWidth:100,
    onChange: onSelectChange,
  };
  
 
  const [nameValue,setNameValue] = useState('')
  const nameValueHandle = (e) =>{
    setNameValue(e.target.value)
  }
  const [roleValue,setRoleValue] = useState('')
  const roleValueHandle = (e) =>{
    setRoleValue(e)
  }
  const [genderValue,setGenderValue] = useState('')
  const genderValueHandle = (e) =>{
    setGenderValue(e)
  }
  const [statusValue,setStatusValue] = useState('')
  const statusValueHandle = (e) =>{
    setStatusValue(e)
  }
  useEffect(()=>{
    setPaginationInfo({
      total:0,
      pageSize:10,
      current:0
    })
    getTableInfo()
  },[nameValue,roleValue,statusValue,genderValue])
  const divRef = useRef()
  const [tableHeight,setTableHeight] = useState(0) 


  useEffect(()=>{
    getTableInfo()
    setTableHeight(divRef.current.offsetHeight-180)
  },[])


  const [paginationInfo,setPaginationInfo] = useState({
    total:0,
    pageSize:10,
    current:0
  })
  const paginationChange = (page,pageSize) =>{
    console.log(page,pageSize); 
    getTableList({
      pageSize,
      pageNum:page
    }).then(res=>{
      console.log(res,'res');
      setTableList(res.data.list)
      let newPaginationInfo = paginationInfo
      newPaginationInfo.total = res.data.total
      newPaginationInfo.pageSize = pageSize
      newPaginationInfo.current = page
      setPaginationInfo(newPaginationInfo)
    })
  }
  console.log(tableList,tableHeight,paginationInfo);
  return (
    <UseProTableWrapper ref={divRef} style={{padding:'10px',background:'white',height:'100%'}}>
      <div style={{margin:'10px 0 20px 0'}}>
        <Form layout='inline'>
          <Form.Item label={'姓名'}>
            <Input value={nameValue} onChange={nameValueHandle} placeholder='请输入姓名'/>
          </Form.Item>
          <Form.Item label={'角色类型'}>
            <Select 
              style={{width:'100px'}}
              value={roleValue}
              onChange={roleValueHandle}
              options={options}
              allowClear
            />
          </Form.Item>
          <Form.Item label={'性别'}>
            <Select 
              style={{width:'100px'}}
              value={genderValue}
              onChange={genderValueHandle}
              options={[
                {
                  label:'男',
                  value:0
                },
                {
                  value:1,
                  label:'女'
                }
              ]}
              allowClear
            />
          </Form.Item>
          <Form.Item label={'用户状态'}>
            <Select
              style={{width:'100px'}}
              value={statusValue}
              onChange={statusValueHandle}
              options={[{
                label:'禁用',
                value:0
              },{
                value:1,
                label:'启用'
              }]}
              allowClear
              />
          </Form.Item>
        </Form>
      </div>
      <Table
        columns={columns} 
        dataSource={tableList}
        pagination={false}
        rowKey='id'
        bordered
        rowSelection={rowSelection}
        scroll={{
          x:300,
          y:tableHeight
        }}
        expandable={{
          columnWidth:100,
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              { JSON.stringify(record)}
            </p>
          )
        }}
      />
      <Pagination 
        style={{margin:'10px'}}
        total={paginationInfo.total}
        showSizeChanger
        showQuickJumper
        current={paginationInfo.current}
        pageSize={paginationInfo.pageSize}
        pageSizeOptions={[10,25,50,100]}
        showTotal={(total) => `共${total}条`}
        onChange={paginationChange}
      />
    </UseProTableWrapper>
  )
})

export default UseProTable