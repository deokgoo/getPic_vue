<template>
<div class="container p-y-1">
    <div class="row m-b-1">
        <div class="col-sm-12 ">
        <div class="form-group inputDnD">
            <label class="sr-only" for="inputFile">File Upload</label>
            <input type="file" class="form-control-file text-success font-weight-bold" id="inputFile" accept="image/*" v-on:change="readUrl" data-title="Drag and drop a file">
        </div>
        <button type="button" class="btn btn-success btn-block" v-on:click.prevent="submitImg">Add Image</button>
        </div>
    </div>
    
</div>
</template>

<script>
import Search from './Search.vue'

export default {
    data(){
        return{
            file : '',
            imgData : ''
        }
    },
    methods:{
        readUrl() {
            const input = document.querySelector('.form-control-file')
            console.log('readUrl()')
            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                let imgData = e.target.result;
                let imgName = input.files[0].name;
                input.setAttribute("data-title", imgName);
                console.log(e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
            this.imgData = input.files[0]
        },
        submitImg(){
            if(this.imgData=='') document.getElementById('inputFile').click()
            this.$parent.$options.methods.sendFireImg(this.imgData)
        }
            
    }
}
</script>

<style>
.inputDnD .form-control-file {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100px;
  outline: none;
  visibility: hidden;
  cursor: pointer;
  margin-left:0px;
  background-color: #c61c23;
  box-shadow: 0 0 5px solid currentColor;
}
.inputDnD .form-control-file:before {
  content: attr(data-title);
  position: absolute;
  top: 0.5em;
  left: 0;
  width: 100%;
  min-height: 100px;
  line-height: 2em;
  padding-top: 1.5em;
  opacity: 1;
  visibility: visible;
  text-align: center;
  border: 0.25em dashed currentColor;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}
.inputDnD .form-control-file:hover:before {
  border-style: solid;
  box-shadow: inset 0px 0px 0px 0.25em currentColor;
}

body {
  background-color: #f7f7f9;
}

</style>
