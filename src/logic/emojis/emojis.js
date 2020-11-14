
export function textEmojisToUnicode(text) {


    var newText = text;
    emojiList.forEach((emoji, index) => {
        /*if (index === 15) */newText = newText.replace(new RegExp(emoji.regex), emoji.value);
    })
    return newText;
}



var emojiList = [
    {regex: " ToT ", value: " 😭 "},
    {regex: " :\\) ", value: " 🙂 "},
    {regex: " :D | :-D | =D ", value: " 😀 "},
    {regex: " :O | :o | :-O | :-o ", value: " 😱 "},
    {regex: " <3 ", value: " ❤ "},
    {regex: " <(\") ", value: " 🐧 "},
    {regex: " :poop: ", value: " 💩 "},
    {regex: " 3:\\) ", value: " 😈 "},
    {regex: " \\(y\\) | \\(Y\\) ", value: " 👍 "},
    {regex: " \\(n\\) | \\(N\\) ", value: " 👎 "},
    {regex: " '-_- ", value: " 😓 "},
    {regex: " ;p | ;-P ", value: " 😜 "},
    {regex: " -_- ", value: " 😑 "},
    {regex: " :'\\( ", value: " 😢 "},
    {regex: " :\\( ", value: " ☹ "},
    {regex: " :\\| ", value: " 😐 "},
    {regex: " :P | :-P | :p | :-p | =P | =p ", value: " 😛 "},
    {regex: " :\\* | :-\\* ", value: " 😚 "},
    {regex: " O:\\) | O:-\\) ", value: " 👼 "},
    {regex: " O_O | o_o | 0_0 ", value: " 😳 "},
    {regex: "^_^ | ^~^ | =\\) ", value: " 😊 "},
    {regex: " >:\\( ", value: " 😤 "},
    {regex: " 8-\\) ", value: " 😎 "},
    {regex: " -3- ", value: " 😚 "},
    {regex: " ;\\) | ;-\\) ", value: " 😉 "},
    {regex: " >_< | >.< ", value: " 😣 "},
    {regex: " ;\\* | ;-\\* ", value: " 😘 "},
    {regex: " :/ ", value: " 😕 "},
]


/***********************************
*
ToT emoji
ToT|T-T|T_T |T.T

😭

    Facebook Messenger Heart Emoji	heart emoji	<3

❤

Facebook Messenger Penguin Emoji	penguin emoji	<(")	" +
🐧
    "Facebook Messenger Poop Emoji	poop emoji	:poop:	" +
💩
    "Facebook Messenger Devil Emoji	devil emoji	3:)
😈

3:-)
Facebook Messenger Like Emoji	like emoji	(y)
👍
:like:

    (Y)

Facebook Messenger Like Emoji	dislike emoji	(n)
👎
(N)
Facebook Messenger Winkkiss Emoji	sweating emoji	'-_-	' +
😓
'Facebook Messenger WinkTongue Emoji	winktongue emoji	;p
😜
;-p

;P

;-P
Facebook Messenger Expresionless Emoji	expressionless emoji	-_-
😑
Facebook Messenger Cry Emoji	cry emoji	:'(
😢
:'-(	' +

'Facebook Messenger Frown Emoji	frown emoji	:(
☹
:-(

    =(

    )=

    :[

        Facebook Messenger Squint Emoji	squint emoji	:|
😐
:-|


Facebook Messenger Tongue Emoji	tongue emoji	:P
😛
    :-P

:p

    :-p

    =P

    =p

Facebook Messenger Slightgrin Emoji	slightgrin emoji	:D
😀
    :-D

    =D

Facebook Messenger Kiss Emoji	kiss emoji	:*
😚
:-*

Facebook Messenger Angel Emoji	angel emoji	O:)
👼
O:-)

Facebook Messenger Flushface Emoji	flushface emoji	O_O
😳
o_o
0_0

Facebook Messenger Kiki Emoji	kiki emoji	^_^
😊
^~^
    =)


Facebook Messenger Grumpy Emoji	grumpy emoji	>:(
😤
>:-(

>:o

>:-o

>:O

>:-O

Facebook Messenger Glasses Emoji	glasses emoji	8)
😎
B)

8-)

B-)

Facebook Messenger Flushkiss Emoji	flushkiss emoji	-3-

😚
Facebook Messenger Wink Emoji	wink emoji	;)

😉
;-)


Facebook Messenger Gasp Emoji	gasp emoji	:O

😱

    :o

    :-O

:-o

Facebook Messenger Persevere Emoji	persevere emoji	>_<
😣
>.<

    Facebook Messenger Winkkiss Emoji	winkkiss emoji	;*
😘
;-*

Facebook Messenger Unsure Emoji	unsure emoji	:/

😕

:-/

:\

:-\

=/

=\

Facebook Messenger Slightsmile Emoji	slightsmile emoji	:)

🙂

:]

:-)

(:

(=*/