import styles from './index.less';
import {DatePicker,Button} from 'antd'
import {useEffect} from 'react'
import {history} from 'umi'

export default function IndexPage() {

    useEffect(() => {
        // setTimeout(()=>{
        //     history.push('/list/1')
        // },2000)
    }, [])

    const getData=()=>{}

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={getData}>获取数据</Button>
      <DatePicker />
    </div>
  );
}
