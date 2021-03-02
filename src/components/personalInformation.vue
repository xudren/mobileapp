<template>
<div class='main'>
  <!-- <div class="header">
  
    <div class="header-left back-icon" >
      <svg class="icon" style="width:12px;height:12px">
        <use xlink:href="#iconfanhui" />
      </svg>
      1111
    </div>
    <div class="header-input">
      <span>
        <svg class="icon" style="width:12px;height:12px">
          <use xlink:href="#iconsousuo" />
        </svg>
        输入城市/经典/游玩主题
      </span>
    </div>
    <router-link to="/">
      <div class="header-right">
        返回
        <svg class="icon" style="width:12px;height:12px">
          <use xlink:href="#iconjiantou" />
        </svg>
      </div>
    </router-link>
  </div> -->

  <div class='middle' style="position:relative;">
      <div name="container" style="text-align:center;box-sizing:border-box" >
        <canvas id="canvas" style="z-index: 9999; " 
        ></canvas>
      </div>
      <div id="cliptox" 
      @touchstart='handletouchstart'
      @touchmove="handletouchmove" @touchend="handletouchend" ></div> 
      <div name="display" id="=display">
        <canvas id="canvas_dp" style="z-index: 9999;" ></canvas>
      </div>
    <input type="file" @change='uploadImage' name='file' id='file' accept=".jpeg,.jpg">
    <div class='progress-main'>
      <div class='progress'></div>
      <div class='progress-bar' id='bar'></div>
    </div>
    <button id ="btnclip" style="float: left" @touchstart='clipboard'>截取该区域</button> 
  </div>
