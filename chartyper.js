function forEach(arr, func) {
    var i, j;

    for (i = 0, j = arr.length; i < j; i += 1) {
        func(arr[i], i, arr);
    }
}

var canvas = document.getElementById('myCanvas'),
    context = canvas.getContext('2d'),
    typer = document.getElementById('typer'),
    allChars = document.getElementById('allChars'),
    charCount = document.getElementById('charCount');

function drawChar(car, color) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = '100px Microsoft Yahei';
    context.fillStyle = color || '#ff0000';
    context.fillText(car, 0, 80);
}

var chars = {};

function addChar(value) {
    console.log(value);
    var charArr = value.split(''),
        color;

    forEach(
        charArr,
        function (charac) {
            if (chars[charac] === undefined) {
                chars[charac] = 1;
                color = '#00ff00';
                allChars.value += charac;
                charCount.innerText = allChars.value.length;
            } else {
                color = '#ff0000';
            }
            drawChar(charac, color);
        }
    );
}

function init() {
    typer.addEventListener(
        'keyup',
        function (e) {
            if (e.keyCode === 13) {
                addChar(typer.value);
            }
        }
    );
}

window.onload = init;

'黄红蓝金紫黑白绿棕粉青灰银鼠牛虎兔龙蛇马羊猴鸡狗猪猫驴鸟狼跳蚤蚂蚁螃蟹燕龟鸭鹅天猩鱼鳗鳝鸽虾扇贝贻熊海螺蜗生蚝胆乌一二三四五六七八九十百千万亿我你他它她是的得地觉睡爱默杯子辈被人艾德仁如果水火土风球吃饭面条看书懂事儿宝妈爸奶爷外婆公共同时城市认真正证明相信任务服员中国民名字星姓取钱快乐块肉包饺图馆博物微丝香麻辣锅铁板老娘年轻重要想念读电视剧影院医学高小校长达大了解释翻译意思义父母亲接吻打话情况感恩嗯就所有司消化笑嘲眼睛镜北京东西南成都变恋谈漫画家里不好特色玩晚会早上下来月经饼臭豆腐短蛋宠动作做业喜欢换复回挺可方便开放拉肚胳膊脸脖腰非常肥肠飞机计算痛苦疼酸甜心瓜蒜葱洋山滑雪光亮漂票疯病头脚手指甲发现在颜米线玉丸碗盘朋友嘴巴数流行文硬软才够只笔记本日太游戏旅导演脑报纸说衣鼻牙齿压力严肃寄给间空声音法语英班利礼胜女孩妻新鲜件照片蔬菜台湾';