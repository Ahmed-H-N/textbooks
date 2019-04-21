# نظرية الفوضى

## مقدمة

> section: introduction
> id: pendulum
> goals: play

فى بداية القرن الثامن عشر ميلادى، اعتقد الفيزيائيون من أمثال [إسحاق نيوتن](bio:newton) أن طريقة عمل الكون تماثل عمل ساعة ضخمة. وبالتالى فإذا استطعت أن تحصل على معلومات دقيقة بخصوص كل الموجودات فى هذه اللحظة، ستتمكن حينها من استخدام قوانين الفيزياء للتنبؤ بما سيحدث فى المستقبل.

::: column(width=320)

    x-geopad.sticky.simulation(width=320 height=320)
      canvas(width=640 height=640)
      svg
        circle(x="point(160,160)" name="c")
        circle.move.red(name="p")
        path.thick.red(x="segment(c,p)")
      x-play-toggle

::: column.grow

أحد أفضل الأمثلة على ذلك هو البندول البسيط. فلقد سبق أن رأيتَ كيف يمكنك استخدام المعادلات التفاضلية لإيجاد المعادلة التى تحسب مكان البندول البسيط فى أى لحظة زمنية فى المستقبل.

عادة ما نقول أن حركة البندول البسيط هى حركة _حتمية_: فهى تتبع بدقة قانون نيوتن للجاذبية بدون أى عشوائية أو احتمالية.
شاهد البندول البسيط و هو يتأرجح وحاول -بينما تشاهد- أن تتوقع مسار حركته!

:::

---
> id: double-pendulum
> goals: play1 play2

::: column(width=320)

    x-geopad.sticky.simulation(width=320 height=320)
      canvas(width=640 height=640)
      svg
        circle(x="point(160,160)" name="c")
        path.thick.yellow.rounded(x="polyline(c,a1,a2)" style="stroke-width: 7px; display: none")
        path.thick.green.rounded(x="polyline(c,b1,b2)" style="stroke-width: 6px; display: none")
        path.thick.blue.rounded(x="polyline(c,c1,c2)" style="stroke-width: 5px; display: none")
        circle.move.red(name="d1")
        circle.move.red(name="d2")
        path.thick.red(x="polyline(c,d1,d2)")
      x-play-toggle

::: column.grow

دعنا نضيف بعض الإثارة بتعليق بندول بسيط ثانٍ بالبندول الأول. و يُطلق على هذا : _البندول المزدوج_.

عاود المشاهدة و حاول أن تتوقع حركة البندول المزدوج. يمكنك أن تغلق عينيك لثوانٍ ... هل كان توقعك صحيحًا؟

{.reveal(when="play1")} إن البندول المزوج يتبع أيضا قانون نيوتن الحتمى للجاذبية، لكن الحركة تبدو كما لو أنها [[غير منتظمة بتاتًا|لا توجد جاذبية|تتكرر دومًا]].

{.reveal(when="blank-0")} و هذا يبدو جليّا عند النظر لعدَّة بندولات معا. فدعنا نضيف ثلاث بندولات خلف البندول الأول، و كل منها سيختلف زاويته الابتدائية بمقدار ضئيل جدا لا نكاد نراه (أقل من ٠.١°).
اضغط زر التشغيل و شاهد ماذا سيحدث.

{.reveal(when="play2")} سيتحرك البندولات معا فى البداية فى نفس المسار، لكن بعد بضع ثوانٍ [[سيتفرَّقوا|سيتجمعوا|سيتبادلوا أماكنهم]] _{span.reveal(when="blank-1")} و سنجد أن كلًا منهم اتخذ مسارًا مختلفًا._

:::

---
> id: double-pendulum-1

يُطلق الرياضيون مسمَّى [__فوضوى__](gloss:chaos) على هذا السلوك: و معناه أنك حتى لو علمتَ القوانين الفيزيائية الحاكمة التى تصف النظام، فإنه من المستحيل أن نتنبأ يما سيحدث فى المستقبل. وذلك لأن فى هذه الأنظمة الفوضوية (مثل نظام البندول المزدوج)، أىُّ اختلاف ضئيل فى الحالة الابتدائية للنظام سرعان ما تتضخم و تؤدى إلى حركة مختلفة.

