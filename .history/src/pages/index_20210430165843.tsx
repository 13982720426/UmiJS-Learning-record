import styles from './index.less';
import {DatePicker} from 'antd'
import {useEffect} from 'react'

export default function IndexPage() {

    useEffect(() => {
        setTimeout(()=>{

        },2000)
    }, [])

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <DatePicker />
    </div>
  );
}
