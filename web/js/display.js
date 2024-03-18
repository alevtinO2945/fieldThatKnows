function handleClick(sample,doScroll=true){
    if(sample==null){
       [...document.querySelectorAll('.emphasize')].
          forEach((e)=>e.classList.remove('emphasize'));
       return;
    }
    const el=document.getElementById(
       "sample_"+sample.id
    );
    if(el.classList.contains("emphasize")){
       el.classList.remove("emphasize");
       chart.selectSample(null);
       return;
    }
    [...document.querySelectorAll('.emphasize')].
       forEach((e)=>e.classList.remove('emphasize'));
    el.classList.add("emphasize");
    if(doScroll){
       el.scrollIntoView({
          behavior:'auto',
          block:'center'
       });
    }
    chart.selectSample(sample);
 }
 
 function toggleInput(){
    if(inputContainer.style.display=="none"){
       inputContainer.style.display="block";
       sketchPad.triggerUpdate();
    }else{
       inputContainer.style.display="none";
       chart.hideDynamicPoint();
    }
 }