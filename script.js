// 获取DOM元素
let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let questionText = document.getElementById('question');
let mainImage = document.getElementById('mainImage');
let clickCount = 0; // 记录拒绝按钮点击次数

// 拒绝按钮的渐进式提示文本
const noTexts = [
  "？那你还想找谁", 
  "你要找夜阑珊里的哪个姐姐妹妹？",
  "他们难道比我好吗？",
  "哼...随便你",
  "不允许"
];

// 拒绝按钮点击事件（核心交互逻辑）
noButton.addEventListener('click', () => {
  clickCount++;
  
  // 放大确认按钮（每次点击放大1.2倍）
  let yesSize = 1+(clickCount*1.2);
  yesButton.style.transform = `scale(${yesSize})`;
  
  // 右移拒绝按钮（每次点击右移50px）
  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;
  
  // 上移图片和问题文本（每次点击上移25px）
  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;
  
  // 循环显示拒绝提示文本
  if(clickCount <= 5) {
    noButton.textContent = noTexts[clickCount - 1];
  }

  if(clickCount === 1) mainImage.src="images/shocked.png";//震惊
  if(clickCount === 2) mainImage.src="images/think.png";//震惊
  if(clickCount === 3) mainImage.src="images/angry.png";//震惊
  if(clickCount === 4) mainImage.src="images/crying.png";//震惊
  if(clickCount === 5) mainImage.src="images/crying.png";//震惊

});

yesButton.addEventListener("click",function(){
    document.body.innerHTML=`
	<div class="yes-screen">
		<h1 class="yes-text"> 我可是你的正头娘子 </h1>
		<img src="images/hug.png" alt="拥抱" class="yes-image">
	</div>
    `;

    document.body.style.overflow = "hidden";
});
