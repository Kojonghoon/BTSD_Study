//자바스크립트의 다양한 연산자 사용법을 실습해보시오
//이번 강좌에서는 자바스크립트 연산자들에 대해서 실습코드를 통해서 하나씩 살펴봅시다.

//1. 기본연산자
//자바스크립트에서 기본적으로 제공하는 수학 관련 연산자들	--> +, - *, /, %, **


//2. %	--> 나머지 연산자
// alert(17 % 3)	//2
// alert(`35%4=${35 % 4}`)


//3. **	--> 거듭제곱 연산자 	--> a**b	--> a를 b번 곱하기 한 값을 반환
// alert(2 ** 2)	//4
// alert(2 ** 3)	//8
// alert(2 ** 4)	//16
// alert(`3**3 = ${3 ** 3}`)	//3^3


//4. 더하기 연산자 --> +(생각보다 까다롭다.)
// //문자를 더하면?
// alert("안녕" + "하세요")	//안녕하세요
// alert(`문자와 숫자 더하기는 --> "100"+100 = ${"100" + 100}`)	//100100
//	-->피연산자중 하나가 문자열이면 나머지도 문자열로 바뀜

//숫자 + 숫자 + 문자 = 문자열
// alert(100 + 200 + "300")	//300300
// alert(`1+2+"3"=${1 + 2 + "3"}`)	//33

// 5. 더하기 이외의 연산자들은 어떨까? --> -, *, /(더하기 연산자와는 조금 다르게 동작)
// alert(100 - "90")	//10	
// 	--> 빼기 연산자는 피연산자중 하나가 문자열이면 계산을 하기 위해서 숫자형으로 바쒀서 계산을 수행시킴
// alert("100"-80)	//20
// alert(100*"2")	//200
// alert(300/"3")	//100

// 6. 피연산자가 모두 문자열이면??
// alert("100" + "100")	//100100
// alert("100" - "100")	//0
// alert("100" * "100")	//10000
// alert("100" / "100")	//1

//7. 더하기 연산자의 특별한 기능 -->문자열을 숫자형으로 변환
// let data = "100"
// alert(typeof data)	//String

// data = +data	//이러면 문자열이였던 data가 숫자형(number)로 바뀐다.
// alert(typeof data)	//number

// let num = 100
// num = +num	//이 경우는 num변수가 원래 숫자형이므로 +를 앞에 붙여봤자 변화가 없다.
// alert(typeof num)	//number

//어디에 써먹지??
//FORM을 통해 사용자로부터 입력받은 값은 보통 문자열 -->숫자형으로 바꿔주고자 할 때유용하게 사용될 수 있다.
// let score = "90"
// alert(`회원님의 영어 점수는 보너스 3점이 더해져서 ${score + 3}점 입니다.`);		//903
// alert(`회원님의 영어 점수는 보너스 3점이 더해져서 ${+score + 3}점 입니다.`);	//93

//Number()를 통해서 숫잫ㅇ으로 변환시키는 것도 가능 -->Number(score)
// alert(`회원님의 영어 점수는 보너스 3점이 더해져서 ${Number(score) + 4}점 입니다.`);	//94


// 8. 연산자 우선순위
let eng_socre = 70
// alert(`회원님의 영어 점수는 보너스 3점이 더해져서 ${+score + 3}점 입니다.`);	//93  
alert(`회원님의 영어 점수는 보너스 3점이 더해져서 ${3+ +eng_socre}점 입니다.`);	//93  
