<script>
export default {
  name:"VFunctional",
  functional:true,
  props:{
    comp: Object,
    params:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  render(h, ctx){
    console.log(ctx,'ctx  ')
    return h(ctx.props.comp)
  }
}
</script>