ومن المهم معرفة أن فوضى تختلف كثيرا عن _العشوائية_. فنظام البندول المزدوج لا يحتوى على أى مصادفة أو احتمالية. بل إنه يتبع قوانين الجاذبية الحتمية و الدقيقة. وبالرغم من ذلك فهو يتحرك بطريقة غير متوقعة بتاتًا.

{.r} تظهر الفوضى فى أماكن عجيبة فى طبيعة و الرياضيات. وفى هذا المساق سوف نستكشف بعض من تلك الأمثلة، وسنكتشف كيف ستساعدنا الرياضات فى فهمهم.
_{button.next-step} أكمِل_

---
> id: butterfly

### تأثير الفراشة

::: column.grow

فى عام ١٩٦٢، كان العالم [إدورد لورنز](bio:lorenz) يعمل فى معهد MIT، حيث قام بتطوير محاكاة حاسوبية للمناخ لكى يتنبأ بالطقس.

قام لورنز بتطوير خوارزمية، والتى تأخذ بيانات الطقس الحالية مدخلات لها. من امثلة هذه المدخلات كل من درجة الحرارة و الرطوبة و سرعة الرياح. ثم تقوم الخوارزمية بحساب كيف ستتغير هذه المدخلات بعد عدة دقائق فى المستقبل. وبإعادة هذه العملية مرارًا و تكرارًا، استطاع العالم أن يتنبأ بالطقس لمدة أيام بل وحتى أسابيع فى المستقبل.

::: column(width=320)

    x-media(src="images/lgp30.jpg" width=320 height=280)

{.caption} استخدك لورنز جهاز LGP-30 و هو أحد أوائل أجهزة الكمبيوتر الجاهزة للاستخدام المباشر.

:::

وفى أحد الأيام، قرر لورنز أن يقوم مرةً أخرى بتشغيل بعض أجزاء المحاكاة باستخدام نفس البيانات كمدخلات. لكنه اندهش عندما وجد ان تنبؤات الطقس كانت مختلفة تماما عن الحالة السابقة!

