$wnd.jsme.runAsyncCallback8('var B6="\\t",C6="!a",D6=\'" fill="\',E6="M",F6="r";function G6(a){var b;b=a.K.c*H6(a.G);a.R=0.06*b;a.M=0.15*b;a.L=0.38*b;a.P=0.47*b;a.Q=mr(0.6*b*a.E+0.5);a.O=0.12*b;a.S=0.4*b;a.y=0.5*b+0.5}\nfunction I6(a,b,c,d){var e,f,g;f=(b.b-b.a)/10;g=(b.d-b.c)/10;e=new J6;K6(a.G,cq(a.G,c,d))?d=c=-3:(c=a.r[c],d=a.r[d]);L6(a,c);e.a=b.a;e.c=b.c;e.b=b.a+2*f;e.d=b.c+2*g;M6(a,e);e.a=b.a+4*f;e.c=b.c+4*g;e.b=b.a+5*f;e.d=b.c+5*g;M6(a,e);L6(a,d);e.a=b.a+5*f;e.c=b.c+5*g;e.b=b.a+6*f;e.d=b.c+6*g;M6(a,e);e.a=b.a+8*f;e.c=b.c+8*g;e.b=b.b;e.d=b.d;M6(a,e);L6(a,a.J)}\nfunction N6(a,b,c,d){if(K6(a.G,cq(a.G,c,d)))L6(a,-3),M6(a,b),L6(a,a.J);else if(a.r[c]!=a.r[d]){var e,f;e=new J6;f=new J6;e.a=b.a;e.c=b.c;e.b=(b.a+b.b)/2;e.d=(b.c+b.d)/2;f.a=e.b;f.c=e.d;f.b=b.b;f.d=b.d;O6(a,e)&&(L6(a,a.r[c]),M6(a,e));O6(a,f)&&(L6(a,a.r[d]),M6(a,f));L6(a,a.J)}else 0!=a.r[c]?(L6(a,a.r[c]),M6(a,b),L6(a,a.J)):M6(a,b)}\nfunction P6(a,b){var c;for(c=0;c<a.T.c;++c)a.w=Q6(a.w,Sn(a.T,c));var d,e,f,g,h;d=C(In,Im,-1,a.G.o,2);for(c=0;c<a.G.p;++c)0!=(a.G.z[c]&131072)&&(d[D(a.G,0,c)]=!0,d[D(a.G,1,c)]=!0);f=new pK;for(c=0;c<a.G.o;++c)e=0!=(a.G.w[c]&536870912)?0.47*b:d[c]?0.38*b:0,0!=e&&(g=R6(a.K,eo(a.G,c)),h=S6(a.K,fo(a.G,c)),CJ(f,g-e,h-e,2*e,2*e),a.w=Q6(a.w,f));c=0.1*b;a.w.d-=c;a.w.e-=c;a.w.c+=2*c;a.w.b+=2*c}\nfunction T6(a,b){var c,d;if(0!=(a.B&128))return a.r[b];d=U6(a,b);if(-1==d){c=a.G;var e,f,g,h;e=-1;if(1==c.k[b])for(f=0;f<c.f[b];++f)if(2==c.j[b][f]){f=c.e[b][f];if(2==c.f[f]&&2==c.k[f])for(h=0;2>h;++h)if(g=c.e[f][h],g!=b&&1==c.k[g]){e=f;break}break}c=e;-1!=c&&(b=c,d=U6(a,c))}if(-1==d)return a.r[b];switch(d&255){case 1:return 384;case 2:return 64;default:return 448}}\nfunction U6(a,b){var c,d,e;d=e=-1;if(0!=(a.B&128))return-1;0!=(a.G.s[b]&134217728)&&(e=Dp(a.G,b),d=Ep(a.G,b));c=dp(a.G,b);-1!=c&&(e=(a.G.z[c]&3072)>>10,d=Fp(a.G,c));-1!=e&&0!=e&&(e|=d<<8);return e}function V6(a,b){var c;if(0==On(a.G,b))return!1;for(c=0;c<On(a.G,b);++c)if(!K6(a.G,Ln(a.G,b,c)))return!1;return!0}function W6(a){var b;a.s=C(In,Im,-1,a.G.o,2);for(b=0;b<a.G.p;++b)a.s[D(a.G,0,b)]=!0,a.s[D(a.G,1,b)]=!0}\nfunction X6(a,b,c,d,e){var f,g,h,j,l,n,q;n=!1;e.a=0;e.b=0;0<d?f=2.617993878:f=3.665191429;q=mo(a.G,b,c);for(j=0;j<a.G.f[b];++j)g=Ln(a.G,b,j),h=q,D(a.G,0,g)==b?l=D(a.G,1,g):l=D(a.G,0,g),l!=c&&(g=mo(a.G,b,l),q<g&&(h+=6.283185307179586),g=h-g,0<d?(3.141592653589793>g&&(n=!0),2.617993878<g&&(g=2.617993878),0.523598776>g&&(g=0.523598776),g<=f&&(f=g,g=a.M*Math.tan(g-1.5707963267948966)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))):(3.141592653589793<=g&&(n=!0),3.665191429>g&&(g=3.665191429),5.759586531<\ng&&(g=5.759586531),g>=f&&(f=g,g=a.M*Math.tan(4.712388981-g)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))));return n}function Y6(a,b,c,d){0==b?(0>c?d.a=a.M:d.a=-a.M,d.b=0):(c=Math.atan(c/b),0>b&&(c+=3.141592653589793),d.a=-(a.M*Math.sin(c)),d.b=a.M*Math.cos(c))}\nfunction Z6(a,b,c,d){var e,f,g,h,j,l,n,q;e=new J6;h=new J6;l=new nK;j=new nK;f=D(a.G,0,c);g=D(a.G,1,c);d&&(n=b.a,b.a=b.b,b.b=n,n=b.c,b.c=b.d,b.d=n,n=f,f=g,g=n);if(O6(a,b))if(io(a.G,c)){e.a=b.a;e.c=b.c;e.b=b.b;e.d=b.d;d=d?-$6(a,c):$6(a,c);0==d&&(d=1);Y6(a,b.b-b.a,b.d-b.c,l);if(0<d){if(h.a=b.a+l.a,h.c=b.c+l.b,h.b=b.b+l.a,h.d=b.d+l.b,X6(a,f,g,1,j)||1<a.G.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a}else if(h.a=b.a-l.a,h.c=b.c-l.b,h.b=b.b-l.a,h.d=b.d-l.b,X6(a,f,g,-1,j)||1<a.G.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a;26==a.G.B[c]&&\na7(e,h);O6(a,e)&&N6(a,e,f,g);64==a.G.B[c]?O6(a,h)&&I6(a,h,f,g):O6(a,h)&&N6(a,h,f,g)}else{Y6(a,b.b-b.a,b.d-b.c,l);n=l.a/2;q=l.b/2;d=!1;e.a=b.a+n;e.c=b.c+q;e.b=b.b+n;e.d=b.d+q;if(1<a.G.f[f])if(X6(a,f,g,1,j)){if(e.a+=j.a,e.c+=j.b,2==a.G.f[f]&&(0!=j.a||0!=j.b))e.a+=l.b,e.c-=l.a}else a.q[f]=new b7(e.a,e.c);h.a=b.a-n;h.c=b.c-q;h.b=b.b-n;h.d=b.d-q;if(1<a.G.f[f])if(X6(a,f,g,0,j)){if(h.a+=j.a,h.c+=j.b,2==a.G.f[f]&&(0!=j.a||0!=j.b))h.a+=l.b,h.c-=l.a}else a.q[f]=new b7(h.a,h.c),d=!0;26==a.G.B[c]&&a7(e,h);64==\na.G.B[c]?d?(I6(a,e,f,g),N6(a,h,f,g)):(N6(a,e,f,g),I6(a,h,f,g)):(N6(a,e,f,g),N6(a,h,f,g))}}\nfunction c7(a,b){var c,d,e,f,g,h,j,l,n,q,r,t;a.F||(r=S6(a.K,fo(a.G,b)),r=\'<circle id="\'+(null!=a.k?a.k:Kj+d7)+":Atom:"+b+\'" class="event" cx="\'+mr(100*R6(a.K,eo(a.G,b)))/100+Aa+mr(100*r)/100+\'" r="8" fill-opacity="0"/>\',Mp(a.b,r));h=null;0!=a.G.q[b]&&(r=1==Tq(a.G.q[b])?m:m+Tq(a.G.q[b]),h=0>a.G.q[b]?r+bc:r+Qb);g=null;r=a.G.w[b];0!=r&&(0!=(r&2)&&(g=qh),0!=(r&4)&&(g=null==g?C6:g+",!a"),0!=(r&4096)&&(g=null==g?Pk:g+",s"),0!=(r&1920)&&(e=r&1920,1792==e?g=null==g?"h0":g+",h0":1664==e?g=null==g?"h1":g+",h1":\n1408==e?g=null==g?"h2":g+",h2":128==e?g=null==g?"h>0":g+",h>0":384==e?g=null==g?"h>1":g+",h>1":1024==e?g=null==g?"h<3":g+",h<3":1536==e&&(g=null==g?"h<2":g+",h<2")),0!=(r&234881024)&&(e=r&234881024,167772160==e?g=null==g?"c0":g+",c0":100663296==e?g=null==g?"c+":g+",c+":201326592==e&&(g=null==g?"c-":g+",c-")),0!=(r&114688)&&(e=r&114688,98304==e?g=null==g?"pi0":g+",pi0":81920==e?g=null==g?"pi1":g+",pi1":49152==e?g=null==g?"pi2":g+",pi2":16384==e&&(g=null==g?"pi>0":g+",pi>0")),0!=(r&4063232)&&(e=r&4063232,\n3801088==e?g=null==g?"n1":g+",n1":3538944==e?g=null==g?"n2":g+",n2":3014656==e?g=null==g?"n3":g+",n3":3145728==e?g=null==g?"n<3":g+",n<3":2097152==e?g=null==g?"n<4":g+",n<4":393216==e?g=null==g?"n>1":g+",n>1":917504==e?g=null==g?"n>2":g+",n>2":1966080==e&&(g=null==g?"n>3":g+",n>3")),0!=(r&120)&&(e=r&120,112==e?g=null==g?Uh:g+",c":8==e?g=null==g?F6:g+",r":104==e?g=null==g?"rb2":g+",rb2":88==e?g=null==g?"rb3":g+",rb3":56==e&&(g=null==g?"rb4":g+",rb4")),0!=(r&29360128)&&(g=null==g?"rs"+((r&29360128)>>\n22):g+",rs"+((r&29360128)>>22)),0!=(r&268435456)&&(g=null==g?"sp2":g+",sp2"));0!=a.G.v[b]&&(g=null==g?m+a.G.v[b]:g+Rb+(m+a.G.v[b]));r=0;if(0!=(a.G.s[b]&48))switch(a.G.s[b]&48){case 16:h=null==h?Sl:h+",|";break;case 32:r=1;break;case 48:r=2}e=null;if(0==(a.B&64))if(0!=(a.G.s[b]&67108864))e=Od;else if(0!=(a.G.s[b]&98304)>>15)if(2==a.G.f[b])switch((a.G.s[b]&98304)>>15){case 2:e=0!=(a.G.s[b]&4)?nk:eg;break;case 1:e=0!=(a.G.s[b]&4)?tj:E6;break;default:e=Nb}else switch((a.G.s[b]&98304)>>15){case 1:e=0!=\n(a.G.s[b]&4)?F6:hg;break;case 2:e=0!=(a.G.s[b]&4)?Pk:Ag;break;default:e=Nb}0!=(a.B&1792)&&(e=null==e?m+(null==a.G.b.d?-1:a.G.b.d[b]):e+Rb+(m+(null==a.G.b.d?-1:a.G.b.d[b])));n=null;0!=(a.B&16)&&0!=Tq(a.G.u[b])&&(n=m+Tq(a.G.u[b]));l=null;a:{j=a.G;Hn(j,1);if(2==j.f[b]&&2==j.j[b][0]&&2==j.j[b][1])for(d=0;2>d;++d)for(c=0;c<On(j,j.e[b][d]);++c){if(rq(j,j.i[j.e[b][d]][c],j.e[b][d])){j=j.i[j.e[b][d]][c];break a}}else for(d=0;d<j.f[j.o+b];++d)if(rq(j,j.i[b][d],b)){j=j.i[b][d];break a}j=-1}-1!=j&&(j=U6(a,b),\n-1!=j&&(l=0==j?rh:(1==(j&255)?Ab:kk)+(1+(j>>8))));j=0;a.G.E?((6!=a.G.x[b]||!a.s[b])&&0!=(a.G.w[b]&2048)&&0!=a.G.q[b]||0!=(a.G.s[b]&48))&&(j=To(a.G,b)):(6!=a.G.x[b]||!a.s[b]||0!=(a.G.s[b]&48))&&(j=To(a.G,b));c=zp(a.G,b);if(null!=c)j=0;else if(null!=op(a.G,b)){d=0!=(a.G.w[b]&1)?"[!":ah;c=a.G;if(null==c.t||null==c.t[b])c=0!=(c.w[b]&1)?m:sq[c.x[b]];else{t=m;for(q=0;q<c.t[b].length;++q)0<q&&(t+=Rb),f=c.t[b][q],t+=sq[f];c=t}c=d+c+nh;5<c.length&&(c=d+op(a.G,b).length+nh);0!=(a.G.w[b]&2048)&&(j=-1)}else 0!=\n(a.G.w[b]&1)?(c=Od,0!=(a.G.w[b]&2048)&&(j=-1)):(6!=a.G.x[b]||null!=h||null!=g||0<j||!a.s[b])&&(c=sq[a.G.x[b]]);d=0;!Cp(a.G,b)&0!=(a.G.w[b]&536870912)&&L6(a,-8);if(null!=c)d=e7(a,c),f7(a,R6(a.K,eo(a.G,b)),S6(a.K,fo(a.G,b)),c,!0),a.t[b]=!0;else{a:if(2!=a.G.f[b])c=!1;else{for(c=0;2>c;++c)if(2!=a.G.j[b][c]){c=!1;break a}c=!0}c&&(c=R6(a.K,eo(a.G,b)),f=S6(a.K,fo(a.G,b)),Mp(a.T,new qK(c-a.O,f-a.O,2*a.O,2*a.O)),a.F||Mp(a.N,new g7(c,f,V6(a,b)?-3:a.r[b])))}null!=h&&(h7(a,~~((2*a.Q+1)/3)),f=R6(a.K,eo(a.G,b))+\n((d+e7(a,h))/2+1),c=S6(a.K,fo(a.G,b))-~~((4*a.o-4)/8),f7(a,f,c,h,!0),h7(a,a.Q));0!=(a.B&2)&&(g=m+b);null!=g&&(h7(a,~~((2*a.Q+1)/3)),f=R6(a.K,eo(a.G,b))-(d+e7(a,g))/2,c=S6(a.K,fo(a.G,b))-~~((4*a.o-4)/8),f7(a,f,c,g,!0),h7(a,a.Q));null!=e&&(h7(a,~~((2*a.Q+1)/3)),f=R6(a.K,eo(a.G,b))-(d+e7(a,e))/2,c=S6(a.K,fo(a.G,b))+~~((4*a.o+4)/8),q=a.z,L6(a,448),f7(a,f,c,e,!1),L6(a,q),h7(a,a.Q));null!=n&&(h7(a,~~((2*a.Q+1)/3)),f=R6(a.K,eo(a.G,b))+((d+e7(a,n))/2+1),c=S6(a.K,fo(a.G,b))+~~((4*a.o+4)/8),q=a.z,L6(a,0>a.G.u[b]?\n384:448),f7(a,f,c,n,!0),L6(a,q),h7(a,a.Q));if(null!=l){var A,u;c=C(co,Cm,-1,On(a.G,b),1);for(f=0;f<On(a.G,b);++f)c[f]=mo(a.G,b,Mn(a.G,b,f));Uo(c);q=i7(c,0);t=j7(c,0,q);for(f=1;f<c.length;++f)A=i7(c,f),u=j7(c,f,A),t<u&&(t=u,q=A);c=q;h7(a,~~((2*a.Q+1)/3));f=R6(a.K,eo(a.G,b))+0.7*a.o*Math.sin(c);c=S6(a.K,fo(a.G,b))+0.7*a.o*Math.cos(c);q=a.z;L6(a,T6(a,b));f7(a,f,c,l,!1);L6(a,q);h7(a,a.Q)}if(!(0==j&&0==r)){l=C(co,Cm,-1,4,1);for(c=0;c<On(a.G,b);++c){f=Ln(a.G,b,c);for(q=0;2>q;++q)D(a.G,q,f)==b&&(t=mo(a.G,\nD(a.G,q,f),D(a.G,1-q,f)),-1.5707963267948966>t?(l[0]-=t+1.5707963267948966,l[3]+=t+3.141592653589793):0>t?(l[2]+=t+1.5707963267948966,l[3]-=t):1.5707963267948966>t?(l[1]+=t,l[2]+=1.5707963267948966-t):(l[0]+=t-1.5707963267948966,l[1]+=3.141592653589793-t))}0==a.G.f[b]?hr(a.G.x[b])?l[3]-=0.2:l[1]-=0.2:l[1]-=0.1;(null!=h||null!=n)&&(l[1]+=10);(null!=g||null!=e)&&(l[3]+=10);e=m;0!=j&&(f=e7(a,gf),n=0,-1==j?(e=Tj,h7(a,~~((2*a.Q+1)/3)),n=e7(a,e)):1<j&&(e=m+j,h7(a,~~((2*a.Q+1)/3)),n=e7(a,e)),0.6>l[1]||0.6>\nl[3]?(h=S6(a.K,fo(a.G,b)),l[1]<=l[3]?(l[1]+=10,g=R6(a.K,eo(a.G,b))+(d+f)/2):(l[3]+=10,g=R6(a.K,eo(a.G,b))-(d+f)/2-n)):(g=R6(a.K,eo(a.G,b)),l[0]<l[2]?(l[0]+=10,h=S6(a.K,fo(a.G,b))-a.o):(l[2]+=10,h=S6(a.K,fo(a.G,b))+a.o)),0<n&&(c=h+~~((4*a.o+4)/8),f7(a,g+(f+n)/2,c,e,!0),h7(a,a.Q)),f7(a,g,h,gf,!0));e=0;if(0!=r){n=50;for(c=g=0;4>c;++c)h=1<c?c-2:c+2,l[c]<n?(e=c,n=l[c],g=l[h]):l[c]==n&&l[h]>g&&(e=c,g=l[h]);switch(e){case 0:g=R6(a.K,eo(a.G,b));h=S6(a.K,fo(a.G,b))-a.O-d/2;break;case 1:g=R6(a.K,eo(a.G,b))+\na.O+d/2;h=S6(a.K,fo(a.G,b));break;case 2:g=R6(a.K,eo(a.G,b));h=S6(a.K,fo(a.G,b))+a.O+d/2;break;default:g=R6(a.K,eo(a.G,b))-a.O-d/2,h=S6(a.K,fo(a.G,b))}if(1==r)Mp(a.T,new qK(g-a.O,h-a.O,2*a.O,2*a.O)),a.F||Mp(a.N,new g7(g,h,V6(a,b)?-3:a.r[b]));else{switch(e){case 2:case 0:r=2*a.O;e=0;g-=a.O;break;case 1:r=0;e=2*a.O;h-=a.O;break;default:r=0,e=2*a.O,h-=a.O}Mp(a.T,new qK(g-a.O,h-a.O,2*a.O,2*a.O));a.F||Mp(a.N,new g7(g,h,V6(a,b)?-3:a.r[b]));Mp(a.T,new qK(g+r-a.O,h+e-a.O,2*a.O,2*a.O));a.F||Mp(a.N,new g7(g+\nr,h+e,V6(a,b)?-3:a.r[b]))}}}-8==a.z&&L6(a,-9)}\nfunction k7(a,b){var c,d,e,f,g,h,j,l,n,q,r,t;n=new J6;c=new J6;f=new J6;j=new nK;h=new nK;d=D(a.G,0,b);e=D(a.G,1,b);var A=S6(a.K,fo(a.G,d)),u=R6(a.K,eo(a.G,e)),w=S6(a.K,fo(a.G,e)),A=\'<line id="\'+(null!=a.k?a.k:Kj+d7)+":Bond:"+d+bc+e+\'" class="event" x1="\'+mr(100*R6(a.K,eo(a.G,d)))/100+Oa+mr(100*A)/100+Na+mr(100*u)/100+Qa+mr(100*w)/100+\'" stroke-width="8" stroke-opacity="0"/>\';Mp(a.c,A);!Cp(a.G,d)&&!Cp(a.G,e)&&0!=((a.G.w[d]|a.G.w[e])&536870912)&&L6(a,-8);a.q[d]?(n.a=a.q[d].a,n.c=a.q[d].b):(n.a=R6(a.K,\neo(a.G,d)),n.c=S6(a.K,fo(a.G,d)));a.q[e]?(n.b=a.q[e].a,n.d=a.q[e].b):(n.b=R6(a.K,eo(a.G,e)),n.d=S6(a.K,fo(a.G,e)));if(0!=(a.G.A[b]&16320))O6(a,n)&&(g=m+mr(100*n.a)/100,l=m+mr(100*n.b)/100,q=m+mr(100*n.c)/100,r=m+mr(100*n.d)/100,t=\'<line stroke-dasharray="3, 3" x1="\'+g+Oa+q+Na+l+Qa+r+Ja+a.e+\'" stroke-width:\'+mr(100*a.n)/100+Sa,l7(a,t)),L6(a,-9);else{g=64==a.G.B[b]?0:32==a.G.B[b]?1:Pn(a.G,b);switch(g){case 1:switch(a.G.B[b]){case 1:O6(a,n)&&N6(a,n,d,e);break;case 17:m7(a,n,d,e);break;case 9:h=n.b-n.a;\nj=n.d-n.c;K6(a.G,cq(a.G,d,e))?f=e=-3:(e=a.r[d],f=T6(a,d),e==(a.G.s[d]&448)&&(e=f));for(d=2;17>d;d+=2)c.a=n.a+d*h/17-d*j/128,c.c=n.c+d*j/17+d*h/128,c.b=n.a+d*h/17+d*j/128,c.d=n.c+d*j/17-d*h/128,O6(a,c)&&(L6(a,9>d?e:f),M6(a,c),L6(a,a.J));break;case 32:if(O6(a,n)){f=n.b-n.a;j=n.d-n.c;c=Math.sqrt(f*f+j*j);c=2*I(J(L(c/(4*a.R))));f/=c-1;j/=c-1;K6(a.G,cq(a.G,d,e))?e=d=-3:(d=a.r[d],e=a.r[e]);h=n.a-a.R/2;n=n.c-a.R/2;L6(a,d);for(d=0;d<~~(c/2);++d)n7(a,h,n,a.R),h+=f,n+=j;L6(a,e);for(d=0;d<~~(c/2);++d)n7(a,h,\nn,a.R),h+=f,n+=j;L6(a,a.J)}}break;case 0:case 2:if((a.t[d]||2==a.G.k[d])&&(a.t[e]||2==a.G.k[e])&&!io(a.G,b)&&2==g){if(!O6(a,n))break;Y6(a,n.b-n.a,n.d-n.c,j);h=j.a/2;j=j.b/2;c.a=n.a+h;c.c=n.c+j;c.b=n.b+h;c.d=n.d+j;f.a=n.a-h;f.c=n.c-j;f.b=n.b-h;f.d=n.d-j;26==a.G.B[b]&&a7(c,f);N6(a,c,d,e);N6(a,f,d,e)}else if((a.t[e]||2==a.G.k[e])&&2==g)Z6(a,n,b,!1);else if((a.t[d]||2==a.G.k[d])&&2==g)Z6(a,n,b,!0);else{l=$6(a,b);0==l&&(l=1);c.a=n.a;c.c=n.c;c.b=n.b;c.d=n.d;Y6(a,n.b-n.a,n.d-n.c,j);if(0<l){f.a=n.a+j.a;f.c=\nn.c+j.b;f.b=n.b+j.a;f.d=n.d+j.b;if(X6(a,d,e,1,h)||1<a.G.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(X6(a,e,d,-1,h)||1<a.G.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}else{f.a=n.a-j.a;f.c=n.c-j.b;f.b=n.b-j.a;f.d=n.d-j.b;if(X6(a,d,e,-1,h)||1<a.G.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(X6(a,e,d,1,h)||1<a.G.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}26==a.G.B[b]&&a7(c,f);O6(a,c)&&N6(a,c,d,e);2==g?O6(a,f)&&N6(a,f,d,e):O6(a,f)&&I6(a,f,d,e)}break;case 3:O6(a,n)&&(N6(a,n,d,e),Y6(a,n.b-n.a,n.d-n.c,j),c.a=n.a+j.a,c.c=n.c+j.b,c.b=n.b+j.a,c.d=n.d+j.b,\nN6(a,c,d,e),c.a=n.a-j.a,c.c=n.c-j.b,c.b=n.b-j.a,c.d=n.d-j.b,N6(a,c,d,e))}-8==a.z&&L6(a,-9)}}function f7(a,b,c,d,e){var f;e&&(e=e7(a,d),e=e/2+~~(a.o/8),f=~~(a.o/2),(d==Qb||d==bc)&&(f=2*f/3),Mp(a.T,new qK(b-e,c-f,2*e,2*f)));a.F||o7(a,d,b,c)}function p7(a){var b;b=a.a;a.a=a.b;a.b=b;b=a.c;a.c=a.d;a.d=b}\nfunction j7(a,b,c){a=0==b?6.283185307179586+a[0]-a[a.length-1]:a[b]-a[b-1];-2.0943951023931953<c&&1.0471975511965976>c?a-=2*Math.cos(c+0.5235987755982988):a-=0.5*Math.cos(c+0.5235987755982988);return a}function q7(a){var b;b=new pK;a.a<=a.b?(b.d=a.a,b.c=a.b-a.a):(b.d=a.b,b.c=a.a-a.b);a.c<=a.d?(b.e=a.c,b.b=a.d-a.c):(b.e=a.d,b.b=a.c-a.d);return b}function i7(a,b){var c;if(0<b)return(a[b]+a[b-1])/2;c=3.141592653589793+(a[0]+a[a.length-1])/2;return 3.141592653589793<c?c-6.283185307179586:c}\nfunction m7(a,b,c,d){var e,f,g;g=new J6;if(!(b.a==b.b&&b.c==b.d)){g.a=b.a;g.c=b.c;g.b=b.b;g.d=b.d;f=q7(g);for(b=0;b<a.T.c;++b)if(e=Sn(a.T,b),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(r7(a,g.a,g.c,b)){if(r7(a,g.b,g.d,b))return;s7(a,g,0,b);m7(a,g,c,d);return}if(r7(a,g.b,g.d,b)){s7(a,g,1,b);m7(a,g,c,d);return}}var h,j,l;j=(g.c-g.d)/9;l=(g.b-g.a)/9;b=C(co,Cm,-1,3,1);e=C(co,Cm,-1,3,1);f=C(co,Cm,-1,4,1);h=C(co,Cm,-1,4,1);b[0]=g.a;e[0]=g.c;f[2]=g.b+j;h[2]=g.d+l;f[3]=g.b-j;h[3]=g.d-l;b[1]=\n(b[0]+f[2])/2;e[1]=(e[0]+h[2])/2;b[2]=(b[0]+f[3])/2;e[2]=(e[0]+h[3])/2;f[0]=b[2];h[0]=e[2];f[1]=b[1];h[1]=e[1];K6(a.G,cq(a.G,c,d))?g=d=-3:(d=a.r[c],g=T6(a,c),d==(a.G.s[c]&448)&&(d=g));L6(a,d);a.yd(b,e,3);L6(a,g);a.yd(f,h,4);L6(a,a.J)}}function r7(a,b,c,d){if(0!=(a.B&1))return!1;a=Sn(a.T,d);return b>a.d&&b<a.d+a.c&&c>a.e&&c<a.e+a.b}function a7(a,b){var c;c=a.b;a.b=b.b;b.b=c;c=a.d;a.d=b.d;b.d=c}\nfunction $6(a,b){var c,d,e,f,g,h,j,l,n,q;j=C(In,Im,-1,16,2);l=C(In,Im,-1,16,2);c=C(co,Cm,-1,16,1);f=C(co,Cm,-1,2,1);for(h=d=0;2>h;++h){e=D(a.G,h,b);for(n=0;n<a.G.f[e];++n)if(g=Ln(a.G,e,n),g!=b){if(4==d)return 0;j[d]=bo(a.G,g);l[d]=io(a.G,g);c[d++]=mo(a.G,e,Mn(a.G,e,n))}}f[0]=mo(a.G,D(a.G,0,b),D(a.G,1,b));0>f[0]?(f[1]=f[0]+3.141592653589793,e=!1):(f[1]=f[0],f[0]=f[1]-3.141592653589793,e=!0);for(h=g=0;h<d;++h)j[h]?q=20:l[h]?q=17:q=16,c[h]>f[0]&&c[h]<f[1]?g-=q:g+=q;return e?-g:g}\nfunction O6(a,b){var c,d,e,f;if(b.a==b.b&&b.c==b.d){for(d=0;d<a.T.c;++d)if(e=Sn(a.T,d),AJ(e,b.a,b.c))return!1;return!0}f=q7(b);c=!1;b.a>b.b&&(p7(b),c=!0);for(d=0;d<a.T.c;++d)if(e=Sn(a.T,d),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(r7(a,b.a,b.c,d)){if(r7(a,b.b,b.d,d))return c&&p7(b),!1;s7(a,b,0,d);d=O6(a,b);c&&p7(b);return d}if(r7(a,b.b,b.d,d))return s7(a,b,1,d),d=O6(a,b),c&&p7(b),d}c&&p7(b);return!0}\nfunction s7(a,b,c,d){var e,f,g,h,j,l;0==c?(j=b.a,l=b.c,g=b.b,f=b.d):(j=b.b,l=b.d,g=b.a,f=b.c);d=Sn(a.T,d);a=g>j?d.d+d.c:d.d;h=f>l?d.e+d.b:d.e;d=g-j;e=f-l;(0>=d?0-d:d)>(0>=e?0-e:e)?l==f?(f=a,g=l):(f=j+d*(h-l)/e,g>j==a>f?g=h:(f=a,g=l+e*(a-j)/d)):j==g?(f=j,g=h):(g=l+e*(a-j)/d,f>l==h>g?f=a:(f=j+d*(h-l)/e,g=h));0==c?(b.a=f,b.c=g):(b.b=f,b.d=g)}\nfunction t7(a,b,c,d){c/=2;switch(d&786432){case 786432:if(b){a.x.a=b.d+b.c/2;a.x.b=b.e+b.b-c;break}case 0:a.x.a=a.w.d+a.w.c/2;a.x.b=a.w.e+a.w.b+c;b&&a.x.b>b.e+b.b-c&&(a.x.b=b.e+b.b-c);break;case 524288:if(b){a.x.a=b.d+b.c/2;a.x.b=b.e+c;break}case 262144:a.x.a=a.w.d+a.w.c/2,a.x.b=a.w.e-c,b&&a.x.b<b.e+c&&(a.x.b=b.e+c)}}\nfunction L6(a,b){if(!a.F&&(-10==b&&(a.z=-999,b=a.J),!(b==a.z||-8==a.z&&-9!=b)))switch(-8==b&&(a.I=a.z),-9==b&&(b=a.I),a.z=b,b){case 0:a.zd((uI(),CI));break;case -6:a.zd(a.A);break;case -4:a.zd(a.H);break;case -2:a.zd(a.u);break;case -3:a.zd(a.v);break;case -7:a.zd(a.C);break;case -8:a.zd(a.D);break;case 64:a.zd(zn);break;case 128:a.zd(An);break;case 256:a.zd(Cn);break;case 192:a.zd(Bn);break;case 320:a.zd(Dn);break;case 384:a.zd(En);break;case 448:a.zd(Fn);break;case 1:a.zd((uI(),zI));break;default:a.zd((uI(),\nCI))}}function u7(a){var b,c,d,e,f;e=R6(a.K,a.G.D[0].a);c=R6(a.K,a.G.D[0].a);f=S6(a.K,a.G.D[0].b);d=S6(a.K,a.G.D[0].b);for(b=0;b<a.G.o;++b)e>R6(a.K,eo(a.G,b))&&(e=R6(a.K,eo(a.G,b))),c<R6(a.K,eo(a.G,b))&&(c=R6(a.K,eo(a.G,b))),f>S6(a.K,fo(a.G,b))&&(f=S6(a.K,fo(a.G,b))),d<S6(a.K,fo(a.G,b))&&(d=S6(a.K,fo(a.G,b)));a.w=new qK(e,f,c-e,d-f)}x(3,1,{});_.q=null;_.r=null;_.s=null;_.t=null;_.u=null;_.v=null;_.x=null;_.y=0;_.z=0;_.A=null;_.B=0;_.C=null;_.D=null;_.E=0;_.F=!1;_.G=null;_.H=null;_.I=0;_.J=0;_.K=null;\n_.L=0;_.M=0;_.N=null;_.O=0;_.P=0;_.Q=0;_.R=0;_.S=0;_.T=null;function g7(a,b,c){this.b=a;this.c=b;this.a=c}x(4,1,{},g7);_.a=0;_.b=0;_.c=0;function J6(){}x(5,1,{},J6);_.a=0;_.b=0;_.c=0;_.d=0;function v7(a,b){b.c*=a.c;b.a=b.a*a.c+a.a;b.b=b.b*a.c+a.b}function w7(a,b){b.d=b.d*a.c+a.a;b.e=b.e*a.c+a.b;b.c*=a.c;b.b*=a.c}function R6(a,b){return b*a.c+a.a}function S6(a,b){return b*a.c+a.b}function x7(){this.b=this.a=0;this.c=1}\nfunction y7(a,b,c){var d,e,f;this.b=this.a=0;this.c=1;b&&(d=b.c/a.c,f=b.b/a.b,e=0,0==e?e=24:e/=256,c=e/c,this.c=c<(d<f?d:f)?c:d<f?d:f,this.a=b.d+b.c/2-this.c*(a.d+a.c/2),this.b=b.e+b.b/2-this.c*(a.e+a.b/2))}x(19,1,{},x7,y7);_.tS=function(){return"DepictorTransformation Offset: "+this.a+Rb+this.b+" Scaling: "+this.c};_.a=0;_.b=0;_.c=0;function H6(a){return Fq(a,a.o,a.p,24)}function K6(a,b){return 0!=(a.z[b]&262144)}\nfunction M6(a,b){var c,d,e,f;c=m+mr(100*b.a)/100;d=m+mr(100*b.b)/100;e=m+mr(100*b.c)/100;f=m+mr(100*b.d)/100;c=Ed+c+Oa+e+Na+d+Qa+f+\'" style="stroke:\'+a.e+";stroke-width:"+mr(100*a.n)/100+Sa;l7(a,c)}function o7(a,b,c,d){e7(a,b);b=Gd+mr(100*c)/100+\'" text-anchor="middle" y="\'+mr(100*(d+~~(a.o/3)))/100+\'" font-family=" \'+a.f.a+\'" font-size="\'+a.f.b+D6+a.e+Va+b+Bd;l7(a,b)}function n7(a,b,c,d){b=\'<circle cx="\'+mr(100*b)/100+Aa+mr(100*c)/100+\'" r="\'+mr(100*d)/100+D6+a.e+\'" />\';l7(a,b)}\nfunction e7(a,b){var c;c=xR();if(-1<c&&9>c)return!a.i&&(a.i=(sH(),new tH(a.f))),c=MJ(b,a.i.a),11<=a.f.b&&(c*=1.5714285714285714),c;var d=a.f;c=b;var e=z7;e||(z7=e=$doc.createElement("canvas"));d=m+d.b+zk+d.a;e=e.getContext("2d");e.font=d;c=e.measureText(c);return(new qK(0,0,c.width,0)).c}function h7(a,b){a.o!=b&&(a.o=b,a.f=new hJ(jf,0,b))}\nfunction A7(a){var b,c,d;d=\'<svg id="\'+(null!=a.k?a.k:Kj+d7)+\'" xmlns="http://www.w3.org/2000/svg" version="1.1" \'+a.Dd(ba)+\'width="\'+a.p+\'px" height="\'+a.j+\'px" viewBox="0 0 \'+a.p+ba+a.j+\'">\\n\';b="<style> #"+(null!=a.k?a.k:Kj+d7)+" {pointer-events:none; }  #"+(null!=a.k?a.k:Kj+d7)+" .event  { pointer-events:all;}  <\/style>\\n";d+=B6;d+=b;for(c=new Rp(a.c);c.b<c.d.og();)b=Sp(c),l7(a,b);for(c=new Rp(a.b);c.b<c.d.og();)b=Sp(c),l7(a,b);return d+a.Cd(B6)+a.d.a.a+wd}\nfunction l7(a,b){wr(a.d,B6);wr(a.d,b);wr(a.d,aa)}x(28,3,{});_.Cd=vF;_.Dd=vF;_.yd=function(a,b,c){var d,e;e=new OB(\'<polygon points="\');for(d=0;d<c;++d){var f=m+mr(100*a[d])/100;Qv(e.a,f);e.a.a+=Rb;f=m+mr(100*b[d])/100;Qv(e.a,f);e.a.a+=ba}Qv(e.a,\'" style="fill:\'+this.e+";stroke:"+this.e+\';stroke-width:1"/>\');l7(this,e.a.a)};_.zd=function(a){this.e=Ik+(a.d>>16&255)+Rb+(a.d>>8&255)+Rb+(a.d&255)+Mb};_.tS=function(){return A7(this)};_.e=Jh;_.i=null;_.j=400;_.k=null;_.n=1;_.o=10;_.p=400;var d7=0;\nfunction B7(a){var b;Hn(a,15);b=a.C&65535;switch(a.C&-65536){case 65536:return null;case 131072:return 1==b?"meso":m+b+" meso diastereomers";case 0:return"unknown chirality";case 196608:return"racemate";case 262144:return"this enantiomer";case 327680:return"this or other enantiomer";case 393216:return"two epimers";default:return 1==b?"one stereo isomer":m+b+" stereo isomers"}}function C7(){C7=y;D7=z(QI,Em,-1,[0.29899999499320984,0.5870000123977661,0.11400000005960464])}\nfunction E7(a,b){C7();var c,d,e,f,g,h;c=!b?1:(D7[0]*(b.d>>16&255)+D7[1]*(b.d>>8&255)+D7[2]*(b.d&255))/255;f=!a?1:(D7[0]*(a.d>>16&255)+D7[1]*(a.d>>8&255)+D7[2]*(a.d&255))/255;e=oq(c-f);if(0.30000001192092896<e)return a;d=C(QI,Em,-1,3,1);F7(b.d>>16&255,b.d>>8&255,b.d&255,d);g=C(QI,Em,-1,3,1);F7(a.d>>16&255,a.d>>8&255,a.d&255,g);h=oq(g[0]-d[0]);0.5<h&&(h=1-h);g=1-(g[1]>d[1]?g[1]:d[1]);d=oq(f+c-1);h=Math.cos(9.42477796076938*h);h=0.30000001192092896*(g>(d>h?d:h)?g:d>h?d:h);if(e>h)c=a;else if(e=(f>c?1<\nf+h:0<f-h)?c-h:c+h,c=null,null==c&&(c=C(QI,Em,-1,4,1)),null!=a.b?c[3]=a.a:c[3]=(a.d>>24&255)/255,f=c,null==f&&(f=C(QI,Em,-1,3,1)),null!=a.b?(f[2]=a.b[2],f[1]=a.b[1],f[0]=a.b[0]):(f[2]=(a.d&255)/255,f[1]=(a.d>>8&255)/255,f[0]=(a.d>>16&255)/255),f=!a?1:(D7[0]*(a.d>>16&255)+D7[1]*(a.d>>8&255)+D7[2]*(a.d&255))/255,0==f)c=new PI(f,f,f,c[3]);else{d=e/(!a?1:(D7[0]*(a.d>>16&255)+D7[1]*(a.d>>8&255)+D7[2]*(a.d&255))/255);for(e=f=h=0;3>e;++e)c[e]*=d,1>c[e]?f+=D7[e]:(h+=(c[e]-1)*D7[e],c[e]=1);if(0!=h){for(e=\nd=0;3>e;++e)1>c[e]&&(c[e]+=h/f,1<c[e]&&(d+=(c[e]-1)*D7[e],c[e]=1));if(0!=d)for(e=0;3>e;++e)1>c[e]&&(c[e]+=d/D7[e],1<c[e]&&(c[e]=1))}c=new PI(c[0],c[1],c[2],c[3])}return c}var D7;function G7(a){uI();this.d=a|-16777216}function F7(a,b,c,d){uI();var e,f,g,h,j,l;null==d&&(d=C(QI,Em,-1,3,1));j=c>(a>b?a:b)?c:a>b?a:b;l=c<(a<b?a:b)?c:a<b?a:b;j==l?g=h=0:(h=(j-l)/j,f=(j-a)/(j-l),e=(j-b)/(j-l),c=(j-c)/(j-l),a==j?g=c-e:b==j?g=2+f-c:g=4+e-f,g/=6,0>g&&++g);d[0]=g;d[1]=h;d[2]=j/255}x(486,1,{59:1,68:1,72:1},G7);\nvar z7=null;function b7(a,b){this.a=a;this.b=b}x(538,509,{81:1,82:1},b7);function Q6(a,b){var c;c=new pK;BJ(a,b,c);return c}x(712,613,an);\n_.Wd=function(){var a,b,c;b=eA(this.a,!1,!0);c=null;a=new bs;if(Jr(new Zr,a,new yK(new DK(b)))){a=new H7(a,b);b=new qK(0,0,400,300);var d;if(0!=a.G.o){a.p=mr(b.c);a.j=mr(b.b);0==a.G.o?c=null:(u7(a),c=a.K.c*H6(a.G),d=new y7(a.w,b,c),1==d.c&&0==d.a&&0==d.b?d=null:(v7(d,a.K),w7(d,a.w)),t7(a,b,c,131072),c=d);Hn(a.G,0!=(a.B&256)?31:0!=(a.B&512)?47:0!=(a.B&1024)?79:15);W6(a);a.N.Rg();a.T.Rg();G6(a);h7(a,a.Q);a.F=!0;for(d=0;d<a.G.o;++d)c7(a,d);a.F=!1;d=a.K.c*H6(a.G);P6(a,d);t7(a,b,d,131072);var e;if(e=b){e=\na.w.d;var f=a.w.e,g=a.w.c,h=a.w.b,j,l,n,q;b.dg()||0>=g||0>=h?e=!1:(j=b.d,n=b.e,l=j+b.c,q=n+b.b,e=j<=e&&e+g<=l&&n<=f&&f+h<=q);e=!e}e&&(b=new y7(a.w,b,d),v7(b,a.K),w7(b,a.w),d=a.x,d.a=d.a*b.c+b.a,d.b=d.b*b.c+b.b,c&&v7(b,c))}if(0!=a.G.o){Hn(a.G,0!=(a.B&256)?31:0!=(a.B&512)?47:0!=(a.B&1024)?79:15);G6(a);b=!1;a.r=C(B,v,-1,a.G.o,1);for(c=0;c<a.G.o;++c)a.r[c]=a.G.s[c]&448,0!=a.r[c]&&(b=!0),Cp(a.G,c)&&(a.r[c]=128),0!=(a.G.s[c]&131072)&&0==(a.B&4096)&&(a.r[c]=256);L6(a,-10);if(a.G.E){d=a.P;L6(a,-7);for(c=\n0;c<a.G.c;++c)0!=(a.G.w[c]&536870912)&&n7(a,R6(a.K,eo(a.G,c))-d,S6(a.K,fo(a.G,c))-d,2*d);a.n=2*a.P;f=new J6;for(e=0;e<a.G.p;++e)c=D(a.G,0,e),d=D(a.G,1,e),0!=(a.G.w[c]&a.G.w[d]&536870912)&&(f.a=R6(a.K,eo(a.G,c)),f.c=S6(a.K,fo(a.G,c)),f.b=R6(a.K,eo(a.G,d)),f.d=S6(a.K,fo(a.G,d)),M6(a,f))}a.n=2*a.L;f=new J6;for(e=0;e<a.G.p;++e)c=D(a.G,0,e),d=D(a.G,1,e),0!=(a.G.z[e]&131072)&&(f.a=R6(a.K,eo(a.G,c)),f.c=S6(a.K,fo(a.G,c)),f.b=R6(a.K,eo(a.G,d)),f.d=S6(a.K,fo(a.G,d)),L6(a,-2),M6(a,f));if(a.G.E){L6(a,320);if(0!=\n(a.B&8))for(c=0;c<a.G.c;++c)0!=(a.G.w[c]&-536870913)&&n7(a,R6(a.K,eo(a.G,c))-a.S/2,S6(a.K,fo(a.G,c))-a.S/2,a.S);for(e=0;e<a.G.d;++e)0!=a.G.A[e]&&(c=D(a.G,0,e),d=D(a.G,1,e),n7(a,(R6(a.K,eo(a.G,c))+R6(a.K,eo(a.G,d))-a.S)/2,(S6(a.K,fo(a.G,c))+S6(a.K,fo(a.G,d))-a.S)/2,a.S))}0==(a.B&32)&&(d=B7(a.G),null!=d&&(0==a.x.a&&0==a.x.b&&(c=a.K.c*H6(a.G),u7(a),P6(a,c),t7(a,null,c,0)),h7(a,mr(a.y)),L6(a,448),o7(a,d,a.x.a,a.x.b+0.30000001192092896*a.y)));h7(a,a.Q);a.n=a.R;L6(a,a.J);W6(a);a.N.Rg();a.T.Rg();for(c=0;c<\na.G.o;++c)V6(a,c)?(L6(a,-3),c7(a,c),L6(a,a.J)):0!=a.r[c]?(L6(a,a.r[c]),c7(a,c),L6(a,a.J)):!b&&1!=a.G.x[c]&&6!=a.G.x[c]&&0==(a.B&2048)&&null==op(a.G,c)&&a.G.x[c]<tn.length?(d=a,e=tn[a.G.x[c]],g=f=void 0,f=(uI(),vI),g=new G7(e),e=E7(g,f),d.z=-5,d.e=Ik+(e.d>>16&255)+Rb+(e.d>>8&255)+Rb+(e.d&255)+Mb,c7(a,c),L6(a,a.J)):c7(a,c);for(c=new Rp(a.N);c.b<c.d.og();)b=Sp(c),L6(a,b.a),n7(a,b.b-a.O/2,b.c-a.O/2,a.O);L6(a,a.J);c=!1;for(b=0;b<a.G.d;++b)d=null,0!=(a.G.A[b]&16320)?(e=(a.G.A[b]&960)>>6,d=((a.G.A[b]&960)>>\n6)+((a.G.A[b]&15360)>>10),d=e==d?ah+e+nh:ah+e+kd+d+nh):0!=(a.G.A[b]&786432)?d=262144==(a.G.A[b]&786432)?qh:32==(a.G.A[b]&48)?"r!a":C6:0!=(a.G.A[b]&48)&&(d=32==(a.G.A[b]&48)?F6:"!r"),e=(a.G.A[b]&114688)>>14,0!=e&&(d=(null==d?m:d)+e),null!=d&&(h=D(a.G,0,b),j=D(a.G,1,b),c||(h7(a,~~((2*a.Q+1)/3)),c=!0),f=(R6(a.K,eo(a.G,h))+R6(a.K,eo(a.G,j)))/2,g=(S6(a.K,fo(a.G,h))+S6(a.K,fo(a.G,j)))/2,e=R6(a.K,eo(a.G,j))-R6(a.K,eo(a.G,h)),j=S6(a.K,fo(a.G,j))-S6(a.K,fo(a.G,h)),h=Math.sqrt(e*e+j*j),n=0.6*e7(a,d),l=0.55*\na.o,0!=h&&(0<e?f7(a,f+n*j/h,g-l*e/h,d,!0):f7(a,f-n*j/h,g+l*e/h,d,!0)));c&&h7(a,a.Q);a.q=C(I7,o,82,a.G.o,0);for(b=0;b<a.G.p;++b)(2==a.G.B[b]||26==a.G.B[b]||64==a.G.B[b])&&k7(a,b);for(b=0;b<a.G.p;++b)2!=a.G.B[b]&&26!=a.G.B[b]&&64!=a.G.B[b]&&k7(a,b);if(0==(a.B&64))for(b=0;b<a.G.p;++b)if(0!=(a.G.z[b]&48)>>4){switch((a.G.z[b]&48)>>4){case 1:g=2==Pn(a.G,b)?Ye:0!=(a.G.z[b]&4)?nk:eg;break;case 2:g=2==Pn(a.G,b)?"Z":0!=(a.G.z[b]&4)?tj:E6;break;default:g=Od}h7(a,~~((2*a.Q+1)/3));L6(a,K6(a.G,b)?-3:448);e=D(a.G,\n0,b);f=D(a.G,1,b);c=(R6(a.K,eo(a.G,e))+R6(a.K,eo(a.G,f)))/2;d=(S6(a.K,fo(a.G,e))+S6(a.K,fo(a.G,f)))/2;h=(R6(a.K,eo(a.G,e))-R6(a.K,eo(a.G,f)))/3;e=(S6(a.K,fo(a.G,e))-S6(a.K,fo(a.G,f)))/3;f7(a,c+e,d-h,g,!0);L6(a,a.J);h7(a,a.Q)}if(0!=(a.B&4)){h7(a,~~((2*a.Q+1)/3));L6(a,384);for(b=0;b<a.G.p;++b)e=D(a.G,0,b),f=D(a.G,1,b),g=0!=(a.G.z[b]&512)?"d":bo(a.G,b)?qh:m,c=(R6(a.K,eo(a.G,e))+R6(a.K,eo(a.G,f)))/2,d=(S6(a.K,fo(a.G,e))+S6(a.K,fo(a.G,f)))/2,f7(a,c,d,g+m+b,!0);L6(a,a.J);h7(a,a.Q)}}c=A7(a)}rM(c)};\nfunction H7(a,b){var c;sn();this.w=new pK;this.G=a;this.B=0;this.E=1;this.K=new x7;this.T=new Ip;this.N=new Ip;this.t=C(In,Im,-1,this.G.o,2);this.x=new nK;this.J=0;this.z=-1;c=(uI(),vI);var d=wn;C7();this.u=new vn(mr((c.d>>16&255)+0.30000001192092896*((d.d>>16&255)-(c.d>>16&255))),mr((c.d>>8&255)+0.30000001192092896*((d.d>>8&255)-(c.d>>8&255))),mr((c.d&255)+0.30000001192092896*((d.d&255)-(c.d&255))));this.v=E7(un,c);this.C=yn;this.D=xn;this.c=new Ip;this.b=new Ip;this.d=new Pv;this.f=new hJ(jf,0,\n12);new hJ(jf,0,120);this.k=m;++d7;this.a=b}x(741,28,{},H7);_.Cd=function(a){var b;b=m;null!=this.a&&0<this.a.length&&(b=AR(this.a,"(\\\\r|\\\\n|\\\\r\\\\n)",fh),b=a+"<chemical:x-mdl-molfile>"+b+"<\/chemical:x-mdl-molfile>\\n");return b};_.Dd=function(a){return\'xmlns:chemical="http://www.ch.ic.ac.uk/chemime/"\'+a};_.a=null;Z(3);Z(28);Z(741);var I7=YS(970,oK);Z(4);Z(5);Z(19);T(cZ)(8);function vF(){return m};\n//@ sourceURL=8.js\n')
