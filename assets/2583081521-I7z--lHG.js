const e="Everyone",t=`Dreamscape landscape with animated shooting stars and clouds.

Note: Looks best around 45fps and up.

Customizable Variables:
• Toggle "Night Mode"
• Toggle Static Comets
• Star Count
• Star Speed
• Star Size
• Star Playback Rate
• Star Opacity
• Cloud Warp Strength

Fun Fact - The title is a reference to S4E22 of the TV Show 'Babylon 5'. I just thought it was a cool name.`,o="scene.json",i={properties:{cloudwarpstrength:{fraction:!0,index:9,max:3,min:0,order:109,precision:3,step:.010000000000000002,text:"Cloud Warp Strength",type:"slider",value:1},enablenightmode:{index:0,order:100,text:"Enable Night Mode",type:"bool",value:!1},nightmodestrength:{condition:"enablenightmode.value == true",fraction:!0,index:1,max:1,min:0,order:101,precision:3,step:.010000000000000002,text:"Night Mode Strength",type:"slider",value:1},opacity:{fraction:!0,index:8,max:1,min:0,order:108,precision:3,step:.010000000000000002,text:"Star Opacity",type:"slider",value:1},particlecount:{fraction:!1,index:4,max:15,min:1,order:104,text:"Star Count",type:"slider",value:5},playbackrate:{fraction:!0,index:7,max:10,min:.1,order:107,precision:2,step:.1,text:"Star Playback Rate",type:"slider",value:1},schemecolor:{order:0,text:"ui_browse_properties_scheme_color",type:"color",value:"0 0.6039215686274509 0.8745098039215686"},showstaticcomets:{index:2,order:102,text:"Show Static Comets",type:"bool",value:!0},size:{fraction:!0,index:6,max:10,min:.1,order:106,precision:2,step:.1,text:"Star Size",type:"slider",value:1},speed:{fraction:!0,index:5,max:10,min:.1,order:105,precision:2,step:.1,text:"Star Speed",type:"slider",value:2},staticcometopacity:{condition:"showstaticcomets.value == 1",fraction:!0,index:3,max:1,min:0,order:103,precision:3,step:.010000000000000002,text:"Static Comet Opacity",type:"slider",value:1}}},n="preview.gif",r=["Landscape"],a="Deconstruction of Shooting Stars  |  4K",s="scene",c=3,l="public",p="2583081521",d="steam://url/CommunityFilePage/2583081521",u={contentrating:e,description:t,file:o,general:i,preview:n,tags:r,title:a,type:s,version:c,visibility:l,workshopid:p,workshopurl:d};export{e as contentrating,u as default,t as description,o as file,i as general,n as preview,r as tags,a as title,s as type,c as version,l as visibility,p as workshopid,d as workshopurl};
