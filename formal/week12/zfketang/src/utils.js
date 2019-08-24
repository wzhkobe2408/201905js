export let loadMore = (ele, cb) => {
  ele.addEventListener('scroll', (e) => {
    // 从 ele 取得盒子模型属性
    let { clientHeight, scrollTop, scrollHeight } = ele

    // 节流
    clearTimeout(ele.timer)
    ele.timer = setTimeout(() => {
      if (scrollHeight - scrollTop - clientHeight < 20) {
        // 满足这个条件说明快滚动到底部了，赶紧去加载
        cb && cb()
        // console.log('到底了')
      }
    }, 30)
  }, false)
}

export let pullRefresh = (ele, cb) => {
  let { offsetTop }= ele // 保存 ele 距离顶部的初始值
  let distance = 0 // 记录下拉的距离

  ele.addEventListener('touchstart', (e) => {
    let startY = e.touches[0].pageY // 记录手指触摸的初始位置

    let touchmove = (e) => {
      let moveY = e.touches[0].pageY

      // 判断手指是否向下滑动
      if (moveY - startY > 0) {
        // 满足这个条件说明是向下滑动
        distance = moveY - startY
        if (distance > 50) {
          distance = 50 // 如果下拉的距离超过50，就是 50 不能再大
        }
        ele.style.top = offsetTop + distance + 'px'
      } else {
        // 向上滑动，移除事件
        ele.removeEventListener('touchend', touchend)
        ele.removeEventListener('touchmove', touchmove)
      }
    }
    let touchend = (e) => {
      if (distance !== 50) return ele.style.top = offsetTop + 'px'
      let timer = null
      timer = setInterval(() => {
        distance--
        if (distance <= 0) {
          clearInterval(timer)
          // console.log('滚到头了')
          cb && cb()
        }
        ele.style.top = offsetTop + distance + 'px'
      }, 6)
    }

    if (ele.offsetTop === offsetTop && ele.scrollTop === 0) {
      // 确保元素在初始位置
      ele.addEventListener('touchmove', touchmove)
      ele.addEventListener('touchend', touchend)
    } else {
      ele.removeEventListener('touchend', touchend)
      ele.removeEventListener('touchmove', touchmove)
    }

  })
}
