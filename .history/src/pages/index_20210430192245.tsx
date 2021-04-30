import styles from './index.less';
import {DatePicker,Button} from 'antd'
import {useEffect} from 'react'
import {history,request} from 'umi'

export default function IndexPage() {

    useEffect(() => {
        // setTimeout(()=>{
        //     history.push('/list/1')
        // },2000)
    }, [])

    const getData= async ()=>{
        // request('/api/index').then(res=>{
        //     console.log(res)
        // })
        const data = await request('/api/tags')
        console.log(data)
    }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={getData}>获取数据</Button>
      <DatePicker />
    </div>
  );
}
