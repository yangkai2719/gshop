<template>
  <div>
  B1组件
  </div>
</template>

<script>
  export default {
 beforeRouteEnter(to,from,next){
      next(comp=>{
        comp.intervalId=setInterval(()=>{
          console.log('做些事件...')
        },1000)
        next()

      })
    },
    beforeRouteLeave(to,from,next){
     clearInterval(this.intervalId)
        next()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>