</div>
</template>
<script>
let canvas
let context
let canvas2 
let context2
const image = new Image()
let imageData
let  scale 
let cliptox 
const  rubberbandRectangle = {left:10,top:20,width:180,height:180}
const  resize = 1;
const  oldRubberbandRectangle = {};
const  dragging = false
const  extending = false
const  mousedown = {};
let w
let h
let startPoint
let flag=false
let mwidth
let mheight
let copyImgWidth
let copyImgHeight
export default {
  name:'personal',
  mounted(){
    canvas=document.getElementById('canvas')
    context=canvas.getContext('2d')
    canvas2 = document.getElementById('canvas_dp')
    context2 = canvas2.getContext('2d')
    cliptox = document.getElementById("cliptox")
    cliptox.style='position:absolute'
    cliptox.style.display = 'none'; 
    cliptox.style.width=document.documentElement.clientWidth+'px'

    cliptox.style.height=cliptox.style.width
    cliptox.style.background = 'rgba(0,0,0,0.5)'; 
    w=document.documentElement.clientWidth
    h=document.documentElement.clientWidth
    document.getElementById('canvas_dp').height=w
        document.getElementById('canvas_dp').width=w

    console.log( document.documentElement.clientWidth,' document.getElementById.display.style');
      // document.getElementById('display').style.width=document.documentElement.clientWidth
      // document.getElementById('display').style.height=document.documentElement.clientWidth
    scale=1
    // startPoint = this.windowToCanvas(canvas, cliptox.offsetLeft, cliptox.offsetTop); 
  },
  methods:{
    uploadImage(e){
      context.clearRect(0,0,100,100)
      cliptox.style.display = 'none'; 
      const file=document.getElementById('file')
      var bar=document.getElementById('bar')
      const xhr=new XMLHttpRequest()
      const form=new FormData()
      // console.log(e.target.files[0])
      form.append('file',e.target.files[0])
      xhr.open('post',"https://jsonplaceholder.typicode.com/posts/")
      xhr.upload.onprogress=(ev)=>{
        let result=(ev.loaded/ev.total*100).toFixed(2)+'%'
            bar.style.width=result
            bar.innerHTML=result
      } 
      let FR=new FileReader()
      FR.readAsDataURL(e.target.files[0]) //读取文件并将文件以URL的形式保存在result属性中 base64格式  
      FR.onload=(event)=>{ //文件读取完
        image.src=event.target.result;
        image.onload=()=>{
          copyImgWidth=image.width
          copyImgHeight=image.height
          if(image.width>=image.height){
            image.height=document.documentElement.clientWidth
            image.width=image.width*(document.documentElement.clientWidth/copyImgHeight)
          }else if(image.width<image.height){
            image.width=document.documentElement.clientWidth
            image.height=image.height*(document.documentElement.clientWidth/copyImgWidth)
          }

          console.log(image.width,'document.documentElement.clientWidth')
          canvas.height=image.height
          canvas.width=image.width
          
          context.drawImage(image,0,0,image.width,image.height)
          cliptox.style.display = 'inline-block'; 
          startPoint = this.windowToCanvas(canvas, cliptox.offsetLeft, cliptox.offsetTop); 
          startPoint.y=startPoint.y
        }
      }
      xhr.send(form);
    },
    windowToCanvas(canvas,x,y){

      const canvasRectangle=canvas.getBoundingClientRect() //获取画布的位置
      // console.log(x,y,'123213123213')
      return {
        x:x-canvasRectangle.left,
        y:y-canvasRectangle.top
      }
    },  
    clipboard(){
      console.log(startPoint,'startpoint')
      console.log(image.width,image.height,'78899')
      this.imgCut(context2,image,image.width,image.height,startPoint.x,startPoint.y,w,h)
    },
    //将截取的小图片放在canvas里面 
    imgCut(context,image,imgElementW,imgElementH,sx,sy,w,h){ 
      console.log(w,h,'hhhhhh')
      //清理画布，便于重新绘制 
      context.clearRect(0,0,imgElementW,imgElementH); 
      let ratioW
      let ratioH
      if(imgElementW<imgElementH){
        ratioW = copyImgWidth/imgElementW; 
        ratioH = copyImgHeight/document.documentElement.clientHeight; 
      }else if(imgElementW>=imgElementH){
        ratioW = copyImgWidth/imgElementW; 
        ratioH = copyImgHeight/document.documentElement.clientWidth; 
      }
      //计算 ：比例 = 原图像/显示图像 

      console.log(ratioW,ratioH,'4444')
      //根据截取图像的所占位置及大小计算出在原图所占的位置及大小 
      //.drawImage(图像对象,原图像截取的起始X坐标,原图像截取的起始Y坐标,原图像截取的宽度,原图像截取的高度， 
      // 绘制图像的起始X坐标,绘制图像的起始Y坐标,绘制图像所需要的宽度,绘制图像所需要的高度); 
      context.drawImage(image,ratioW*sx,ratioH*sy,ratioW*w,ratioH*h,0,0,w,h); 
      // context.drawImage(image,sx,sy,w,h,0,0,w,h); 
      console.log(imgElementH,sx,sy,w,h,'456')
      console.log(image.width,imgElementW,image.height,imgElementH,'123')
    },
    // rec(x,y,w,h,direction){
    //   if(direction){//逆时针
    //       context.moveTo(x, y);
    //       context.lineTo(x, y + h);
    //       context.lineTo(x + w, y + h);
    //       context.lineTo(x + w, y);
    //   }else{//顺时针
    //       context.moveTo(x, y);
    //       context.lineTo(x + w, y);
    //       context.lineTo(x + w, y + h);
    //       context.lineTo(x, y + h);
    //   }
    //   context.closePath();
    // },
    handletouchstart(e){
      console.log(e,'e1')
      flag=true
      const clickEvent=window.e|| e
      startPoint=this.windowToCanvas(canvas,clickEvent.touches[0].clientX,clickEvent.touches[0].clientY)
      mwidth=clickEvent.touches[0].clientX-cliptox.offsetLeft
      mheight=clickEvent.touches[0].clientY-cliptox.offsetTop
    },
    handletouchmove(e){
      console.log(e,'e2')
      const touchmove=window.e||e
      if(flag){
              
        cliptox.style.left=touchmove.touches[0].clientX-mwidth+'px'
        cliptox.style.top=touchmove.touches[0].clientY-mheight+'px'
        // console.log(touchmove.touches[0].clientX,mwidth,'1111111')
        setInterval(()=>{
          context.clearRect(0,0,image.width,image.height)
          context.drawImage(image,0,0,canvas.width,canvas.height)
        },20)
      }
    },
    handletouchend(e){
      console.log(e,'eeeee')
      startPoint = this.windowToCanvas(canvas, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      flag=false
      startPoint.x=startPoint.x-mwidth
      startPoint.y=startPoint.y-mheight
      console.log(startPoint,'startPoint')
      // let timer=null
      //   if(timer){
      //     clearTimeout(timer)
      //   }
        // timer=setTimeout(()=>{
          this.imgCut(context2,image,canvas.width,canvas.height,startPoint.x,startPoint.y,w,h)
        // },1000)
      
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/varibies.styl';
.main{
  display:flex;
  flex-direction :column;

  width 100%
  height 100%
  box-sizing border-box
}
.header {
  width 100%
  display: flex;
  background: $bgColor;
  line-height: 2rem;
  height 2rem
  color: #fff;

  .header-left {
    width: 3.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 1.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 1.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    background: #fff;
    padding-left: 0.2rem;
    border-radius: 0.3rem;
    color: #ccc;
  }

  .header-right {
    min-width: 4.24rem;
    padding: 0.1rem;
    float: right;
    text-align: center;
    color: #fff;
  }
}
.progress {
 display: inline-block;
 height: 1.25rem;
 width 100%
 border-radius: .25rem;
 background-color: #eee;
 }
 .progress-bar {
 width: 0;
 height: 1.25rem;
 background-color: orange;
 border-radius: 1.25rem;
 font-size:1rem;
 text-align: center;
 color: #fff;
 position absolute
 left 0
 top 0
 }
 .middle{
   height 100%
   display flex
   align-align-items center
   flex-direction column
   width 100%
 }
 .progress-main{
   height 1.4rem;
  position relative
 }
 #file{
   height.5rem;
   padding-bottom 1rem
 }
</style>