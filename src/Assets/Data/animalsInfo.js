const animalsInfo = [
	[
		{
			id: 1,
			name: 'Свинья',
			species: 'Suidae',
			description: 'Для свиней характерно компактное телосложение и длинная морда, заканчивающаяся голым хрящевым подвижным «пятачком» — это приспособление для разрыхления земли в поисках корма. Клыки хорошо развитые, острые, изогнуты вверх.',
			image: 'https://live.staticflickr.com/136/337427290_7cac780b80.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-08/1504165344_zvuki_prirody_-_svinya.mp3'
		},
		{
			id: 2,
			name: 'Лошадь',
			species: 'Equus',
			description: 'Одомашненная лошадь выполняла большинство тяжёлой механической работы для человека до изобретения парового и электрического двигателей. Лошадь заняла доминирующее положение в транспорте, как вьючное животное, как тяга гужевого транспорта и как основное животное для верховой езды. ',
			image: 'https://live.staticflickr.com/774/20978316389_e4c3a1c776_b.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-08/1504173618_zvuk-loshadi.mp3'
		},
		{
			id: 3,
			name: 'Собака',
			species: 'Canis lupus familiaris',
			description: 'Собаки известны своими способностями к обучению, любовью к игре, социальным поведением. Выведены специальные породы собак, предназначенные для различных целей: охоты, охраны, тяги гужевого транспорта и другого, а также декоративные породы (например, болонка, пудель).',
			image: 'https://live.staticflickr.com/8292/29701666186_4afde6d565.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-08/1504162247_sobaka_-_lay_sobaki-2.mp3'
		},
		{
			id: 4,
			name: 'Кошка',
			species: 'Felis silvestris catus',
			description: 'Являясь одиночным охотником на грызунов и других мелких животных, кошка — социальное животное[6], использующее для общения широкий диапазон звуковых сигналов, а также феромоны и движения тела',
			image: 'https://live.staticflickr.com/5296/5540689257_9076fffe69_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-08/1504025531_myaukane_koshki_-_myaukane_koshki.mp3'
		},
		{
			id: 5,
			name: 'Овца',
			species: 'Ovis aries',
			description: 'Домашняя овца (лат. Ovis aries) — парнокопытное млекопитающее из рода баранов, семейства полорогих. Это животное уже в глубокой древности было одомашнено человеком, в основном благодаря густой шерсти и съедобному мясу.',
			image: 'https://live.staticflickr.com/3041/3079320437_7e57af97b7_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2020-03/1584098555_c031819e52088a2.mp3'
		},
		{
			id: 6,
			name: 'Курица',
			species: 'Gallus gallus',
			description: 'В настоящее время курица - самый многочисленный на Земле вид птиц. Является одомашненной формой банкивской джунглевой курицы. Летает плохо, недалеко.',
			image: 'https://live.staticflickr.com/500/32185116984_36086b43aa_b.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-09/1504777726_kachestvennyy-zvuk-kuricy-slushat-onlayn.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Лев',
			species: 'Panthera leo',
			description: 'Лев — рекордсмен по высоте в плечах среди всех кошачьих. По весу крупнейшие подвиды льва и тигра примерно сопоставимы. У львов мощные ноги, сильные челюсти, а клыки имеют длину 8 см, поэтому эти хищники способны убивать достаточно крупных животных',
			image: 'https://live.staticflickr.com/3851/15359553551_ae69be1d17.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-09/1504517217_ryk-lva.mp3'
		},
		{
			id: 2,
			name: 'Тигр',
			species: 'Panthera tigris',
			description: 'Тигр является крупнейшей и самой тяжёлой из диких кошек, но различные его подвиды сильно различаются по размерам и массе тела. Материковые подвиды тигра крупнее островных. Самыми крупными из них являются бенгальский и амурский подвиды.',
			image: 'https://live.staticflickr.com/972/42013117801_5531d145f8_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2018-11/1541407338_ryk-tigra.mp3'
		},
		{
			id: 3,
			name: 'Ягуар',
			species: 'Panthera onca',
			description: 'Основные данные относительно эволюции вида получены с помощью палеонтологических и молекулярно-филогенетических исследований. Ягуар — единственный представитель рода Panthera в Новом Свете.',
			image: 'https://live.staticflickr.com/802/40726503975_6da624da67_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2020-02/1580723510_7064bd76a556e3f.mp3'
		},
		{
			id: 4,
			name: 'Пантера',
			species: 'Panthera',
			description: 'Все представители рода — активные хищники, охотящиеся преимущественно на крупных млекопитающих, главным образом — копытных. Часто добыча превышает размеры охотника, порой в несколько раз. Охотятся скрадом и из засады (на тропах, у водопоев).',
			image: 'https://live.staticflickr.com/1863/30763793898_70ef2a9bd5_c.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-04/1555668878_panther_grunt_06.mp3'
		},
		{
			id: 5,
			name: 'Рысь',
			species: 'Lynx',
			description: 'Рысь — типичная кошка, хотя величиной с крупную собаку, которую отчасти напоминает своим укороченным телом и длинноногостью. Очень характерна голова рыси: сравнительно небольшая, округлая и очень выразительная.',
			image: 'https://live.staticflickr.com/8776/28167384213_8f0c19f0d5_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-02/1551343718_bobcat_sound_5.mp3'
		},
		{
			id: 6,
			name: 'Пума',
			species: 'Puma concolor',
			description: 'Пумы встречаются на разной высоте — от равнин до гор высотой 4700 м над уровнем моря, и в самых разных ландшафтах: в горных хвойных лесах, в тропических лесах, на травянистых равнинах, в пампасах, на заболоченных низменностях и вообще в любой местности, которая предоставляет им достаточное количество еды и убежище.',
			image: 'https://live.staticflickr.com/1765/42868109601_c3f1661ea8_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-11/1573201338_a40486dfe603297.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Антилопа',
			species: 'Antilopinae',
			description: 'У всех антилоп ноги обыкновенно довольно длинные и стройные, хвост оканчивается пучком волос, шерсть короткая и окрашена в живые цвета; у многих антилоп, как у оленей, существуют так называемые слёзные каналы под глазами.',
			image: 'https://live.staticflickr.com/5328/9650718414_1da6dd7dff_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-10/1570083499_klipspringer19031.mp3'
		},
		{
			id: 2,
			name: 'Лось',
			species: 'Alces',
			description: 'Лось распространён в лесной зоне Северного полушария, реже в лесотундре, лесостепи и на окраинах степной зоны. В Европе встречается в Польше, Прибалтике, Чехии, Венгрии, Белоруссии, на севере Украины, в Скандинавии и в европейской части России.',
			image: 'https://live.staticflickr.com/4374/36368205875_3043544d3a.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-08/1504022544_zvuk-losja-v-lesu.mp3'
		},
		{
			id: 3,
			name: 'Олень',
			species: 'Cervidae',
			description: 'Олени имеют богатое символическое значение и являются в мифах различных культур и народов. Часто олицетворяют благородство, величие, красоту, грацию, быстроту.',
			image: 'https://live.staticflickr.com/3289/3156865197_e6001e86d4.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-08/1504023664_blagorodnyy-olen-krik-blagorodnogo-olenya.mp3'
		},
		{
			id: 4,
			name: 'Зебра',
			species: 'Hippotigris',
			description: 'Зебру, в отличие от лошади, невозможно приручить, хотя одиночные случаи встречаются. По темпераменту полосатые лошадки сильно отличаются от своих одомашненных собратьев. В их арсенале имеются клыки и копыта, которыми они активно пользуются при возникновении малейшей угрозы.',
			image: 'https://live.staticflickr.com/4885/46341998151_624929746f_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2018-12/1544446913_zebra6.mp3'
		},
		{
			id: 5,
			name: 'Осёл',
			species: 'Equus asinus asinus',
			description: 'Ослы приспособлены к пустынным землям. В отличие от диких лошадей, дикие ослы в сухих районах ведут одиночный образ жизни и не образуют гаремов. Каждый взрослый осел устанавливает среду обитания; размножение на большой площади может осуществляться одной группой.',
			image: 'https://live.staticflickr.com/7603/16917513045_1d0c0a4425_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-02/1550125842_donkey-sound-2-o.mp3'
		},
		{
			id: 6,
			name: 'Лань',
			species: 'Dama dama',
			description: 'Лань предпочитает жить в лесах с многочисленными лужайками и открытыми местами, но умеет хорошо приспосабливаться к разным сферам обитания и встречается даже на острове Нордерней в Северном море.',
			image: 'https://live.staticflickr.com/5764/21726296228_5ba1225015_c.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-12/1577131400_022a-w1cdr0001444-1700a0.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Жаворонок',
			species: 'Alauda arvensis',
			description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
			image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
		},
		{
			id: 2,
			name: 'Соловей',
			species: 'Luscinia luscinia',
			description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
			image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
		},
		{
			id: 3,
			name: 'Скворец',
			species: 'Sturnus vulgaris',
			description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
			image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
		},
		{
			id: 4,
			name: 'Иволга',
			species: 'Oriolus oriolus',
			description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
			image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
		},
		{
			id: 5,
			name: 'Свиристель',
			species: 'Bombycilla garrulus',
			description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
			image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
		},
		{
			id: 6,
			name: 'Щегол',
			species: 'Carduelis carduelis',
			description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
			image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Орёл',
			species: 'Aquila nipalensis',
			description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
			image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
		},
		{
			id: 2,
			name: 'Коршун',
			species: 'Milvus migrans',
			description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
			image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
		},
		{
			id: 3,
			name: 'Лунь',
			species: 'Circus cyaneus',
			description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
			image: 'https://live.staticflickr.com/65535/49322743903_32f3922d9e.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
		},
		{
			id: 4,
			name: 'Сокол',
			species: 'Falco peregrinus',
			description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
			image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
		},
		{
			id: 5,
			name: 'Ястреб',
			species: 'Accipiter gentilis',
			description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
			image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
		},
		{
			id: 6,
			name: 'Филин',
			species: 'Bubo bubo',
			description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
			image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Альбатрос',
			species: 'Diomedea exulans',
			description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
			image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
		},
		{
			id: 2,
			name: 'Олуша',
			species: 'Sula nebouxii',
			description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
			image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
		},
		{
			id: 3,
			name: 'Буревестник',
			species: 'Puffinus griseus',
			description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
			image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
		},
		{
			id: 4,
			name: 'Пеликан',
			species: 'Pelecanus',
			description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
			image: 'https://live.staticflickr.com/7885/46523771945_9496c2a191.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
		},
		{
			id: 5,
			name: 'Пингвин',
			species: 'Aptenodytes forsteri',
			description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
			image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
		},
		{
			id: 6,
			name: 'Чайка',
			species: 'Larus argentatus',
			description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
			image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
		}
	]
];

export default animalsInfo;