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
_{button.next-step}أكمِل_

---
> id: butterfly

### تأثير الفراشة

::: column.grow

فى عام ١٩٦٢، كان العالم [إدورد لورنز](bio:lorenz) يعمل فى معهد MIT، حيث قام بتطوير محاكاة حاسوبية للغلاف الجوى لكى يتنبأ بالطقس.

قام لورنز بتطوير خوارزمية، والتى تأخذ بيانات الطقس الحالية مدخلات لها. من امثلة هذه المدخلات كل من درجة الحرارة و الرطوبة و سرعة الرياح. ثم تقوم الخوارزمية بحساب كيف ستتغير هذه المدخلات بعد عدة دقائق فى المستقبل. وبإعادة هذه العملية مرارًا و تكرارًا، استطاع العالم أن يتنبأ بالطقس لمدة أيام بل وحتى أسابيع فى المستقبل.

::: column(width=320)

    x-media(src="images/lgp30.jpg" width=320 height=280)

{.caption} استخدك لورنز جهاز LGP-30 و هو أحد أوائل أجهزة الكمبيوتر الجاهزة للاستخدام المباشر.

:::

وفى أحد الأيام، قرر لورنز أن يقوم مرةً أخرى بتشغيل بعض أجزاء المحاكاة باستخدام نفس البيانات كمدخلات. لكنه اندهش عندما وجد ان تنبؤات الطقس كانت مختلفة تماما عن الحالة السابقة!

{.r} اعتقد لورنز فى بادئ الأمر أنه لابد أن يكون هناك خطأ فى سطور الأوامر، لكن سرعان ما استطاع معرفة ما حدث. عندما قام لورنز بتشغيل المحاكاة للمرة الثانية كان قد أجرى عملية تقريب لبعض قيم المدخلات بحيث يصبح العدد به خانات أقل (مثلا استخدم ٠.٥٠٦ بدلا من ٠.٥٠٦١٢٧) . و بالرغم من أن الفارق ضئيل للغاية  (أقل من ٠.١%) إلا أنه كان كافيا ليجعل المحاكاة تُصدِر تنبؤ مختلف
_{button.next-step} Continue_

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

طلق لورنز على هذه الظاهرة مسمَّى __تأثير الفراشة__: أى أن رفة جناح فراشة فى البرازيل من الممكن ان تتسبب فى تغيير حالة الطقس فى تكساس . تغيير يكفى لإحداث إعصار فى لحظة ما بالمستقبل.

فى المعتاد، أنت تتوقع أن تغيير بسيط فى عوامل المدخلات سيؤدى بطبيعة الحال إلى تغيير بسيط فى عوامل الخرج. لكن الحال مختلف فى حالة الأنظمة الفوضوية، مثل الطقس أو البندول المزدوج. ففى هذه الأنظمة، فأن أى تغيير ضئيل يمكنه أن يكبر سريعا و يؤدى لاختلافات ضخمة.

هذا هو سبب أن تنبؤات الطقس تجدى نفعا فقط لمدة بضع أيام فى المستقبل. أما بعد من ذلك، فأى بيانات طقس بيها القليل من عدم الدقة ستؤدى إلى تنبؤات مختلفة تمامًا.

::: 

---
> id: butterfly-2
> goals: video

هناك فرق مهم بين _معرفة قوانين الفيزياء_ لنظام ما، وبين قدرتنا _للتنبؤ بسلوك_ هذا النظام. فقوانين الجاذبية لنيوتن تصف لنا كيف سيتحرك البندول المزدوج بالضبط. والمعادلات التفاضلية فى ديناميكا الموائع تمكننا -نظريا- من حساب حالة الطقس فى لحظة زمنية فى المستقبل .

لكن لسوء الحظ، لكى تؤدى هذه القوانين وظيفتها فى واقعنا، سنحتاج ان نقيس الحالة الإبتدائية للبندول بدقة لا نهائية، أو نعرف مكان كل جسيم فى الغلاف الجوى، و واضح أن هذا مستحيل. فمع الوقت، الأخطاء البسيطة فى القياس ستجعل تنبؤاتنا بعيدة كل البعد عن الصحيح. وبعبارة أخرى، إننا لن نستطيع أن نقوم بتنبؤ صحيح ١٠٠% لحالة الطقس!

::: figure

    x-video(src="images/weather.mp4" poster="images/weather.jpg" width=640 height=360 controls credit="© NASA")
    // source: https://svs.gsfc.nasa.gov/12163

{.caption} تستخدم وكالة الفضاء ناسا الأقمار الصناعية والطائرات وآلاف محطات الطقس الأرضية لتأخذ "صور" للغلاف الجوى لتقيس مؤشرات هامة كسرعة الرياح وهطول الأمطار والرطوبة وضغط الجو وتيارات المحيطات.

:::

---
> id: dominoes
> goals: video

