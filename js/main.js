var flag=1;
var count=0;
var refreshID;	
var seq='';
var cur=0;;
var currseq='';
var userseq='';
var flagcur=0;
var userClicks=0;
var right=0;
var checkTime=true;
var seqwrong=0;
var retryseq=[];
var currentseq=0;
var strict;
$(document).ready(function(){
	strict= $('.switch__toggle').is(":checked");
	console.log(strict);
	$('#start').click(function(){
		strict= $('.switch__toggle').is(":checked");
		$('.switch__toggle').attr('disabled',true);
		if(strict){
			$(this).text('').fadeOut(300);
			$(this).text('Started').fadeIn(300);
			$(this).addClass('startClass');
			if(flag==1){
			flag=0;	

			startstrict();
			}	
		}
		else {
			$(this).text('').fadeOut(300);
			$(this).text('Started').fadeIn(200);
			$(this).addClass('startClass');
			if(flag==1){
			flag=0;	
			start();
			}	
		}

	});
	$('.switch__toggle').on('checked',function(){
		strict= $('.switch__toggle').is(":checked");

	});
function reset(){
		flag=1;
		count=0;
		$('#countno').text(count);
		$('#start').text('Start');
		$('#start').removeClass('startClass');
		strict= $('.switch__toggle').is(":checked");
		$('.switch__toggle').attr('disabled',true);
		if(strict){
			$(this).text('').fadeOut(300);
			$(this).text('Started').fadeIn(300);
			$(this).addClass('startClass');
			if(flag==1){
			flag=0;	

			startstrict();
			}	
		}
		else {
			$(this).text('').fadeOut(300);
			$(this).text('Started').fadeIn(200);
			$(this).addClass('startClass');
			if(flag==1){
			flag=0;	
			start();
			}	
		}



}
	$('#reset').click(function(){
		flag=1;
		count=0;
		$('#start').text('Start');
		$('#start').removeClass('startClass');
		$("#countno").text(count);
		location.reload();
		// start();
	});

function startstrict(){
	checkTime=true;
	right=0;
	userseq='';
	seq='';
	userClicks=0;
		count++;
	$('#countno').fadeOut(200);	
	$('#countno').text(count).fadeIn(800);
	cur=count;
	flagcur=cur;
	if(count==20){
		alert("Congratulations, You won");
		return;
	}else{
			getSeqStrict();
	}
	// while(cur!==0){
		
		
	// 	setTimeout(glowColor,3000,whichone);

	// 	cur=cur-1;
	// }
}

function getSeqStrict(){
	$('#1,#2,#3,#4').attr('disabled','disabled');
	// $('#1,#2,#3,#4').unbind('click');
	setTimeout(function(){
			var whichone=Math.floor(Math.random()*(5-1)+1).toString();
			seq+=whichone;
			switch(whichone){
			case '1':
			$('#simon1').get(0).play();
			$('#'+whichone).addClass('activeGreen');
			// $('#'+whichone).removeClass('activeGreen');
			break;

			case '2':
			$('#simon2').get(0).play();
			$('#'+whichone).addClass('activeBlue');	
			// $('#'+whichone).removeClass('activeBlue');
			break;

			case '3':
			$('#simon3').get(0).play();
			$('#'+whichone).addClass('activeRed');
			// $('#'+whichone).removeClass('activeRed');
			break;

			case '4':
			$('#simon4').get(0).play();
			$('#'+whichone).addClass('activeYellow');
			// $('#'+whichone).removeClass('activeYellow');
			break;

			}

			setTimeout(function(){
			switch(whichone){
			case '1':
			$('#'+whichone).removeClass('activeGreen');
			// $('#'+whichone).removeClass('activeGreen');
			break;

			case '2':
			$('#'+whichone).removeClass('activeBlue');	
			// $('#'+whichone).removeClass('activeBlue');
			break;

			case '3':
			$('#'+whichone).removeClass('activeRed');
			// $('#'+whichone).removeClass('activeRed');
			break;

			case '4':
			$('#'+whichone).removeClass('activeYellow');
			// $('#'+whichone).removeClass('activeYellow');
			break;

			}




			},500);



			console.log('Cur: '+ cur);
		cur--;
		if(cur>0){
			getSeqStrict();
		}
		else{
			currseq=seq;
			console.log('currseq: '+ currseq);
			getUserseqstrict(currseq);
			//
			// getUserseq();
		}
	},1300);




};
function getUserseqstrict(currseq){
			$('#1,#2,#3,#4').removeAttr('disabled');
				checkTime=false;
				$('#1,#2,#3,#4').unbind('click').click(function(){
				$('#simon'+this.id).get(0).play();
					userseq+=this.id;
					console.log('userseq:'+userseq);
					flagcur--;
					if(flagcur==0 && userseq==seq){
						if(count==20){
							alert('You Won!!');
							reset();
							return;
						}
						seqwrong=0;
						console.log('userseq when correct: '+userseq);
						console.log('Right');
						right=1;
						checkTime=true;
						startstrict();
						return;
					}
					else if(flagcur==0 && userseq!=seq){
						console.log('Wrong');
						right=0;
						userseq='';
						count=0;
						alert("Wrong! Try Again");

						startstrict().fadeIn(500);
						return;
					}
					else if(!(seq.includes(userseq))){
						console.log('Wrong');
						right=0;
						count=0;
						alert("Wrong! Try Again");
						console.log(seqwrong);
						startstrict().fadeOut(220);
						return;
					}
					});








};



//Strict Mode Off-----------------------------------------------------------------------------


function start(){
	checkTime=true;
	right=0;
	userseq='';
	seq='';
	userClicks=0;
		count++;
	$('#countno').fadeOut(200);	
	$('#countno').text(count).fadeIn(800);
	cur=count;
	flagcur=cur;
	if(count==20){
		alert("Congratulations, You won");
		return;
	}else{
			getSeq();
	}
	// while(cur!==0){
		
		
	// 	setTimeout(glowColor,3000,whichone);

	// 	cur=cur-1;
	// }
}

function getSeq(){
	$('#1,#2,#3,#4').attr('disabled','disabled');
	// $('#1,#2,#3,#4').unbind('click');
	setTimeout(function(){
			var whichone=Math.floor(Math.random()*(5-1)+1).toString();
			seq+=whichone;
			switch(whichone){
			case '1':
			$('#simon1').get(0).play();
			$('#'+whichone).addClass('activeGreen');
			// $('#'+whichone).removeClass('activeGreen');
			break;

			case '2':
			$('#simon2').get(0).play();
			$('#'+whichone).addClass('activeBlue');	
			// $('#'+whichone).removeClass('activeBlue');
			break;

			case '3':
			$('#simon3').get(0).play();
			$('#'+whichone).addClass('activeRed');
			// $('#'+whichone).removeClass('activeRed');
			break;

			case '4':
			$('#simon4').get(0).play();
			$('#'+whichone).addClass('activeYellow');
			// $('#'+whichone).removeClass('activeYellow');
			break;

			}

			setTimeout(function(){
			switch(whichone){
			case '1':
			$('#'+whichone).removeClass('activeGreen');
			// $('#'+whichone).removeClass('activeGreen');
			break;

			case '2':
			$('#'+whichone).removeClass('activeBlue');	
			// $('#'+whichone).removeClass('activeBlue');
			break;

			case '3':
			$('#'+whichone).removeClass('activeRed');
			// $('#'+whichone).removeClass('activeRed');
			break;

			case '4':
			$('#'+whichone).removeClass('activeYellow');
			// $('#'+whichone).removeClass('activeYellow');
			break;

			}




			},500);



			console.log('Cur: '+ cur);
		cur--;
		if(cur>0){
			getSeq();
		}
		else{
			currseq=seq;
			console.log('currseq: '+ currseq);
			getUserseq(currseq);
			//
			// getUserseq();
		}
	},1200);

};

function getUserseq(currseq){
			$('#1,#2,#3,#4').removeAttr('disabled');
				checkTime=false;
				$('#1,#2,#3,#4').unbind('click').click(function(){
					$('#simon'+this.id).get(0).play();
					userseq+=this.id;
					console.log('userseq:'+userseq);
					flagcur--;
					if(flagcur==0 && userseq==seq){
						if(count==20){
							alert('You Won!!');
							reset();
							return;
						}						
						seqwrong=0;
						console.log('userseq when correct: '+userseq);
						console.log('Right');
						right=1;
						checkTime=true;
						start();
						return;
					}
					else if(flagcur==0 && userseq!=seq){
						console.log('Wrong');
						right=0;
						userseq='';
						cur=count;
						flagcur=cur;
						i=0;
						//count=0;
						alert("Wrong! Try Again");
						retry();
						return;
					}
					else if(!(seq.includes(userseq))){
						console.log('Wrong');
						right=0;
						//count=0;
						cur=count;
						seqwrong=1;
						userseq='';
						flagcur=cur;
						i=0;
						alert("Wrong! Try Again");
						console.log(seqwrong);
						retry();
						return;
					}
					});
};

function retry(){
		$('#1,#2,#3,#4').attr('disabled','disabled');
	console.log(seq);
	retryseq = seq.split('');
	console.log(retryseq);
	console.log('Cur: '+ cur);
		setTimeout(function(){
			//var whichone=Math.floor(Math.random()*(5-1)+1).toString();
			//seq+=whichone;
			currentseq=retryseq[i];
			switch(currentseq){
			case '1':
			$('#simon1').get(0).play();
			$('#1').addClass('activeGreen');
			// $('#'+whichone).removeClass('activeGreen');
			break;

			case '2':
			$('#simon2').get(0).play();
			$('#2').addClass('activeBlue');	
			// $('#'+whichone).removeClass('activeBlue');
			break;

			case '3':
			$('#simon3').get(0).play();
			$('#3').addClass('activeRed');
			// $('#'+whichone).removeClass('activeRed');
			break;

			case '4':
			$('#simon4').get(0).play();
			$('#4').addClass('activeYellow');
			// $('#'+whichone).removeClass('activeYellow');
			break;

			}

			setTimeout(function(){
			switch(currentseq)
			{
			case '1':
			console.log('Removed: '+ retryseq[i]);
			$('#1').removeClass('activeGreen');
			// $('#'+whichone).removeClass('activeGreen');
			break;

			case '2':
			console.log('Removed: 2');
			$('#2').removeClass('activeBlue');	
			// $('#'+whichone).removeClass('activeBlue');
			break;

			case '3':
			console.log('Removed: 3');
			$('#3').removeClass('activeRed');
			// $('#'+whichone).removeClass('activeRed');
			break;

			case '4':
			console.log('Removed: 4');
			$('#4').removeClass('activeYellow');
			// $('#'+whichone).removeClass('activeYellow');
			break;

			default:
			console.log('deaf'+ retryseq[i]);
			}
	

			},500);



		i++;
		cur--;
		if(cur>0){
			retry();
		}
		else{
			currseq=retryseq.join('');
			console.log('currseq: '+ currseq);
			getUserseq(currseq);
			//
			// getUserseq();
		}
		
			},1200);



}
// function glowColor(which){
// 			console.log(which);
// 			switch(which){
// 			case '1':
// 			$('#'+which).addClass('activeGreen');
// 			// $('#'+whichone).removeClass('activeGreen');
// 			break;

// 			case '2':
// 			$('#'+which).addClass('activeBlue');	
// 			// $('#'+whichone).removeClass('activeBlue');
// 			break;

// 			case '3':
// 			$('#'+which).addClass('activeRed');
// 			// $('#'+whichone).removeClass('activeRed');
// 			break;

// 			case '4':
// 			$('#'+which).addClass('activeYellow');
// 			// $('#'+whichone).removeClass('activeYellow');
// 			break;

// 			}
// 			return;
// }
function wait(ms){
var start = new Date().getTime();
var end = start;
while(end<start+ms){
	end= new Date().getTime();
}
}



});