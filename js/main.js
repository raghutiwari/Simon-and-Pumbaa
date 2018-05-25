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
$(document).ready(function(){
	$('#start').click(function(){
		if(flag==1){
		flag=0;	
		start();
		}

	});
function reset(){
		flag=1;
		count=0;
		$('#countno').text(count);
		start();



}
	$('#reset').click(function(){
		flag=1;
		count=0;
		$("#countno").text(count);
		location.reload();
		// start();
	});



function start(){
	checkTime=true;
	right=0;
	userseq='';
	seq='';
	userClicks=0;
		count++;
	$('#countno').text(count);
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
	setTimeout(function(){
			var whichone=Math.floor(Math.random()*(5-1)+1).toString();
			seq+=whichone;
			switch(whichone){
			case '1':
			$('#'+whichone).addClass('activeGreen');
			// $('#'+whichone).removeClass('activeGreen');
			break;

			case '2':
			$('#'+whichone).addClass('activeBlue');	
			// $('#'+whichone).removeClass('activeBlue');
			break;

			case '3':
			$('#'+whichone).addClass('activeRed');
			// $('#'+whichone).removeClass('activeRed');
			break;

			case '4':
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
				checkTime=false;
				$('#1,#2,#3,#4').unbind('click').click(function(){
					userseq+=this.id;
					console.log('userseq:'+userseq);
					flagcur--;
					if(flagcur==0 && userseq==seq){
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
						alert("Wrong!");
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
						alert("Wrong!");
						console.log(seqwrong);
						retry();
						return;
					}
					});
};

function retry(){
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
			$('#1').addClass('activeGreen');
			// $('#'+whichone).removeClass('activeGreen');
			break;

			case '2':
			$('#2').addClass('activeBlue');	
			// $('#'+whichone).removeClass('activeBlue');
			break;

			case '3':
			$('#3').addClass('activeRed');
			// $('#'+whichone).removeClass('activeRed');
			break;

			case '4':
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