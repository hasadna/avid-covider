
/* tslint:disable */
export const script = {
  "s": [
    {
      "description": "תסריט לניהול שיחות מצד הפונה",
      "name": "פונה",
      "snippets": [
        {
          "name": "default",
          "steps": [
            {
              "goto": "intro",
              "uid": "a06dfaf7c2"
            },
            {
              "goto": "reporting-loop",
              "uid": "e9acb54132"
            },
            {
              "goto": "end-of-report",
              "uid": "7a26c4124f"
            }
          ],
          "uid": "898235e117"
        },
        {
          "name": "intro",
          "steps": [
            {
              "do": {
                "cmd": "load_local_storage",
                "params": [
                  "record"
                ]
              },
              "uid": "85e1eca3bb"
            },
            {
              "switch": {
                "arg": "_existing_user",
                "cases": [
                  {
                    "match": "new",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "טוב שבאת,",
                            "ar": "ممتاز انك جيت/ي,",
                            "en": "How good of you to drop by,",
                            "es": "Qué bueno que viniste,",
                            "fr": "Merci de votre participation,",
                            "ru": "Как хорошо что вы здесь,"
                          }
                        },
                        "uid": "432fe8e599"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "כולם מנסים לחזור לשיגרה מסויימת אבל מגפת הקורונה לא נעלמה",
                            "ar": "الجميع يحاول العودة لحياته المعتادة بشكل ما, لكن وباء الكورونا ما زال بيننا",
                            "en": "Everyone is trying to return to a routine, but the Covid-19 pandemic is not over.",
                            "es": "Todos intentan regresar a la rutina, pero la epidemia de Corona no ha desaparecido",
                            "fr": "Tout le monde essaie de revenir à une certaine routine, mais l'épidémie du Coronavirus n'a pas disparu",
                            "ru": "Все хотят вернуться к рутине, но эпидемия Короновируса не исчезла "
                          }
                        },
                        "uid": "c3ab2ebcbb"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "התשובות שלך לכמה שאלות, והמשך הדיווח, יעזרו לצוות המחקר של מכון ויצמן לאתר מוקדים אפשריים להתפרצות מחודשת של המחלה ולהיערך אליה בהתאם.",
                            "ar": "إجابتك عن بعض الأسئلة, والإستمرارية في تعبئة الإستبيان, سوف تساعد فريق البحث في معهد وايزمن بتحديد بؤر التفشي الحديثة للمرض والتعامل معها وفقًا لذلك. ",
                            "en": "Your answers to our questions, and daily reporting, will help the Weizmann Institute research team to locate possible outbreaks of the disease as early as possible and prepare appropriately. ",
                            "es": "Sus respuestas, y los informes continuos, ayudarán al equipo de investigación del Instituto Weizmann a encontrar posibles puntos de infección de la enfermedad y así prepararse para ello.",
                            "fr": "Vos réponses aux quelques questions et les rapports continus aideront l'équipe de recherche de l'Institut Weizmann à trouver les centres de propagation possibles pour une récidive de la maladie et à s'y préparer en conséquence.",
                            "ru": "Ваши ответы на несколько вопросов, и дополнительные ответы в будущем, помогут команде исследователей Института Вайцмана обнаружить возможные новые вспышки болезни и подготовиться к ним."
                          }
                        },
                        "uid": "352f5a331f"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "כל השאלות והמידע ישארו אנונימיים ויכבדו את הפרטיות שלך",
                            "ar": "جميع الأسئلة والمعلومات ستبقى مجهولة المصدر من أجل إحترام خصوصيتك",
                            "en": "All the questions and information will remain anonymous and respect your privacy.",
                            "es": "Todas las preguntas e información permanecerán anónimas y respetarán su privacidad",
                            "fr": "Toutes les questions et informations resteront anonymes et respecteront votre vie privée",
                            "ru": "Все ответы и информация останутся анонимными, ваша конфиденциальность будет сохранена."
                          }
                        },
                        "uid": "7f3883f25d"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "נתחיל בדיווח עבורך, בסופו יתאפשר גם דיווח עבור בני משפחה נוספים",
                            "ar": "أولا نملأ إستبيانك انت, ولاحقا ممكن تعبئة إستبيان لأشخاص آخرين من عائلتك",
                            "en": "Let's start with reporting how you are feeling. After that, you can submit another report for your family members",
                            "es": "Empezaremos con tu informe, y después también será posible informar acerca de otros miembros de la familia",
                            "fr": "Commençons à remplir ce questionnaire sur votre état de santé. Vous aurez aussi la possibilité de le remplir pour d'autres membres de votre famille",
                            "ru": "Начнем с вопросов о Вашем здоровье. После этого Вы сможете также заполнить отчет и о других членах семьи."
                          }
                        },
                        "uid": "9be6fe3059"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "הכי טוב כשכולם מדווחים על עצמם בכל יום אבל אם זה לא מסתדר, אפשר להקריא להם את השאלות או פשוט לענות בשמם",
                            "ar": "من المفضل أن يقوم كل واحد بتعبئة إستبيان لنفسه بشكل يومي لكن إذا كان صعب, ممكن ان تقرأ/ي لهم الأسئلة أو ببساطة أن تُجيب/ي بإسمهم",
                            "en": "It's best when everyone reports daily for themselves, but if that is not convenient, you can read them the questions or just answer for them.",
                            "es": "Es mejor cuando todos se reportan todos los días, pero si no es posible, puede leerles las preguntas o responder su lugar",
                            "fr": "Le mieux serait que tout le monde remplisse le questionnaire chaque jour, mais si cela ne fonctionne pas, vous pouvez leur lire les questions ou simplement répondre en leur nom",
                            "ru": "Лучше когда все докладывают про самих себя, но если это невозможно, можно зачитать им вопросы или просто ответить от их имени."
                          }
                        },
                        "uid": "699dcb90b1"
                      }
                    ],
                    "uid": "804186b089"
                  },
                  {
                    "match": "returning",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "הי! טוב לראותך שוב",
                            "ar": "مرحبا! مبسوطين برجعتك",
                            "en": "Hi! Nice to see you here again",
                            "es": "Hola, ¡qué bueno verte de nuevo!",
                            "fr": "Bonjour ! Ravi de vous revoir",
                            "ru": "Здравствуйте, рады вас снова видеть!"
                          }
                        },
                        "uid": "a4f3f4c1ff"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "ננסה יחד איתך להבין מה הסיכוי להתפרצות מחודשת של קורונה באזור שלך",
                            "ar": "سنحاول معًا أن نفهم ما هو إحتمال تجدد تفشي الكورنا في منطقتك",
                            "en": "Let's try together to understand the probability of a renewed outbreak of Covid-19 in your location",
                            "es": "Trabajaremos juntos para entender cuál es la posibilidad de una nueva erupción de contagios en su área",
                            "fr": "Nous travaillerons avec vous pour comprendre quelle est la probabilité d'une nouvelle éruption du Coronavirus dans votre région",
                            "ru": "Вместе с вамы мы попробуем понять, какова вероятность вспышки Коронавируса в вашем районе"
                          }
                        },
                        "uid": "f29e4b1a46"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "אם אחרי הדיווח שלך נוכל לקבל דיווח גם עבור בני המשפחה או בני הבית האחרים, זה יעזור לנו מאוד",
                            "ar": "بعد أن تنتهي من تعبئة إستبيانتك يمكن لسكان بيتك أيضًا أن يقوموا بتعبئة إستبيانات لهم, سوف يساعدنا هذا كثيرًا  ",
                            "en": "If, after your report, we can have reports for the rest of your household, it would be very helpful",
                            "es": "Si, después de su informe, también podemos obtener un informe para su familia u otros miembros del hogar, será de gran ayuda para nosotros",
                            "fr": "Si après avoir rempli votre rapport, nous pouvons également obtenir un rapport pour votre famille ou d'autres membres de la maison, cela nous aidera beaucoup",
                            "ru": "Если после вашего отчета мы сможем получить ответы и от других членов семьи или жителей вашего дома, это нам очень поможет"
                          }
                        },
                        "uid": "7b5136625b"
                      }
                    ],
                    "uid": "5c21180fea"
                  }
                ]
              },
              "uid": "61e348b15f"
            }
          ],
          "uid": "ec80178184"
        },
        {
          "name": "reporting-loop",
          "steps": [
            {
              "do": {
                "cmd": "clear"
              },
              "uid": "1ae1bd84b2"
            },
            {
              "goto": "personal-details",
              "uid": "d4cbb25f4e"
            },
            {
              "goto": "preconditions-check",
              "uid": "df5de41a13"
            },
            {
              "goto": "covid19",
              "uid": "48accaa909"
            },
            {
              "goto": "hospitalization",
              "uid": "699a47659b"
            },
            {
              "goto": "insulation",
              "uid": "9def4af95e"
            },
            {
              "goto": "routine",
              "uid": "56cb1f9459"
            },
            {
              "goto": "current-report",
              "uid": "e42739825b"
            },
            {
              "goto": "exposures",
              "uid": "ba2f58e355"
            },
            {
              "do": {
                "cmd": "save_report",
                "params": [
                  "record"
                ]
              },
              "uid": "f6fc2d122c"
            },
            {
              "do": {
                "cmd": "clear_state"
              },
              "uid": "6344743efc"
            },
            {
              "say": {
                ".tx": {
                  "_": "מצויין, השלמנו את הדיווח היומי עבור {{alias}}",
                  "ar": "ممتاز, أنهينا تعبئة الإستبيان ل{{alias}}",
                  "en": "Excellent. We're done with the daily form for {{alias}}",
                  "es": "Listo, hemos finalizado el informe acerca de {{alias}}",
                  "fr": "Super, nous avons fini ce questionnaire pour {{alias}}",
                  "ru": "Отлично, закончили докладывать про {{alias}}"
                }
              },
              "uid": "3948da65c8"
            },
            {
              "goto": "reporting-loop",
              "uid": "7657ae7aeb"
            }
          ],
          "uid": "5002ab217a"
        },
        {
          "name": "personal-details",
          "steps": [
            {
              "do": {
                "cmd": "load_local_storage",
                "params": [
                  "record"
                ]
              },
              "uid": "3dd65136eb"
            },
            {
              "switch": {
                "arg": "_existing_user",
                "cases": [
                  {
                    "match": "new"
                  },
                  {
                    "match": "returning",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "עבור מי ברצונך לדווח עכשיו?",
                            "ar": "لمن تريد/ين تعبئة الإستبيان التالي؟",
                            "en": "Whose health would you like to report about next? ",
                            "es": "¿Sobre quién deseas informar ahora?",
                            "fr": "Pour qui souhaitez-vous remplir ce questionnaire maintenant ?",
                            "ru": "За кого вы хотите заполнить отчет?"
                          }
                        },
                        "uid": "4c16166fd3"
                      },
                      {
                        "do": {
                          "cmd": "fetch_previous_reports",
                          "params": [
                            {
                              ".tx": {
                                "_": "דיווח חדש ב{{street}} {{city_town}}",
                                "ar": "تعبئة إستبيان جديد ب {{street}} مدينة {{city_town}}",
                                "en": "a new report in {{street}}, in {{city_town}}",
                                "es": "Nuevo informe en {{street}} {{city_town}}",
                                "fr": "Nouveau rapport de {{street}} {{city_town}}",
                                "ru": "Новый отчёт, с улицы {{street}} в городе {{city_town}}"
                              }
                            },
                            {
                              ".tx": {
                                "_": "דיווח חדש בכתובת אחרת",
                                "ar": "إستبيان جديد بمكان سكن آخر",
                                "en": "New report for a different address",
                                "es": "Nuevo informe en otra dirección",
                                "fr": "Nouveau rapport pour une adresse différente",
                                "ru": "Новый отчёт по другому адресу"
                              }
                            },
                            {
                              ".tx": {
                                "_": "זהו להיום",
                                "ar": "إنتهينا لهذا اليوم",
                                "en": "That's it for today",
                                "es": "Es todo por hoy",
                                "fr": "C'est tout pour aujourd'hui",
                                "ru": "На сегодня у нас всё"
                              }
                            }
                          ],
                          "variable": "_report_options"
                        },
                        "uid": "7c2d53066c"
                      },
                      {
                        "uid": "ef57e0c78d",
                        "wait": {
                          "optionsFrom": "_report_options",
                          "variable": "_report_selection"
                        }
                      },
                      {
                        "do": {
                          "cmd": "update_from_selection",
                          "params": [
                            "record",
                            "_report_selection"
                          ]
                        },
                        "uid": "6b87cca59d"
                      }
                    ],
                    "uid": "8cc3349ed1"
                  }
                ]
              },
              "uid": "92054d1361"
            },
            {
              "switch": {
                "arg": "sex",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "בן? בת?",
                            "ar": "ذكر؟ أنثى؟",
                            "en": "Male? Female?",
                            "es": "¿Hombre? ¿Mujer?",
                            "fr": "Homme ? Femme ? ",
                            "ru": "Женщина или мужчина?"
                          }
                        },
                        "uid": "289a7b45d8"
                      },
                      {
                        "uid": "2a490b8fb3",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "בן",
                                  "ar": "ذكر",
                                  "en": "Male",
                                  "es": "Hombre",
                                  "fr": "Homme",
                                  "ru": "Мужчина"
                                }
                              },
                              "value": "male"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "בת",
                                  "ar": "أنثى",
                                  "en": "Female",
                                  "es": "Mujer",
                                  "fr": "Femme",
                                  "ru": "Женщина"
                                }
                              },
                              "value": "female"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "אחר",
                                  "ar": "آخر",
                                  "en": "other",
                                  "es": "Otro",
                                  "fr": "Autre",
                                  "ru": "Другое"
                                }
                              },
                              "value": "other"
                            }
                          ],
                          "variable": "sex"
                        }
                      }
                    ],
                    "uid": "b56d6cc89e",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "26ba900515"
            },
            {
              "switch": {
                "arg": "age",
                "cases": [
                  {
                    "steps": [
                      {
                        "switch": {
                          "arg": "sex",
                          "cases": [
                            {
                              "match": "male",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "בן כמה?",
                                      "ar": "عُمره؟",
                                      "en": "How many years old?",
                                      "es": "¿Cuántos años tienes?",
                                      "fr": "Votre âge ?",
                                      "ru": "Ваш возраст"
                                    }
                                  },
                                  "uid": "1fb50d3ac9"
                                }
                              ],
                              "uid": "afe829864e"
                            },
                            {
                              "match": "female",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "בת כמה?",
                                      "ar": "عمرها؟",
                                      "en": "How many years old?",
                                      "es": "¿Cuántos años tienes?",
                                      "fr": "Votre âge ?",
                                      "ru": "Ваш возраст"
                                    }
                                  },
                                  "uid": "c8e292635e"
                                }
                              ],
                              "uid": "708094b8ce"
                            },
                            {
                              "match": "other",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "מה הגיל שלך?",
                                      "ar": "ما هو عمرك؟",
                                      "en": "How old are you?",
                                      "es": "¿Cuál es tu edad?",
                                      "fr": "Quel âge avez-vous ?",
                                      "ru": "Сколько вам лет?"
                                    }
                                  },
                                  "uid": "bd3c405fc4"
                                }
                              ],
                              "uid": "24f1db4b45"
                            }
                          ]
                        },
                        "uid": "78d963404b"
                      },
                      {
                        "uid": "7d99d320f0",
                        "wait": {
                          "input-kind": "number",
                          "input-max": 120,
                          "input-min": 0,
                          "placeholder": {
                            ".tx": {
                              "_": "גיל, 0-120",
                              "ar": "جيل، 0-120",
                              "en": "Age, 0-120",
                              "es": "Edad, 0-120",
                              "fr": "Âge, 0-120",
                              "ru": "Возраст, 0-120"
                            }
                          },
                          "variable": "age"
                        }
                      }
                    ],
                    "uid": "63516f048e",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "7394293f03"
            },
            {
              "switch": {
                "arg": "city_town",
                "cases": [
                  {
                    "steps": [
                      {
                        "do": {
                          "cmd": "prepare_city_town_suggestions",
                          "variable": "_cityTownSuggestions"
                        },
                        "uid": "b9d21cf202"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "מה הוא מקום המגורים?",
                            "ar": "شو مكان السكن؟",
                            "en": "Where do you live?",
                            "es": "¿En dónde vives?",
                            "fr": "Votre lieu de résidence ?",
                            "ru": "Где вы проживаете?"
                          }
                        },
                        "uid": "4c0abfecc9"
                      },
                      {
                        "uid": "174bb25fa7",
                        "wait": {
                          "placeholder": {
                            ".tx": {
                              "_": "שם העיר או הישוב",
                              "ar": "إسم المدينة أو القرية",
                              "en": "Place of residence",
                              "es": "Nombre de la ciudad o la localidad",
                              "fr": "Nom de la ville ou de la localité",
                              "ru": "Название города или поселка"
                            }
                          },
                          "suggestionsFrom": "_cityTownSuggestions",
                          "variable": "city_town"
                        }
                      }
                    ],
                    "uid": "f23bac57b1",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "2ec0cb0fbb"
            },
            {
              "switch": {
                "arg": "street",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "שם הרחוב?",
                            "ar": "إسم الشارع؟",
                            "en": "Street name?",
                            "es": "¿En qué calle?",
                            "fr": "Nom de la rue ?",
                            "ru": "Название улицы?"
                          }
                        },
                        "uid": "2966b83d86"
                      },
                      {
                        "uid": "4fdca8e817",
                        "wait": {
                          "placeholder": {
                            ".tx": {
                              "_": "שם הרחוב, אם ידוע",
                              "ar": "إسم الشارع، إذا معروف",
                              "en": "Street name, if known",
                              "es": "Nombre de la calle, si se sabe",
                              "fr": "Nom de la rue, s'il est connu",
                              "ru": "Название улицы, если известно"
                            }
                          },
                          "required": false,
                          "variable": "street"
                        }
                      }
                    ],
                    "uid": "ced2bd1fc2",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "94b2b8dad7"
            },
            {
              "do": {
                "cmd": "ensure_uid",
                "params": [
                  "record"
                ]
              },
              "uid": "f691bd8fba"
            },
            {
              "switch": {
                "arg": "_location",
                "cases": [
                  {
                    "steps": [
                      {
                        "do": {
                          "cmd": "combine_location",
                          "params": [
                            "record",
                            "{{street}} {{city_town}}"
                          ],
                          "variable": "_location"
                        },
                        "uid": "7ff32c1e67"
                      }
                    ],
                    "uid": "dde5b2b5b2",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "7b7d509845"
            },
            {
              "switch": {
                "arg": "alias",
                "cases": [
                  {
                    "steps": [
                      {
                        "do": {
                          "cmd": "calculate_alias",
                          "params": [
                            "record",
                            {
                              ".tx": {
                                "_": "בן {{age}} מ{{_location}}",
                                "ar": "إبن ال {{age}} من{{_location}}",
                                "en": "{{age}} year old male from {{location}}",
                                "es": "Hombre {{age}} מ{{_location}}",
                                "fr": "{{age}} ans de {{_location}}",
                                "ru": "Мужчина, проживающий на  {{_location}}, возраст: {{age}}"
                              }
                            },
                            {
                              ".tx": {
                                "_": "בת {{age}} מ{{_location}}",
                                "ar": "إبنة ال {{age}} من{{_location}}",
                                "en": "{{age}} year old female from {{location}}",
                                "es": "Mujer {{age}} מ{{_location}}",
                                "fr": "{{age}} ans de {{_location}}",
                                "ru": "Женщина, проживающая на  {{_location}}, возраст: {{age}}"
                              }
                            },
                            {
                              ".tx": {
                                "_": "גיל {{age}} מ{{_location}}",
                                "ar": "العُمر {{age}} من{{_location}}",
                                "en": "{{age}} year old person from {{location}}",
                                "es": "Edad {{age}} מ{{_location}}",
                                "fr": "Âge {{age}} de {{_location}}",
                                "ru": "Возраст  {{age}}, адрес {{_location}}"
                              }
                            }
                          ],
                          "variable": "alias"
                        },
                        "uid": "78b65b0a08"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "נהדר, בכדי לשמור על הפרטיות שלך, בדיווחים הבאים נקרא לך פשוט {{alias}}",
                            "ar": "ممتاز, من أجل المحافظة على خصوصيتك, في المرات القادمة سوف نسميك {{alias}}",
                            "en": "Great. In the interest of privacy, in your following daily reports we'll address you as  {{alias}}",
                            "es": "Excelente, para preservar tu privacidad, en los próximos informes, te llamaremos simplemente  {{alias}}",
                            "fr": "Parfait, afin de protéger votre confidentialité, dans les prochains questionnaires, nous vous appellerons simplement {{alias}}",
                            "ru": "Отлично. Чтобы сохранить вашу конфиденциальность, в следующих отчётах мы просто вас будем называть {{alias}}"
                          }
                        },
                        "uid": "125852a6c1"
                      }
                    ],
                    "uid": "6286d82950",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "9037ffa441"
            },
            {
              "do": {
                "cmd": "is_adult",
                "params": [
                  "record"
                ],
                "variable": "_is_adult"
              },
              "uid": "4ce34285c3"
            },
            {
              "do": {
                "cmd": "is_old",
                "params": [
                  "record"
                ],
                "variable": "_is_old"
              },
              "uid": "c66ea28556"
            },
            {
              "do": {
                "cmd": "fetch_household_data",
                "params": [
                  "record"
                ]
              },
              "uid": "255af420b6"
            },
            {
              "switch": {
                "arg": "_household_data_available",
                "cases": [
                  {
                    "match": true
                  },
                  {
                    "default": true,
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "יש לנו כמה שאלות (שנשאל פעם אחת) לגבי הבית ב{{_location}} -",
                            "ar": "لدينا بعض الأسئلة (سوف نسألها مرة واحدة فقط) حول البيت في {{_location}} -",
                            "en": "We have some questions (which we will ask just once) about the house on  {{street}}, {{city_town}}",
                            "es": "Tenemos algunas preguntas (que formularemos una sola vez) sobre la vivienda en {{_location}} -",
                            "fr": "Nous avons quelques questions (que nous ne poserons qu'une seule fois) concernant la maison située {{_location}} -",
                            "ru": "У нас есть несколько вопросов (которые больше не будем повторять) о  доме на {{_location}}"
                          }
                        },
                        "uid": "e51b127ea6"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "כמה מבוגרים מעל לגיל 18 גרים בבית?",
                            "ar": "عدد الأشخاص البالغين فوق جيل ال 18 الذين يسكنون في البيت؟",
                            "en": "How many adults over 18 years old live in the house?",
                            "es": "¿Cuántas personas mayores de 18 años viven en la casa?",
                            "fr": "Combien d'adultes de plus de 18 ans vivent dans le foyer ?",
                            "ru": "Сколько взрослых старше 18 лет живут в доме?"
                          }
                        },
                        "uid": "ddaadab144"
                      },
                      {
                        "switch": {
                          "arg": "_is_adult",
                          "cases": [
                            {
                              "match": true,
                              "steps": [
                                {
                                  "uid": "0f0ab944cf",
                                  "wait": {
                                    "input-kind": "number",
                                    "input-max": 99,
                                    "input-min": 1,
                                    "placeholder": {
                                      ".tx": {
                                        "_": "מספר המבוגרים ,1-99",
                                        "ar": " عدد الأشخاص البالغين, 1-99",
                                        "en": "Number of adults, 1-99",
                                        "es": "Cantidad de adultos, 1-99",
                                        "fr": "Nombre d'adultes, 1-99",
                                        "ru": "Количество взрослых, 1-99"
                                      }
                                    },
                                    "validation": "[0-9]+",
                                    "variable": "_household_adults"
                                  }
                                }
                              ],
                              "uid": "964835528e"
                            },
                            {
                              "match": false,
                              "steps": [
                                {
                                  "uid": "d073832592",
                                  "wait": {
                                    "input-kind": "number",
                                    "input-max": 99,
                                    "input-min": 0,
                                    "placeholder": {
                                      ".tx": {
                                        "_": "מספר המבוגרים ,0-99",
                                        "ar": "عدد الأشخاص البالغين, 0-99",
                                        "en": "Number of adults, 0-99",
                                        "es": "Cantidad de adultos, 0-99",
                                        "fr": "Nombre d'adultes, 0-99",
                                        "ru": "Количество взрослых, 0-99"
                                      }
                                    },
                                    "validation": "[0-9]+",
                                    "variable": "_household_adults"
                                  }
                                }
                              ],
                              "uid": "e7554e1f63"
                            }
                          ]
                        },
                        "uid": "6aa687cb41"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "וכמה ילדים מתחת לגיל 18?",
                            "ar": "وكم عدد الأطفال تحت جيل 18؟",
                            "en": "And how many children under 18?",
                            "es": "¿ y cuántos menores de 18 años?",
                            "fr": "Et combien d'enfants de moins de 18 ans ?",
                            "ru": "А сколько детей до 18 лет?"
                          }
                        },
                        "uid": "d8a5d22932"
                      },
                      {
                        "switch": {
                          "arg": "_is_adult",
                          "cases": [
                            {
                              "match": true,
                              "steps": [
                                {
                                  "uid": "e6dca8ba8c",
                                  "wait": {
                                    "input-kind": "number",
                                    "input-max": 99,
                                    "input-min": 0,
                                    "placeholder": {
                                      ".tx": {
                                        "_": "מספר הילדים, 0-99",
                                        "ar": "عدد الأطفال, 0-99",
                                        "en": "Number of children, 0-99",
                                        "es": "Cantidad de niños, 0-99",
                                        "fr": "Nombre d'enfants, 0-99",
                                        "ru": "Количество детей, 0-99"
                                      }
                                    },
                                    "validation": "[0-9]+",
                                    "variable": "_household_minors"
                                  }
                                }
                              ],
                              "uid": "f14282832c"
                            },
                            {
                              "match": false,
                              "steps": [
                                {
                                  "uid": "4c8324ae32",
                                  "wait": {
                                    "input-kind": "number",
                                    "input-max": 99,
                                    "input-min": 1,
                                    "placeholder": {
                                      ".tx": {
                                        "_": "מספר הילדים, 1-99",
                                        "ar": "عدد الأطفال, 1-99",
                                        "en": "Number of children, 1-99",
                                        "es": "Cantidad de niños, 1-99",
                                        "fr": "Nombre d'enfants, 1-99",
                                        "ru": "Количество детей, 1-99"
                                      }
                                    },
                                    "validation": "[0-9]+",
                                    "variable": "_household_minors"
                                  }
                                }
                              ],
                              "uid": "0f0e773867"
                            }
                          ]
                        },
                        "uid": "20a02ef3e2"
                      }
                    ],
                    "uid": "e52be7b791"
                  }
                ]
              },
              "uid": "7b08de84ce"
            },
            {
              "switch": {
                "arg": "_is_old",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "switch": {
                          "arg": "is_assisted_living",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "האם מקום המגורים הנוכחי שלך הוא דיור מוגן או בית אבות?",
                                      "ar": "هل مكان سكنك الحالي هو مسكن للرعاية أو بيت للمُسنين؟",
                                      "en": "Do you currently live in an assisted living complex or an old age home?",
                                      "es": "¿Es su residencia actual una vivienda protegida o un hogar de ancianos?",
                                      "fr": "Votre résidence actuelle est-elle une maison de retraite ?",
                                      "ru": "Живёте ли вы сейчас в доме для престарелых?"
                                    }
                                  },
                                  "uid": "4d9857d5eb"
                                },
                                {
                                  "uid": "8ee414573b",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "כן, דיור מוגן או בית אבות",
                                            "ar": "نعم, مسكن للرعاية أو بيت للمُسنين",
                                            "en": "Yes, an assisted living complex or an old age home",
                                            "es": "Si, una vivienda protegida o un hogar de ancianos",
                                            "fr": "Oui, c'est une maison de retraite ",
                                            "ru": "Да, в доме для престарелых"
                                          }
                                        },
                                        "value": true
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "לא",
                                            "ar": "لا",
                                            "en": "No",
                                            "es": "No",
                                            "fr": "Non",
                                            "ru": "Нет"
                                          }
                                        },
                                        "value": false
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "לא רוצה להשיב",
                                            "ar": "لا أريد الإجابة",
                                            "en": "I prefer not to answer",
                                            "es": "No quiero responder",
                                            "fr": "Je ne veux pas répondre",
                                            "ru": "Я не хочу отвечать на этот вопрос"
                                          }
                                        },
                                        "value": "no_response"
                                      }
                                    ],
                                    "variable": "is_assisted_living"
                                  }
                                }
                              ],
                              "uid": "ee97af0f30",
                              "undefined": true
                            }
                          ]
                        },
                        "uid": "ad41aeabb6"
                      }
                    ],
                    "uid": "605c43beb6"
                  }
                ]
              },
              "uid": "4158ebe000"
            },
            {
              "switch": {
                "arg": "_is_adult",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": false,
                    "steps": [
                      {
                        "switch": {
                          "arg": "school_name",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "אם הנך לומד בבית-ספר או מוסד חינוכי אחר, מה שמו?",
                                      "ar": "إذا كنت طالب/ة في المدرسة او في مؤسسة تعليمية أخرى, فما هو إسمها؟",
                                      "en": "If you are studying at a school or other education institution, what is its name?",
                                      "es": "Si asiste a una escuela u otra institución educativa, ¿cómo se llama?",
                                      "fr": "Si vous fréquentez une école ou un autre établissement d'enseignement, quel est son nom ?",
                                      "ru": "Если вы учитесь в школе или другом учебном заведении, как оно называется?"
                                    }
                                  },
                                  "uid": "134c074a20"
                                },
                                {
                                  "uid": "6f0065690c",
                                  "wait": {
                                    "placeholder": {
                                      ".tx": {
                                        "_": "שם המוסד החינוכי",
                                        "ar": "إسم المؤسسة التعليمية",
                                        "en": "Name of the education institution",
                                        "es": "El nombre de la institución educativa",
                                        "fr": "Le nom de l'établissement d'enseignement",
                                        "ru": "Название учебного заведения"
                                      }
                                    },
                                    "required": false,
                                    "variable": "school_name"
                                  }
                                }
                              ],
                              "uid": "b87805209c",
                              "undefined": true
                            }
                          ]
                        },
                        "uid": "c4dfcc9e26"
                      }
                    ],
                    "uid": "aab04298d2"
                  }
                ]
              },
              "uid": "19c9f82474"
            }
          ],
          "uid": "ab5b28894d"
        },
        {
          "name": "preconditions-check",
          "steps": [
            {
              "switch": {
                "arg": "preconditions_received",
                "cases": [
                  {
                    "steps": [
                      {
                        "goto": "preconditions",
                        "uid": "2ee9cfe009"
                      }
                    ],
                    "uid": "b5f4a25217",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "be6509b6cd"
            }
          ],
          "uid": "7aebde456b"
        },
        {
          "name": "preconditions",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "אשאל אותך על מחלות, שחשוב לנו לדעת אם אובחנו אצלך בעבר או שיש לך כיום:",
                  "ar": "بدي أسألك عن أمراض, اللي مهم لإلنا نعرف إذا تم تشخيصك بأي منها الآن أو في السابق:",
                  "en": "I'm going to ask about diseases, it's important to know whether you were diagnosed with them in the past and/or you are suffering from them now:",
                  "es": "Te preguntaré sobre algunas enfermedades, que es importante que sepamos si te las han diagnosticado en el pasado:",
                  "fr": "Je vais vous poser des questions sur différentes maladies, et il est important pour nous de savoir si vous avez été diagnostiqué dans le passé ou si vous en souffrez aujourd'hui:",
                  "ru": "Мы бы хотели задать вопрос о болезнях, которые были у вас диагностированы, в прошлом или в настоящем:"
                }
              },
              "uid": "6861e5ea76"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "2e29f0c171"
            },
            {
              "goto": "preconditions-smoking",
              "uid": "c3bd210c40"
            },
            {
              "do": {
                "cmd": "set_flag",
                "params": [
                  "record",
                  "preconditions_received"
                ]
              },
              "uid": "8159f08bcb"
            },
            {
              "say": {
                ".tx": {
                  "_": "אוקיי, עברנו את זה…",
                  "ar": "أوكي, مرقنا..",
                  "en": "OK, we're done with that...",
                  "es": "OK, lo pasamos... ",
                  "fr": "D'accord, nous en avons fini avec ça...",
                  "ru": "Так, это мы прошли..."
                }
              },
              "uid": "d5409965b6"
            }
          ],
          "uid": "d96a2bfad6"
        },
        {
          "name": "preconditions-diseases",
          "steps": [
            {
              "uid": "8188eb0451",
              "wait": {
                "multi": true,
                "options": [
                  {
                    "field": "precondition_chronic_diabetes",
                    "show": {
                      ".tx": {
                        "_": "סוכרת",
                        "ar": "سُكري",
                        "en": "Diabetes",
                        "es": "Diabetes",
                        "fr": "Diabète",
                        "ru": "Диабет"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_hypertension",
                    "show": {
                      ".tx": {
                        "_": "בעיית יתר לחץ דם",
                        "ar": "أعاني من ضغط دم عالي",
                        "en": "Hypertension",
                        "es": "Hipertensión arterial",
                        "fr": "Problème d'hypertension",
                        "ru": "Высокое давление"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_ischemic_heart_disease_or_stroke",
                    "show": {
                      ".tx": {
                        "_": "מחלת לב, כלי דם או שבץ",
                        "ar": "أمراض قلب, أوعية دموية أو جلطة",
                        "en": "Coronary artery disease, stroke or Cardiovascular disease",
                        "es": "Enfermedades del corazón, vasos sanguíneos o derrames cerebrales",
                        "fr": "Maladie cardiaque, artérielle ou AVC",
                        "ru": "Сердечно-сосудистое заболевание или инсульт"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_lung_disease",
                    "show": {
                      ".tx": {
                        "_": "מחלת ריאות כרונית כולל אסתמה (ללא אסתמה בילדות)",
                        "ar": "مرض مُزمن بالرئات يشمل ربو - Asthma (بإستثناء ربو بالطفولة) ",
                        "en": "Chronic pulmonary disease including asthma (not including childhood asthma)",
                        "es": "Enfermedad pulmonar crónica incluyendo asma (sin asma en la infancia)",
                        "fr": "Maladie pulmonaire chronique, y compris l'asthme (sans asthme infantile)",
                        "ru": "Хроническая болезнь легких, включая астму (но не детскую астму)"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_cancer",
                    "show": {
                      ".tx": {
                        "_": "סרטן",
                        "ar": "سرطان",
                        "en": "Cancer",
                        "es": "Cáncer",
                        "fr": "Cancer",
                        "ru": "Рак"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_kidney_failure",
                    "show": {
                      ".tx": {
                        "_": "אי ספיקת כליות",
                        "ar": "قصور كلوي",
                        "en": "Renal failure",
                        "es": "Insuficiencia renal",
                        "fr": "Insuffisance rénale",
                        "ru": "Почечная недостаточность"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_immune_system_suppression",
                    "show": {
                      ".tx": {
                        "_": "דיכוי חיסוני לרבות נטילת תרופות המדכאות את מערכת החיסון",
                        "ar": "نقص بالمناعة يشمل إستخدام أدوية التي تُضعف جهاز المناعة",
                        "en": "Immunosupression, including taking immunosuppressant drugs",
                        "es": "Inmunosupresión incluyendo el consumo de remedios que inhiben el sistema inmunológico",
                        "fr": "Immunodéficience, y compris la prise de médicaments immunosupresseurs",
                        "ru": "Иммуносупрессия, включая прием лекарств, подавляющих иммунную систему"
                      }
                    }
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "<span class='empty'>אף אחת ממחלות הרקע הללו</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>ללא מחלות רקע</span>",
                        "ar": "<span class='empty'>ولا أي واحد من هاي الأمراض</span>\n<span class='not-empty'>بس </span>\n<span class='none-selected'>لا يوجد أمراض</span>",
                        "en": "<span class='empty'>None of these diseases</span>\n<span class='not-empty'>That's it</span>\n<span class='none-selected'>None of these diseases</span>",
                        "es": "<span class='empty'>Ninguna de estas enfermedades</span>\n<span class='not-empty'>Eso es todo</span>\n<span class='none-selected'>No hay enfermedades previas</span>",
                        "fr": "<span class='empty'>Aucun des ces antécédents médicaux</span>\n<span class='not-empty'>C'est tout</span>\n<span class='none-selected'>Pas d'antécédents médicaux </span>",
                        "ru": "<span class='empty'>Ни одного из этих фоновых заболеваний</span>\n<span class='not-empty'>Всё</span>\n<span class='none-selected'>Нет фоновых заболеваний</span>"
                      }
                    }
                  }
                ],
                "variable": "_var"
              }
            },
            {
              "do": {
                "cmd": "update_from_selection",
                "params": [
                  "record",
                  "_var"
                ]
              },
              "uid": "d9eddffe93"
            }
          ],
          "uid": "56dc1eb702"
        },
        {
          "name": "preconditions-smoking",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "מה לגבי עישון?",
                  "ar": "شو مع التدخين؟",
                  "en": "How about smoking?",
                  "es": "¿Qué podemos decir sobre el fumar?",
                  "fr": "Fumez-vous ?",
                  "ru": "Как насчет курения?"
                }
              },
              "uid": "92a9456fa5"
            },
            {
              "uid": "cfb125483f",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "עישון יומיומי",
                        "ar": "تدخين بشكل يومي",
                        "en": "I smoke daily",
                        "es": "Fumo diariamente",
                        "fr": "Je fume quotidiennement ",
                        "ru": "ежедневное курение"
                      }
                    },
                    "value": "daily_smoker"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "עישנתי בעבר, הפסקתי לפני פחות מחמש שנים",
                        "ar": "دخنت في السابق, توقفت قبل أقل من خمس سنوات",
                        "en": "I smoked in the past, stopped less than 5 years ago",
                        "es": "Fumé en el pasado, dejé hace menos de cinco años",
                        "fr": "J'ai fumé dans le passé, j'ai arrêté il y a moins de cinq ans",
                        "ru": "Я курил/а раньше, бросил/а менее пяти лет назад"
                      }
                    },
                    "value": "short_past_smoker"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "עישנתי בעבר, לפני יותר מחמש שנים",
                        "ar": "دخنت في السابق, قبل أكثر من خمس سنوات",
                        "en": "I smoked in the past, more than 5 years ago",
                        "es": "Fumé en el pasado, hace más de cinco años",
                        "fr": "J'ai fumé dans le passé, il y a plus de cinq ans",
                        "ru": "Я курил/а раньше, бросил/а более пяти лет назад"
                      }
                    },
                    "value": "long_past_smoker"
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "אף פעם",
                        "ar": "ولا مرة",
                        "en": "Never",
                        "es": "Nunca",
                        "fr": "Jamais",
                        "ru": "Никогда"
                      }
                    },
                    "value": "never"
                  }
                ],
                "variable": "precondition_smoking"
              }
            }
          ],
          "uid": "397469aff5"
        },
        {
          "name": "covid19",
          "steps": [
            {
              "switch": {
                "arg": "covid_positive",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם אובחנת בעבר כחולה בקורונה בבדיקת PCR?",
                            "ar": "هل تم تشخيصك في السابق كمريض/ة كورونا بواسطة فحص PCR؟",
                            "en": "Have you been diagnosed as having Covid-19 by a PCR test?",
                            "es": "¿Le han diagnosticado previamente corona en una prueba de PCR?",
                            "fr": "Avez-vous déjà été diagnostiqué du Coronavirus lors d'un test PCR ?",
                            "ru": "Был ли вам когда-либо поставлен диагноз Коронавирус на основании проверки PCR?"
                          }
                        },
                        "uid": "afed2c5692"
                      },
                      {
                        "uid": "cb7f37c71c",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן",
                                  "ar": "نعم",
                                  "en": "Yes",
                                  "es": "Sí",
                                  "fr": "Oui",
                                  "ru": "Да"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "מתי קיבלת את האבחנה החיובית?",
                                      "ar": "متى حصلت على تشخيص إيجابي؟ ",
                                      "en": "When did you get the positive diagnosis?",
                                      "es": "¿Cuándo recibiste el diagnóstico positivo?",
                                      "fr": "Quand avez-vous reçu le diagnostic positif ?",
                                      "ru": "Когда вы получили положительный диагноз?"
                                    }
                                  },
                                  "uid": "7f16a232ed"
                                },
                                {
                                  "uid": "186a59dd63",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "covid_last_positive_results_date"
                                  }
                                }
                              ],
                              "uid": "f96a32d4e9",
                              "value": "true"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, אבל החלמתי מאז",
                                  "ar": "نعم, شُفيت منذ ذلك الوقت",
                                  "en": "Yes, but I have recovered since then",
                                  "es": "Sí, pero desde entonces me he recuperado",
                                  "fr": "Oui, mais j'ai récupéré depuis",
                                  "ru": "Да, но с тех пор я выздоровел/а"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "מתי קיבלת את האבחנה החיובית?",
                                      "ar": "متى حصلت على تشخيص إيجابي؟ ",
                                      "en": "When did you get the positive diagnosis?",
                                      "es": "¿Cuándo recibiste el diagnóstico positivo?",
                                      "fr": "Quand avez-vous reçu le diagnostic positif ?",
                                      "ru": "Когда вы получили положительный диагноз?"
                                    }
                                  },
                                  "uid": "dc15929ad5"
                                },
                                {
                                  "uid": "778f5bcb78",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "covid_last_positive_results_date"
                                  }
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "האם ביצעת מאז בדיקה נוספת שמסקנתה היתה שאין לך קורונה?",
                                      "ar": "هل قُمت بعمل فحص إضافي الذي كانت نتيجته أنه ليس لديك كورونا؟",
                                      "en": "Have you tested negative for Covid-19 since then?",
                                      "es": "¿Desde entonces se ha hecho alguna prueba que resulte negativa, libre de corona?",
                                      "fr": "Avez-vous déjà fait un autre test qui a conclu que vous n'aviez pas le Coronavirus ?",
                                      "ru": "Прошли ли вы с тех пор еще один тест, который установил, что у вас нет Коронавируса?"
                                    }
                                  },
                                  "uid": "fde532d03f"
                                },
                                {
                                  "uid": "a92cc69ed3",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "כן",
                                            "ar": "نعم",
                                            "en": "Yes",
                                            "es": "Sí",
                                            "fr": "Oui",
                                            "ru": "Да"
                                          }
                                        },
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "מתי זה היה?",
                                                "ar": "متى حدث هذا؟",
                                                "en": "When was it?",
                                                "es": "¿Cuándo fue?",
                                                "fr": "Quand était-ce ?",
                                                "ru": "Когда это было?"
                                              }
                                            },
                                            "uid": "162650d6c6"
                                          },
                                          {
                                            "uid": "be993dc128",
                                            "wait": {
                                              "input-kind": "date",
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "תאריך: dd/mm/yy",
                                                  "ar": "تاريخ: dd/mm/yy",
                                                  "en": "date: dd/mm/yy",
                                                  "es": "Fecha: dd.mm.aa",
                                                  "fr": "Date: dd/mm/yy",
                                                  "ru": "Число: dd/mm/yy"
                                                }
                                              },
                                              "variable": "covid_last_negative_results_date"
                                            }
                                          }
                                        ],
                                        "uid": "eab855794d"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "לא",
                                            "ar": "لا",
                                            "en": "No",
                                            "es": "No",
                                            "fr": "Non",
                                            "ru": "Нет"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              ],
                              "uid": "fde9aea827",
                              "value": "recovered"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא",
                                  "ar": "لا",
                                  "en": "No",
                                  "es": "No",
                                  "fr": "Non",
                                  "ru": "Нет"
                                }
                              },
                              "value": "no"
                            }
                          ],
                          "variable": "covid_positive"
                        }
                      }
                    ],
                    "uid": "3e59138098",
                    "undefined": true
                  },
                  {
                    "default": true,
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם אובחנת מאז הדיווח האחרון כחולה בקורונה בבדיקת PCR?",
                            "ar": "هل تم تأكيد إصابتك بالكورونا منذ الإستبيان الأخير بواسطة فحص PCR؟",
                            "en": "Have you been diagnosed as having Covid-19 by a PCR test since then?",
                            "es": "¿Le han diagnosticado Corona por medio de la prueba de PCR desde el último informe?",
                            "fr": "Avez-vous déjà été diagnostiqué du Coronavirus lors d'un test PCR depuis votre dernier rapport ?",
                            "ru": "Был ли вам с момента последнего отчёта поставлен диагноз Коронавирус на основании проверки PCR?"
                          }
                        },
                        "uid": "ccd52a84a3"
                      },
                      {
                        "switch": {
                          "arg": "covid_positive",
                          "cases": [
                            {
                              "match": true,
                              "steps": [
                                {
                                  "uid": "57bcfe2aba",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני עדיין חולה",
                                            "ar": "ما زلتُ مريض/ة",
                                            "en": "I am still ill",
                                            "es": "Sigo enfermo",
                                            "fr": "Je suis toujours malade",
                                            "ru": "Я ещё болею"
                                          }
                                        },
                                        "value": "true"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "ביצעתי בדיקה אבל קיבלתי תוצאה שלילית",
                                            "ar": "قمتُ بعمل فحص لكنني حصلت على نتيجة سلبية ",
                                            "en": "I was tested but got a negative result",
                                            "es": "Hice una prueba pero obtuve un resultado negativo",
                                            "fr": "J'ai fait un test mais j'ai obtenu un résultat négatif",
                                            "ru": "Я проходил/а тест, но результат был отрицательным"
                                          }
                                        },
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "מתי זה היה?",
                                                "ar": "متى حدث هذا؟",
                                                "en": "When was it?",
                                                "es": "¿Cuándo fue?",
                                                "fr": "Quand était-ce ?",
                                                "ru": "Когда это было?"
                                              }
                                            },
                                            "uid": "cfcf3745a1"
                                          },
                                          {
                                            "uid": "e2675f76bd",
                                            "wait": {
                                              "input-kind": "date",
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "תאריך: dd/mm/yy",
                                                  "ar": "تاريخ: dd/mm/yy",
                                                  "en": "date: dd/mm/yy",
                                                  "es": "Fecha: dd.mm.aa",
                                                  "fr": "Date: dd/mm/yy",
                                                  "ru": "Число: dd/mm/yy"
                                                }
                                              },
                                              "variable": "covid_last_negative_results_date"
                                            }
                                          }
                                        ],
                                        "uid": "90784e51f9",
                                        "value": "false"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "לא, אבל החלמתי מהקורונה",
                                            "ar": "لا, لكن شُفيت من الكورونا",
                                            "en": "No, but I have recovered from Covid-19",
                                            "es": "No, pero me recuperé del coronavirus",
                                            "fr": "Non, mais j'ai récupéré du Coronavirus",
                                            "ru": "Нет, но я выздоровел/а от Коронавируса"
                                          }
                                        },
                                        "value": "cured"
                                      }
                                    ],
                                    "variable": "covid_positive"
                                  }
                                }
                              ],
                              "uid": "3748e2a8b9"
                            },
                            {
                              "match": false,
                              "steps": [
                                {
                                  "uid": "d4102460ea",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "כן",
                                            "ar": "نعم",
                                            "en": "Yes",
                                            "es": "Sí",
                                            "fr": "Oui",
                                            "ru": "Да"
                                          }
                                        },
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "מתי זה היה?",
                                                "ar": "متى حدث هذا؟",
                                                "en": "When was it?",
                                                "es": "¿Cuándo fue?",
                                                "fr": "Quand était-ce ?",
                                                "ru": "Когда это было?"
                                              }
                                            },
                                            "uid": "263b1d0512"
                                          },
                                          {
                                            "uid": "2e49546db7",
                                            "wait": {
                                              "input-kind": "date",
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "תאריך: dd/mm/yy",
                                                  "ar": "تاريخ: dd/mm/yy",
                                                  "en": "date: dd/mm/yy",
                                                  "es": "Fecha: dd.mm.aa",
                                                  "fr": "Date: dd/mm/yy",
                                                  "ru": "Число: dd/mm/yy"
                                                }
                                              },
                                              "variable": "covid_last_positive_results_date"
                                            }
                                          }
                                        ],
                                        "uid": "0a37f98e04",
                                        "value": "true"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "ביצעתי בדיקה אבל קיבלתי תוצאה שלילית",
                                            "ar": "قمتُ بعمل فحص لكنني حصلت على نتيجة سلبية ",
                                            "en": "I was tested but got a negative result",
                                            "es": "Hice una prueba pero obtuve un resultado negativo",
                                            "fr": "J'ai fait un test mais j'ai obtenu un résultat négatif",
                                            "ru": "Я проходил/а тест, но результат был отрицательным"
                                          }
                                        },
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "מתי זה היה?",
                                                "ar": "متى حدث هذا؟",
                                                "en": "When was it?",
                                                "es": "¿Cuándo fue?",
                                                "fr": "Quand était-ce ?",
                                                "ru": "Когда это было?"
                                              }
                                            },
                                            "uid": "8d96ca7c1f"
                                          },
                                          {
                                            "uid": "bdc6d68cf5",
                                            "wait": {
                                              "input-kind": "date",
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "תאריך: dd/mm/yy",
                                                  "ar": "تاريخ: dd/mm/yy",
                                                  "en": "date: dd/mm/yy",
                                                  "es": "Fecha: dd.mm.aa",
                                                  "fr": "Date: dd/mm/yy",
                                                  "ru": "Число: dd/mm/yy"
                                                }
                                              },
                                              "variable": "covid_last_negative_results_date"
                                            }
                                          }
                                        ],
                                        "uid": "46efe783a6",
                                        "value": "false"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "לא",
                                            "ar": "لا",
                                            "en": "No",
                                            "es": "No",
                                            "fr": "Non",
                                            "ru": "Нет"
                                          }
                                        },
                                        "value": "no"
                                      }
                                    ],
                                    "variable": "covid_positive"
                                  }
                                }
                              ],
                              "uid": "5669c8e20a"
                            }
                          ]
                        },
                        "uid": "adaab064f9"
                      }
                    ],
                    "uid": "bec5c4118d"
                  }
                ]
              },
              "uid": "d6339f32f9"
            },
            {
              "switch": {
                "arg": "covid_positive",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": "recovered",
                    "steps": [
                      {
                        "goto": "hospitalization-inner",
                        "uid": "a9651d96ae"
                      }
                    ],
                    "uid": "e8a068b74a"
                  }
                ]
              },
              "uid": "7576482a5e"
            },
            {
              "do": {
                "cmd": "handle_no_covid",
                "params": [
                  "record"
                ]
              },
              "uid": "84770c63ba"
            }
          ],
          "uid": "d3778ec033"
        },
        {
          "name": "hospitalization",
          "steps": [
            {
              "switch": {
                "arg": "covid_positive",
                "cases": [
                  {
                    "match": true
                  },
                  {
                    "default": true,
                    "steps": [
                      {
                        "pop": "reporting-loop",
                        "uid": "1098090dde"
                      }
                    ],
                    "uid": "e7b30373e7"
                  }
                ]
              },
              "uid": "c1e5ed37d3"
            },
            {
              "goto": "hospitalization-inner",
              "uid": "607cfa6db5"
            }
          ],
          "uid": "df0c56957f"
        },
        {
          "name": "hospitalization-inner",
          "steps": [
            {
              "switch": {
                "arg": "hospitalization_status",
                "cases": [
                  {
                    "match": true,
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם אתם עדיין באשפוז?",
                            "ar": "هل ما زلت تتعالج/ين في المستشفى؟",
                            "en": "Are you still hospitalized?",
                            "es": "¿Sigues en el hospital?",
                            "fr": "Êtes-vous toujours à l'hôpital?",
                            "ru": "Вы еще госпитализированы?"
                          }
                        },
                        "uid": "d0542cea27"
                      },
                      {
                        "uid": "6be11f7012",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, אני עדיין באשפוז",
                                  "ar": "نعم, ما زلت أتعالج في المستشفى",
                                  "en": "Yes, I am still hospitalized",
                                  "es": "Si, todavia estoy en el hospital",
                                  "fr": "Oui, je suis toujours à l'hôpital",
                                  "ru": "Да, я все ещё госпитализирован/а"
                                }
                              },
                              "value": "true"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא, כבר שוחררתי",
                                  "ar": "لا, لقد تم إرسالي إلى المنزل",
                                  "en": "No, I have been released",
                                  "es": "No, ya me dieron de alta",
                                  "fr": "Non, j'ai déjà été libéré",
                                  "ru": "Нет, меня уже выписали"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "מתי השתחררת?",
                                      "ar": "متى تم إرسالك إلى المنزل؟",
                                      "en": "When were you released?",
                                      "es": "¿Cuándo te dieron de alta del hospital?",
                                      "fr": "Quand avez vous été libéré ?",
                                      "ru": "Когда вас выписали?"
                                    }
                                  },
                                  "uid": "e4dc5c328f"
                                },
                                {
                                  "uid": "6426ae3f34",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "hospitalization_end_date"
                                  }
                                },
                                {
                                  "goto": "hospitalization_icu",
                                  "uid": "6f959be3c3"
                                }
                              ],
                              "uid": "0072e76b59",
                              "value": "false"
                            }
                          ],
                          "variable": "hospitalization_status"
                        }
                      }
                    ],
                    "uid": "9010f2485c"
                  },
                  {
                    "match": false,
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם מאז הדיווח האחרון התאשפזת?",
                            "ar": "هل تم نقلك للعلاج في المستشفى منذ الإستبيان الأخير؟",
                            "en": "Have you been hospitalized since your last report?",
                            "es": "¿Ha sido hospitalizado desde el último informe?",
                            "fr": "Avez-vous été hospitalisé depuis le dernier rapport ?",
                            "ru": "Были ли вы госпитализированы с момента вашего последнего отчёта?"
                          }
                        },
                        "uid": "f43046c98a"
                      },
                      {
                        "uid": "90b30474fa",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, אני באשפוז",
                                  "ar": "نعم, أنا أتعالج في المستشفى",
                                  "en": "Yes, I am hospitalized",
                                  "es": "Si, estoy en el hospital",
                                  "fr": "Oui, je suis à l'hôpital",
                                  "ru": "Да, я госпитализирован/а"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "מתי התחיל האשפוז?",
                                      "ar": "متى بدأ العلاج في المستشفى؟",
                                      "en": "When did your hospitalization start?",
                                      "es": "¿Cuándo te hospitalizaron?",
                                      "fr": "Depuis quand êtes vous a l'hôpital ?",
                                      "ru": "Когда вас госпитализировали?"
                                    }
                                  },
                                  "uid": "34a8cd2274"
                                },
                                {
                                  "uid": "cecfe17e4e",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "hospitalization_start_date"
                                  }
                                }
                              ],
                              "uid": "6cd50bc0e3",
                              "value": "true"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, אבל כבר שוחררתי",
                                  "ar": "نعم, لكن تم إرسالي إلى المنزل",
                                  "en": "Yes, but I was released already",
                                  "es": "Sí, pero ya me dieron de alta ",
                                  "fr": "Oui, mais j'ai déjà été libéré",
                                  "ru": "Да, но меня уже выписали"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "מתי התחיל האשפוז?",
                                      "ar": "متى بدأ العلاج في المستشفى؟",
                                      "en": "When did your hospitalization start?",
                                      "es": "¿Cuándo te hospitalizaron?",
                                      "fr": "Depuis quand êtes vous a l'hôpital ?",
                                      "ru": "Когда вас госпитализировали?"
                                    }
                                  },
                                  "uid": "048d7528c3"
                                },
                                {
                                  "uid": "29fa112ecd",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "hospitalization_start_date"
                                  }
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "ומתי השתחחרת?",
                                      "ar": "ومتى تم إرسالك إلى المنزل؟",
                                      "en": "And when were you released?",
                                      "es": "¿Y cuándo te dieron de alta?",
                                      "fr": "Et quand avez vous été libéré ?",
                                      "ru": "А когда вас выписали?"
                                    }
                                  },
                                  "uid": "3a81fc34c3"
                                },
                                {
                                  "uid": "21b7615f05",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "hospitalization_end_date"
                                  }
                                },
                                {
                                  "goto": "hospitalization_icu",
                                  "uid": "2e4e0b328b"
                                }
                              ],
                              "uid": "7f275d3929",
                              "value": "false"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא",
                                  "ar": "لا",
                                  "en": "No",
                                  "es": "No",
                                  "fr": "Non",
                                  "ru": "Нет"
                                }
                              },
                              "value": "no"
                            }
                          ],
                          "variable": "hospitalization_status"
                        }
                      }
                    ],
                    "uid": "7686fb49f2"
                  },
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם בעקבות זאת נזקקת לאשפוז?",
                            "ar": "هل احتجت بعد ذلك لدخول المستشفى؟ ",
                            "en": "Did you require hospitalization?",
                            "es": "¿Posteriormente necesitó hospitalización?",
                            "fr": "Avez-vous par la suite eu besoin d'une hospitalisation ?",
                            "ru": "Были ли вы госпитализированы из-за этого?"
                          }
                        },
                        "uid": "92087271f7"
                      },
                      {
                        "uid": "89e804d4df",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, אני באשפוז כרגע",
                                  "ar": "نعم, أنا أتعالج في المستشفى الآن",
                                  "en": "Yes, I am currently hospitalized",
                                  "es": "Si, estoy en el hospital",
                                  "fr": "Oui, je suis à l'hôpital en ce moment même",
                                  "ru": "Да, я сейчас госпитализирован/а"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "מתי התחיל האשפוז?",
                                      "ar": "متى بدأ العلاج في المستشفى؟",
                                      "en": "When did your hospitalization start?",
                                      "es": "¿Cuándo te hospitalizaron?",
                                      "fr": "Depuis quand êtes vous a l'hôpital ?",
                                      "ru": "Когда вас госпитализировали?"
                                    }
                                  },
                                  "uid": "dfc713d6da"
                                },
                                {
                                  "uid": "c86aba61e8",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "hospitalization_start_date"
                                  }
                                }
                              ],
                              "uid": "7bde3d7e47",
                              "value": "true"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, וכבר שוחררתי",
                                  "ar": "نعم, ولقد تم إرسالي إلى المنزل",
                                  "en": "Yes, and I have been released already",
                                  "es": "Sí, y ya me dieron de alta ",
                                  "fr": "Oui, et j'ai déjà été libéré",
                                  "ru": "Да, и меня уже выписали"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "באיזה תאריך התאשפזת?",
                                      "ar": "في أي تاريخ بدأ علاجك في المستشفى؟",
                                      "en": "On what date were you hospitalized?",
                                      "es": "¿En qué fecha fuiste hospitalizado?",
                                      "fr": "À quelle date avez-vous été hospitalisé ?",
                                      "ru": "Какого числа вас госпитализировали?"
                                    }
                                  },
                                  "uid": "ec80e0bc03"
                                },
                                {
                                  "uid": "b67a75a006",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "hospitalization_start_date"
                                  }
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "ומתי השתחחרת?",
                                      "ar": "ومتى تم إرسالك إلى المنزل؟",
                                      "en": "And when were you released?",
                                      "es": "¿Y cuándo te dieron de alta?",
                                      "fr": "Et quand avez vous été libéré ?",
                                      "ru": "И когда вас выписали?"
                                    }
                                  },
                                  "uid": "cc9fa3e95f"
                                },
                                {
                                  "uid": "6fbecffc17",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "hospitalization_end_date"
                                  }
                                },
                                {
                                  "goto": "hospitalization_icu",
                                  "uid": "83670837f0"
                                }
                              ],
                              "uid": "1c9a3def7c",
                              "value": "false"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא",
                                  "ar": "لا",
                                  "en": "No",
                                  "es": "No",
                                  "fr": "Non",
                                  "ru": "Нет"
                                }
                              },
                              "value": "no"
                            }
                          ],
                          "variable": "hospitalization_status"
                        }
                      }
                    ],
                    "uid": "bb10cbd66a",
                    "undefined": true
                  }
                ]
              },
              "uid": "c7ef95f634"
            },
            {
              "do": {
                "cmd": "clear_insulation_status",
                "params": [
                  "record"
                ]
              },
              "uid": "dad22a68cd"
            }
          ],
          "uid": "4fad9055ad"
        },
        {
          "name": "hospitalization_icu",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "האם אושפזת גם בטיפול נמרץ?",
                  "ar": "هل تم علاجك في وحدة العناية المركزة؟",
                  "en": "Were you in intensive care?",
                  "es": "¿Ha sido hospitalizado también en cuidados intensivos?",
                  "fr": "Avez-vous également été hospitalisé en soins intensifs ?",
                  "ru": "Были ли вы госпитализированы в реанимации?"
                }
              },
              "uid": "c643ef4687"
            },
            {
              "uid": "4639dbe17c",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "כן",
                        "ar": "نعم",
                        "en": "Yes",
                        "es": "Sí",
                        "fr": "Oui",
                        "ru": "Да"
                      }
                    },
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "כמה ימים אושפזת שם?",
                            "ar": "كم يوم تعالجت هناك؟ ",
                            "en": "For how many days were you hospitalized there?",
                            "es": "¿Cuántos días estuvo hospitalizado allí?",
                            "fr": "Combien de jours y avez-vous été hospitalisé ?",
                            "ru": "Сколько дней вы были госпитализированы?"
                          }
                        },
                        "uid": "00a1564b2b"
                      },
                      {
                        "uid": "52a10d9e52",
                        "wait": {
                          "input-kind": "number",
                          "input-max": 999,
                          "input-min": 1,
                          "input-step": 1,
                          "placeholder": {
                            ".tx": {
                              "_": "מספר הימים",
                              "ar": "عدد الأيام",
                              "en": "Number of days",
                              "es": "Número de días",
                              "fr": "Quelques jours",
                              "ru": "Кол-во дней"
                            }
                          },
                          "variable": "hospitalization_icu_duration"
                        }
                      }
                    ],
                    "uid": "8728a54b34",
                    "value": true
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "לא",
                        "ar": "لا",
                        "en": "No",
                        "es": "No",
                        "fr": "Non",
                        "ru": "Нет"
                      }
                    },
                    "value": false
                  }
                ],
                "variable": "hospitalization_icu_required"
              }
            }
          ],
          "uid": "316844e9d7"
        },
        {
          "name": "insulation",
          "steps": [
            {
              "switch": {
                "arg": "hospitalization_status",
                "cases": [
                  {
                    "match": true,
                    "steps": [
                      {
                        "pop": "reporting-loop",
                        "uid": "7b6520561d"
                      }
                    ],
                    "uid": "2457450b7e"
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "5fd4c49d70"
            },
            {
              "switch": {
                "arg": "insulation_status",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם היית היום בבידוד?",
                            "ar": "هل كنت اليوم في حجر صحي؟",
                            "en": "Were you quarantined today?",
                            "es": "¿Has estado aislado hoy?",
                            "fr": "Avez-vous été en isolement aujourd'hui ?",
                            "ru": "Были ли вы сегодня в карантине?"
                          }
                        },
                        "uid": "0b124ce172"
                      },
                      {
                        "uid": "ae67c8f91b",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, בבית שלי ובנפרד מבני משפחתי",
                                  "ar": "نعم, في منزلي وبإنعزال تام عن أفراد عائلتي",
                                  "en": "Yes, at home, separate from other family members",
                                  "es": "Si, en mi casa y separado de mi familia",
                                  "fr": "Oui, chez moi et séparé de ma famille",
                                  "ru": "Да, дома и отдельно от семьи"
                                }
                              },
                              "value": "insulation"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, בבית שלי",
                                  "ar": "نعم, في منزلي",
                                  "en": "Yes, at home",
                                  "es": "Si, en mi casa",
                                  "fr": "Oui, chez moi",
                                  "ru": "Да, дома"
                                }
                              },
                              "value": "insulation_with_family"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, במלון",
                                  "ar": "نعم, في الفندق",
                                  "en": "Yes, at a hotel",
                                  "es": "Si, en un hotel",
                                  "fr": "Oui, à l'hôtel",
                                  "ru": "Да, в гостинице"
                                }
                              },
                              "value": "insulation_hotel"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "אני לא בבידוד",
                                  "ar": "أنا لست بحجر صحي",
                                  "en": "I'm not under quarantine",
                                  "es": "No estoy en aislamiento",
                                  "fr": "Je ne suis pas en confinement",
                                  "ru": "Я не на карантине"
                                }
                              },
                              "value": "none"
                            }
                          ],
                          "variable": "insulation_status"
                        }
                      }
                    ],
                    "uid": "0aea258f6e",
                    "undefined": true
                  },
                  {
                    "match": "none",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם מאז הדיווח האחרון נכנסת לבידוד?",
                            "ar": "هل دخلت إلى الحجر الصحي منذ الإستبيان الأخير؟",
                            "en": "Have you been quarantined since your last report?",
                            "es": "¿Has estado aislado desde el último informe?",
                            "fr": "Êtes-vous entré en isolement depuis le dernier rapport ?",
                            "ru": "Были ли вы помещены в карантин с момента вашего последнего отчёта?"
                          }
                        },
                        "uid": "272b5b815c"
                      },
                      {
                        "uid": "6d51bc9a46",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, בבית שלי ובנפרד מבני משפחתי",
                                  "ar": "نعم, في منزلي وبإنعزال تام عن أفراد عائلتي",
                                  "en": "Yes, at home, separate from other family members",
                                  "es": "Si, en mi casa y separado de mi familia",
                                  "fr": "Oui, chez moi et séparé de ma famille",
                                  "ru": "Да, дома и отдельно от семьи"
                                }
                              },
                              "value": "insulation"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, בבית שלי",
                                  "ar": "نعم, في منزلي",
                                  "en": "Yes, at home",
                                  "es": "Si, en mi casa",
                                  "fr": "Oui, chez moi",
                                  "ru": "Да, дома"
                                }
                              },
                              "value": "insulation_with_family"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, במלון",
                                  "ar": "نعم, في الفندق",
                                  "en": "Yes, at a hotel",
                                  "es": "Si, en un hotel",
                                  "fr": "Oui, à l'hôtel",
                                  "ru": "Да, в гостинице"
                                }
                              },
                              "value": "insulation_hotel"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא",
                                  "ar": "لا",
                                  "en": "No",
                                  "es": "No",
                                  "fr": "Non",
                                  "ru": "Нет"
                                }
                              },
                              "value": "none"
                            }
                          ],
                          "variable": "insulation_status"
                        }
                      }
                    ],
                    "uid": "98ce7c2cd9"
                  },
                  {
                    "default": true,
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם אתם עדיין בבידוד?",
                            "ar": "هل ما زلت في الحجر الصحي؟",
                            "en": "Are you still quarantined?",
                            "es": "¿Sigues en aislamiento?",
                            "fr": "Êtes-vous toujours en isolement ? ",
                            "ru": "Вы еще на карантине?"
                          }
                        },
                        "uid": "0ad79180c2"
                      },
                      {
                        "uid": "6469c582d5",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, בבית שלי ובנפרד מבני משפחתי",
                                  "ar": "نعم, في منزلي وبإنعزال تام من أفراد عائلتي",
                                  "en": "Yes, at home, separate from other family members",
                                  "es": "Si, en mi casa y separado de mi familia",
                                  "fr": "Oui, chez moi et séparé de ma famille",
                                  "ru": "Да, дома и отдельно от семьи"
                                }
                              },
                              "value": "insulation"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, בבית שלי",
                                  "ar": "نعم, في منزلي",
                                  "en": "Yes, at home",
                                  "es": "Si, en mi casa",
                                  "fr": "Oui, chez moi",
                                  "ru": "Да, дома"
                                }
                              },
                              "value": "insulation_with_family"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, במלון",
                                  "ar": "نعم, في الفندق",
                                  "en": "Yes, at a hotel",
                                  "es": "Si, en un hotel",
                                  "fr": "Oui, à l'hôtel",
                                  "ru": "Да, в гостинице"
                                }
                              },
                              "value": "insulation_hotel"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "אני כבר לא בבידוד",
                                  "ar": "أنا لست بحجر صحي",
                                  "en": "I'm not quarantined any longer",
                                  "es": "Ya no estoy en aislamiento",
                                  "fr": "Je ne suis pas en isolement",
                                  "ru": "Я уже не на карантине"
                                }
                              },
                              "value": "none"
                            }
                          ],
                          "variable": "insulation_status"
                        }
                      }
                    ],
                    "uid": "f36ace0690"
                  }
                ]
              },
              "uid": "1a6f778fb9"
            },
            {
              "do": {
                "cmd": "clear_insulation_reason",
                "params": [
                  "record"
                ]
              },
              "uid": "949fa58ae6"
            },
            {
              "switch": {
                "arg": "insulation_status",
                "cases": [
                  {
                    "match": "none"
                  },
                  {
                    "default": true,
                    "steps": [
                      {
                        "switch": {
                          "arg": "insulation_reason",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": "none",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "למה אתם בבידוד?",
                                      "ar": "لماذا أنت في حجر صحي؟",
                                      "en": "Why are you quarantined?",
                                      "es": "¿Por qué estás en aislamiento?",
                                      "fr": "Pourquoi êtes-vous en isolement ? ",
                                      "ru": "Почемы вы на карантине?"
                                    }
                                  },
                                  "uid": "20f22515e1"
                                },
                                {
                                  "uid": "62e8cb9d09",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד כי חזרתי מחו״ל לאחרונה",
                                            "ar": "أنا بحجر صحي لأنني كنت مسافر/ة",
                                            "en": "I'm under quarantine because I recently returned from a foreign country",
                                            "es": "Estoy en cuarentena ya que regresé últimamente del exterior",
                                            "fr": "Je suis en confinement car je viens de rentrer de l'étranger",
                                            "ru": "Я на карантине, вследствие недавнего возвращения из-за границы"
                                          }
                                        },
                                        "value": "back_from_abroad"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד כי נחשפתי לחולה מאומת",
                                            "ar": "أنا بحجر صحي لأنني تواصلت مع مريض/ة تم التحقق منه/ا",
                                            "en": "I'm under quarantine because I've been exposed to a verified patient",
                                            "es": "Estoy en aislamiento porque he estado expuesto a un enfermo confirmado",
                                            "fr": "Je suis en confinement car j'ai été exposé à un malade confirmé",
                                            "ru": "Я на карантине вследствие нахождения рядом с подтвержденным больным"
                                          }
                                        },
                                        "value": "contact_with_patient"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד כי חוויתי תסמינים",
                                            "ar": "أنا موجود/ة بحجر صحي لأنني شعرت بأعراض",
                                            "en": "I'm under quarantine because I've exhibited symptoms ",
                                            "es": "Estoy en aislamiento porque he padecido síntomas",
                                            "fr": "Je suis en confinement parce-que j'ai eu des symptômes",
                                            "ru": "Я на карантине вследствие появления симптомов"
                                          }
                                        },
                                        "value": "has_symptoms"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד מרצוני האישי",
                                            "ar": "أنا موجود/ة بحجر صحي بإختياري الشخصي",
                                            "en": "I'm isolated by my own choice",
                                            "es": "Estoy en aislamiento por propia voluntad",
                                            "fr": "Je suis en confinement de mon plein gré",
                                            "ru": "Я на добровольной самоизоляции"
                                          }
                                        },
                                        "value": "voluntary"
                                      }
                                    ],
                                    "variable": "insulation_reason"
                                  }
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "ממתי אתם בבידוד?",
                                      "ar": "منذ متى أنتم في حجر صحي؟",
                                      "en": "Since when were you quarantined",
                                      "es": "¿Desde cuándo estas en aislamiento?",
                                      "fr": "Depuis quand êtes-vous en isolement ?",
                                      "ru": "Когда начался карантин?"
                                    }
                                  },
                                  "uid": "66571e9448"
                                },
                                {
                                  "uid": "13e9b3acbe",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "insulation_start_date"
                                  }
                                }
                              ],
                              "uid": "ebd4f4e27d"
                            }
                          ]
                        },
                        "uid": "d21511337c"
                      }
                    ],
                    "uid": "3b680d5687"
                  }
                ]
              },
              "uid": "3a03791bc3"
            }
          ],
          "uid": "ebd966ac43"
        },
        {
          "name": "routine",
          "steps": [
            {
              "switch": {
                "arg": "_is_adult",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "do": {
                          "cmd": "need_to_ask_about_routine",
                          "params": [
                            "record"
                          ],
                          "variable": "_need_to_ask_about_routine"
                        },
                        "uid": "d123f70a2f"
                      },
                      {
                        "switch": {
                          "arg": "_need_to_ask_about_routine",
                          "cases": [
                            {
                              "match": false
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "יש כמה שאלות חשובות שאנחנו שואלים את כולם, רק פעם בשבוע, כדי להקל על הדיווח",
                                      "ar": "يوجد بعض الأسئلة المهمة التي نسألها للجميع, مرة واحدة فقط كل أسبوع, من أجل تسهيل تعبئة الإستبيان",
                                      "en": "There are some important questions that we ask everyone once a week, to make it easier for you to report",
                                      "es": "Hay algunas preguntas importantes que les hacemos a todos, solo una vez por semana, para facilitar los informes",
                                      "fr": "Il y a quelques questions importantes que nous posons à tout le monde, juste une fois par semaine, pour faciliter le remplissage du questionnaire",
                                      "ru": "Есть несколько вопросов которые мы задаем всем только раз в неделю, чтобы облегчить доклад"
                                    }
                                  },
                                  "uid": "70432ecbd9"
                                },
                                {
                                  "do": {
                                    "cmd": "prepare_routine_question_work",
                                    "params": [
                                      "record",
                                      "שיש לך עבודה קבועה מחוץ לבית",
                                      "ב-{{routine_workplace_city_town}}, ברחוב {{routine_workplace_street}}",
                                      "שעבדת כ-{{routine_workplace_weekly_hours}} שעות בשבוע",
                                      "שהעבודה שלך היא כחלק מצוות רפואי",
                                      "שהעבודה שלך היא לא כחלק מצוות רפואי",
                                      "ושנתת שירות ביום אחד ליותר מ-10 אנשים במסגרת העבודה",
                                      "ושלא נתת שירות ביום אחד ליותר מ-10 אנשים במסגרת העבודה"
                                    ],
                                    "variable": "_prepare_routine_question_work"
                                  },
                                  "uid": "a83bac7f2f"
                                },
                                {
                                  "switch": {
                                    "arg": "_prepare_routine_question_work",
                                    "cases": [
                                      {
                                        "match": "empty"
                                      },
                                      {
                                        "default": true,
                                        "steps": [
                                          {
                                            "say": "בשבוע שעבר דיווחת ש<br/>{{_prepare_routine_question_work}}",
                                            "uid": "85d66a9e3d"
                                          },
                                          {
                                            "say": "האם משהו מכל זה השתנה השבוע?",
                                            "uid": "b11f544e8e"
                                          },
                                          {
                                            "uid": "770d2b4d28",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "כן",
                                                      "ar": "نعم",
                                                      "en": "Yes",
                                                      "es": "Sí",
                                                      "fr": "Oui",
                                                      "ru": "Да"
                                                    }
                                                  },
                                                  "value": "empty"
                                                },
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "לא",
                                                      "ar": "لا",
                                                      "en": "No",
                                                      "es": "No",
                                                      "fr": "Non",
                                                      "ru": "Нет"
                                                    }
                                                  },
                                                  "value": "full"
                                                }
                                              ],
                                              "variable": "_prepare_routine_question_work"
                                            }
                                          }
                                        ],
                                        "uid": "21b6d5e367"
                                      }
                                    ]
                                  },
                                  "uid": "f4840f1d84"
                                },
                                {
                                  "switch": {
                                    "arg": "_prepare_routine_question_work",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "match": "empty",
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "האם יש לך עבודה קבועה מחוץ לבית בימים אלה?",
                                                "ar": "هل لديك عمل ثابت خارج المنزل في هذه الأيام؟",
                                                "en": "In this period, do you work regularly outside of your home?",
                                                "es": "¿Tiene un trabajo permanente fuera del hogar en estos días?",
                                                "fr": "Avez-vous un emploi régulier en dehors de la maison ces jours-ci ?",
                                                "ru": "Работаете ли вы на постоянной работе вне дома в эти дни?"
                                              }
                                            },
                                            "uid": "a83f9158f0"
                                          },
                                          {
                                            "uid": "677348cb41",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "כן, יש עבודה מחוץ לבית",
                                                      "ar": "نعم, أنا أعمل خارج المنزل",
                                                      "en": "Yes, I work outside my home",
                                                      "es": "Si, trabajo fuera de casa",
                                                      "fr": "Oui, je travail en dehors de la maison",
                                                      "ru": "Да, работал/а вне дома"
                                                    }
                                                  },
                                                  "steps": [
                                                    {
                                                      "say": {
                                                        ".tx": {
                                                          "_": "וכמה שעות, פחות או יותר, עבדת שם בשבוע האחרון?",
                                                          "ar": "وكم ساعة, تقريبًا, عملت هناك في الأسبوع السابق؟ ",
                                                          "en": "Approximately how many hours did you work during the last week?",
                                                          "es": "¿Y cuántas horas, más o menos, trabajó allí la semana pasada?",
                                                          "fr": "Et combien d'heures, plus ou moins, y avez-vous travaillé la semaine dernière ?",
                                                          "ru": "И сколько часов вы работали, примерно?"
                                                        }
                                                      },
                                                      "uid": "1ef1036328"
                                                    },
                                                    {
                                                      "uid": "83bd7dfdc2",
                                                      "wait": {
                                                        "input-kind": "number",
                                                        "input-max": 168,
                                                        "input-min": 0,
                                                        "input-step": 1,
                                                        "placeholder": {
                                                          ".tx": {
                                                            "_": "מספר השעות, בערך",
                                                            "ar": "عدد الساعات, تقريبًا",
                                                            "en": "Approximately how many hours?",
                                                            "es": "El número de horas, aproximadamente",
                                                            "fr": "Le nombre d'heures, à peu près",
                                                            "ru": "Количество часов, примерно"
                                                          }
                                                        },
                                                        "variable": "routine_workplace_weekly_hours"
                                                      }
                                                    },
                                                    {
                                                      "say": {
                                                        ".tx": {
                                                          "_": "האם העבודה במקום קבוע?",
                                                          "ar": "هل تعمل/ين في مكان ثابت؟",
                                                          "en": "Is your workplace in a fixed location?",
                                                          "es": "¿El trabajo está en un lugar fijo?",
                                                          "fr": "Votre lieu de travail est il fixe?",
                                                          "ru": "Вы работали в одном и том же месте?"
                                                        }
                                                      },
                                                      "uid": "b65135628b"
                                                    },
                                                    {
                                                      "uid": "9c1bc87256",
                                                      "wait": {
                                                        "options": [
                                                          {
                                                            "show": {
                                                              ".tx": {
                                                                "_": "כן, במקום קבוע",
                                                                "ar": "نعم, في مكان ثابت",
                                                                "en": "Yes, in a permanent location",
                                                                "es": "Si, en un lugar fijo",
                                                                "fr": "Oui, mon lieu de travail est fixe",
                                                                "ru": "Да, в постоянном месте"
                                                              }
                                                            },
                                                            "steps": [
                                                              {
                                                                "say": {
                                                                  ".tx": {
                                                                    "_": "אפשר לשאול איפה נמצא מקום העבודה? זה יכול לעזור לנו במחקר",
                                                                    "ar": "هل بإمكاننا أن نسأل عن عنوان عملك؟ من الممكن أن يُساعدنا هذا في البحث",
                                                                    "en": "Can we ask where you work? It could help our research",
                                                                    "es": "¿Podemos preguntar dónde está el lugar de trabajo? Nos puede ayudar con la investigación.",
                                                                    "fr": "Pouvons-nous demander où se trouve votre lieu de travail? Cela peut nous aider dans la recherche",
                                                                    "ru": "Можно узнать, где находится ваше место работы? Это поможет нашему исследованию."
                                                                  }
                                                                },
                                                                "uid": "66817c727b"
                                                              },
                                                              {
                                                                "uid": "13d03716f5",
                                                                "wait": {
                                                                  "options": [
                                                                    {
                                                                      "show": {
                                                                        ".tx": {
                                                                          "_": "כן, בטח",
                                                                          "ar": "نعم, طبعًا",
                                                                          "en": "Yes, sure",
                                                                          "es": "Sí, seguro",
                                                                          "fr": "Oui, bien sûr",
                                                                          "ru": "Да, конечно"
                                                                        }
                                                                      },
                                                                      "steps": [
                                                                        {
                                                                          "do": {
                                                                            "cmd": "prepare_city_town_suggestions",
                                                                            "variable": "_cityTownSuggestions"
                                                                          },
                                                                          "uid": "fc3a718d88"
                                                                        },
                                                                        {
                                                                          "say": {
                                                                            ".tx": {
                                                                              "_": "איפה נמצא מקום העבודה?",
                                                                              "ar": "أين يوجد مكان عملك؟",
                                                                              "en": "Where is your workplace located?",
                                                                              "es": "¿Dónde está el lugar de trabajo?",
                                                                              "fr": "Où se trouve votre lieu de travail?",
                                                                              "ru": "Где находится ваше место работы?"
                                                                            }
                                                                          },
                                                                          "uid": "03736bc9e9"
                                                                        },
                                                                        {
                                                                          "uid": "0a1c2609f3",
                                                                          "wait": {
                                                                            "placeholder": {
                                                                              ".tx": {
                                                                                "_": "שם העיר או הישוב",
                                                                                "ar": "إسم المدينة أو القرية",
                                                                                "en": "Place of residence",
                                                                                "es": "Nombre de la ciudad o la localidad",
                                                                                "fr": "Nom de la ville ou de la localité",
                                                                                "ru": "Название города или поселка"
                                                                              }
                                                                            },
                                                                            "suggestionsFrom": "_cityTownSuggestions",
                                                                            "variable": "routine_workplace_city_town"
                                                                          }
                                                                        },
                                                                        {
                                                                          "say": {
                                                                            ".tx": {
                                                                              "_": "ובאיזה רחוב זה?",
                                                                              "ar": "وفي أي شارع؟",
                                                                              "en": "Which street?",
                                                                              "es": "¿Y en qué calle está?",
                                                                              "fr": "Et quel est le nom de la rue ? ",
                                                                              "ru": "А на какой улице?"
                                                                            }
                                                                          },
                                                                          "uid": "af2e5a6cea"
                                                                        },
                                                                        {
                                                                          "uid": "aa479218e8",
                                                                          "wait": {
                                                                            "placeholder": {
                                                                              ".tx": {
                                                                                "_": "שם הרחוב, אם ידוע",
                                                                                "ar": "إسم الشارع، إذا معروف",
                                                                                "en": "Street name, if known",
                                                                                "es": "Nombre de la calle, si se sabe",
                                                                                "fr": "Nom de la rue, s'il est connu",
                                                                                "ru": "Название улицы, если известно"
                                                                              }
                                                                            },
                                                                            "required": false,
                                                                            "variable": "routine_workplace_street"
                                                                          }
                                                                        }
                                                                      ],
                                                                      "uid": "9342fb3752"
                                                                    },
                                                                    {
                                                                      "show": {
                                                                        ".tx": {
                                                                          "_": "עדיף שלא",
                                                                          "ar": "مُفضل لا",
                                                                          "en": "I prefer not to answer",
                                                                          "es": "Preferible que no",
                                                                          "fr": "Je ne préfère pas",
                                                                          "ru": "Предпочитаю не отвечать на этот вопрос."
                                                                        }
                                                                      }
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            "uid": "c927c7ff3e",
                                                            "value": true
                                                          },
                                                          {
                                                            "show": {
                                                              ".tx": {
                                                                "_": "לא, אין כתובת קבועה בעבודה",
                                                                "ar": "لا يوجد عنوان ثابت في العمل",
                                                                "en": "No, I don't have a fixed work address",
                                                                "es": "No, no hay una dirección fija en el trabajo.",
                                                                "fr": "Non, je ne travail pas à une adresse fixe",
                                                                "ru": "Нет, у моего места работы нет постоянного адреса"
                                                              }
                                                            },
                                                            "value": false
                                                          }
                                                        ],
                                                        "variable": "routine_workplace_single_location"
                                                      }
                                                    },
                                                    {
                                                      "say": {
                                                        ".tx": {
                                                          "_": "האם באחד מן הימים בשבוע האחרון נתת שירות בעבודתך ליותר מ-10 אנשים?",
                                                          "ar": "هل في أحد أيام الأسبوع السابق قمت من خلال عملك بتقديم خدمات وجها لوجه, لأكثر من 10 أشخاص؟",
                                                          "en": "In any day during the last week, did you serve (face to face) more than 10 people?",
                                                          "es": "La semana pasada en tu trabajo ¿has atendido, algún día, a más de 10 personas ese mismo día?",
                                                          "fr": "Dans le cadre de votre profession, avez-vous physiquement aidé plus de 10 personnes au cours des 7 derniers jours ?",
                                                          "ru": "Был ли день на последней неделе на работе когда вы обслужили больше 10 человек?"
                                                        }
                                                      },
                                                      "uid": "062de401ff"
                                                    },
                                                    {
                                                      "uid": "3302e67c08",
                                                      "wait": {
                                                        "options": [
                                                          {
                                                            "show": {
                                                              ".tx": {
                                                                "_": "כן, נתתי שירות",
                                                                "ar": "نعم, أعطيت خدمات",
                                                                "en": "Yes, I did.",
                                                                "es": "Sí, he brindado servicio a clientes",
                                                                "fr": "Oui, j'ai assisté plus de dix personnes",
                                                                "ru": "Да, обслуживал/а"
                                                              }
                                                            },
                                                            "value": true
                                                          },
                                                          {
                                                            "show": {
                                                              ".tx": {
                                                                "_": "לא נתתי שירות",
                                                                "ar": "لا, لم أعط أي خدمة",
                                                                "en": "No, I didn't.",
                                                                "es": "No, no he dado servicio a clientes",
                                                                "fr": "Non, je n'ai pas assisté plus de dix personnes",
                                                                "ru": "Нет, не обслуживал/а"
                                                              }
                                                            },
                                                            "value": false
                                                          }
                                                        ],
                                                        "variable": "routine_served_public"
                                                      }
                                                    },
                                                    {
                                                      "switch": {
                                                        "arg": "medical_staff_member",
                                                        "cases": [
                                                          {
                                                            "steps": [
                                                              {
                                                                "say": {
                                                                  ".tx": {
                                                                    "_": "האם העבודה שלך היא כחלק מצוות רפואי - בטיפול בחולים או בקבלת קהל?",
                                                                    "ar": "هل في عملك انت جزء من فريق طبي - الذي يعتني بمرضى أو يستقبل جمهور؟",
                                                                    "en": "Do you work in a medical team, treating patients or receiving them?",
                                                                    "es": "¿Es su trabajo parte de un equipo médico: atender pacientes o atender al público?",
                                                                    "fr": "Faites vous partie d'une équipe médicale dans le cadre de votre travail ? Soignez-vous ou recevez-vous des patients ?",
                                                                    "ru": "Работаете ли вы как медицинский персонал (уход за больными или прием публики)?"
                                                                  }
                                                                },
                                                                "uid": "779ebae278"
                                                              },
                                                              {
                                                                "uid": "2fc8a8cadc",
                                                                "wait": {
                                                                  "options": [
                                                                    {
                                                                      "show": {
                                                                        ".tx": {
                                                                          "_": "כן, אני חלק מצוות רפואי",
                                                                          "ar": "نعم, أنا من ضمن فريق طبي",
                                                                          "en": "Yes, I am a health-care professional",
                                                                          "es": "Sí, formo parte de un equipo médico",
                                                                          "fr": "Oui, je fais partie d'une équipe médicale",
                                                                          "ru": "Да, я часть медицинского персонала."
                                                                        }
                                                                      },
                                                                      "value": true
                                                                    },
                                                                    {
                                                                      "show": {
                                                                        ".tx": {
                                                                          "_": "לא, אני לא",
                                                                          "ar": "لا, لستُ كذلك",
                                                                          "en": "No, I'm not",
                                                                          "es": "No, yo no",
                                                                          "fr": "Non, je n'en fais pas partie",
                                                                          "ru": "Нет, я не часть медицинского персонала"
                                                                        }
                                                                      },
                                                                      "value": false
                                                                    }
                                                                  ],
                                                                  "variable": "medical_staff_member"
                                                                }
                                                              }
                                                            ],
                                                            "uid": "bad25a7905",
                                                            "undefined": true
                                                          },
                                                          {
                                                            "default": true
                                                          }
                                                        ]
                                                      },
                                                      "uid": "3d0d30e7bb"
                                                    }
                                                  ],
                                                  "uid": "a63f7844fd",
                                                  "value": true
                                                },
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "לא",
                                                      "ar": "لا",
                                                      "en": "No",
                                                      "es": "No",
                                                      "fr": "Non",
                                                      "ru": "Нет"
                                                    }
                                                  },
                                                  "value": false
                                                }
                                              ],
                                              "variable": "routine_workplace_is_outside"
                                            }
                                          }
                                        ],
                                        "uid": "77cb6786ac"
                                      }
                                    ]
                                  },
                                  "uid": "efecadbed0"
                                },
                                {
                                  "do": {
                                    "cmd": "prepare_routine_question_behaviour",
                                    "params": [
                                      "record",
                                      "שביקרת באופן קבוע בבית תפילה",
                                      "שלא ביקרת באופן קבוע בבית תפילה",
                                      "העדפת שלא לדווח על ביקור קבוע בבית תפילה",
                                      "שנסעת ברכבת",
                                      "שנסעת באוטובוס",
                                      "שנסעת במונית",
                                      "שנסעת בתחבורה ציבורית",
                                      "שנסעת באמצעי תחבורה ציבורית אחר",
                                      "שלא השתמשת בתחבורה ציבורית",
                                      "שחבשת מסכה כל הזמן",
                                      "שחבשת מסכה רוב הזמן",
                                      "שחבשת מסכה בחלק קטן מהזמן",
                                      "שלא חבשת מסכה",
                                      "העדפת שלא לדווח אם חבשת מסכה מחוץ לבית"
                                    ],
                                    "variable": "_prepare_routine_question_behaviour"
                                  },
                                  "uid": "89a8e8e6b3"
                                },
                                {
                                  "switch": {
                                    "arg": "_prepare_routine_question_behaviour",
                                    "cases": [
                                      {
                                        "match": "empty"
                                      },
                                      {
                                        "default": true,
                                        "steps": [
                                          {
                                            "say": "בשבוע שעבר סיפרת<br/>{{_prepare_routine_question_behaviour}}",
                                            "uid": "ce06aa3a5b"
                                          },
                                          {
                                            "say": "האם משהו מכל זה השתנה השבוע?",
                                            "uid": "ed6ba1919e"
                                          },
                                          {
                                            "uid": "ea42ed52ba",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "כן",
                                                      "ar": "نعم",
                                                      "en": "Yes",
                                                      "es": "Sí",
                                                      "fr": "Oui",
                                                      "ru": "Да"
                                                    }
                                                  },
                                                  "value": "empty"
                                                },
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "לא",
                                                      "ar": "لا",
                                                      "en": "No",
                                                      "es": "No",
                                                      "fr": "Non",
                                                      "ru": "Нет"
                                                    }
                                                  },
                                                  "value": "full"
                                                }
                                              ],
                                              "variable": "_prepare_routine_question_behaviour"
                                            }
                                          }
                                        ],
                                        "uid": "9140c66ca1"
                                      }
                                    ]
                                  },
                                  "uid": "2fd3a21bc2"
                                },
                                {
                                  "switch": {
                                    "arg": "_prepare_routine_question_behaviour",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "match": "empty",
                                        "steps": [
                                          {
                                            "say": "האם ביקרת בבית תפילה באופן שגרתי השבוע?",
                                            "uid": "beeea14718"
                                          },
                                          {
                                            "uid": "6c1dc1952c",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": "כן",
                                                  "value": true
                                                },
                                                {
                                                  "show": "לא",
                                                  "value": false
                                                },
                                                {
                                                  "class": "other",
                                                  "show": "לא רוצה להשיב",
                                                  "value": "no_response"
                                                }
                                              ],
                                              "variable": "routine_visits_prayer_house"
                                            }
                                          },
                                          {
                                            "say": "האם יצא לך להשתמש בתחבורה ציבורית בשבוע האחרון?",
                                            "uid": "d64369849b"
                                          },
                                          {
                                            "uid": "dd85821ed3",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": "כן",
                                                  "steps": [
                                                    {
                                                      "say": "במה מאלה השתמשת השבוע?",
                                                      "uid": "fe21db81f1"
                                                    },
                                                    {
                                                      "uid": "e3ab3dfd6a",
                                                      "wait": {
                                                        "multi": true,
                                                        "options": [
                                                          {
                                                            "field": "routine_uses_public_transportation_train",
                                                            "show": "רכבת"
                                                          },
                                                          {
                                                            "field": "routine_uses_public_transportation_bus",
                                                            "show": "אוטובוס"
                                                          },
                                                          {
                                                            "field": "routine_uses_public_transportation_taxi",
                                                            "show": "מונית"
                                                          },
                                                          {
                                                            "field": "routine_uses_public_transportation_other",
                                                            "show": "אחר"
                                                          },
                                                          {
                                                            "class": "other",
                                                            "show": "<span class='empty'>בעצם לא</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין פרטים נוספים</span>"
                                                          }
                                                        ],
                                                        "variable": "_var"
                                                      }
                                                    },
                                                    {
                                                      "do": {
                                                        "cmd": "update_from_selection",
                                                        "params": [
                                                          "record",
                                                          "_var"
                                                        ]
                                                      },
                                                      "uid": "6018c1501f"
                                                    }
                                                  ],
                                                  "uid": "611dc320d8",
                                                  "value": true
                                                },
                                                {
                                                  "show": "לא",
                                                  "value": false
                                                }
                                              ],
                                              "variable": "routine_uses_public_transportation"
                                            }
                                          },
                                          {
                                            "say": "האם חבשת השבוע מסיכה כשיצאת מהבית?",
                                            "uid": "7e8759beee"
                                          },
                                          {
                                            "uid": "3695634ccb",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": "כן, תמיד",
                                                  "value": "always"
                                                },
                                                {
                                                  "show": "רוב הזמן",
                                                  "value": "mostly_yes"
                                                },
                                                {
                                                  "show": "בחלק קטן מהזמן",
                                                  "value": "mostly_no"
                                                },
                                                {
                                                  "show": "לא",
                                                  "value": "never"
                                                },
                                                {
                                                  "class": "other",
                                                  "show": "לא רוצה להשיב",
                                                  "value": "no_response"
                                                }
                                              ],
                                              "variable": "routine_wears_mask"
                                            }
                                          }
                                        ],
                                        "uid": "1731c4a924"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "לא, נשארתי בבית",
                                            "ar": "لا, كنت في البيت",
                                            "en": "No, I stayed at home",
                                            "es": "No, me quede en casa",
                                            "fr": "Non, je suis resté à la maison",
                                            "ru": "Нет, я сидел/а дома"
                                          }
                                        },
                                        "value": false
                                      }
                                    ]
                                  },
                                  "uid": "1d1aa9087b"
                                }
                              ],
                              "uid": "62733e4d1a"
                            }
                          ]
                        },
                        "uid": "af42d37006"
                      }
                    ],
                    "uid": "90170cc2ae"
                  }
                ]
              },
              "uid": "90c08917a3"
            },
            {
              "do": {
                "cmd": "save_public_service_data",
                "params": [
                  "record"
                ]
              },
              "uid": "05b12f15e3"
            }
          ],
          "uid": "abf65cdc49"
        },
        {
          "name": "current-report",
          "steps": [
            {
              "switch": {
                "arg": "general_feeling",
                "cases": [
                  {
                    "default": true,
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "ומה נשמע היום?",
                            "ar": "كيف حالك اليوم؟",
                            "en": "How are things today?",
                            "es": "¿Y cómo estás hoy?",
                            "fr": "Et comment allez vous aujourd'hui?",
                            "ru": "А как ваше самочувствие сегодня?"
                          }
                        },
                        "uid": "beefbdbcb3"
                      },
                      {
                        "uid": "fee83e1660",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "בסדר גמור",
                                  "ar": "ممتاز",
                                  "en": "Fine",
                                  "es": "Todo está bien",
                                  "fr": "Très bien",
                                  "ru": "Отлично"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "נהדר לשמוע!",
                                      "ar": "ابسطنا نسمع!",
                                      "en": "That's great!",
                                      "es": "¡Nos alegra saber eso!",
                                      "fr": "Bon de l'entendre !",
                                      "ru": "Рады слышать!"
                                    }
                                  },
                                  "uid": "8ce9b87e8b"
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                      "ar": "فقط للتأكد, هل لديك أحد هذه الأعراض؟",
                                      "en": "To be on the safe side: experiencing any of the following symptoms?",
                                      "es": "Sólo para estar seguros, ¿sufres de algunos de estos síntomas?",
                                      "fr": "Pour être sûr, avez-vous l'un de ces symptômes ?",
                                      "ru": "На всякий случай, есть ли у вас какие-либо из следующих симптомов:"
                                    }
                                  },
                                  "uid": "050d4e13a0"
                                }
                              ],
                              "uid": "11f2a871c8",
                              "value": "feel_good"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא כל כך טוב",
                                  "ar": "مش كثير منيح",
                                  "en": "Not so good",
                                  "es": "No muy bien",
                                  "fr": "Pas très bien",
                                  "ru": "Не очень хорошо"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "אוייש… איך זה בא לידי ביטוי?",
                                      "ar": "أوتش... كيف إحساسك؟",
                                      "en": "Oh, sorry to hear that... what are you feeling?",
                                      "es": "¡Oy! y ¿Cómo se manifiesta?",
                                      "fr": "Aïe… comment cela se manifeste-t-il ?",
                                      "ru": "Какая неприятность... В чем это выражается?"
                                    }
                                  },
                                  "uid": "1b27732fd2"
                                }
                              ],
                              "uid": "e894f17752",
                              "value": "feel_bad"
                            }
                          ],
                          "variable": "general_feeling"
                        }
                      }
                    ],
                    "uid": "0e3e2ebbd4"
                  },
                  {
                    "match": "feel_good",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "אני מקווה שהמרגש עדיין טוב כמו בדיווח הקודם",
                            "ar": "منتأمل أنك منيح/ة مثل ما كنت بآخر إستبيان",
                            "en": "Hopefully, still feeling well like last time",
                            "es": "Espero que aún te sientas bien, como en el último informe enviado",
                            "fr": "J'espère que vous vous sentez toujours aussi bien que dans le rapport précédent",
                            "ru": "Я надеюсь, что вы себя чувствуете по-прежнему так же хорошо, как в предыдущем отчёте"
                          }
                        },
                        "uid": "a5ebc5d67b"
                      },
                      {
                        "uid": "46d340eb90",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, בסדר גמור",
                                  "ar": "نعم, تمام",
                                  "en": "Yes, fine",
                                  "es": "Sí, todo está bien",
                                  "fr": "Oui, très bien",
                                  "ru": "Отлично"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "נהדר לשמוע!",
                                      "ar": "ابسطنا نسمع!",
                                      "en": "That's great!",
                                      "es": "¡Nos alegra saber eso!",
                                      "fr": "Bon de l'entendre !",
                                      "ru": "Рады слышать!"
                                    }
                                  },
                                  "uid": "2936c148b0"
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                      "ar": "فقط للتأكد, هل لديك أحد هذه الأعراض؟",
                                      "en": "To be on the safe side: experiencing any of the following symptoms?",
                                      "es": "Sólo para estar seguros, ¿sufres de algunos de estos síntomas?",
                                      "fr": "Pour être sûr, avez-vous l'un de ces symptômes ?",
                                      "ru": "На всякий случай, есть ли у вас какие-либо из следующих симптомов:"
                                    }
                                  },
                                  "uid": "fac1c21d48"
                                }
                              ],
                              "uid": "3b21d2175a",
                              "value": "feel_good"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לצערי לא כל כך טוב",
                                  "ar": "مع الأسف, مش كثير منيح/ة",
                                  "en": "Not too well, I'm afraid",
                                  "es": "Lamentablemente, no muy bien",
                                  "fr": "Malheureusement pas très bien",
                                  "ru": "К сожалению, не очень хорошо"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "אוייש… איך זה בא לידי ביטוי?",
                                      "ar": "أوتش... كيف إحساسك؟",
                                      "en": "Oh, sorry to hear that... what are you feeling?",
                                      "es": "¡Oy! y ¿Cómo se manifiesta?",
                                      "fr": "Aïe… comment cela se manifeste-t-il ?",
                                      "ru": "Какая неприятность... В чем это выражается?"
                                    }
                                  },
                                  "uid": "fa7220ddab"
                                }
                              ],
                              "uid": "47d91ed4d0",
                              "value": "feel_bad"
                            }
                          ],
                          "variable": "general_feeling"
                        }
                      }
                    ],
                    "uid": "7671e76a41"
                  },
                  {
                    "match": "feel_bad",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "בדיווח שעבר סיפרת שהרגשת לא כל כך טוב… האם חל שיפור במצבך?",
                            "ar": "في آخر إستبيان ذكرت انك مش كثير منيح/ة.. هل تحسن وضعك؟",
                            "en": "On your last report you mentioned you were not feeling well... are you feeling better now?",
                            "es": "En el último informe has contado no haberte sentido muy bien... ¿hay alguna mejoría en tu estado de salud?",
                            "fr": "Dans le rapport précédent, vous avez dit que vous ne vous sentiez pas très bien ... votre état s'est-il amélioré ?",
                            "ru": "В последнем отчёте вы рассказали нам, что не очень хорошо себя чувствуете. С тех пор ваше состояние улучшилось?"
                          }
                        },
                        "uid": "e85d3225b7"
                      },
                      {
                        "uid": "98c766d9cb",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, עכשיו הכל בסדר",
                                  "ar": "نعم, حاليًا كلشي تمام",
                                  "en": "Yes, all's well now",
                                  "es": "Sí, ahora todo está bien",
                                  "fr": "Oui, maintenant tout va bien",
                                  "ru": "Да, теперь всё хорошо"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "נהדר לשמוע!",
                                      "ar": "ابسطنا نسمع!",
                                      "en": "That's great!",
                                      "es": "¡Nos alegra saber eso!",
                                      "fr": "Bon de l'entendre !",
                                      "ru": "Рады слышать!"
                                    }
                                  },
                                  "uid": "b9cde574b8"
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                      "ar": "فقط للتأكد, هل لديك أحد هذه الأعراض؟",
                                      "en": "To be on the safe side: experiencing any of the following symptoms?",
                                      "es": "Sólo para estar seguros, ¿sufres de algunos de estos síntomas?",
                                      "fr": "Pour être sûr, avez-vous l'un de ces symptômes ?",
                                      "ru": "На всякий случай, есть ли у вас какие-либо из следующих симптомов:"
                                    }
                                  },
                                  "uid": "38b8805a2d"
                                }
                              ],
                              "uid": "75d8ef3565",
                              "value": "feel_good"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא, עדיין לא משהו",
                                  "ar": "لا, بعدني مش منيح/ة",
                                  "en": "No, still so-so",
                                  "es": "No, aún no me siento bien",
                                  "fr": "Non, pas vraiment ",
                                  "ru": "Нет, всё еще не очень"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "אוייש… איך זה בא לידי ביטוי?",
                                      "ar": "أوتش... كيف إحساسك؟",
                                      "en": "Oh, sorry to hear that... what are you feeling?",
                                      "es": "¡Oy! y ¿Cómo se manifiesta?",
                                      "fr": "Aïe… comment cela se manifeste-t-il ?",
                                      "ru": "Какая неприятность... В чем это выражается?"
                                    }
                                  },
                                  "uid": "49c5b0cb29"
                                }
                              ],
                              "uid": "8e09eddfe6",
                              "value": "feel_bad"
                            }
                          ],
                          "variable": "general_feeling"
                        }
                      }
                    ],
                    "uid": "d7ec4e1f7c"
                  }
                ]
              },
              "uid": "85bf6d9ac2"
            },
            {
              "goto": "current-report-symptoms",
              "uid": "991e420cbb"
            }
          ],
          "uid": "c961d87d9d"
        },
        {
          "name": "current-report-symptoms",
          "steps": [
            {
              "do": {
                "cmd": "should_check_for_duration",
                "params": [
                  "record"
                ],
                "variable": "_should_check_for_duration"
              },
              "uid": "512686c610"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "cb252a9f1a"
            },
            {
              "switch": {
                "arg": "_should_check_for_duration",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "switch": {
                          "arg": "symptoms_breath_shortness",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_breath_shortness_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחיל קוצר הנשימה?",
                                                "ar": "قبل كم يوم بدأ ضيق التنفس؟",
                                                "en": "How many days ago did the shortness of breath start?",
                                                "es": "¿Hace cuántos días comenzó la dificultad para respirar?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir des essoufflements ?",
                                                "ru": "Сколько дней назад появилась одышка?"
                                              }
                                            },
                                            "uid": "631aad4533"
                                          },
                                          {
                                            "uid": "b082a15df8",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_breath_shortness_duration"
                                            }
                                          }
                                        ],
                                        "uid": "13968fa905",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "95ac7918df"
                                }
                              ],
                              "uid": "652e0cb7c5"
                            }
                          ]
                        },
                        "uid": "d2c6fe0ee1"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_diarrhea",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_diarrhea_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחיל השלשול?",
                                                "ar": "قبل كم يوم بدأ الإسهال؟",
                                                "en": "How many days ago did the diarrhea start?",
                                                "es": "¿Hace cuántos días comenzó la diarrea?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir de la diarrhée ?",
                                                "ru": "Сколько дней назад начался понос?"
                                              }
                                            },
                                            "uid": "a298331ba6"
                                          },
                                          {
                                            "uid": "561c7b3822",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_diarrhea_duration"
                                            }
                                          }
                                        ],
                                        "uid": "e79c919f85",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "cfba860f07"
                                }
                              ],
                              "uid": "ffe0320334"
                            }
                          ]
                        },
                        "uid": "05f96dc979"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_lack_of_appetite_or_skipping_meals",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_lack_of_appetite_or_skipping_meals_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחיל חוסר התיאבון?",
                                                "ar": "قبل كم يوم بدأ فقدان الشهية؟",
                                                "en": "How many days ago did your loss of appetite start?",
                                                "es": "¿Hace cuántos días comenzó la falta de apetito?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir un manque d'appétit ?",
                                                "ru": "Сколько дней назад у вас пропал аппетит?"
                                              }
                                            },
                                            "uid": "1d6fd8fdd2"
                                          },
                                          {
                                            "uid": "a527c3e498",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_lack_of_appetite_or_skipping_meals_duration"
                                            }
                                          }
                                        ],
                                        "uid": "5c7e993dc3",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "de71229746"
                                }
                              ],
                              "uid": "3bb927fa1f"
                            }
                          ]
                        },
                        "uid": "d81343dba9"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_nausea_and_vomiting",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_nausea_and_vomiting_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחילו הבחילה או ההקאות?",
                                                "ar": "قبل كم يوم بدأ الغثيان أو التقيؤ؟",
                                                "en": "How many days ago did your nausea/vomiting start?",
                                                "es": "¿Hace cuántos días comenzaron las náuseas o vómitos?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir des nausées ou vomissements ?",
                                                "ru": "Сколько дней назад началась тошнота или рвота?"
                                              }
                                            },
                                            "uid": "42c16427a6"
                                          },
                                          {
                                            "uid": "74e3c4edd2",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_nausea_and_vomiting_duration"
                                            }
                                          }
                                        ],
                                        "uid": "2263c1c1d4",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "5ebe210399"
                                }
                              ],
                              "uid": "d76929434c"
                            }
                          ]
                        },
                        "uid": "06ce04181a"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_chills",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_chills_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחילו הצמרמורות?",
                                                "ar": "قبل كم يوم بدأت الإرتجافات؟",
                                                "en": "How many days ago did your chills start?",
                                                "es": "¿Hace cuántos días comenzaron los escalofríos?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir des frissons  ?",
                                                "ru": "Сколько дней назад началась дрожь?"
                                              }
                                            },
                                            "uid": "52c942befb"
                                          },
                                          {
                                            "uid": "60942857d5",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_chills_duration"
                                            }
                                          }
                                        ],
                                        "uid": "21de9a0acb",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "06e25cb285"
                                }
                              ],
                              "uid": "b267759fc6"
                            }
                          ]
                        },
                        "uid": "a7c465f40c"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_confusion",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_confusion_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחיל הבלבול?",
                                                "ar": "قبل كم يوم بدأ الهذيان؟",
                                                "en": "How many days ago did your confusion start?",
                                                "es": "¿Hace cuántos días comenzó a sentirse confundido?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir des états de confusion ?",
                                                "ru": "Сколько дней назад началась растерянность?"
                                              }
                                            },
                                            "uid": "def668eb32"
                                          },
                                          {
                                            "uid": "922cb16184",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_confusion_duration"
                                            }
                                          }
                                        ],
                                        "uid": "51dc8c589b",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "e01b89c53b"
                                }
                              ],
                              "uid": "866b209f3b"
                            }
                          ]
                        },
                        "uid": "d21af6d18d"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_tiredness_or_fatigue",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_tiredness_or_fatigue_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחילו העייפות או החולשה?",
                                                "ar": "قبل كم يوم بدأ التعب أو الضعف؟",
                                                "en": "How many days ago did your tiredness/weakness start?",
                                                "es": "¿Hace cuántos días comenzó la fatiga o la debilidad?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à ressentir de la faiblesse ou de la fatigue ?",
                                                "ru": "Сколько дней назад вы начали чувствовать усталость или слабость?"
                                              }
                                            },
                                            "uid": "f64a3ca6c1"
                                          },
                                          {
                                            "uid": "b492283eec",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_tiredness_or_fatigue_duration"
                                            }
                                          }
                                        ],
                                        "uid": "a6bad0841c",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "d98843cfcc"
                                }
                              ],
                              "uid": "1d9b6e662c"
                            }
                          ]
                        },
                        "uid": "f2abec71bf"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_smell_taste_loss",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_smell_taste_loss_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים אבד חוש הטעם או הריח?",
                                                "ar": "قبل كم يوم فقدت حاسة التذوق أو الشم؟",
                                                "en": "How many days ago did you lose your sense of taste or smell?",
                                                "es": "¿Hace cuántos días perdió el sentido del gusto o el olfato?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à perdre le sens du goût ou de l'odorat ?",
                                                "ru": "Сколько дней назад вы потеряли чувство вкуса или обоняние?"
                                              }
                                            },
                                            "uid": "9dbcf1aaa1"
                                          },
                                          {
                                            "uid": "e606240b11",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_smell_taste_loss_duration"
                                            }
                                          }
                                        ],
                                        "uid": "43cd8da827",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "89d41f0c4a"
                                }
                              ],
                              "uid": "fca035f89f"
                            }
                          ]
                        },
                        "uid": "6dcb10a7e0"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_rash",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_rash_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": "לפני כמה ימים התחילה הפריחה?",
                                            "uid": "34caead99d"
                                          },
                                          {
                                            "uid": "f623212a58",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_rash_duration"
                                            }
                                          }
                                        ],
                                        "uid": "1be718b729",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "0615475893"
                                }
                              ],
                              "uid": "7aa064b02a"
                            }
                          ]
                        },
                        "uid": "956625a9d4"
                      }
                    ],
                    "uid": "6b80372a3e"
                  }
                ]
              },
              "uid": "6342c885b5"
            },
            {
              "goto": "current-report-cough-symptoms",
              "uid": "4cd7908fba"
            },
            {
              "switch": {
                "arg": "_should_check_for_duration",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "switch": {
                          "arg": "symptoms_clogged_nose",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_clogged_nose_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחילו הנזלת או הגודש באף?",
                                                "ar": "قبل كم يوم بدأ سيلان الأنف أو الإنسداد في الأنف؟",
                                                "en": "How many days ago did the runny or blocked nose start?",
                                                "es": "¿Hace cuántos días comenzó la congestión y la secreción nasal?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir le nez qui coule ?",
                                                "ru": "Сколько дней назад у вас появился насморк или заложенный нос?"
                                              }
                                            },
                                            "uid": "4bb15b65f3"
                                          },
                                          {
                                            "uid": "e5a2624a34",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_clogged_nose_duration"
                                            }
                                          }
                                        ],
                                        "uid": "b3f0b38eb2",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "1ed01e5d21"
                                }
                              ],
                              "uid": "67fae4ec6f"
                            }
                          ]
                        },
                        "uid": "9c9b01175d"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_dry_cough",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_dry_cough_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחיל השיעול היבש?",
                                                "ar": "قبل كم يوم بدأ السُعال الجاف؟",
                                                "en": "How many days ago did the dry cough start?",
                                                "es": "¿Hace cuántos días comenzó la tos seca?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir une toux sèche ?",
                                                "ru": "Сколько дней назад у вас начался сухой кашель?"
                                              }
                                            },
                                            "uid": "a01597a7ee"
                                          },
                                          {
                                            "uid": "08c4bb5bf3",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_dry_cough_duration"
                                            }
                                          }
                                        ],
                                        "uid": "409bec6ae0",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "ac2a6175d0"
                                }
                              ],
                              "uid": "fddcbc1da5"
                            }
                          ]
                        },
                        "uid": "fd42ee4621"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_moist_cough",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_moist_cough_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחיל השיעול הלח, או השיעול עם הכיח?",
                                                "ar": "قبل كم يوم بدأ السُعال الرطب, أو السُعال مع البلغم؟",
                                                "en": "How many days ago did the wet cough (or mucus) start?",
                                                "es": "¿Cuándo comenzó una tos húmeda, o una tos con esputo?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir une toux grasse ou toux avec crachats ?",
                                                "ru": "Сколько дней назад начался влажный кашель или кашель с мокротой?"
                                              }
                                            },
                                            "uid": "92477ced39"
                                          },
                                          {
                                            "uid": "d3aef7df5a",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_moist_cough_duration"
                                            }
                                          }
                                        ],
                                        "uid": "7db0fe72cc",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "a6a502f7ac"
                                }
                              ],
                              "uid": "240d0aa054"
                            }
                          ]
                        },
                        "uid": "b17159d45e"
                      }
                    ],
                    "uid": "3405c7b0dc"
                  }
                ]
              },
              "uid": "178561bb54"
            },
            {
              "goto": "current-report-pain-symptoms",
              "uid": "750c97a025"
            },
            {
              "switch": {
                "arg": "_should_check_for_duration",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "switch": {
                          "arg": "symptoms_muscles_pain",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_muscles_pain_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחילו כאבי השרירים?",
                                                "ar": "قبل كم يوم بدأت أوجاع العضلات؟",
                                                "en": "How many days ago did the muscle pains start?",
                                                "es": "¿Hace cuántos días comenzaron los dolores de musculares?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir des douleurs musculaires ?",
                                                "ru": "Сколько дней назад у вас начались боли в мышцах?"
                                              }
                                            },
                                            "uid": "770a5aadee"
                                          },
                                          {
                                            "uid": "f79ce6fb5e",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_muscles_pain_duration"
                                            }
                                          }
                                        ],
                                        "uid": "2d4cc6c258",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "54eed85fa2"
                                }
                              ],
                              "uid": "de07469f92"
                            }
                          ]
                        },
                        "uid": "fac5e94aaa"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_headache",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_headache_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחילו כאבי הראש?",
                                                "ar": "قبل كم يوم بدأت أوجاع الرأس؟",
                                                "en": "How many days ago did the headaches start?",
                                                "es": "¿Hace cuántos días comenzaron los dolores de cabeza?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir des maux de tête ?",
                                                "ru": "Сколько дней назад началась головная боль?"
                                              }
                                            },
                                            "uid": "19b8292859"
                                          },
                                          {
                                            "uid": "a764f80857",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_headache_duration"
                                            }
                                          }
                                        ],
                                        "uid": "5358ce74be",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "8ee799edbb"
                                }
                              ],
                              "uid": "98743ccc07"
                            }
                          ]
                        },
                        "uid": "5f69140a8b"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_sore_throat",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_sore_throat_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחילו כאבי הגרון?",
                                                "ar": "قبل كم يوم بدأت أوجاع الحلق؟",
                                                "en": "How many days ago did the sore throat start?",
                                                "es": "¿Hace cuántos días comenzaron los dolores de garganta?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir des maux de gorge ?",
                                                "ru": "Сколько дней назад у вас появилась боль в горле?"
                                              }
                                            },
                                            "uid": "ee550afdc1"
                                          },
                                          {
                                            "uid": "fc30dfd365",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_sore_throat_duration"
                                            }
                                          }
                                        ],
                                        "uid": "53418b753b",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "d6a5358aab"
                                }
                              ],
                              "uid": "f8799174c3"
                            }
                          ]
                        },
                        "uid": "eb12c0d609"
                      },
                      {
                        "switch": {
                          "arg": "symptoms_abdominal_pain",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": true,
                              "steps": [
                                {
                                  "switch": {
                                    "arg": "symptoms_abdominal_pain_duration",
                                    "cases": [
                                      {
                                        "default": true
                                      },
                                      {
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "לפני כמה ימים התחילו כאבי הבטן?",
                                                "ar": "قبل كم يوم بدأت أوجاع البطن؟",
                                                "en": "How many days ago did the stomach ache start?",
                                                "es": "¿Hace cuántos días comenzó el dolor abdominal?",
                                                "fr": "Il y a quelques jours, avez-vous commencé à avoir des maux de ventre ?",
                                                "ru": "Сколько дней назад появились боли в животе?"
                                              }
                                            },
                                            "uid": "f6f3102ba5"
                                          },
                                          {
                                            "uid": "08394859d1",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "מספר הימים",
                                                  "ar": "عدد الأيام",
                                                  "en": "Number of days",
                                                  "es": "Número de días",
                                                  "fr": "Quelques jours",
                                                  "ru": "Кол-во дней"
                                                }
                                              },
                                              "variable": "symptoms_abdominal_pain_duration"
                                            }
                                          }
                                        ],
                                        "uid": "71f3cb19c3",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "b1c369f16a"
                                }
                              ],
                              "uid": "e46adac7ab"
                            }
                          ]
                        },
                        "uid": "2cbf1360eb"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "האם חשת בתסמינים אחרים בימים האחרונים? אם כן, מהם?",
                            "ar": "هل شعرت بأعراض أخرى في الأيام الأخيرة؟ اذا نعم, فما هي؟",
                            "en": "Have you felt any other symptoms during the last few days? If so, what?",
                            "es": "¿Has experimentado otros síntomas en los últimos días? ¿Si es así, cuáles?",
                            "fr": "Avez-vous ressenti d'autres symptômes ces derniers jours? Si oui, lequel?",
                            "ru": "Ощущали ли вы другие симптомы в последние дни? Если да, какие?"
                          }
                        },
                        "uid": "ed6ed4fb37"
                      },
                      {
                        "uid": "83d542472f",
                        "wait": {
                          "placeholder": {
                            ".tx": {
                              "_": "פרטו את התסמינים",
                              "ar": "إشرح ما هي الأعراض",
                              "en": "Give details of the symptoms",
                              "es": "Detalle los síntomas",
                              "fr": "Énumérer les symptômes",
                              "ru": "Перечислите симптомы"
                            }
                          },
                          "required": false,
                          "variable": "symptoms_other"
                        }
                      }
                    ],
                    "uid": "1fa9ee700f"
                  }
                ]
              },
              "uid": "31f71e288a"
            },
            {
              "goto": "current-report-temperature",
              "uid": "21e13e9a90"
            }
          ],
          "uid": "ee520e19a7"
        },
        {
          "name": "current-report-temperature",
          "steps": [
            {
              "switch": {
                "arg": "general_feeling",
                "cases": [
                  {
                    "match": "feel_good",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "למרות שאמרת קודם שההרגשה טובה, כדאי בתקופה הזו למדוד כל יום את חום הגוף.",
                            "ar": "بالرغم من انك ذكرت سابقًا أنك تشعر/ين بتحسن, من المُستحسن في هذه الفترة تتبع درجة حرارة الجسم بشكل يومي.",
                            "en": "Even though you reported feeling well, in this period it's good to take one's temperature daily.",
                            "es": "A pesar de que has informado sentirte bien, durante este período es conveniente controlar la fiebre a diario.",
                            "fr": "Même si vous vous sentez bien, il est recommandé pendant cette période de surveiller quotidiennement la température de votre corps.",
                            "ru": "Несмотря на то, что вы раньше сказали, что вы хорошо себя чувствуете, в эти дни стоит ежедневно измерять температуру."
                          }
                        },
                        "uid": "91f940ab0c"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "האם כבר נמדד חום היום?",
                            "ar": "هل قمت بقياس حرارتك اليوم؟",
                            "en": "Was the temperature taken today?",
                            "es": "¿Ya te has tomado la fiebre hoy?",
                            "fr": "Avez-vous déjà pris votre température au cours de la journée ? ",
                            "ru": "Вы уже измеряли температуру сегодня?"
                          }
                        },
                        "uid": "3c53fb2f06"
                      },
                      {
                        "uid": "36d6b55ab9",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, נמדד חום",
                                  "ar": "نعم، قمت بقياس الحرارة",
                                  "en": "Yes, temperature was checked",
                                  "es": "Sí, me he tomado la fiebre",
                                  "fr": "Oui, j'ai pris ma température",
                                  "ru": "Да, я измерял/а температуру"
                                }
                              },
                              "steps": [
                                {
                                  "goto": "current-report-ask-body-temperature",
                                  "uid": "14631f3588"
                                }
                              ],
                              "uid": "949c507f00"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "היום לא נמדד חום",
                                  "ar": "اليوم لم أقم بقياس الحرارة",
                                  "en": "Didn't take temperature today",
                                  "es": "Hoy no me he tomado la fiebre",
                                  "fr": "Je n'ai pas pris ma température aujourd'hui",
                                  "ru": "Сегодня не измерял/а температуру."
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "a968fdd528"
                  },
                  {
                    "match": "feel_bad",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם נמדד חום היום?",
                            "ar": "هل قمت بقياس حرارتك اليوم؟",
                            "en": "Was the temperature taken today?",
                            "es": "¿Te has tomado la fiebre hoy?",
                            "fr": "Avez-vous pris votre température aujourd'hui ? ",
                            "ru": "Измеряли ли вы температуру сегодня?"
                          }
                        },
                        "uid": "c930bb771f"
                      },
                      {
                        "uid": "479a691d3a",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, נמדד חום",
                                  "ar": "نعم، قمت بقياس الحرارة",
                                  "en": "Yes, temperature was checked",
                                  "es": "Sí, me he tomado la fiebre",
                                  "fr": "Oui, j'ai pris ma température",
                                  "ru": "Да, я измерял/а температуру"
                                }
                              },
                              "steps": [
                                {
                                  "goto": "current-report-ask-body-temperature",
                                  "uid": "396b062283"
                                }
                              ],
                              "uid": "1f8ef0a3d2"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "היום לא נמדד חום",
                                  "ar": "اليوم لم أقم بقياس الحرارة",
                                  "en": "Didn't take temperature today",
                                  "es": "Hoy no me he tomado la fiebre",
                                  "fr": "Je n'ai pas pris ma température aujourd'hui",
                                  "ru": "Сегодня не измерял/а температуру."
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "0d1cdea081"
                  }
                ]
              },
              "uid": "78dbfac628"
            }
          ],
          "uid": "89a20e8104"
        },
        {
          "name": "current-report-ask-body-temperature",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "ומה בדיוק המדחום אומר?",
                  "ar": "ماذا يقول ميزان الحرارة بالضبط؟",
                  "en": "What did the thermometer show?",
                  "es": "Y ¿Qué dice el termómetro exactamente?",
                  "fr": "Et quelle est la température indiquée par le thermomètre ?",
                  "ru": "И что точно показал градусник?"
                }
              },
              "uid": "8ec2583cd2"
            },
            {
              "uid": "87d1b57cc3",
              "wait": {
                "input-kind": "number",
                "input-max": 43,
                "input-min": 35,
                "input-step": 0.1,
                "placeholder": {
                  ".tx": {
                    "_": "מעלות חום, 35.0-43.0",
                    "ar": "درجات حرارة, 35.0-43.0",
                    "en": "Temperature, 35.0-43.0 degrees Celsius.",
                    "es": "Grados de fiebre, 35-43",
                    "fr": "Degrés celsius, 35.0-43.0",
                    "ru": "35.0-43.0, в градусах"
                  }
                },
                "variable": "temperature"
              }
            }
          ],
          "uid": "7c12e84cd3"
        },
        {
          "name": "current-report-top-level-symptoms",
          "steps": [
            {
              "uid": "536a638700",
              "wait": {
                "multi": true,
                "options": [
                  {
                    "field": "toplevel_symptoms_cough",
                    "show": {
                      ".tx": {
                        "_": "שיעולים או נזלת",
                        "ar": "سُعال او سيلان بالأنف",
                        "en": "Coughing or a runny nose",
                        "es": "Tos o secreción nasal",
                        "fr": "Toux ou nez qui coule",
                        "ru": "Кашель или насморк"
                      }
                    }
                  },
                  {
                    "field": "symptoms_breath_shortness",
                    "show": {
                      ".tx": {
                        "_": "קוצר נשימה",
                        "ar": "ضيق بالتنفس",
                        "en": "Shortness of breath",
                        "es": "Falta de aire al respirar",
                        "fr": "Essoufflement",
                        "ru": "Одышка"
                      }
                    }
                  },
                  {
                    "field": "toplevel_symptoms_pains",
                    "show": {
                      ".tx": {
                        "_": "כאבים",
                        "ar": "أوجاع",
                        "en": "Pain",
                        "es": "Dolores",
                        "fr": "Douleurs",
                        "ru": "Боли"
                      }
                    }
                  },
                  {
                    "field": "symptoms_diarrhea",
                    "show": {
                      ".tx": {
                        "_": "שלשול",
                        "ar": "إسهال",
                        "en": "Diarrhea",
                        "es": "Diarrea",
                        "fr": "Diarrhée",
                        "ru": "Понос"
                      }
                    }
                  },
                  {
                    "field": "symptoms_lack_of_appetite_or_skipping_meals",
                    "show": {
                      ".tx": {
                        "_": "חוסר תאבון או דילוג על ארוחות",
                        "ar": "فقدان الشهية أو تخطي وجبات الطعام",
                        "en": "Lack of appetite, or skipping meals",
                        "es": "Falta de apetito o saltear comidas",
                        "fr": "Perte d'appétit ou de saut de repas",
                        "ru": "Отсутствие аппетита или пропуск приемов пищи"
                      }
                    }
                  },
                  {
                    "field": "symptoms_nausea_and_vomiting",
                    "show": {
                      ".tx": {
                        "_": "בחילה או הקאות",
                        "ar": "غثيان أو تقيؤ",
                        "en": "Nausea or vomiting",
                        "es": "Náuseas o vómitos ",
                        "fr": "Nausée ou vomissements",
                        "ru": "Тошнота или рвота"
                      }
                    }
                  },
                  {
                    "field": "symptoms_chills",
                    "show": {
                      ".tx": {
                        "_": "צמרמורת",
                        "ar": "إرتجاف",
                        "en": "Shivers or chills",
                        "es": "Escalofríos",
                        "fr": "Frissons",
                        "ru": "Озноб"
                      }
                    }
                  },
                  {
                    "field": "symptoms_confusion",
                    "show": {
                      ".tx": {
                        "_": "בלבול",
                        "ar": "هذيان",
                        "en": "Disorientation or confusion",
                        "es": "Confusión",
                        "fr": "Confusion",
                        "ru": "Замешательство"
                      }
                    }
                  },
                  {
                    "field": "symptoms_tiredness_or_fatigue",
                    "show": {
                      ".tx": {
                        "_": "עייפות או חולשה",
                        "ar": "تعب او ضعف",
                        "en": "Fatigue or weakness",
                        "es": "Cansancio o debilidad",
                        "fr": "Fatigue ou faiblesse",
                        "ru": "Усталость или слабость"
                      }
                    }
                  },
                  {
                    "field": "symptoms_smell_taste_loss",
                    "show": {
                      ".tx": {
                        "_": "איבדתי את חוש הטעם או הריח",
                        "ar": "فقدت حاسة التذوق أو الشم",
                        "en": "Lost my sense of taste or smell",
                        "es": "Pérdida del sentido del olfato o el gusto",
                        "fr": "J'ai perdu le sens du goût ou l'odorat",
                        "ru": "Я потерял/а чувство вкуса или запаха"
                      }
                    }
                  },
                  {
                    "field": "symptoms_rash",
                    "show": "פריחה על העור"
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "<span class='empty'>אף אחד מהתסמינים האלה</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין תסמינים</span>",
                        "ar": "<span class='empty'>ولا أي واحد من هاي الأعراض</span>\n<span class='not-empty'>بس </span>\n<span class='none-selected'>لا يوجد أعراض</span>",
                        "en": "<span class='empty'>None of these symptoms</span>\n<span class='not-empty'>That's it</span>\n<span class='none-selected'>No symptoms</span>",
                        "es": "<span class='empty'>Ninguno de estos síntomas</span>\n<span class='not-empty'>Eso es todo</span>\n<span class='none-selected'>No hay síntomas</span>",
                        "fr": "<span class='empty'>Aucun des ces symptômes</span>\n<span class='not-empty'>C'est tout</span>\n<span class='none-selected'>Pas de symptômes </span>",
                        "ru": "<span class='empty'>Ни одного из этих симптомов</span>\n<span class='not-empty'>Всё</span>\n<span class='none-selected'>Нет симптомов</span>"
                      }
                    }
                  }
                ],
                "variable": "_var"
              }
            },
            {
              "do": {
                "cmd": "update_from_selection",
                "params": [
                  "record",
                  "_var"
                ]
              },
              "uid": "e478a0d84a"
            }
          ],
          "uid": "6c5d380604"
        },
        {
          "name": "current-report-cough-symptoms",
          "steps": [
            {
              "switch": {
                "arg": "toplevel_symptoms_cough",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "נשמח לעוד כמה פרטים לגבי השיעול והנזלת.",
                            "ar": "بيسعدنا نعرف كمان تفاصيل عن السُعال وسيلان الأنف.",
                            "en": "Can you tell us a little more about the coughing and runny nose?",
                            "es": "Nos gustaría obtener algunos datos más respecto a la tos y las secreciones nasales.",
                            "fr": "Nous aimerions en savoir plus sur la toux et le nez qui coule.",
                            "ru": "Расскажите нам, пожалуйста, побольше о симптомах кашля и насморка."
                          }
                        },
                        "uid": "4498417043"
                      },
                      {
                        "uid": "ba485b7226",
                        "wait": {
                          "multi": true,
                          "options": [
                            {
                              "field": "symptoms_clogged_nose",
                              "show": {
                                ".tx": {
                                  "_": "נזלת או גודש באף",
                                  "ar": "سيلان أو إنسداد بالأنف",
                                  "en": "Runny nose or nasal congestion",
                                  "es": "Mucosidad o congestión nasal",
                                  "fr": "Nez qui coule ou congestion nasale",
                                  "ru": "Насморк или заложенность носа"
                                }
                              }
                            },
                            {
                              "field": "symptoms_dry_cough",
                              "show": {
                                ".tx": {
                                  "_": "שיעול יבש",
                                  "ar": "سعال جاف",
                                  "en": "Dry cough",
                                  "es": "Tos seca",
                                  "fr": "Toux sèche",
                                  "ru": "Сухой кашель"
                                }
                              }
                            },
                            {
                              "field": "symptoms_moist_cough",
                              "show": {
                                ".tx": {
                                  "_": "שיעול לח, או שיעול עם כיח",
                                  "ar": "سُعال رطب, أو سُعال مع بلغم",
                                  "en": "Wet cough or wet cough with mucous",
                                  "es": "Tos grasa o tos con esputo (flema)",
                                  "fr": "Toux grasse ou toux avec crachats",
                                  "ru": "Влажный кашель или кашель с мокротой"
                                }
                              }
                            },
                            {
                              "class": "other",
                              "show": {
                                ".tx": {
                                  "_": "<span class='empty'>אף אחד מהתסמינים האלה</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין פרטים נוספים</span>",
                                  "ar": "<span class='empty'>ولا أي واحد من هاي الأعراض</span>\n<span class='not-empty'>بس </span>\n<span class='none-selected'>لا يوجد تفاصيل أخرى</span>",
                                  "en": "<span class='empty'>None of these symptoms</span>\n<span class='not-empty'>That's it</span>\n<span class='none-selected'>No further details</span>",
                                  "es": "<span class='empty'>Ninguno de estos síntomas</span>\n<span class='not-empty'>Eso es todo</span>\n<span class='none-selected'>No hay más detalles</span>",
                                  "fr": "<span class='empty'>Aucun des ces symptômes</span>\n<span class='not-empty'>C'est tout</span>\n<span class='none-selected'>Pas d'autres détails</span>      ",
                                  "ru": "<span class='empty'>Ни одного из этих симптомов</span>\n<span class='not-empty'>Всё</span>\n<span class='none-selected'>Нет дополнительной информации</span>"
                                }
                              }
                            }
                          ],
                          "variable": "_var"
                        }
                      },
                      {
                        "do": {
                          "cmd": "update_from_selection",
                          "params": [
                            "record",
                            "_var"
                          ]
                        },
                        "uid": "e45da0ef7d"
                      }
                    ],
                    "uid": "16bd40e2dc"
                  }
                ]
              },
              "uid": "f90ece8c4b"
            }
          ],
          "uid": "a7a1bb4959"
        },
        {
          "name": "current-report-pain-symptoms",
          "steps": [
            {
              "switch": {
                "arg": "toplevel_symptoms_pains",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "מה כואב בדיוק?",
                            "ar": "شو بيوجعك بالضبط؟",
                            "en": "Where does it hurt?",
                            "es": "¿Qué te duele exactamente?",
                            "fr": "Où avez-vous mal exactement ?",
                            "ru": "Где именно болит?"
                          }
                        },
                        "uid": "d592ad5db6"
                      },
                      {
                        "uid": "31fc600341",
                        "wait": {
                          "multi": true,
                          "options": [
                            {
                              "field": "symptoms_muscles_pain",
                              "show": {
                                ".tx": {
                                  "_": "כאבי שרירים",
                                  "ar": "وجع بالعضلات",
                                  "en": "Muscle pain",
                                  "es": "Dolor muscular",
                                  "fr": "Douleurs musculaires",
                                  "ru": "Мышечные боли"
                                }
                              }
                            },
                            {
                              "field": "symptoms_headache",
                              "show": {
                                ".tx": {
                                  "_": "כאבי ראש",
                                  "ar": "وجع رأس",
                                  "en": "Headache",
                                  "es": "Dolor de cabeza",
                                  "fr": "Maux de tête",
                                  "ru": "Головные боли"
                                }
                              }
                            },
                            {
                              "field": "symptoms_sore_throat",
                              "show": {
                                ".tx": {
                                  "_": "כאבי גרון",
                                  "ar": "وجع حلق",
                                  "en": "Sore throat",
                                  "es": "Dolor de garganta",
                                  "fr": "Maux de gorge",
                                  "ru": "Боли в горле"
                                }
                              }
                            },
                            {
                              "field": "symptoms_abdominal_pain",
                              "show": {
                                ".tx": {
                                  "_": "כאבי בטן",
                                  "ar": "أوجاع في البطن",
                                  "en": "stomach aches",
                                  "es": "Dolor de panza",
                                  "fr": "Douleurs abdominales",
                                  "ru": "Боли в животе"
                                }
                              }
                            },
                            {
                              "class": "other",
                              "show": {
                                ".tx": {
                                  "_": "<span class='empty'>אף אחד מהתסמינים האלה</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין פרטים נוספים</span>      ",
                                  "ar": "<span class='empty'>ولا أي واحد من هاي الأعراض</span>\n<span class='not-empty'>بس </span>\n<span class='none-selected'>لا يوجد تفاصيل أخرى</span>",
                                  "en": "<span class='empty'>None of these symptoms\n<span class='not-empty'>That's it</span>\n<span class='none-selected'>No further details</span>      ",
                                  "es": "<span class='empty'>Ninguno de estos síntomas</span>\n<span class='not-empty'>Eso es todo</span>\n<span class='none-selected'>No hay más información</span>",
                                  "fr": "<span class='empty'>Aucun des ces symptômes</span>\n<span class='not-empty'>C'est tout</span>\n<span class='none-selected'>Pas d'autres détails</span>      ",
                                  "ru": "<span class='empty'>Ни одного из этих симптомов</span>\n<span class='not-empty'>Всё</span>\n<span class='none-selected'>Нет дополонительной информации</span>      "
                                }
                              }
                            }
                          ],
                          "variable": "_var"
                        }
                      },
                      {
                        "do": {
                          "cmd": "update_from_selection",
                          "params": [
                            "record",
                            "_var"
                          ]
                        },
                        "uid": "7bbd6f3e3a"
                      }
                    ],
                    "uid": "6c9931a28a"
                  }
                ]
              },
              "uid": "8f88af58ea"
            }
          ],
          "uid": "7ca6e7b00e"
        },
        {
          "name": "exposures",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "הרבה אנשים נפגשים עכשיו, בעבודה ובמקומות אחרים -",
                  "ar": "الكثير من الأشخاص يجتمعون الآن, في العمل وفي أماكن أخرى -",
                  "en": "Many people meet now, at work and in other places -",
                  "es": "Mucha gente se reune ahora, en el trabajo y en otros lugares - ",
                  "fr": "Beaucoup de gens se rencontrent maintenant, au travail et ailleurs -",
                  "ru": "Много людей встречаются сейчас на работе и в других местах -"
                }
              },
              "uid": "868eb1b3f6"
            },
            {
              "say": {
                ".tx": {
                  "_": "האם ביממה האחרונה שהית בקרבת אנשים (<b>שאינם בני הבית</b>) למשך יותר מ-15 דקות ובמרחק של פחות מ-2 מטרים",
                  "ar": "هل كنت بقرب أشخاص مختلفين في آخر يومين (<b>ليسوا من أفراد أسرتك</b>) لأكثر من 15 دقيقة وبمسافة أقل من مترين",
                  "en": "During the last day, have you been with people (<b>that don't live in your house</b>) for more than 15 minutes, closer than 2 meters.",
                  "es": "¿Has estado en las últimas 24 horas con personas (<b>que no son miembros del hogar</b>) durante más de 15 minutos y a menos de 2 metros de distancia?",
                  "fr": "Au cours des dernières 24 heures, étiez-vous en présence de personnes (<b>qui n'habitent pas chez vous</b>) pendant plus de 15 minutes et à moins de 2 mètres ?",
                  "ru": "Находились ли вы за последние сутки около людей (<b>которые не живут с вами</b>) больше 15 минут и на расстoянии меньше 2-х метров?"
                }
              },
              "uid": "9f918e739e"
            },
            {
              "uid": "e1add559ab",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "לא",
                        "ar": "لا",
                        "en": "No",
                        "es": "No",
                        "fr": "Non",
                        "ru": "Нет"
                      }
                    }
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "כן",
                        "ar": "نعم",
                        "en": "Yes",
                        "es": "Sí",
                        "fr": "Oui",
                        "ru": "Да"
                      }
                    },
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "וכמה מהם היו מבוגרים מעל גיל 18?",
                            "ar": "وكم عدد الأشخاص البالغين فوق جيل ال 18؟",
                            "en": "How many of them were adults over the age of 18?",
                            "es": "¿Cuántos de ellos son adultos mayores de 18 años?",
                            "fr": "Combien d'entre eux sont des adultes de plus de 18 ans ?",
                            "ru": "А сколько из них взрослые старше 18 лет?"
                          }
                        },
                        "uid": "7f12f102aa"
                      },
                      {
                        "uid": "4997a3d599",
                        "wait": {
                          "input-kind": "number",
                          "input-max": 99,
                          "input-min": 0,
                          "placeholder": {
                            ".tx": {
                              "_": "מספר המבוגרים, 0-99, אם לא ידוע ניתן להשאיר ריק",
                              "ar": "عدد الأشخاص البالغين, 0-99, في حال لم يكن معروف بإمكانك تركه فارغًا",
                              "en": "Number of adults, 0-99, can be left empty if not known",
                              "es": "Número de adultos, 0-99, si se desconoce, puede dejarse en blanco",
                              "fr": "Nombre d'adultes, 0-99, si inconnu peut être laissé vide",
                              "ru": "Кол-во взрослых, только если известно, 0-99, "
                            }
                          },
                          "required": false,
                          "variable": "_met_above_18"
                        }
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "וכמה ילדים מתחת לגיל 18?",
                            "ar": "وكم عدد الأطفال تحت جيل 18؟",
                            "en": "And how many children under 18?",
                            "es": "¿ y cuántos menores de 18 años?",
                            "fr": "Et combien d'enfants de moins de 18 ans ?",
                            "ru": "А сколько детей до 18 лет?"
                          }
                        },
                        "uid": "03032534b2"
                      },
                      {
                        "uid": "b51b836c77",
                        "wait": {
                          "input-kind": "number",
                          "input-max": 99,
                          "input-min": 0,
                          "placeholder": {
                            ".tx": {
                              "_": "מספר הילדים, 0-99, אם לא ידוע ניתן להשאיר ריק",
                              "ar": "عدد الأطفال, 0-99, في حال لم يكن معروف بإمكانك تركه فارغًا",
                              "en": "Number of children, 0-99, can be left blank if not known",
                              "es": "Número de niños, 0-99, si se desconoce, puede dejarse en blanco",
                              "fr": "Nombre d'enfants, 0-99, si inconnu peut être laissé vide",
                              "ru": "Кол-во детей, только если известно, 0-99, "
                            }
                          },
                          "required": false,
                          "variable": "_met_under_18"
                        }
                      }
                    ],
                    "uid": "5056776476"
                  }
                ]
              }
            },
            {
              "do": {
                "cmd": "calculate_met_daily",
                "params": [
                  "record"
                ]
              },
              "uid": "f2d49a4869"
            }
          ],
          "uid": "ce7628ae51"
        },
        {
          "name": "end-of-report",
          "steps": [
            {
              "goto": "affiliations",
              "uid": "02d5f52542"
            },
            {
              "goto": "set-reminder",
              "uid": "33392c8ecc"
            },
            {
              "goto": "share",
              "uid": "ccc68125a7"
            }
          ],
          "uid": "a92af82c81"
        },
        {
          "name": "affiliations",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "ועכשיו, רוצה לענות גם על מספר שאלות לגבי תחושת לחץ ומצב רוח?",
                  "ar": "والآن, هل تريد/ين الإجابة أيضًا على عدد من الأسئلة المتعلقة بالشعور بالتوتر والمزاج؟ ",
                  "en": "Now, would you answer some questions about stress and mood?",
                  "es": "Y ahora, ¿le gustaría responder algunas preguntas sobre estrés y su estado de ánimo?",
                  "fr": "Et maintenant, aimeriez-vous répondre à quelques questions sur les sentiments de stresse et l'humeur ?",
                  "ru": "А сейчас можно предложить вам ответить на несколько вопросов об ощущении стресс и настроении?"
                }
              },
              "uid": "1d2d438c5d"
            },
            {
              "uid": "8284345c1b",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "כן, רוצה",
                        "ar": "نعم, أريد",
                        "en": "Yes, I would",
                        "es": "Si, me gustaría",
                        "fr": "Oui",
                        "ru": "Да, можно"
                      }
                    },
                    "value": "ok"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "בפעם אחרת",
                        "ar": "في مرة أخرى",
                        "en": "Another time",
                        "es": "En otro momento",
                        "fr": "Une autre fois",
                        "ru": "В другой раз"
                      }
                    },
                    "value": "later"
                  }
                ],
                "variable": "affiliate_questionnaires_preference"
              }
            },
            {
              "switch": {
                "arg": "affiliate_questionnaires_preference",
                "cases": [
                  {
                    "match": "ok",
                    "steps": [
                      {
                        "goto": "affiliate-alon-chen",
                        "uid": "f95c4ac5be"
                      }
                    ],
                    "uid": "34201dd1c8"
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "245b8d399c"
            }
          ],
          "uid": "fd0296aa5f"
        },
        {
          "name": "affiliate-alon-chen",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "פרופ׳ אלון חן ממכון וייצמן וצוותו חוקרים היבטים שונים של הנוירוביולוגיה של לחץ, ומבקשים את עזרת הציבור במילוי שאלון המעריך את רמת הלחץ והחרדה בקרב האוכלוסייה, למיפוי השפעותיה, גורמיה ואסטרטגיות ההתמודדות איתה.",
                  "ar": "بروفيسور ألون حن وفريقه من معهد وايزمن يبحثون جوانب مُختلفة من بيولوجيا الأعصاب تحت الضغوطات, ويطلبون مُساعدة الجمهور بتعبئة إستبيان الذي يُقيّم مستوى التوتر والقلق بين السكان لتحديد آثاره, أسبابه وطرق للتكيف معه.",
                  "en": "Professor Alon Chen of the Weizmann Institute and his team are researching different aspects of the neurobiology of stress, and are requesting help from the public by completing a questionnaire that estimates the level of stress and anxiety in the population and maps its effects, causes, and coping strategies.",
                  "es": "El profesor Alon Chen del Instituto Weizmann y su equipo están investigando varios aspectos de la neurobiología del estrés y están pidiendo la ayuda del público para completar un cuestionario que evalúa el nivel de estrés y ansiedad entre la población, para entender sus efectos, factores y estrategias de afrontamiento.",
                  "fr": "Le professeur Alon Chen de l'Institut Weizmann et son équipe étudient divers aspects de la neurobiologie du stress. Ils demandent l'aide du public pour remplir un questionnaire qui évalue le niveau de stress et d'anxiété dans la population, afin de cartographier ses effets, ses facteurs et ses stratégies d'adaptation.",
                  "ru": "Профессор Алон Хен из Института Вайцмана и его группа исследуют нейробиологические эффекты стресса и просят публику заполнить анкету, которая оценивает уровень стресса среди населения. Это поможет исследователям оценить влияние стресса, его причины и предложить стратегию по его преодолению."
                }
              },
              "uid": "ed824c7891"
            },
            {
              "say": {
                ".tx": {
                  "_": "עבור מי הדיווח?",
                  "ar": "مِن أجل مَن الإستبيان التالي؟",
                  "en": "For whom is the report?",
                  "es": "¿Sobre quién esta informando?",
                  "fr": "Pour qui est le rapport ?",
                  "ru": "За кого отчет?"
                }
              },
              "uid": "a18a5913a8"
            },
            {
              "do": {
                "cmd": "affiliate_alon_chen_prepare",
                "params": [
                  {
                    ".tx": {
                      "_": "בעצם, לא היום",
                      "ar": "في الواقع, ليس اليوم",
                      "en": "Not tody",
                      "es": "En realidad, hoy no",
                      "fr": "En fait, pas aujourd'hui",
                      "ru": "Нет, не сегодня"
                    }
                  }
                ],
                "variable": "_affiliate_alon_chen_options"
              },
              "uid": "5831418d24"
            },
            {
              "uid": "5439660974",
              "wait": {
                "optionsFrom": "_affiliate_alon_chen_options",
                "variable": "_affiliate_alon_chen_choice"
              }
            },
            {
              "do": {
                "cmd": "affiliate_alon_chen_action",
                "params": [
                  "record",
                  "_affiliate_alon_chen_choice"
                ]
              },
              "uid": "d82c7b1986"
            }
          ],
          "uid": "91e09012bf"
        },
        {
          "name": "share",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "עוד עניין קטן… יעזור מאוד אם גם החברים והקרובים שלך ישתתפו. רוצה לשתף אותם?",
                  "ar": "هناك مسألة أخرى...سيُساعدنا كثيرًا إذا إشترك أيضًا أصدقاؤك وأقاربك. هل تُريد/ين مُشاركتهم؟",
                  "en": "One more thing... it would really help if your friends and relatives also participate. Would you like to let them know about the report?",
                  "es": "Otro detalle... Ayudaría mucho si participarán también tus conocidos. ¿Quieres compartir esto con ellos?",
                  "fr": "Une autre petite question… cela aiderait beaucoup si vos amis et vos proches remplissent également ce questionnaire. Vous voulez partager ce questionnaire ?",
                  "ru": "И ещё одно маленькое дело... Нам очень поможет, если ваши друзья и родственники примут участие в нашем проекте.  Хотите с ними поделиться?"
                }
              },
              "uid": "4e48cfc7d6"
            },
            {
              "uid": "feef17d055",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "כן, אשמח לשתף",
                        "ar": "نعم, يُسعدني أن أشارك",
                        "en": "Yes, I'll be happy to share",
                        "es": "Sí, me gustaría compartir",
                        "fr": "Oui, je souhaiterais partager",
                        "ru": "Да, буду рад/а поделиться"
                      }
                    },
                    "steps": [
                      {
                        "do": {
                          "cmd": "share_action",
                          "variable": "event_share_result"
                        },
                        "uid": "8c1c1c031a"
                      },
                      {
                        "switch": {
                          "arg": "event_share_result",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "match": "copied",
                              "steps": [
                                {
                                  "do": {
                                    "cmd": "toaster",
                                    "params": [
                                      {
                                        ".tx": {
                                          "_": "הקישור לדיווח היומי הועתק ללוח!",
                                          "ar": "تم نسخ الرابط للإستبيان اليومي إلى اللوح!",
                                          "en": "The link to the daily report has been copied to the clipboard!",
                                          "es": "El enlace al informe diario se ha copiado al calendario",
                                          "fr": "Le lien du rapport quotidien a été copié dans le presse-papiers !",
                                          "ru": "Ссылка на ежедневный отчёт скопированa"
                                        }
                                      }
                                    ]
                                  },
                                  "uid": "49049c25a9"
                                }
                              ],
                              "uid": "402a230a4a"
                            },
                            {
                              "match": "shared",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "תודה רבה על השיתוף!",
                                      "ar": "شكرًا على المُشاركة!",
                                      "en": "Thanks for sharing!",
                                      "es": "¡Muchas gracias por compartir!",
                                      "fr": "Merci beaucoup pour le partage !",
                                      "ru": "Спасибо, что поделились нашeй ссылкой!"
                                    }
                                  },
                                  "uid": "862a9c2c56"
                                }
                              ],
                              "uid": "494ead23fc"
                            }
                          ]
                        },
                        "uid": "06bf6f3a2f"
                      }
                    ],
                    "uid": "867192e73f",
                    "value": true
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "לא עכשיו",
                        "ar": "لاحقًا ",
                        "en": "Not now",
                        "es": "Ahora no",
                        "fr": "Pas maintenant",
                        "ru": "Не сейчас"
                      }
                    },
                    "value": false
                  }
                ],
                "variable": "event_share_action"
              }
            }
          ],
          "uid": "aa10bba14c"
        },
        {
          "name": "set-reminder",
          "steps": [
            {
              "do": {
                "cmd": "reminder_status",
                "params": [
                  "record"
                ],
                "variable": "action_reminder_required"
              },
              "uid": "bd6c017d59"
            },
            {
              "switch": {
                "arg": "action_reminder_required",
                "cases": [
                  {
                    "default": true,
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "יש כמה דרכים שבהן נוכל להזכיר לך לחזור ולספר לנו מה שלומך, שננסה?",
                            "ar": "هناك عدة طرق التي من خلالها يُمكننا تذكيرك بالعودة لتُخبرنا/تُخبرينا كيف حالك, هل تُريد/ين هذا؟",
                            "en": "There are a number of ways we can remind you to return and tell us about how you feel. Shall we try?",
                            "es": "Puedo ofrecerte algunas maneras para recordarte regresar a contarnos cómo estás, ¿quieres que lo probemos?",
                            "fr": "Il y a plusieurs façons de vous rappeler de revenir et de nous dire comment vous allez,  voulez-vous essayer ?",
                            "ru": "Есть несколько способов, которыми мы сможем напоминать вам рассказать нам, как у вас дела. Попробуем?"
                          }
                        },
                        "uid": "1821905288"
                      },
                      {
                        "uid": "0138ef5e2d",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, אשמח לתזכורת",
                                  "ar": "نعم,  يُسعدني ان تقوموا بتذكيري",
                                  "en": "Yes, I would be happy to get a reminder",
                                  "es": "Sí, me gustaría recibir recordatorios",
                                  "fr": "Oui, je souhaiterais un rappel",
                                  "ru": "Да, я хочу напоминание"
                                }
                              },
                              "steps": [
                                {
                                  "goto": "reminder-choose-method",
                                  "uid": "d7b1cb4925"
                                }
                              ],
                              "uid": "e4546e3d72",
                              "value": "wanted"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "כבר יש לי תזכורת, תודה",
                                  "ar": "يوجد لدي تذكير, شكرًا",
                                  "en": "I already have a reminder, thanks",
                                  "es": "Ya tengo un recordatorio, gracias",
                                  "fr": "J'ai déjà un rappel, merci",
                                  "ru": "У меня уже есть напоминание, спасибо"
                                }
                              },
                              "value": "already_set"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא, אין צורך, יש לי זכרון מצויין!",
                                  "ar": "لا, لست بحاجة لذلك, لدي ذاكرة قوية!",
                                  "en": "It's not necessary, I have a great memory!",
                                  "es": "No, no hace falta, ¡mi memoria es excelente!",
                                  "fr": "Non, pas besoin, j'ai une excellente mémoire !",
                                  "ru": "Нет, не нужно, у меня отличная память!"
                                }
                              },
                              "value": "not_wanted"
                            }
                          ],
                          "variable": "action_reminder_wanted"
                        }
                      }
                    ],
                    "uid": "6e65389281"
                  },
                  {
                    "match": "not-required",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "תודה רבה שחזרת לדווח. מחכים לשמוע ממך שוב",
                            "ar": "شكرًا لانك عُدت لتعبئة الإستبيان. في إنتظار سماع أخبارك ",
                            "en": "Thanks for returning to report. We look forward to hearing from you again",
                            "es": "Muchas gracias por volver a informar. Estamos esperando oír de ti",
                            "fr": "Merci beaucoup d'être revenu. Hâte de savoir comment vous allez",
                            "ru": "Большое спасибо, что вы снова заполняете отчёт. Будем рады снова от вас услышать."
                          }
                        },
                        "uid": "26a4dafad7"
                      }
                    ],
                    "uid": "441056f822"
                  }
                ]
              },
              "uid": "cdaef4bda3"
            }
          ],
          "uid": "df4c900aa4"
        },
        {
          "name": "reminder-choose-method",
          "steps": [
            {
              "do": {
                "cmd": "reminder_choose_method_show_widget",
                "params": [
                  "record"
                ],
                "variable": "action_reminder_selected"
              },
              "uid": "cbf65cb8cf"
            },
            {
              "switch": {
                "arg": "action_reminder_selected",
                "cases": [
                  {
                    "match": "notification",
                    "steps": [
                      {
                        "goto": "reminder-notification",
                        "uid": "0c7fb69962"
                      }
                    ],
                    "uid": "812263f9a6"
                  },
                  {
                    "match": "android-app",
                    "steps": [
                      {
                        "goto": "reminder-app",
                        "uid": "e3c5b80d2f"
                      }
                    ],
                    "uid": "252726ece7"
                  },
                  {
                    "match": "iphone-app",
                    "steps": [
                      {
                        "goto": "reminder-app",
                        "uid": "448a61b57c"
                      }
                    ],
                    "uid": "e89ebd4a8d"
                  },
                  {
                    "match": "calendar",
                    "steps": [
                      {
                        "goto": "reminder-calendar",
                        "uid": "75d7f22d5e"
                      }
                    ],
                    "uid": "a8ba945b20"
                  },
                  {
                    "match": "telegram",
                    "steps": [
                      {
                        "goto": "reminder-telegram",
                        "uid": "042defdb9e"
                      }
                    ],
                    "uid": "b3e5202448"
                  }
                ]
              },
              "uid": "0126a575eb"
            }
          ],
          "uid": "1cbf1b052b"
        },
        {
          "name": "reminder-notification",
          "steps": [
            {
              "do": {
                "cmd": "banner",
                "params": [
                  {
                    ".tx": {
                      "_": "אשרו קבלת התראות מן האתר על מנת שנוכל להזכיר לכם למלא את השאלון",
                      "ar": "قوموا بتأكيد تلقي التنبيهات من الموقع حتى نتمكن من تذكيركم بتعبئة الإستبيان",
                      "en": "Please allow notifications from the site so we can remind you to fill out the form",
                      "es": "Permite recibir alertas del sitio para que podamos recordarte rellenar el cuestionario",
                      "fr": "Confirmez la réception des alertes du site afin que nous puissions vous rappeler de remplir le questionnaire",
                      "ru": "Разрешите получение уведомлений от нашего сайта, чтобы мы могли напомнить вам заполнить отчёт."
                    }
                  },
                  {
                    ".tx": {
                      "_": "בסדר",
                      "ar": "ممتاز",
                      "en": "Fine",
                      "es": "OK",
                      "fr": "D'accord",
                      "ru": "Хорошо"
                    }
                  }
                ],
                "variable": "action_reminder_notification_approved"
              },
              "uid": "c375cfc633"
            },
            {
              "switch": {
                "arg": "action_reminder_notification_approved",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "do": {
                          "cmd": "install_notification"
                        },
                        "uid": "c515b3f782"
                      }
                    ],
                    "uid": "49bb5f86fa"
                  }
                ]
              },
              "uid": "dd67721e4c"
            }
          ],
          "uid": "78c91b40af"
        },
        {
          "name": "reminder-app",
          "steps": [
            {
              "do": {
                "cmd": "banner",
                "params": [
                  {
                    ".tx": {
                      "_": "הורידו את האפליקציה ונזכיר לכם כל יום ב-20:00",
                      "ar": "قوموا بتحميل التطبيق وسوف نقوم بتذكيركم كل يوم ب-20:00",
                      "en": "Download the app, and we will remind you each day at 8pm",
                      "es": "Descarga la aplicación y te lo recordaremos todos los días a las 20:00",
                      "fr": "Téléchargez l'application et nous vous enverrons un rappel tous les jours à 20h00",
                      "ru": "Скачайте аппликацию и мы напомним вам каждый день в 20:00"
                    }
                  },
                  {
                    ".tx": {
                      "_": "להורדת האפליקציה",
                      "ar": "لتحميل التطبيق",
                      "en": "App download",
                      "es": "Descargar la aplicación",
                      "fr": "Téléchargez l'application",
                      "ru": "Скачать аппликацию"
                    }
                  }
                ],
                "variable": "action_reminder_app_approved"
              },
              "uid": "cb2ffa1829"
            },
            {
              "switch": {
                "arg": "action_reminder_app_approved",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "do": {
                          "cmd": "install_app",
                          "params": [
                            "record"
                          ]
                        },
                        "uid": "0eb7d1be6f"
                      }
                    ],
                    "uid": "b6c3cf69d9"
                  }
                ]
              },
              "uid": "c23a45210a"
            }
          ],
          "uid": "92af1beb96"
        },
        {
          "name": "reminder-calendar",
          "steps": [
            {
              "do": {
                "cmd": "banner",
                "params": [
                  {
                    ".tx": {
                      "_": "לחצו על הכפתור להתקנת התזכורת ביומן",
                      "ar": "إضغطوا الزر لتثبيت التذكير في اليوميات",
                      "en": "Press the button to install a calendar reminder",
                      "es": "Pulsa el botón para configurar el recordatorio diario",
                      "fr": "Cliquez sur le bouton pour ajouter un rappel au calendrier",
                      "ru": "Нажмите на кнопку, чтобы добавить напоминание в календарь."
                    }
                  },
                  {
                    ".tx": {
                      "_": "להורדה",
                      "ar": "للتحميل",
                      "en": "Download",
                      "es": "Descarga",
                      "fr": "Télécharger",
                      "ru": "Скачать"
                    }
                  }
                ],
                "variable": "action_reminder_calendar_approved"
              },
              "uid": "1e4267eebb"
            },
            {
              "switch": {
                "arg": "action_reminder_calendar_approved",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "do": {
                          "cmd": "install_calendar"
                        },
                        "uid": "3c369219df"
                      },
                      {
                        "do": {
                          "cmd": "banner",
                          "params": [
                            {
                              ".tx": {
                                "_": "אם כלום לא קורה, פתחו את הקובץ corona_reminder.ics מה״הורדות״",
                                "ar": "إذا لم يحدث تغير, إفتحوا الملف corona_reminder.ics من ״التحميلات״",
                                "en": "If it doesn't happen automatically, open the file corona_reminder.ics in the \"Downloads\" folder",
                                "es": "Si no sucede nada, abre el archivo corona_reminder.ics en las \"Descargas\"",
                                "fr": "Si rien ne se passe, ouvrez le fichier corona_reminder.ics à partir des \"Téléchargements\"",
                                "ru": "Если ничего не происходит, откройте файл corona_reminder.ics в папке \"Загрузки\" (\"Downloads\")"
                              }
                            },
                            {
                              ".tx": {
                                "_": "המשך",
                                "ar": "إستمر",
                                "en": "Continue",
                                "es": "Continuar",
                                "fr": "Continuation",
                                "ru": "Продолжение"
                              }
                            }
                          ]
                        },
                        "uid": "6ade096f21"
                      }
                    ],
                    "uid": "6fd48d1778"
                  }
                ]
              },
              "uid": "676dc08b04"
            }
          ],
          "uid": "8a8a72a8bd"
        },
        {
          "name": "reminder-telegram",
          "steps": [
            {
              "do": {
                "cmd": "banner",
                "params": [
                  {
                    ".tx": {
                      "_": "<b>שימו לב: </b> בוט הטלגרם מופעל על ידי צד שלישי וללא כל אחריות מצדנו. מומלץ לבדוק את מדיניות שמירת המידע והפרטיות של הבוט לפני השימוש",
                      "ar": "<b>إنتبهوا: </b> البوت في تيليغرام يعمل عن طريق طرف ثالث ونحن غير مسؤولين عنه. من المُفضل التحقق من سياسة الخصوصية وحفظ المعلومات للبوت قبل الإستخدام .",
                      "en": "<b>Attention: </b> The telegram bot is operated by a third party and we bear no responsibility for it. It's recommended to check out the bot's privacy and data storage policies before using it.",
                      "es": "<b>Atención: </b> El bot de Telegram está operado por un ente ajeno y no es de nuestra responsabilidad. Se recomienda controlar las políticas de protección de datos y privacidad del bot antes de utilizarlo.",
                      "fr": "<b>Attention:</b> le bot Telegram est exploité par un tiers et sans aucune responsabilité de notre part. Il est recommandé de vérifier les informations du bot et la politique de confidentialité avant utilisation",
                      "ru": "<b>Внимание: </b>Бот в Telegram управляется третьей стороной без какой-либо ответственности с нашей стороны. Мы рекомендуем проверить политику конфиденциальности и политику хранения информации бота перед использованием."
                    }
                  },
                  {
                    ".tx": {
                      "_": "בסדר",
                      "ar": "ممتاز",
                      "en": "Fine",
                      "es": "OK",
                      "fr": "D'accord",
                      "ru": "Хорошо"
                    }
                  }
                ],
                "variable": "action_reminder_telegram_approved"
              },
              "uid": "bed91ce04a"
            },
            {
              "switch": {
                "arg": "action_reminder_telegram_approved",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "match": true,
                    "steps": [
                      {
                        "do": {
                          "cmd": "install_telegram"
                        },
                        "uid": "d1a8995e02"
                      }
                    ],
                    "uid": "988d4cf3f6"
                  }
                ]
              },
              "uid": "fcf7b80a2f"
            }
          ],
          "uid": "3a04ebabe1"
        }
      ]
    },
    {
      "keys": [
        {
          "name": "calendarTitle",
          "show": {
            ".tx": {
              "_": "זמן לדיווח היומי למאבק בקורונה!",
              "ar": "حان وقت التبليغ اليومي لمواجهة الكورونا!",
              "en": "Time for your daily report in the battle against Covid-19!",
              "es": "¡Es hora del informe diario para la lucha contra coronavirus!",
              "fr": "C'est le moment du rapport quotidien pour le combat contre le Corona !",
              "ru": "Пора заполнить ежедневный отчёт для борьбы с Коронавирусом!"
            }
          }
        },
        {
          "name": "calendarBody",
          "show": {
            ".tx": {
              "_": "הגיע הזמן לדווח שוב כיצד אתם מרגישים! רק ביחד ננצח את הקורונה 💪🏽!",
              "ar": "حان الوقت ان تخبرونا مجددًا كيف حالكم! معًا فقط سوف نهزم الكورونا💪🏽!",
              "en": "Time to report again about how you're doing! It takes all of us to beat the Corona virus 💪🏽!",
              "es": "¡Llegó la hora de nos vuelvas a contar cómo te sientes! Sólo juntos venceremos a coronavirus 💪🏽!",
              "fr": "Il est de nouveau temps de décrire votre état de santé ! Nous allons gagner contre le Corona ensemble !",
              "ru": "Пора снова заполнить отчёт о здоровье! Вместе мы победим Коронавирус! "
            }
          }
        },
        {
          "name": "reminder:notification",
          "show": {
            ".tx": {
              "_": "התראה בדפדפן",
              "ar": "تنبيه في المتصفح",
              "en": "Browser alert",
              "es": "Alerta en el navegador",
              "fr": "Alerte dans le navigateur ",
              "ru": "Уведомление в браузере"
            }
          }
        },
        {
          "name": "reminder:calendar",
          "show": {
            ".tx": {
              "_": "תזכורת ביומן",
              "ar": "تذكير في اليوميات",
              "en": "Calendar reminder",
              "es": "Recordatorio diario",
              "fr": "Rappel au calendrier",
              "ru": "Напоминание в календаре"
            }
          }
        },
        {
          "name": "reminder:android-app",
          "show": {
            ".tx": {
              "_": "אפליקציית האנדרואיד שלנו",
              "ar": "تطبيقنا في الأندرويد",
              "en": "Our Android application",
              "es": "Nuestra aplicación de Android",
              "fr": "Notre application Android",
              "ru": "Наша аппликация для Android"
            }
          }
        },
        {
          "name": "reminder:iphone-app",
          "show": {
            ".tx": {
              "_": "אפליקציית האייפון שלנו",
              "ar": "تطبيقنا في الأيفون",
              "en": "Our iPhone application",
              "es": "Nuestra aplicación de iOS",
              "fr": "Notre application Iphone",
              "ru": "Наша аппликация для iPhone"
            }
          }
        },
        {
          "name": "reminder:telegram",
          "show": {
            ".tx": {
              "_": "בוט טלגרם",
              "ar": "بوت تيليغرام",
              "en": "Telegram bot",
              "es": "Telegram bot",
              "fr": "Bot Telegram",
              "ru": "Бот в Telegram"
            }
          }
        }
      ],
      "name": "generic-translation-assets"
    }
  ]
};
