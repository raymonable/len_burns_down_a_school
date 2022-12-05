[_tb_system_call storage=system/_scene1.ks]

[cm  ]
[stopbgm  ]
[bg  storage="cherry_blossoms_scenic_mirai_m_1600x800_miscellaneoushi.com.jpg"  time="1000"  ]
[tb_show_message_window  ]
[chara_show  name="Len"  time="1000"  wait="true"  left="-52"  top="0"  width=""  height=""  reflect="true"  ]
#Len
hey nerd[p]
#
Oh fuck not you.[p]
#Len
hey nrd lets go..[p]


[chara_mod  name="Len"  time="600"  storage="chara/1/the_cooler_len.png"  ]
#Len
burn down sküle[p]


[chara_hide  name="Len"  time="1"  wait="true"  ]
[tb_hide_message_window  ]
[playbgm  loop="true"  storage="It's_Always_Sunny_in_Philadelphia_Theme.mp3"  ]
[bg  time="0"  method="crossfade"  storage="lentitlecard.png"  ]
[wait  time="6500"  ]
[bg  time="0"  method="crossfade"  storage="cherry_blossoms_scenic_mirai_m_1600x800_miscellaneoushi.com.jpg"  ]
[chara_show  name="Len"  time="1"  wait="true"  left="-52"  reflect="true"  ]
[tb_start_tyrano_code]
[fadeoutbgm time=3000]

[_tb_end_tyrano_code]

[tb_show_message_window  ]
#
What? Why!?[p]
#Len
becuze i said so[p]
i got hte gasoline right here bitch[p]
#
Len no[p]
#Len
len ye[p]
#
(If I don't stop Len, he'll burn down the school... What should I say to stop him?)[p]


[glink  color="rosy"  storage="scene1.ks"  size="20"  text="Leno&nbsp;no!&nbsp;Dont&nbsp;do&nbsp;it!"  target="*Leno"  x="350"  y="140"  width=""  height=""  _clickable_img=""  ]
[glink  color="rosy"  storage="scene1.ks"  size="20"  text="Why&nbsp;are&nbsp;you&nbsp;doing&nbsp;this&nbsp;Len!?&nbsp;Please&nbsp;stop!"  target="*Why"  x="350"  y="200"  width=""  height=""  _clickable_img=""  ]
[s  ]
*Leno

#Len
did u just call me fuking leno?[p]
also screw u leno gonn do it[p]


[jump  storage="scene1.ks"  target="*Main"  ]
*Why

#Len
y? cause im bord lol[p]
cant stop the len train[p]


*Main

#Len
ok nerd lets light this place up[p]
#
(I suppose I should follow him just in case)[p]


[jump  storage="scene2.ks"  target=""  ]
[s  ]
