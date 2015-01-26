define('avalonUIwrapper',['avalon'],function(){
var wrapper = function(componentName,init){
	 var widget = avalon.ui[componentName] = function(element, data, vmodels) {
		 var options = data[componentName+'Options'];
		 var vmodel  = avalon.define(data[componentName+'Id'],function(vm){
		            vm.wrapperOptions={};
					vm.element=element;
			   		avalon.mix(vm, options);
					//初始化组件的界面，最好定义此方法，让框架对它进行自动化配置
	                vm.$init = function(callback) {
						//调用初始化方法
						init(vm.$model);
						callback();
                   }
				   //清空构成UI的所有节点，最好定义此方法，让框架对它进行自动化销毁
                   vm.$remove = function() {
                        element.innerHTML =  ""
                   }
		   });
		 vmodel.$skipArray=['wrapperOptions','wrapper'];
		 return vmodel;
	 }
}
return {wrapper:wrapper};
})