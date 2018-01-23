/*本模板（组件）是基于jQuery。
 * 这是一个confirm信息提示框。
 */
//参数示例
var  mess = {
	// type:'del',//warning
//	target:'body',//触发弹出框的元素
	title:'危险操作',//弹出框标题
	content:'是否删除',//弹出框提示信息
	sureBtnText:'OK',//确定按钮的显示文字
	exitBtnText:'quit',//取消按钮的显示文字
	titleBg:'#eee',//标题背景色
	titleColor:'#000',//标题字体颜色
	conBg:'#000',//内容背景色
	conColor:'#fff',//内容字体颜色
	sbBg:'green',//确定按钮背景色
	sbColor:'yellow',//确定按钮字体颜色
	ebBg:'red',//取消按钮背景颜色
	ebColor:'blue',//取消按钮字体颜色
	sbClick:function(){//确定按钮点击事件
		console.log('确定');
	},
	ebClick:function(){//取消按钮点击事件
		console.log('取消');
	}
}
function window_confirm(setObj){
		var newConfirm = $('<div id="confirm"><div class="con_wrap"><div class="con_title">标题</div><div class="con_img"><img/></div><div class="con_content">您是否确定要进行此操作</div><div class="con_btns"><div class="sb">Sure</div><div class="eb">Quit</div></div></div></div>');
		$('body').append(newConfirm);
		//根据setObj设置弹出框的基本内容
		/*var type = $('#btn').attr('type');*/
		// type = setObj.type ? setObj.type : 'del';
		// if(type == 'del'){
		// 	$('#confirm .con_img>img').attr('src','danger.jpg');
		// }else if(type == 'warning'){
		// 	$('#confirm .con_img>img').attr('src','warning.jpg');
		// }
		var title = setObj.title ? setObj.title : '危险操作！';
		$('#confirm .con_title').text(title);
		var content = setObj.content ? setObj.content : '您是否确定要进行此操作？';
		$('#confirm .con_content').text(content);
		var sureBtnText = setObj.sureBtnText ? setObj.sureBtnText : 'OK';
		$('#confirm .con_btns .sb').text(sureBtnText);
		var exitBtnText = setObj.exitBtnText ? setObj.exitBtnText : 'Quit';
		$('#confirm .con_btns .eb').text(setObj.exitBtnText);
		var titleBg = setObj.titleBg ? setObj.titleBg : '#111';
		var titleColor = setObj.titleColor ? setObj.titleColor : '#eee';
		$('#confirm .con_title').css({
			'background':titleBg,
			'color':titleColor,
		});
		var cb = setObj.conBg ? setObj.conBg : '#222';
		var cc = setObj.conColor ? setObj.conColor : '#eec';
		$('#confirm .con_wrap').css({
			'background':cb,
			'color':cc,
		});
		var sb = setObj.sbBg ?setObj.sbBg: '#000';
		var sc = setObj.sbColor ? setObj.sbColor : '#eee';
		$('#confirm .con_btns .sb').css({
			'background':sb,
			'color':sc,
		});
		var eb = setObj.ebBg ? setObj.ebBg :'#000';
		var ec = setObj.ebColor ? setObj.ebColor  :'#eee';
		$('#confirm .con_btns .eb').css({
			'background':eb,
			'color':ec,
		});
		//确定按钮和取消按钮的点击事件
		$('#confirm .con_btns .sb').click(function(){
			if(setObj.sbClick){
            //
				setObj.sbClick();
			}
			//移除confirm弹框
			$('#confirm').remove();
			$('.zhe').css(
				'display','none'
			);
			window.onmousewheel = document.onmousewhile = function(){
				return true;
			}
		});
		$('#confirm .con_btns .eb').click(function(){

			if(setObj.ebClick){
				setObj.ebClick();

			}
			//移除confirm弹框
			$('#confirm').remove();
			$('.zhe').css(
				'display','none'
			);
			window.onmousewheel = document.onmousewhile = function(){
				return true;
			}
		});
}
//window_confirm(mess);
