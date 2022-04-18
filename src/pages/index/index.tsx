import { defineComponent, onMounted } from 'vue'
import Counter from '../../components/Counter.vue'
import classes from './index.module.scss'

import { getBookList } from '@/services/apis/users'

export default defineComponent({
  name: 'Index',
  setup() {
    onMounted(() => {
      getBookListTest()
    })

    const getBookListTest = async () => {
      const data = await getBookList()
      console.log(data, 'data..')
    }

    return () => (
      <>
        <view class={classes.red}>Hello</view>
        <Counter />
      </>
    )
  }
})