فى الواقع، إن الفراشة لا تسبب الإعصار، لكنها من الممكن أن تغيِّر أحوال الغلاف الجوى بالقدر الكافى الذى يجعل الإعصار يحدث الآن بدلا من حدوثه فى وقت آخر فى المستقبل.

يمكنك أن تفكر فى الأمر كما لو كان مثل مجموعة متتالية من قطع الضمنة و متزايدة فى الحجم. ففعل بسيط لإطاحة قطعة الضمنة الأولى سيؤدى بعد ذلك إلى سقوط قطعة الضمنة الكبرى:

::: figure

    x-video(src="images/dominoes.mp4" poster="images/dominoes.jpg" width=480 height=270 controls credit="© Gerrydomino, YouTube")

{.caption} إطاحة أكبر قطعة ضمنة فى العالم.

:::

---
> id: applications
> goals: video

### تطبيقات أخرى

سبق أن رأيتَ أن البندول المزدوج و الطقس يسلكون سلوك فوضوى، وهناك عدد لا يحصى من الأمثلة الأخرى فى الطبيعة و التكنولوجيا:

::: column(width=200)

    x-video(src="images/reaction.mp4" poster="images/reaction.jpg" width=200 height=200 credit="© Tim Kench, YouTube")
    // source: https://www.youtube.com/watch?v=PpyKSRo8Iec

{.caption} يحدث تفاعل بيلؤوسوف-جابوتينسكى عند خلط البرومات مع حامض. (سرعة العرض ٢٠ ضعف ، © Tim Kench)

::: column(width=200)

    x-media(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} _أسواق البرصة_ والتضخم والعوامل الإقتصادية الأخرى هم أنظمة فوضوية مما يجعل التنبؤ بهم فى غاية الصعوبة.

::: column(width=200)

    x-media(lightbox src="images/heart.jpg" width=200 height=200)

{.caption} يأمل العلماء بأن يتم تفسير أصل _نبضات القلب_ الفوضوية (رجفان بطينى) .حيث بتفسير هذا يمكننا التوصل لعلاج.

    // Often life threatening abnomal heartbeat after a heart attack. Maybe
    // chaos can predict this and help design better pacemakers.

    // The main benefit to having a chaotic heart is that tiny variations in the
    // way those millions of cells contract serves to distribute the load more
    // evenly, reducing wear and tear on your heart and allowing it to pump
    // decades longer than would otherwise be possible.

::: column(width=200)

    x-media(lightbox src="images/city.jpg" width=200 height=200)

{.caption} عادة ما يكون _تغيُّر تعداد الجماعات_ نظام فوضى. مثل تغير تعداد البشر أو القوارض أو الأسماك أو الحشرات.

::: column(width=200)

    x-media(lightbox src="images/stars.jpg" width=200 height=200 credit="Hubble/ESO")

{.caption} تنبض _النجوم المتغيرة_ فيتم تبادل شدة إضاءتها بين القوة والضعف مع مرور الزمن. بعض هذه النجوم تنبض بنمط فوضوى.

    // https://en.wikipedia.org/wiki/Stellar_pulsation

::: column(width=200)

    x-media(lightbox src="images/code.jpg" width=200 height=200)

{.caption} يمكن للكمبيوترات أن تستخدم الأنظمة العشوائية لتوليد _أعداد شبه عشوائية_ أو لعمل تشفير آمن لصورة ما.

:::

---
> id: applications-1 

لوحظ وجود السلوك الفوضوى أيضا الدوائر الإلكترونية والأحياء التطورية و فى الصنابير التى يتقاطر منها الماء، و يعكف العلماء حول العالم للبحث فى العديد من التطبيقات الأخرى.

    // https://en.wikipedia.org/wiki/Chua%27s_circuit
    // https://www.quantamagazine.org/can-scientists-predict-the-future-of-evolution-20140717/

إن رؤيتنا لكل هذه الأمثلة الفوضوية يعكس لنا أن هناك حدود أمام قدرتنا على تنبؤ المستقبل بدقة. وهذا يُطلق عليه عادةً _أُفُق التنبؤ_ و الذى يستحيل أن نقوم بأى تنبؤات دقيقة إذا تخطيناه.

::: column(width=300)

    x-media(src="images/forecast.jpg" width=300 height=280)

::: column.grow

أُفُق التنبؤ لتوقعات الطقس يساوى تقريبًا أسبوعًا واحدًا، وحتى لو تقدمت التكنولوجيا كثيرا فى المستقبل فغالبًا لن نستطيع تخطى توقع أسبوعين بدقة.

{.r} بدلا من هذا، يستخدم العلماء الاحتمالات ليتنبأوا بالمتوسطات الحسابية: فعلى سبيل المثال، كم مرة يُتوقع أن تقع أحداث طقس  معينة (مثل الإعصار) خلال العام. فهذه المتوسطات يمكنها أن تكون دقيقة للغاية حتى لو لم نعلم متى بالضبط سيحدث إعصار.
_{button.next-step} أكمِل_

