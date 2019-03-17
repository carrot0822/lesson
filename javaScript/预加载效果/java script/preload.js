// JavaScript Document
(function($){
	function PreLoad(imgs,options){
		this.imgs = (typeof imgs === 'string') ? [imgs]:imgs;
		this.opts = $.extend({},PreLoad.DEFAULTS,options);//合并default参数和值
		
		if(this.opts.order === 'ordered'){
			this._ordered();	
		}else{	
			this._unordered();
		}
			
	}
	
	PreLoad.DEFAULTS = {
		order:'unordered',//无序加载默认
		each:null, //每一张图片加载完毕后执行
		all:null //所有图片加载完毕后执行	
	};
	//有序加载
	PreLoad.prototype._ordered = function(){
		var opts = this.opts,
			imgs = this.imgs,
			len = imgs.length,
			count = 0;
			
			load();
			//有序预加载
			function load(){
				var imgObj = new Image();
				
				$(imgObj).on('load error',function(){
					opts.each && opts.each(count);	
					if(count >= len){
						//所有图片加载完毕
						opts.all && opts.all();	
					}else{
						load();	
						count++;
					}
					
				});
				imgObj.src = imgs[count];	
			}
	}
	//无序加载
	PreLoad.prototype._unordered = function(){	
		var imgs = this.imgs,
			opts = this.opts,
			count = 0,
			len = imgs.length;
		
		$.each(imgs,function(i,src){
			
			if(typeof src != 'string') return;
			
			var imgObj = new Image();
		
			$(imgObj).on('load',function(){
				opts.each && opts.each(count);
				if(count >= len - 1){
					opts.all && opts.all();
				}
				count++;	
			});	
			imgObj.src = src;
		});
	};
	
	
	//扩展方法
	$.extend({	
		preload:function(imgs,opts){
			new PreLoad(imgs,opts);
		}
	});
	
	
})(jQuery);