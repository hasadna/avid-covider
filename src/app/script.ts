
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
                            "_": "התשובות שלך לכמה שאלות קצרות יעזרו מאוד במאמץ המשותף לעצור את התפרצות הקורונה",
                            "ar": "أجوبتك لشوية أسئلة قصيرة رح تساعد كثير بمسعانا المشترك لإيقاف إنتشار الكورونا",
                            "en": "Answering a few short questions would contribute a lot to our joint effort to stop the Corona outbreak",
                            "es": "Tus respuestas a algunas preguntas cortas nos ayudarán significativamente en el esfuerzo conjunto de detener el brote de coronavirus. ",
                            "fr": "Vos réponses à ces courtes questions nous aideront énormément dans notre  commun effort visant à arrêter la propagation du Coronavirus",
                            "ru": "Ваши ответы на несколько коротких вопросов очень помогут в совместных усилиях остановить вспышку Коронавируса"
                          }
                        },
                        "uid": "724fd9e1ce"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "אם זה בסדר, אבקש לדעת כמה פרטים אנונימיים לטובת המחקר",
                            "ar": "إذا ممكن, بدي أعرف شوية تفاصيل من أجل البحث",
                            "en": "We have a few anonymous questions for you, to help the research",
                            "es": "Si te parece, me gustaría saber algunos datos anónimos a favor de la investigación",
                            "fr": "Si cela vous convient, je souhaiterais prendre connaissance de quelques détails anonymes pour cette étude",
                            "ru": "Если Вы не против, мы попросим Вас заполнить анонимный отчет для научного исследования."
                          }
                        },
                        "uid": "c50fbc1b4d"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "נתחיל בדיווח עבורך, בסופו יתאפשר גם דיווח עבור בני משפחה נוספים",
                            "ar": "أولا إستبيانك انت, ولاحقا ممكن تعبئة إستبيان لأشخاص آخرين من عائلتك",
                            "en": "Let's start with reporting how you are feeling. Later you can submit another report for your family members",
                            "es": "Empezaremos con tu informe, y después también será posible informar acerca de otros miembros de la familia",
                            "fr": "Commençons à remplir ce questionnaire sur votre état de santé. Vous aurez aussi la possibilité de le remplir pour d'autres membres de votre famille",
                            "ru": "Начнем с вопросов о Вашем здоровье. После этого Вы сможете также заполнить отчет и о других членах семьи."
                          }
                        },
                        "uid": "7fd1d1ea6d"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "הכי טוב כשכולם מדווחים על עצמם בכל יום",
                            "ar": "مُفضّل أن يقوم الجميع بتعبئة الإستبيان عن أنفسهم يوميًا",
                            "en": "The best way is to have each family member report how they are feeling every day",
                            "es": "Lo mejor es que todos informen sobre sí mismos cada día",
                            "fr": "Le mieux serait que chacun remplisse ce questionnaire chaque jour",
                            "ru": "Лучше всего когда каждый ежедневно заполняет анкету сам за себя"
                          }
                        },
                        "uid": "2af5c3ecb3"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "אבל אם זה לא מסתדר, אפשר להקריא להם את השאלות או פשוט לענות בשמם",
                            "ar": "لكن إذا كان صعب, ممكن تقرأ/ي لهم الأسئلة أو ببساطة أن تُجيب/ي بإسمهم",
                            "en": "Or, if it's more convenient, you can read them the questions or just answer for them",
                            "es": "Pero si no es posible, puedes leerles las preguntas o responder en su lugar",
                            "fr": "Mais si cela ne convient pas, vous pouvez leur lire les questions ou simplement répondre en leur nom",
                            "ru": "Но если не получается, вы можете зачитать им вопросы или просто заполнить за них"
                          }
                        },
                        "uid": "82dee13fa2"
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
                            "_": "הדיווחים שלך ושל אחרים עוזרים לנו מאוד במחקר ובניסיון להיאבק בקורונה",
                            "ar": "إستباينك وإستبيانات الآخرين بتساعدنا كثير بالبحث وبمحاولة محاربة الكورونا",
                            "en": "The reports that you and others have submitted go a long way to support the research and the battle against the Corona Virus",
                            "es": "Tu informe y el de los demás nos ayudan mucho en la investigación y en el intento de combatir el coronavirus",
                            "fr": "Vos rapports et ceux des autres nous aident énormément dans la recherche et la lutte contre le Corona",
                            "ru": "Ваши отчеты и отчеты других очень помогают нам в исследовании и попытке борьбы с Коронавирусом"
                          }
                        },
                        "uid": "a128f62aa8"
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
              "goto": "covid19-checks",
              "uid": "48accaa909"
            },
            {
              "goto": "insulation",
              "uid": "699a47659b"
            },
            {
              "goto": "current-report",
              "uid": "9def4af95e"
            },
            {
              "goto": "exposures",
              "uid": "56cb1f9459"
            },
            {
              "say": {
                ".tx": {
                  "_": "זהו, סיימנו את הדיווח עבור {{alias}}",
                  "ar": "أنهينا تعبئة الإستبيان ل{{alias}}",
                  "en": "You're done submitting a form for {{alias}}",
                  "es": "Listo, hemos finalizado el informe acerca de  {{alias}}",
                  "fr": "C'est tout, nous avons fini ce questionnaire pour {{alias}}",
                  "ru": "Всё, закончили отчёт о {{alias}}"
                }
              },
              "uid": "a2c9757617"
            },
            {
              "do": {
                "cmd": "save_report",
                "params": [
                  "record"
                ]
              },
              "uid": "70b6831d1c"
            },
            {
              "goto": "reporting-loop",
              "uid": "76a36a5d14"
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
                            "ar": "لمين بدك تقوم/ي بتعبئة الإستبيان؟",
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
                            "דיווח חדש ב{{street}} {{city_town}}",
                            "דיווח חדש בכתובת אחרת",
                            "כל בני ביתי כבר דיווחו"
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
                              "show": "בן",
                              "value": "male"
                            },
                            {
                              "show": "בת",
                              "value": "female"
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
                            "בן {{age}} מ{{street}} {{city_town}}",
                            "בת {{age}} מ{{street}} {{city_town}}"
                          ],
                          "variable": "alias"
                        },
                        "uid": "8b55168adb"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "נהדר, בכדי לשמור על הפרטיות שלך, בדיווחים הבאים נקרא לך פשוט {{alias}}",
                            "ar": "ممتاز, من أجل المحافظة على خصوصيتك, في المرات القادمة سوف نسميك {{alias}}",
                            "en": "Great. In the interest of privacy, in your following daily reports we'll address you as  {{alias}}",
                            "es": "Excelente, para preservar tu privacidad, en los próximos informes, te llamaremos simplemente  {{alias}}",
                            "fr": "Parfait, afin de protéger votre confidentialité, dans les prochains questionnaires, nous vous appellerons simplement {{alias}}",
                            "ru": "Отлично. Чтобы сохранить вашу конфиденциальность, в следующих отчетах мы просто вас будем называть {{alias}}"
                          }
                        },
                        "uid": "bf62d4b8ec"
                      }
                    ],
                    "uid": "1baea83011",
                    "undefined": true
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "65a50a6980"
            },
            {
              "do": {
                "cmd": "is_adult",
                "params": [
                  "record"
                ],
                "variable": "_is_adult"
              },
              "uid": "32853d136a"
            },
            {
              "do": {
                "cmd": "fetch_household_data",
                "params": [
                  "record"
                ]
              },
              "uid": "895892c2cc"
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
                            "_": "יש לנו כמה שאלות (שנשאל פעם אחת) לגבי הבית ב{{street}} {{city_town}} -",
                            "ar": "في كم سؤال (بدنا نسألهن مرة واحدة فقط) بالنسبة للبيت بـ {{street}} في مدينة {{city_town}} -",
                            "en": "We have some questions (which we will ask just once) about the house on  {{street}}, {{city_town}}",
                            "es": "Tenemos algunas preguntas (solo por esta vez) sobre la casa en {{street}} {{city_town}}",
                            "fr": "Nous avons quelques questions (que nous ne poserons qu'une seule fois) concernant la maison située {{street}} {{city_town}}",
                            "ru": "У нас есть несколько вопросов (которые больше не будем повторять) про {{street}} {{city_town}} "
                          }
                        },
                        "uid": "621928ce03"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "כמה מבוגרים מעל לגיל 18 גרים בבית?",
                            "ar": "عدد الأشخاص البالغين فوق جيل ال 18 الذين يسكنون في البيت؟",
                            "en": "How many adults over 18 years old live in the house?",
                            "es": "¿Cuántos de ellos son mayores de 18 años viven en la casa?",
                            "fr": "Combien d'adultes de plus de 18 ans vivent dans le foyer ?",
                            "ru": "Сколько взрослых старше 18 лет живут в доме?"
                          }
                        },
                        "uid": "8a0382e6c1"
                      },
                      {
                        "switch": {
                          "arg": "_is_adult",
                          "cases": [
                            {
                              "match": true,
                              "steps": [
                                {
                                  "uid": "b9df1b176f",
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
                              "uid": "5ba08ebdef"
                            },
                            {
                              "match": false,
                              "steps": [
                                {
                                  "uid": "9ddb38850f",
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
                              "uid": "4e36d11757"
                            }
                          ]
                        },
                        "uid": "3c567f5b5b"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "וכמה ילדים מתחת לגיל 18?",
                            "ar": "عدد الأطفال تحت جيل 18؟",
                            "en": "And how many children under 18?",
                            "es": "¿ y cuántos menores de 18 años?",
                            "fr": "Et combien d'enfants de moins de 18 ans ?",
                            "ru": "А сколько детей до 18 лет?"
                          }
                        },
                        "uid": "cadc9957e0"
                      },
                      {
                        "switch": {
                          "arg": "_is_adult",
                          "cases": [
                            {
                              "match": true,
                              "steps": [
                                {
                                  "uid": "b4ae1ceaaa",
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
                              "uid": "0c96d5c98c"
                            },
                            {
                              "match": false,
                              "steps": [
                                {
                                  "uid": "72f2ec1bbb",
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
                              "uid": "7a718c6c40"
                            }
                          ]
                        },
                        "uid": "f5416b3eb6"
                      }
                    ],
                    "uid": "1e14d30084"
                  }
                ]
              },
              "uid": "6409f67795"
            },
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
                        "switch": {
                          "arg": "medical_staff_member",
                          "cases": [
                            {
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "האם העבודה שלך היא כחלק מצוות רפואי- בטיפול בחולים או בקבלת קהל?",
                                      "ar": "في عملك، هل انت جزء من فريق طبي - الذي يعتني بمرضى أو يستقبل جمهور؟",
                                      "en": "Are you part of a health-care team, treating patients or receiving them?",
                                      "es": "¿Formas parte de un equipo médico, atendiendo pacientes o brindando atención al público?",
                                      "fr": "Faites vous partie d'une équipe médicale dans le cadre de votre travail ? Soignez-vous ou recevez-vous des patients ?",
                                      "ru": "Работаете ли вы как медицинский персонал (уход за больными или прием публики)?"
                                    }
                                  },
                                  "uid": "f21abaa60d"
                                },
                                {
                                  "uid": "a193745d13",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": "כן, אני חלק מצוות רפואי",
                                        "value": "true"
                                      },
                                      {
                                        "show": "לא, אני לא",
                                        "value": "false"
                                      }
                                    ],
                                    "variable": "medical_staff_member"
                                  }
                                }
                              ],
                              "uid": "fd54eca6a5",
                              "undefined": true
                            },
                            {
                              "default": true
                            }
                          ]
                        },
                        "uid": "bfe332a80b"
                      }
                    ],
                    "uid": "688c92f408"
                  }
                ]
              },
              "uid": "6379bd7362"
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
                    "show": "סוכרת"
                  },
                  {
                    "field": "precondition_chronic_hypertension",
                    "show": "בעיית יתר לחץ דם"
                  },
                  {
                    "field": "precondition_chronic_ischemic_heart_disease_or_stroke",
                    "show": "מחלת לב, כלי דם או שבץ"
                  },
                  {
                    "field": "precondition_chronic_lung_disease",
                    "show": "מחלת ריאות כרונית כולל אסתמה (ללא אסתמה בילדות)"
                  },
                  {
                    "field": "precondition_chronic_cancer",
                    "show": "סרטן"
                  },
                  {
                    "field": "precondition_chronic_kidney_failure",
                    "show": "אי ספיקת כליות"
                  },
                  {
                    "field": "precondition_chronic_immune_system_suppression",
                    "show": "דיכוי חיסוני לרבות נטילת תרופות המדכאות את מערכת החיסון"
                  },
                  {
                    "class": "other",
                    "show": "<span class='empty'>אף אחת ממחלות הרקע הללו</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>ללא מחלות רקע</span>"
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
                    "show": "עישון יומיומי",
                    "value": "daily_smoker"
                  },
                  {
                    "show": "עישנתי בעבר, הפסקתי לפני פחות מחמש שנים",
                    "value": "short_past_smoker"
                  },
                  {
                    "show": "עישנתי בעבר, לפני יותר מחמש שנים",
                    "value": "long_past_smokre"
                  },
                  {
                    "class": "other",
                    "show": "אף פעם",
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
          "name": "covid19-checks",
          "steps": [
            {
              "do": {
                "cmd": "fetch_covid19_check_question_data",
                "params": [
                  "record"
                ]
              },
              "uid": "ed8f4f179e"
            },
            {
              "switch": {
                "arg": "_covid19_check_question_status",
                "cases": [
                  {
                    "match": "missing_result",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "סיפרת לנו בדיווח קודם שנבדקת לקורונה… האם כבר קיבלת את תוצאות הבדיקה?",
                            "fr": "Vous nous avez dit dans un précédent rapport que vous aviez été testé pour le Corona ... Avez-vous déjà reçu les résultats du test ?",
                            "ru": "В прошлом отчёте вы рассказали нам, что прошли тест на Коронавирус. Вы уже получили результаты теста?"
                          }
                        },
                        "uid": "9294346d45"
                      },
                      {
                        "uid": "2b939bd7e7",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, הגיעו תוצאות הבדיקה",
                              "steps": [
                                {
                                  "goto": "covid19_check_ask_for_results",
                                  "uid": "613d8a6418"
                                }
                              ],
                              "uid": "8bac95e267"
                            },
                            {
                              "show": "לא"
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "fa2feaef18"
                  },
                  {
                    "match": "first_time",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם נבדקת לקורונה בעבר (בדיקת PCR)?",
                            "fr": "Avez-vous déjà été testé pour le Corona (test PCR) ?",
                            "ru": "Проходили ли вы тест на Коронавирус (тест PCR)?"
                          }
                        },
                        "uid": "e6750b2274"
                      },
                      {
                        "uid": "c19f8f2009",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, נבדקתי",
                              "steps": [
                                {
                                  "say": "באיזה תאריך נבדקת בפעם האחרונה?",
                                  "uid": "eded8e503d"
                                },
                                {
                                  "uid": "257fa2bd4f",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": "תאריך: dd/mm/yy",
                                    "variable": "covid19_check_date"
                                  }
                                },
                                {
                                  "goto": "covid19_check_ask_for_results",
                                  "uid": "35a29ae04f"
                                }
                              ],
                              "uid": "3e7aa9825b",
                              "value": true
                            },
                            {
                              "show": "לא",
                              "value": false
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "f2f17b24a0"
                  },
                  {
                    "match": "ask_again",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "האם נבדקת בשבוע האחרון לקורונה, בבדיקת PCR?",
                            "ar": "هل تم فحصك في آخر أسبوع للكورونا, بفحص PCR؟",
                            "en": "Have you had a PCR test for Covid-19 during the last week?",
                            "es": "¿Durante la última semana te has hecho algún análisis de coronavirus (prueba PCR)?",
                            "fr": "Avez-vous été testé pour le Corona au cours des 7 derniers jours par un test PCR ?",
                            "ru": "Проходили ли вы тест на Коронавирус (тест PCR) на последней неделе?"
                          }
                        },
                        "uid": "d1903e3e90"
                      },
                      {
                        "uid": "bb025a776a",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, נבדקתי",
                              "steps": [
                                {
                                  "say": "באיזה יום זה היה?",
                                  "uid": "80998916b5"
                                },
                                {
                                  "uid": "f55c6653bd",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": "תאריך: dd/mm/yy",
                                    "variable": "covid19_check_date"
                                  }
                                },
                                {
                                  "goto": "covid19_check_ask_for_results",
                                  "uid": "8e94f82d72"
                                }
                              ],
                              "uid": "23926bc6b9"
                            },
                            {
                              "show": "לא"
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "7def56da3b"
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "037a48da5c"
            },
            {
              "do": {
                "cmd": "save_covid19_check_question_data",
                "params": [
                  "record"
                ]
              },
              "uid": "786b8f8efc"
            }
          ],
          "uid": "6d5b3a0ef7"
        },
        {
          "name": "covid19_check_ask_for_results",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "ומה היתה תוצאת הבדיקה?",
                  "ar": "وما هي نتيجة الفحص؟",
                  "en": "What were the results of the test?",
                  "es": "Y ¿Cuál ha sido el resultado del análisis?",
                  "fr": "Et quel a été le résultat du test ?",
                  "ru": "И каков был результат теста?"
                }
              },
              "uid": "081522dd2c"
            },
            {
              "uid": "37123efe69",
              "wait": {
                "options": [
                  {
                    "show": "אובחנתי כחולה בקורונה",
                    "steps": [
                      {
                        "say": "אוי, זה בטח לא פשוט.  החלמה מהירה",
                        "uid": "7cdcb069c0"
                      }
                    ],
                    "uid": "8d2d7cbb33",
                    "value": "positive"
                  },
                  {
                    "show": "אין לי קורונה",
                    "steps": [
                      {
                        "say": "משמח לשמוע, נקווה שימשיך ככה",
                        "uid": "fc3d72fa84"
                      }
                    ],
                    "uid": "6151e31239",
                    "value": "negative"
                  },
                  {
                    "show": "עוד לא קיבלתי את תוצאות הבדיקה",
                    "steps": [
                      {
                        "say": "אנחנו מחזיקים לך אצבעות",
                        "uid": "406eddbf9b"
                      }
                    ],
                    "uid": "c42d095ea4",
                    "unless": "_covid19_check_question_status_missing",
                    "value": "result_missing"
                  }
                ],
                "variable": "_covid19_check_result"
              }
            }
          ],
          "uid": "12c2bc384d"
        },
        {
          "name": "insulation",
          "steps": [
            {
              "switch": {
                "arg": "exposure_status",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "עכשיו, מה בנוגע לבידוד?",
                            "ar": " الآن, شو بالنسبة للحجر الصحي؟",
                            "en": "Now, what about quarantine?",
                            "es": "Ahora, ¿qué nos puedes decir respecto al aislamiento?",
                            "fr": "Maintenant, qu'en est-il du confinement ?",
                            "ru": "А теперь, что насчет карантина?"
                          }
                        },
                        "uid": "940eefc1f9"
                      }
                    ],
                    "uid": "e7a358a104",
                    "undefined": true
                  },
                  {
                    "default": true,
                    "steps": [
                      {
                        "switch": {
                          "arg": "exposure_status",
                          "cases": [
                            {
                              "pattern": "(insulation_with_family|insulation|diagnosed)",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "הדיווח הקודם היה על בידוד או אישפוז. האם משהו השתנה?",
                                      "ar": "آخر إستبيان كنت في الحجر الصحي أو تتعالج في المستشفى. في إشي تغير؟",
                                      "en": "Last time you reported quarantine or hospitalization. Did that change?",
                                      "es": "El informe anterior fue sobre aislamiento u hospitalización. ¿Algo de esto ha cambiado?",
                                      "fr": "Le rapport précédent mentionnait un confinement ou une hospitalisation. Est-ce que quelque chose a changé depuis ?",
                                      "ru": "В предыдущем отчете вы были на карантине или госпитализированы. Что-нибудь изменилось?"
                                    }
                                  },
                                  "uid": "f347774e64"
                                }
                              ],
                              "uid": "e18fd30513"
                            },
                            {
                              "default": true,
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "בדיווח הקודם לא הוזכר בידוד או אשפוז. האם משהו השתנה?",
                                      "ar": "في آخر إستبيان لم يُذكر حجر صحي أو علاج في المستشفى. في إشي تغير؟",
                                      "en": "Last time you did not report quarantine or hospitalization. Did that change?",
                                      "es": "En el informe anterior no se mencionó aislamiento ni hospitalización. ¿Algo de esto ha cambiado?",
                                      "fr": "Aucun confinement ou hospitalisation n'avait été mentionné dans le rapport précédent. Est-ce que quelque chose a changé depuis ?",
                                      "ru": "В предыдущем отчете вы не упоминали карантин или госпитализацию. Что-нибудь изменилось? "
                                    }
                                  },
                                  "uid": "a10ed0436c"
                                }
                              ],
                              "uid": "6ec982ad50"
                            }
                          ]
                        },
                        "uid": "69743b3ca3"
                      },
                      {
                        "uid": "87f90cdcb4",
                        "wait": {
                          "options": [
                            {
                              "show": "לא, המצב דומה"
                            },
                            {
                              "show": "כן, משהו השתנה",
                              "steps": [
                                {
                                  "say": "אז מה השתנה?",
                                  "uid": "bf3ed6cbac"
                                },
                                {
                                  "do": {
                                    "cmd": "clear_fields",
                                    "params": [
                                      "record",
                                      "exposure.*",
                                      "insulation.*"
                                    ]
                                  },
                                  "uid": "d3ca934033"
                                }
                              ],
                              "uid": "f811b01bd5"
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "2477b7e905"
                  }
                ]
              },
              "uid": "9961adaa98"
            },
            {
              "switch": {
                "arg": "exposure_status",
                "cases": [
                  {
                    "default": true
                  },
                  {
                    "steps": [
                      {
                        "uid": "fb0fdb2f9b",
                        "wait": {
                          "options": [
                            {
                              "show": "אני ומשפחתי בבידוד, ושוהים יחד באותם החדרים",
                              "steps": [
                                {
                                  "say": "באיזה תאריך התחיל הבידוד?",
                                  "uid": "f1818f4f2d"
                                },
                                {
                                  "uid": "645528a738",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": "תאריך: dd/mm/yy",
                                    "variable": "insulation_start_date"
                                  }
                                }
                              ],
                              "uid": "f14e63ab7b",
                              "value": "insulation_with_family"
                            },
                            {
                              "show": "אני בבידוד מבני משפחה, ובחדר סגור",
                              "steps": [
                                {
                                  "say": "באיזה תאריך התחיל הבידוד?",
                                  "uid": "d64d63ba82"
                                },
                                {
                                  "uid": "5f298814b6",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": "תאריך: dd/mm/yy",
                                    "variable": "insulation_start_date"
                                  }
                                },
                                {
                                  "say": "מה הסיבה לשהות שלך בבידוד?",
                                  "uid": "a23809efad"
                                },
                                {
                                  "uid": "a51b1efaef",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": "אני בבידוד כי חזרתי מחו״ל לאחרונה",
                                        "steps": [
                                          {
                                            "say": "מתי חזרת לארץ?",
                                            "uid": "3af14d42ee"
                                          },
                                          {
                                            "uid": "8d53223749",
                                            "wait": {
                                              "input-kind": "date",
                                              "options": null,
                                              "placeholder": "תאריך: dd/mm/yy",
                                              "variable": "insulation_returned_from_abroad_date"
                                            }
                                          }
                                        ],
                                        "uid": "afa97d10e1",
                                        "value": "back-from-abroad"
                                      },
                                      {
                                        "show": "אני בבידוד כי נחשפתי לחולה מאומת",
                                        "steps": [
                                          {
                                            "say": "ידוע לך מה מספר החולה שפגשת?",
                                            "uid": "6a33972a29"
                                          },
                                          {
                                            "uid": "bd03329baf",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": "כן, ידוע לי מספר החולה",
                                                  "steps": [
                                                    {
                                                      "say": "מצויין. מה המספר?",
                                                      "uid": "0e021aac7c"
                                                    },
                                                    {
                                                      "uid": "4ff35e1c83",
                                                      "wait": {
                                                        "placeholder": "מספר החולה שפגשתי, בספרות",
                                                        "variable": "insulation_patient_number"
                                                      }
                                                    },
                                                    {
                                                      "say": "האם זכור לך היום שבו נפגשתם?",
                                                      "uid": "b1e097d57b"
                                                    },
                                                    {
                                                      "uid": "58f49c26f5",
                                                      "wait": {
                                                        "options": [
                                                          {
                                                            "show": "כן, זכור לי התאריך",
                                                            "steps": [
                                                              {
                                                                "say": "מה היה התאריך?",
                                                                "uid": "9f06440aec"
                                                              },
                                                              {
                                                                "uid": "759844494b",
                                                                "wait": {
                                                                  "input-kind": "date",
                                                                  "placeholder": "תאריך: dd/mm/yy",
                                                                  "variable": "insulation_exposure_date"
                                                                }
                                                              }
                                                            ],
                                                            "uid": "72b4e523bf",
                                                            "value": "yes"
                                                          },
                                                          {
                                                            "show": "לא זכור לי",
                                                            "value": "no"
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "uid": "a6fdd5ed5d",
                                                  "value": "yes"
                                                },
                                                {
                                                  "show": "לא ידוע לי",
                                                  "value": "no"
                                                }
                                              ]
                                            }
                                          }
                                        ],
                                        "uid": "8dee71f300",
                                        "value": "contact-with-patient"
                                      },
                                      {
                                        "show": "אני בבידוד כי חוויתי תסמינים",
                                        "value": "has_symptoms"
                                      },
                                      {
                                        "show": "אני בבידוד מרצוני האישי",
                                        "value": "voluntary"
                                      }
                                    ],
                                    "variable": "insulation_reason"
                                  }
                                }
                              ],
                              "uid": "cdbb8ee754",
                              "value": "insulation"
                            },
                            {
                              "show": "אני חולה קורונה (מאומת בבדיקת מעבדה)",
                              "steps": [
                                {
                                  "uid": "32b02ca38f",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": "אשפוז בבית חולים",
                                        "value": "hospital"
                                      },
                                      {
                                        "show": "בבית מלון",
                                        "value": "hotel"
                                      },
                                      {
                                        "show": "בבית",
                                        "value": "home"
                                      },
                                      {
                                        "show": "החלמתי ואני בבית",
                                        "value": "recovered"
                                      }
                                    ],
                                    "variable": "diagnosed_location"
                                  }
                                }
                              ],
                              "uid": "7fdfa3db6a",
                              "value": "diagnosed"
                            },
                            {
                              "class": "other",
                              "show": "אני לא בבידוד",
                              "value": "none"
                            }
                          ],
                          "variable": "exposure_status"
                        }
                      }
                    ],
                    "uid": "0aea258f6e",
                    "undefined": true
                  }
                ]
              },
              "uid": "7a791ac067"
            }
          ],
          "uid": "ebd966ac43"
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
                              "show": "בסדר גמור",
                              "steps": [
                                {
                                  "say": "נהדר לשמוע!",
                                  "uid": "8ce9b87e8b"
                                },
                                {
                                  "say": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                  "uid": "050d4e13a0"
                                }
                              ],
                              "uid": "11f2a871c8",
                              "value": "feel_good"
                            },
                            {
                              "show": "לא כל כך טוב",
                              "steps": [
                                {
                                  "say": "אוייש… איך זה בא לידי ביטוי?",
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
                              "show": "כן, בסדר גמור",
                              "steps": [
                                {
                                  "say": "נהדר לשמוע!",
                                  "uid": "2936c148b0"
                                },
                                {
                                  "say": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                  "uid": "fac1c21d48"
                                }
                              ],
                              "uid": "3b21d2175a",
                              "value": "feel_good"
                            },
                            {
                              "show": "לצערי לא כל כך טוב",
                              "steps": [
                                {
                                  "say": "אוייש… איך זה בא לידי ביטוי?",
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
                            "en": "On your last report you mentioned you were not feeling well... are you feeling better now?",
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
                              "show": "כן, עכשיו הכל בסדר",
                              "steps": [
                                {
                                  "say": "נהדר לשמוע!",
                                  "uid": "b9cde574b8"
                                },
                                {
                                  "say": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                  "uid": "38b8805a2d"
                                }
                              ],
                              "uid": "75d8ef3565",
                              "value": "feel_good"
                            },
                            {
                              "show": "לא, עדיין לא משהו",
                              "steps": [
                                {
                                  "say": "אוייש… איך זה בא לידי ביטוי?",
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
              "goto": "current-report-top-level-symptoms",
              "uid": "b19e056d7d"
            },
            {
              "goto": "current-report-cough-symptoms",
              "uid": "cb252a9f1a"
            },
            {
              "goto": "current-report-pain-symptoms",
              "uid": "03cd72e122"
            },
            {
              "goto": "current-report-temperature",
              "uid": "4cd7908fba"
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
                            "_": "למרות שאמרת קודם שההרגשה טובה, כדאי בתקופה כזו לקיים מעקב יומי אחר חום הגוף.",
                            "ar": "بالرغم من انك ذكرت/ي سابقا أنك تشعر/ين بتحسن, لكن من المستحسن في هذه الفترة متابعة درجة حرارة الجسم بشكل يومي.",
                            "en": "Even though you reported feeling well, in this situation it's good to take one's temperature daily.",
                            "es": "A pesar de que has informado sentirte bien, durante este período es conveniente controlar la fiebre a diario.",
                            "fr": "Même si vous vous sentez bien, il est recommandé pendant cette période de surveiller quotidiennement la température de votre corps.",
                            "ru": "Несмотря на то, что вы раньше сказали, что вы хорошо себя чувствуете, в эти дни стоит ежедневно проверять температуру."
                          }
                        },
                        "uid": "c57bd415ab"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "האם כבר נמדד חום היום?",
                            "ar": "هل قمت/ي بقياس حرارتك اليوم؟",
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
                              "show": "כן, נמדד חום",
                              "steps": [
                                {
                                  "goto": "ask-body-temperature",
                                  "uid": "14631f3588"
                                }
                              ],
                              "uid": "949c507f00"
                            },
                            {
                              "show": "היום לא נמדד חום"
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
                            "ar": "هل قمت/ي بقياس حرارتك اليوم؟",
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
                              "show": "כן, נמדד חום",
                              "steps": [
                                {
                                  "goto": "ask-body-temperature",
                                  "uid": "396b062283"
                                }
                              ],
                              "uid": "1f8ef0a3d2"
                            },
                            {
                              "show": "היום לא נמדד חום"
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
          "name": "ask-body-temperature",
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
              "uid": "da6e4c5a83"
            },
            {
              "uid": "5b91e58a40",
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
          "uid": "177fb00c4b"
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
                    "show": "שיעולים או נזלת"
                  },
                  {
                    "field": "symptoms_breath_shortness",
                    "show": "קוצר נשימה"
                  },
                  {
                    "field": "toplevel_symptoms_pains",
                    "show": "כאבים"
                  },
                  {
                    "field": "symptoms_diarrhea",
                    "show": "שלשול"
                  },
                  {
                    "field": "symptoms_nausea_and_vomiting",
                    "show": "בחילה או הקאות"
                  },
                  {
                    "field": "symptoms_chills",
                    "show": "צמרמורת"
                  },
                  {
                    "field": "symptoms_confusion",
                    "show": "בלבול"
                  },
                  {
                    "field": "symptoms_tiredness_or_fatigue",
                    "show": "עייפות או חולשה"
                  },
                  {
                    "field": "symptoms_smell_taste_loss",
                    "show": "איבדתי את חוש הטעם או הריח"
                  },
                  {
                    "class": "other",
                    "show": "<span class='empty'>אף אחד מהתסמינים האלה</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין תסמינים</span>"
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
                              "show": "נזלת או גודש באף"
                            },
                            {
                              "field": "symptoms_dry_cough",
                              "show": "שיעול יבש"
                            },
                            {
                              "field": "symptoms_moist_cough",
                              "show": "שיעול לח, או שיעול עם כיח"
                            },
                            {
                              "class": "other",
                              "show": "<span class='empty'>אף אחד מהתסמינים האלה</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין פרטים נוספים</span>"
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
                              "show": "כאבי שרירים"
                            },
                            {
                              "field": "symptoms_headache",
                              "show": "כאבי ראש"
                            },
                            {
                              "field": "symptoms_sore_throat",
                              "show": "כאבי גרון"
                            },
                            {
                              "class": "other",
                              "show": "<span class='empty'>אף אחד מהתסמינים האלה</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין פרטים נוספים</span>      "
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
                  "_": "חשוב לנו לדעת -",
                  "ar": "مهم النا نعرف -",
                  "en": "Another piece of important information",
                  "es": "Nos es importante saber -",
                  "fr": "Il est important pour nous de savoir -",
                  "ru": "Нам важно знать -"
                }
              },
              "uid": "1700fdb725"
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
                    "show": "כן, שהיתי בקרבת אנשים נוספים",
                    "steps": [
                      {
                        "say": "כמה מהם מבוגרים מעל גיל 18?",
                        "uid": "db34667715"
                      },
                      {
                        "uid": "b2e4827138",
                        "wait": {
                          "input-kind": "number",
                          "input-max": 99,
                          "input-min": 0,
                          "placeholder": "מספר המבוגרים, 0-99",
                          "validation": "[0-9]+",
                          "variable": "_met_above_18"
                        }
                      },
                      {
                        "say": "וכמה ילדים מתחת לגיל 18?",
                        "uid": "3d21f8a809"
                      },
                      {
                        "uid": "a52138305e",
                        "wait": {
                          "input-kind": "number",
                          "input-max": 99,
                          "input-min": 0,
                          "placeholder": "מספר הילדים, 0-99",
                          "validation": "[0-9]+",
                          "variable": "_met_under_18"
                        }
                      }
                    ],
                    "uid": "e169d07c3b"
                  },
                  {
                    "show": "לא, רק עם בני הבית"
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
            },
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
                          "cmd": "fetch_public_service_data",
                          "params": [
                            "record"
                          ]
                        },
                        "uid": "897cae5e13"
                      },
                      {
                        "switch": {
                          "arg": "_public_service_status",
                          "cases": [
                            {
                              "match": "valid"
                            },
                            {
                              "match": "required",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "האם בשבוע האחרון נתת בעבודתך שירות באופן פיזי למעל 10 אנשים ביום?",
                                      "ar": "هل في الأسبوع السابق قمت/ي خلال عملك بتقديم خدمات وجها لوجه, لأكثر من 10 أشخاص في اليوم؟",
                                      "en": "During the last week, at work, did you serve (face-to-face) more than 10 people in a day?",
                                      "es": "La semana pasada en tu trabajo de modo presencial ¿has atendido a más de 10 personas por día?",
                                      "fr": "Dans le cadre de votre profession, avez-vous physiquement aidé plus de 10 personnes au cours des 7 derniers jours ?",
                                      "ru": "На последней неделе на работе, обслуживали ли вы физически более 10-и человек в день?"
                                    }
                                  },
                                  "uid": "07940bc67a"
                                },
                                {
                                  "uid": "2df81cdb42",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": "כן, נתתי שירות",
                                        "value": true
                                      },
                                      {
                                        "show": "לא נתתי שירות",
                                        "value": false
                                      }
                                    ],
                                    "variable": "_served_public_last_fortnight"
                                  }
                                },
                                {
                                  "do": {
                                    "cmd": "save_public_service_data",
                                    "params": [
                                      "record"
                                    ]
                                  },
                                  "uid": "d8a160a666"
                                }
                              ],
                              "uid": "e44769b360"
                            }
                          ]
                        },
                        "uid": "4b35972d5a"
                      }
                    ],
                    "uid": "a1a27bcaeb"
                  }
                ]
              },
              "uid": "aced4d907f"
            }
          ],
          "uid": "ce7628ae51"
        },
        {
          "name": "end-of-report",
          "steps": [
            {
              "goto": "dynamic_update",
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
          "name": "dynamic_update",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "סיימנו עם השאלות להיום. רוצה להסתכל שוב במפת התסמינים?",
                  "en": "We're done. Would you like another look at the symptoms map?",
                  "fr": "Nous avons terminé avec les questions pour aujourd'hui. Voulez vous revoir la carte des symptômes ?",
                  "ru": "Мы закончили с вопросами на сегодня. Хотите посмотреть опять на карту симптомов?"
                }
              },
              "uid": "a9cb8ffec3"
            },
            {
              "uid": "f48c232481",
              "wait": {
                "options": [
                  {
                    "class": "other",
                    "show": "כן, בטח",
                    "steps": [
                      {
                        "do": {
                          "cmd": "show_map"
                        },
                        "uid": "ba9a84b3db"
                      }
                    ],
                    "uid": "dc61b86c78"
                  },
                  {
                    "show": "לא עכשיו"
                  }
                ]
              }
            }
          ],
          "uid": "d1b81a605b"
        },
        {
          "name": "share",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "בזכותך התקרבנו עוד צעד אחד לסוף של זה… תודה",
                  "fr": "Grâce à vous, nous avons fait un pas de plus vers la fin de tout cela ... Merci",
                  "ru": "Благодаря вам мы на один шаг ближе к концу всего этого... Спасибо!"
                }
              },
              "uid": "8299e2c005"
            },
            {
              "say": {
                ".tx": {
                  "_": "ועוד עניין קטן… יעזור מאוד אם גם החברים והקרובים שלך ישתתפו. רוצה לשתף אותם?",
                  "fr": "Et encore une chose … Ce nous aiderait beaucoup si vos amis et vos proches participent également. Voulez-vous leur partager ?",
                  "ru": "И ещё одно маленькое дело... Нам очень поможет, если ваши друзья и родственники примут участие в нашем проекте.  Хотите с ними поделиться?"
                }
              },
              "uid": "624d211d31"
            },
            {
              "uid": "35fb9f9cfc",
              "wait": {
                "options": [
                  {
                    "show": "כן, אשמח לשתף",
                    "steps": [
                      {
                        "do": {
                          "cmd": "share_action",
                          "variable": "action_share"
                        },
                        "uid": "105a18ae59"
                      },
                      {
                        "switch": {
                          "arg": "action_share",
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
                                      "הקישור לדיווח היומי הועתק ללוח!"
                                    ]
                                  },
                                  "uid": "2c019c4617"
                                }
                              ],
                              "uid": "6f3c084b3c"
                            },
                            {
                              "match": "shared",
                              "steps": [
                                {
                                  "say": "תודה רבה על השיתוף!",
                                  "uid": "702a884444"
                                }
                              ],
                              "uid": "035277ba4d"
                            }
                          ]
                        },
                        "uid": "07c0aa7bef"
                      }
                    ],
                    "uid": "95754f82c4"
                  },
                  {
                    "show": "לא עכשיו"
                  }
                ]
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
                "variable": "action_reminder_set"
              },
              "uid": "28e38c50e9"
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
                              "show": "כן, אשמח לתזכורת",
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
                              "show": "כבר יש לי תזכורת, תודה",
                              "value": "already_set"
                            },
                            {
                              "show": "לא, אין צורך, יש לי זכרון מצויין!",
                              "value": "not_wanted"
                            }
                          ],
                          "variable": "action_reminder_wanted"
                        }
                      },
                      {
                        "do": {
                          "cmd": "save_reminder_status"
                        },
                        "uid": "72dd2c31c7"
                      }
                    ],
                    "uid": "6e65389281"
                  },
                  {
                    "match": "not_required",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "תודה רבה שחזרת לדווח. מחכים לשמוע ממך שוב",
                            "fr": "Merci beaucoup d'être revenu. Hâte de savoir comment vous allez",
                            "ru": "Большое спасибо, что вы вернулись к отчёту. Будем рады снова от вас услышать."
                          }
                        },
                        "uid": "d7af144da0"
                      }
                    ],
                    "uid": "aed7dfa73b"
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
                  "אשרו קבלת התראות מן האתר על מנת שנוכל להזכיר לכם למלא את השאלון",
                  "בסדר"
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
                  "הורידו את האפליקציה ונזכיר לכם כל יום ב-20:00",
                  "להורדת האפליקציה"
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
                  "לחצו על הכפתור להתקנת התזכורת ביומן",
                  "להורדה"
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
                            "אם כלום לא קורה, פתחו את הקובץ corona_reminder.ics מה״הורדות״"
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
                  "<b>שימו לב: </b> בוט הטלגרם מופעל על ידי צד שלישי וללא כל אחריות מצדנו. מומלץ לבדוק את מדיניות שמירת המידע והפרטיות של הבוט לפני השימוש",
                  "בסדר"
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
          "show": "זמן לדיווח הבריאות היומי!"
        },
        {
          "name": "calendarBody",
          "show": "הגיע הזמן לדווח שוב כיצד אתם מרגישים! רק ביחד ננצח את הקורונה 💪🏽!"
        },
        {
          "name": "reminder:notification",
          "show": "התראה בדפדפן"
        },
        {
          "name": "reminder:calendar",
          "show": "תזכורת ביומן"
        },
        {
          "name": "reminder:android-app",
          "show": "אפליקציית האנדרואיד שלנו"
        },
        {
          "name": "reminder:iphone-app",
          "show": "אפליקציית האייפון שלנו"
        },
        {
          "name": "reminder:telegram",
          "show": "בוט טלגרם"
        }
      ],
      "name": "generic-translation-assets"
    }
  ]
};
