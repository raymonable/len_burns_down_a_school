[_tb_system_call storage=system/_title_screen.ks]

[hidemenubutton]

[tb_hide_message_window  ]
[playbgm  loop="true"  storage="kiskissfallinlen.mp3"  ]
[bg  storage="tumblr_inline_nkzb6gDEnB1qji7vx.gif"  ]
*title

[glink  text="begin&nbsp;the&nbsp;lenening"  x="600"  y="370"  target="*start"  color="orange"  ]
[s  ]
*start

[showmenubutton]

[cm  ]
[jump  storage="scene1.ks"  target=""  ]
[s  ]
*load

[showmenubutton]

[cm  ]
[showload]

[jump  target="*title"  storage=""  ]
[s  ]