:::

---
> id: definitions

دعنا نقوم بتلخيص الصفات الأساسية للفوضى التى اكتشفناها سويًّا حتى الآن:

::: .theorem

* _النظام الفوضوى_ يتبع قوانين [[حتمية|احتمالية|غير متوقعة]] دقيقة، عادة ما يتم وصفها بمعادلة تفاضلية أو أكثر.
* {.reveal(when="blank-0")} الأنظمة الفوضوية تكون حساسة جدا لأى تغيير. وبالتالى فالفروق الابتدائية [[الضئيلة|الكبيرة]] سيتضاعف مع الوقت و سيؤدى إلى فروق [[ضخمة|صغيرة|عشوائية]] فى النتائج.
* {.reveal(when="blank-1 blank-2")} السلوك _غير متوقع_ ولا يمكننا إعادته. بل قد يبدو السلوك عشوائى، لكنه ليس كذلك، فهو يبدو هكذا بسبب التغيرات الغير محسوسة أو أخطاء القياس.

:::

---
> id: definitions-1

تخبرنا نظرية الفوضى أننا لن نستطيع أبدا التنبؤ بالمستقبل أو نعرف مسبقا نتائج أفعالنا. قد يبدو هذا مقلقًا لو علمت الكم الكبير فى العالم الذى يعتمد على التوقعات الرياضية: ابتداءً من نمذجة الرياح الذى يسير حول الطائرات أو ناطحات السحاب، مرورًا بتقييم تأثير التغيُّر المناخى.

---
> id: pop-culture
> goals: video

و على الجانب الآخر، فنظرية الفوضى و تأثيؤ الفراشة كانتا أفكار بسيطة و قوية لدرجة أنهما بدأا يظهران فى الكتب و كلمات الأغانى و حتى فى الأفلام:

::: figure

    x-video(src="images/jurassic-park.mp4" poster="images/jurassic-park.jpg" width=480 height=270 audio controls)

{.caption} مأخوذ من فلم _Jurassic Park_ (© Universal Pictures, 1993)

:::



--------------------------------------------------------------------------------



## البلياردو الرياضية

> id: pool
> section: billiard
> sectionBackground: dark casino

من اكثر الخصائص المدهشة للفوضى، أنها تظهر فى أمثلة بسيطةً جدًا. لقد رأيتَ البندول المزدوج فى الفصل السابق. و مثال آخر رائع هو طاولات البلياردو.

* https://plus.maths.org/content/chaos-billiard-table
* https://en.wikipedia.org/wiki/Dynamical_billiards
* http://mathworld.wolfram.com/Billiards.html
* https://www.bristol.ac.uk/media-library/sites/pace/documents/corina-powerpoint%20standard.pdf
* http://mathcircle.wustl.edu/uploads/4/9/7/9/49791831/20160306-billiards-presentation.pdf
* http://people.maths.ox.ac.uk/tanner/Prospects2010/CUlcigraiTalk.pdf

{.fixme} تخيل لو أنك تحاول التنبؤ بالمسار الذى ستتخذه كرة بلياردو على الطاولة نتيجة لدفعة عليها. القواعد الحاكمة لأمر بسيطة: عجلة الكرة تساوى القوة المطبقة على الكرة مقسومةً على كتلتها (هذا هو قانون الحركة الثانى لنيوتن) و عندما تصدم الكرة حافة الطاولة، فزاوية الانعكاس تساوى زاوية السقوط ( للدقة يلزمك أيضا أخذ تأثير الاحتكاك فى الاعتبار، لكن ذلك ليس صعبا)

{.fixme} تكمن المشكلة فى أنه عندما تلعب فى النادى فعادة لا يمكنك قياس بسهولة المقدار الدقيق للقوة المطبقة على الكرة ولا الزاوية الدقيقة التى ترتطم الكرة بها مع حافة الطاولة ، وهكذا. و حتى لو قمت بحساباتك، فالمقدار الصغير الابتدائى من عدم التأكد يمكنه أن يكون مثل كرة الثلج، فبعد خطوات قليلة ستكون توقعاتك غير أكيدة بل وعديمة الفائدة. هذه "الحساسية لعدم المعرفة" هى السمة المميزة لرياضيات الفوضى.

    figure.r
      svg(width=760 height=440 viewBox="0 0 760 440")
        rect.pool-table(x=15 y=15 width=730 height=410 rx=10 ry=10)
      x-play-toggle(style="position: absolute; top: 30px; left: 30px")

{.fixme} Two billiard tables next to each other, move one ball a small amount

{.fixme} Real Life Applications (semiconductors)

---

### البلياردو البيضاوية

حرك الكرة الصفراء للمنتصف، و انظر أين سينتهى بها المكاف بعد ١٠٠ اصطدام:

    figure: x-pool-table: svg(width=760 height=440 viewBox="0 0 760 440")

---

### الانتشار الفوضوى

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