{.r} اعتقد لورنز فى بادئ الأمر أنه لابد أن يكون هناك خطأ فى سطور الأوامر، لكن سرعان ما استطاع معرفة ما حدث. عندما قام لورنز بتشغيل المحاكاة للمرة الثانية كان قد أجرى عملية تقريب لبعض قيم المدخلات بحيث يصبح العدد به خانات أقل (مثلا استخدم ٠.٥٠٦ بدلا من ٠.٥٠٦١٢٧( . و بالرغم من أن الفارق ضئيل للغاية  (أقل من ٠.١%) إلا أنه كان كافيا ليجعل المحاكاة تصدر تنبؤ مختلف
_{button.next-step} _أكمِل

---
> id: butterfly-1
> goals: flap

::: column(width=280)

    .r
      x-water-canvas(width=280 height=380 src="images/america.jpg")
      .butterfly
      .tornado
    x-gesture(target=".butterfly")

::: column.grow

Lorenz called this the __butterfly effect__: even the flap of a butterfly’s
wings in Brazil might change the weather conditions enough to set off a tornado
in Texas, at some point in the future.

Usually, you’d expect a small change to the input parameters also lead to a
small change in the output. For chaotic systems, like the weather or the double
pendulum, the opposite is true. Even tiny changes can grow quickly, and lead
to huge differences.

This is why weather prediction only works for a few days into the future. After
that, slightly inaccurate weather data can lead to completely different
forecasts.

::: 

---
> id: butterfly-2
> goals: video

There is an important difference between _knowing the physical laws_ of a
system, and being able to _predict its behaviour_. Newtons laws of gravity tell
us exactly how the double pendulum should move. The differential equations of
fluid dynamics should, in principle, allow us to calculate the weather at any
time in the future.

Unfortunately, for this to work in practice, we would have to measure the
initial state of the pendulum with infinite precision, or know the exact
position of every particle in the atmosphere – and that is clearly impossible.
Over time, tiny measurement errors will completely throw off our predictions.
In other words, we can _never_ have a perfect weather forecast!

::: figure

    x-video(src="images/weather.mp4" poster="images/weather.jpg" width=640 height=360 controls credit="© NASA")
    // source: https://svs.gsfc.nasa.gov/12163

{.caption} NASA uses satellites, planes and thousands of ground-based weather
stations to take “snapshots” of the atmosphere: measuring important indicators
like wind speed, rainfall, humidity, air pressure, and ocean currents.

:::

---
> id: dominoes
> goals: video

Of course, a butterfly doesn’t actually _cause_ a tornado – but it might change
the conditions of the atmosphere just enough so that a tornado happens _now_
rather than at some other time in the future.

You could think about it as a series of dominoes with increasing size. A small
action that topples the first domino later leads to the largest domino falling:

::: figure

    x-video(src="images/dominoes.mp4" poster="images/dominoes.jpg" width=480 height=270 controls credit="© Gerrydomino, YouTube")

{.caption} The world’s largest domino toppling.

:::

---
> id: applications
> goals: video

### More Applications

You’ve already seen that the double pendulum and the weather behave chaotically,
but there are countless other examples in nature and technology:

::: column(width=200)

    x-video(src="images/reaction.mp4" poster="images/reaction.jpg" width=200 height=200 credit="© Tim Kench, YouTube")
    // source: https://www.youtube.com/watch?v=PpyKSRo8Iec

{.caption} The __Belousov–Zhabotinsky__ reaction occurs when you mix _bromate_
with an acid. (Shown at 20x speed, © Tim Kench)

::: column(width=200)

    x-media(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} __Stock markets__, inflation and other parts of the economy are
chaotic, making them very difficult to predict.

::: column(width=200)

    x-media(lightbox src="images/heart.jpg" width=200 height=200)

{.caption} Scientists hope that explaining the origin of chaotic
__heartbeats__ (_ventricular fibrillation_) can lead to a cure.

    // Often life threatening abnomal heartbeat after a heart attack. Maybe
    // chaos can predict this and help design better pacemakers.

    // The main benefit to having a chaotic heart is that tiny variations in the
    // way those millions of cells contract serves to distribute the load more
    // evenly, reducing wear and tear on your heart and allowing it to pump
    // decades longer than would otherwise be possible.

::: column(width=200)

    x-media(lightbox src="images/city.jpg" width=200 height=200)

{.caption} __Population dynamics__ often is chaotic – from the number of humans
in a city, to rodent, fish or insect populations.

::: column(width=200)

    x-media(lightbox src="images/stars.jpg" width=200 height=200 credit="Hubble/ESO")

{.caption} __Variable stars__ pulsate by altering their brightness over time.
Some of these stars pulsate in a chaotic pattern.

    // https://en.wikipedia.org/wiki/Stellar_pulsation

::: column(width=200)

    x-media(lightbox src="images/code.jpg" width=200 height=200)

{.caption} Computers can use chaotic systems to generate pseudo-__random
numbers__, or to securely encrypt images.

:::

---
> id: applications-1 

Chaotic behaviour has also been found in electronic circuits, evolutionary
biology as well as dripping water taps, and scientists around the world are
researching many other applications.

    // https://en.wikipedia.org/wiki/Chua%27s_circuit
    // https://www.quantamagazine.org/can-scientists-predict-the-future-of-evolution-20140717/

But in all these examples, the existence of chaos means that there are
fundamental limits to how well we can predict the future. This is often called
a __prediction horizon__, beyond which it is impossible to make any accurate
forecasts.

::: column(width=300)

    x-media(src="images/forecast.jpg" width=300 height=280)

::: column.grow

The weather forecast currently has a prediction horizon of approximately one
week, and even with much better technology in the future, we might never surpass
two weeks of accuracy.

{.r} Instead, scientists can use probability to predict _averages_: for example
how often they’d expect certain weather events (like a tornado) to occur in a
year. These averages can be very accurate, even if we don’t know _when exactly_
a tornado might happen.
_{button.next-step} Continue_

:::

---
> id: definitions

Let’s summarise the key properties of _chaos_ that we have discovered so far:

::: .theorem

* A __chaotic system__ follows precise, [[deterministic|probabilistic|unpredictable]]
  laws, often described by one or more differential equations.
* {.reveal(when="blank-0")} Chaotic systems are highly __sensitive to change__.
  [[Tiny|Large]] initial differences multiply over time and can lead to
  [[huge|small|random]] differences in the result.
* {.reveal(when="blank-1 blank-2")} The behaviour is __unpredictable__ and
  non-repeating. It might even _look random_, but only because it depends on
  imperceptible changes or measurement errors.

:::

---
> id: definitions-1

Chaos theory tells us that we can never predict the future, or know in advance
what outcome our actions might have. This can be worrying if you consider how
much in our world depends on mathematical predictions: from modelling the wind
flowing around airplanes or skyscrapers, to assessing the impact of climate
change.

---
> id: pop-culture
> goals: video

On the other hand, chaos theory and the butterfly effect were such simple and
powerful ideas, that they soon started to appear in books, music lyrics, and
even in movies:

::: figure

    x-video(src="images/jurassic-park.mp4" poster="images/jurassic-park.jpg" width=480 height=270 audio controls)

{.caption} Extract from the movie _Jurassic Park_ (© Universal Pictures, 1993) 

:::



--------------------------------------------------------------------------------



## Mathematical Billiard

> id: pool
> section: billiard
> sectionBackground: dark casino

One of the most surprising properties of chaos is that it can appear in really
simple systems. You've already seen the double-pendulum in the previous section.
Another fascinating example are billiard tables.

* https://plus.maths.org/content/chaos-billiard-table
* https://en.wikipedia.org/wiki/Dynamical_billiards
* http://mathworld.wolfram.com/Billiards.html
* https://www.bristol.ac.uk/media-library/sites/pace/documents/corina-powerpoint%20standard.pdf
* http://mathcircle.wustl.edu/uploads/4/9/7/9/49791831/20160306-billiards-presentation.pdf
* http://people.maths.ox.ac.uk/tanner/Prospects2010/CUlcigraiTalk.pdf

{.fixme} Imagine you are trying to predict the path a ball on a billiard table
will take in response to a push. The rules at play simple: the ball's
acceleration is equal to the force applied divided by its mass (that's Newton's
second law of motion) and when it hits a side, the angle of reflection is equal
to the angle of incidence (strictly speaking you also need to include the effect
of friction, but that's not too hard to do).

{.fixme} The trouble is that in your average pub setting you can't easily
measure the exact amount of force applied to the ball, the exact angle with
which it hits a side, and so on. As you make your calculations, this small
initial uncertainty can snowball, so that pretty soon your prediction may
become so uncertain as to be useless. That "sensitivity to ignorance" is the
hallmark of mathematical chaos.

    figure.r
      svg(width=760 height=440 viewBox="0 0 760 440")
        rect.pool-table(x=15 y=15 width=730 height=410 rx=10 ry=10)
      x-play-toggle(style="position: absolute; top: 30px; left: 30px")

{.fixme} Two billiard tables next to each other, move one ball a small amount

{.fixme} Real Life Applications (semiconductors)

---

### Elliptical Billiard

Move the yellow ball in the center, and see where it ends up after 100
collisions:

    figure: x-pool-table: svg(width=760 height=440 viewBox="0 0 760 440")

---

### Chaotic Scattering

{.fixme} Gaspard–Rice system



--------------------------------------------------------------------------------



## The Three Body Problem

> section: three-bodies
> id: three-bodies

Poincare etc.

    figure: x-geopad.simulation.r(width=480 height=480)
      canvas(width=960 height=960)
      svg
        circle.large.move.red(name="a")
        circle.large.move.blue(name="b")
        circle.large.move.green(name="c")        
        path.thin(x="segment(a, a.translate(va))" arrows="end")
        path.thin(x="segment(b, b.translate(vb))" arrows="end")
        path.thin(x="segment(c, c.translate(vc))" arrows="end")
      x-play-toggle
      x-icon-btn.restore(icon="restore")

{.fixme} There are two chaotic systems which affect us greatly. The first is the weather. Although weather equations are pretty well understood and are solved by computers every day, it is impossible to take into account all the factors influencing the weather (remember the butterfly). No set of data is perfect, nor are computers perfect at solving the equations. The effects of these small
 errors build up remarkably quickly. After about ten days it is essentially impossible to forecast weather with any degree of accuracy.

{.fixme} Chaos is also key to understanding the solar system. Whilst the motion of the planets is very predictable, the motion of many of the asteroids is not. Although asteroids do obey Newton's laws, they may well have orbits which move erratically about space. Such an erratic asteroid is thought to have hit the Earth 65 million years ago and wiped out the dinosaurs. The consequences of a similar
 incident occurring today are unthinkable; the nature of chaotic motion means that such events are virtually impossible to predict until too late.

{.fixme} In 1887, the French mathematician Henri Poincaré showed that while Newton’s theory of gravity could perfectly predict how two planetary bodies would orbit under their mutual attraction, adding a third body to the mix rendered the equations unsolvable. The best we can do for three bodies is to predict their movements moment by moment, and feed those predictions back into our equations … Though the dance of the planets has a lengthy prediction horizon, the effects of chaos cannot be ignored, for the intricate interplay of gravitation tugs among the planets has a large influence on the trajectories of the asteroids. Keeping an eye on the asteroids is difficult but worthwhile, since such chaotic effects may one day fling an unwelcome surprise our way. On the flip side, they can also divert external surprises such as steering comets away from a potential collision with Earth.



--------------------------------------------------------------------------------



## Phase Space and Strange Attractors

> section: attractors

Phase diagram for pendulum:
https://youtu.be/MjPFHWul2J0?t=29

circles => equilibrium

spirals
friction => stable attractor

Fox + rabbit, dynamical systems

Poincaré-Bendixson theorem (equilibrium, limit cycle)

Vector fields, equilibrium
2D => simple, deterministic, 3D => not!

---

Water mill

Sinaï-Ruelle-Bowen measure / statistics / forecasting

* https://www.youtube.com/watch?v=xQ3mJxr2NAY
* https://bl.ocks.org/gcalmettes/c3363abb74fe219b283782f055b72386

{.fixme} Mathematicians use the concept of a “phase space” to describe the possible behaviours of a system geometrically. Phase space is not (always) like regular space - each location in phase space corresponds to a different configuration of the system. The behaviour of the system can be observed by placing a point at the location representing the starting configuration and watching how that point moves through the phase space.

{.fixme} In phase space, a stable system will move predictably towards a very simple attractor (which will look like a single point in the phase space if the system settles down, or a simple loop if the system cycles between different configurations repeatedly). A chaotic system will also move predictably towards its attractor in phase space - but instead of points or simple loops, we see “strange attractors” appear - complex and beautiful shapes (known as fractals) that twist and turn, intricately detailed at all possible scales.

{.fixme} Another feature of chaotic systems is that they can suddenly flip from one behaviour to another, very different, one. Think about how some kinds of debt can suddenly become a risk rather than an asset to banks. Such a sudden change is known as a phase transition. One way to see a phase transition in action is to play with a tap. Turn it on very slowly and you hear a regular drip, drip,
 drip. Turn it up slightly and the drips become more frequent and not all the same size. A tiny bit more, and the drips become completely irregular and unpredictable: chaos sets in. Keep going, and the water settles down to a smooth column. However once you increase too much, the water starts twisting, frothing and spiralling: turbulence begins. By steadily increasing the flow we see regularity
 and chaos, without leaving the world of determinism.



--------------------------------------------------------------------------------



## The Logistic Map

> section: logistic-map

* https://www.dwitter.net/d/12018
* https://geoffboeing.com/2015/03/chaos-theory-logistic-map/
* Feigenbaum constant
