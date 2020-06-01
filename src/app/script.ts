
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
                        "say": "כולם מנסים לחזור לשיגרה מסויימת אבל מגפת הקורונה לא נעלמה",
                        "uid": "c3ab2ebcbb"
                      },
                      {
                        "say": "התשובות שלך לכמה שאלות, והמשך הדיווח, יעזור לצוות המחקר של מכון ויצמן לאתר מוקדים אפשריים להתפרצות מחודשת של המחלה ולהיערך אליה בהתאם.",
                        "uid": "239b0a819f"
                      },
                      {
                        "say": "כל השאלות והמידע ישארו אנונימיים ויכבדו את הפרטיות שלך",
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
                        "say": "הכי טוב כשכולם מדווחים על עצמם בכל יום אבל אם זה לא מסתדר, אפשר להקריא להם את השאלות או פשוט לענות בשמם",
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
                        "say": "ננסה יחד איתך להבין מה הסיכוי להתפרצות מחודשת של קורונה באזור שלך",
                        "uid": "f29e4b1a46"
                      },
                      {
                        "say": "אם אחרי הדיווח שלך נוכל לקבל דיווח גם עבור בני המשפחה או בני הבית האחרים, זה יעזור לנו מאוד",
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
              "say": {
                ".tx": {
                  "_": "מצויין, השלמנו את הדיווח היומי עבור {{alias}}",
                  "ar": "ممتاز, أنهينا تعبئة الإستبيان ل{{alias}}",
                  "en": "Excellent. We're done with the daily form for {{alias}}",
                  "fr": "Super, nous avons fini ce questionnaire pour {{alias}}",
                  "ru": "Отлично, закончили докладывать про {{alias}}"
                }
              },
              "uid": "e8d78b476d"
            },
            {
              "goto": "reporting-loop",
              "uid": "6d7627616b"
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
                                "fr": "{{age}} ans de {{_location}}",
                                "ru": "Мужчина, проживающий на  {{_location}}, возраст: {{age}}"
                              }
                            },
                            {
                              ".tx": {
                                "_": "בת {{age}} מ{{_location}}",
                                "ar": "إبنة ال {{age}} من{{_location}}",
                                "en": "{{age}} year old female from {{location}}",
                                "fr": "{{age}} ans de {{_location}}",
                                "ru": "Женщина, проживающая на  {{_location}}, возраст: {{age}}"
                              }
                            },
                            {
                              ".tx": {
                                "_": "גיל {{age}} מ{{_location}}",
                                "ar": "العُمر {{age}} من{{_location}}",
                                "en": "{{age}} year old person from {{location}}",
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
                                  "say": "האם מקום המגורים הנוכחי שלך הוא דיור מוגן או בית אבות?",
                                  "uid": "4d9857d5eb"
                                },
                                {
                                  "uid": "8ee414573b",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": "כן, דיור מוגן או בית אבות",
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
                        "say": "האם אובחנת בעבר כחולה בקורונה בבדיקת PCR?",
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
                                  "say": "מתי קיבלת את האבחנה החיובית?",
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
                              "show": "כן, אבל החלמתי מאז",
                              "steps": [
                                {
                                  "say": "מתי קיבלת את האבחנה החיובית?",
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
                                  "say": "האם ביצעת מאז בדיקה נוספת שמסקנתה היתה שאין לך קורונה?",
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
                                            "say": "מתי זה היה?",
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
                        "say": "האם אובחנת מאז הדיווח האחרון כחולה בקורונה בבדיקת PCR?",
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
                                        "show": "אני עדיין חולה",
                                        "value": "true"
                                      },
                                      {
                                        "show": "ביצעתי בדיקה אבל קיבלתי תוצאה שלילית",
                                        "steps": [
                                          {
                                            "say": "מתי זה היה?",
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
                                        "show": "לא, אבל החלמתי מהקורונה",
                                        "value": "recovered"
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
                                            "say": "מתי זה היה?",
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
                                        "show": "ביצעתי בדיקה אבל קיבלתי תוצאה שלילית",
                                        "steps": [
                                          {
                                            "say": "מתי זה היה?",
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
              "do": {
                "cmd": "handle_no_covid",
                "params": [
                  "record"
                ]
              },
              "uid": "b84d243c81"
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
              "switch": {
                "arg": "hospitalization_status",
                "cases": [
                  {
                    "match": true,
                    "steps": [
                      {
                        "say": "האם אתם עדיין באשפוז?",
                        "uid": "dcd9f64712"
                      },
                      {
                        "uid": "40acf0144f",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, אני עדיין באשפוז",
                              "value": "true"
                            },
                            {
                              "show": "לא, כבר שוחררתי",
                              "steps": [
                                {
                                  "say": "מתי השתחחרת?",
                                  "uid": "0352533352"
                                },
                                {
                                  "uid": "1982132cbc",
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
                                  "uid": "381c102ad1"
                                }
                              ],
                              "uid": "b9be6ac33c",
                              "value": "false"
                            }
                          ],
                          "variable": "hospitalization_status"
                        }
                      }
                    ],
                    "uid": "0a3e1c088e"
                  },
                  {
                    "match": false,
                    "steps": [
                      {
                        "say": "האם מאז הדיווח האחרון התאשפזת?",
                        "uid": "b2b4c28abb"
                      },
                      {
                        "uid": "b4a5afd08c",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, אני באשפוז",
                              "steps": [
                                {
                                  "say": "מתי התחיל האשפוז?",
                                  "uid": "003e7eb968"
                                },
                                {
                                  "uid": "d5ed1a5a21",
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
                              "uid": "ac4acbf859",
                              "value": "true"
                            },
                            {
                              "show": "כן, אבל כבר שוחררתי",
                              "steps": [
                                {
                                  "say": "מתי התחיל האשפוז?",
                                  "uid": "0e6390ab45"
                                },
                                {
                                  "uid": "2cefde5551",
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
                                  "say": "ומתי השתחחרת?",
                                  "uid": "18cf21cb21"
                                },
                                {
                                  "uid": "9811408bb4",
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
                                  "uid": "e070f48b08"
                                }
                              ],
                              "uid": "978912bced",
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
                    "uid": "25b306a22e"
                  },
                  {
                    "steps": [
                      {
                        "say": "האם בעקבות זאת נזקקת לאשפוז?",
                        "uid": "4da140b8de"
                      },
                      {
                        "uid": "d637f90e6e",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, אני באשפוז כרגע",
                              "steps": [
                                {
                                  "say": "מתי התחיל האשפוז?",
                                  "uid": "ce0ed668eb"
                                },
                                {
                                  "uid": "6152857719",
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
                              "uid": "caec131f19",
                              "value": "true"
                            },
                            {
                              "show": "כן, וכבר שוחררתי",
                              "steps": [
                                {
                                  "say": "באיזה תאריך התאשפזת?",
                                  "uid": "496c2251de"
                                },
                                {
                                  "uid": "194d503791",
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
                                  "say": "ומתי השתחחרת?",
                                  "uid": "a4e5e9cd6d"
                                },
                                {
                                  "uid": "119bf85925",
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
                                  "uid": "14da066f39"
                                }
                              ],
                              "uid": "b4f6acaa01",
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
                    "uid": "f4fde0ed10",
                    "undefined": true
                  }
                ]
              },
              "uid": "4447ddcbc7"
            },
            {
              "do": {
                "cmd": "clear_insulation_status",
                "params": [
                  "record"
                ]
              },
              "uid": "fce4beea75"
            }
          ],
          "uid": "df0c56957f"
        },
        {
          "name": "hospitalization_icu",
          "steps": [
            {
              "say": "האם אושפזת גם בטיפול נמרץ?",
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
                        "say": "כמה ימים אושפזת שם?",
                        "uid": "00a1564b2b"
                      },
                      {
                        "uid": "52a10d9e52",
                        "wait": {
                          "input-kind": "number",
                          "input-max": 999,
                          "input-min": 1,
                          "input-step": 1,
                          "placeholder": "מספר הימים",
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
                        "say": "האם אתם כרגע בבידוד?",
                        "uid": "8e783a4118"
                      },
                      {
                        "uid": "ae67c8f91b",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, בבית שלי ובנפרד מבני משפחתי",
                              "value": "insulation"
                            },
                            {
                              "show": "כן, בבית שלי",
                              "value": "insulation_with_family"
                            },
                            {
                              "show": "כן, במלון",
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
                        "say": "האם מאז הדיווח האחרון נכנסת לבידוד?",
                        "uid": "272b5b815c"
                      },
                      {
                        "uid": "6d51bc9a46",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, בבית שלי ובנפרד מבני משפחתי",
                              "value": "insulation"
                            },
                            {
                              "show": "כן, בבית שלי",
                              "value": "insulation_with_family"
                            },
                            {
                              "show": "כן, במלון",
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
                        "say": "האם אתם עדיין בבידוד?",
                        "uid": "0ad79180c2"
                      },
                      {
                        "uid": "6469c582d5",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, בבית שלי ובנפרד מבני משפחתי",
                              "value": "insulation"
                            },
                            {
                              "show": "כן, בבית שלי",
                              "value": "insulation_with_family"
                            },
                            {
                              "show": "כן, במלון",
                              "value": "insulation_hotel"
                            },
                            {
                              "show": "אני כבר לא בבידוד",
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
                                  "say": "למה אתם בבידוד?",
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
                                            "ar": "أنا بحجر صحي لأنني تعرضت لمريض/ة تم التحقق منه/ا",
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
                                  "say": "ממתי אתם בבידוד?",
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
                                  "say": "יש כמה שאלות חשובות שאנחנו שואלים את כולם, רק פעם בשבוע, כדי להקל על הדיווח",
                                  "uid": "70432ecbd9"
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "האם יצאת מהבית במהלך השבוע האחרון?",
                                      "ar": "هل خرجت من البيت في الأسبوع السابق؟",
                                      "en": "Have you been outside your home during the last week?",
                                      "fr": "Avez-vous quitté la maison au cours de la dernière semaine ?",
                                      "ru": "Вы выходили из дома на последней неделе?"
                                    }
                                  },
                                  "uid": "8bafa8745f"
                                },
                                {
                                  "uid": "c7c2b7ae3b",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "כן, יצאתי",
                                            "ar": "نعم, خرجت",
                                            "en": "Yes, I have",
                                            "fr": "Oui, je suis sorti",
                                            "ru": "Да, выходил/а"
                                          }
                                        },
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "האם יש לך עבודה קבועה מחוץ לבית בימים אלה?",
                                                "ar": "هل لديك عمل ثابت خارج المنزل في هذه الأيام؟",
                                                "en": "In this period, do you work regularly outside of your home?",
                                                "fr": "Avez-vous un emploi régulier en dehors de la maison ces jours-ci ?",
                                                "ru": "Работаете ли вы на постоянной работе вне дома в эти дни?"
                                              }
                                            },
                                            "uid": "7b88d96580"
                                          },
                                          {
                                            "uid": "5933885ce5",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "כן, יש עבודה מחוץ לבית",
                                                      "ar": "نعم, أنا أعمل خارج المنزل",
                                                      "en": "Yes, I work outside my home",
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
                                                          "fr": "Et combien d'heures, plus ou moins, y avez-vous travaillé la semaine dernière ?",
                                                          "ru": "И сколько часов вы работали, примерно?"
                                                        }
                                                      },
                                                      "uid": "850997e473"
                                                    },
                                                    {
                                                      "uid": "107bde58ff",
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
                                                          "fr": "Votre lieu de travail est il fixe?",
                                                          "ru": "Вы работали в одном и том же месте?"
                                                        }
                                                      },
                                                      "uid": "7c7fbfa879"
                                                    },
                                                    {
                                                      "uid": "d918add3f0",
                                                      "wait": {
                                                        "options": [
                                                          {
                                                            "show": {
                                                              ".tx": {
                                                                "_": "כן, במקום קבוע",
                                                                "ar": "نعم, في مكان ثابت",
                                                                "en": "Yes, in a permanent location",
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
                                                                    "fr": "Pouvons-nous demander où se trouve votre lieu de travail? Cela peut nous aider dans la recherche",
                                                                    "ru": "Можно узнать, где находится ваше место работы? Это поможет нашему исследованию."
                                                                  }
                                                                },
                                                                "uid": "fdd50e0a64"
                                                              },
                                                              {
                                                                "uid": "b83516d55c",
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
                                                                          "uid": "d0e04c7771"
                                                                        },
                                                                        {
                                                                          "say": {
                                                                            ".tx": {
                                                                              "_": "איפה נמצא מקום העבודה?",
                                                                              "ar": "أين يوجد مكان عملك؟",
                                                                              "en": "Where is your workplace located?",
                                                                              "fr": "Où se trouve votre lieu de travail?",
                                                                              "ru": "Где находится ваше место работы?"
                                                                            }
                                                                          },
                                                                          "uid": "931fc80ab5"
                                                                        },
                                                                        {
                                                                          "uid": "5e47aa5161",
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
                                                                              "fr": "Et quel est le nom de la rue ? ",
                                                                              "ru": "А на какой улице?"
                                                                            }
                                                                          },
                                                                          "uid": "0bccf5b0e5"
                                                                        },
                                                                        {
                                                                          "uid": "a89bee4d9f",
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
                                                                      "uid": "f17f5c976a"
                                                                    },
                                                                    {
                                                                      "show": {
                                                                        ".tx": {
                                                                          "_": "עדיף שלא",
                                                                          "ar": "مُفضل لا",
                                                                          "en": "I prefer not to answer",
                                                                          "fr": "Je ne préfère pas",
                                                                          "ru": "Предпочитаю не отвечать на этот вопрос."
                                                                        }
                                                                      }
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            "uid": "f8c00971a4",
                                                            "value": true
                                                          },
                                                          {
                                                            "show": {
                                                              ".tx": {
                                                                "_": "לא, אין כתובת קבועה בעבודה",
                                                                "ar": "لا يوجد عنوان ثابت في العمل",
                                                                "en": "No, I don't have a fixed work address",
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
                                                      "uid": "8a11b12c78"
                                                    },
                                                    {
                                                      "uid": "7624cea157",
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
                                                        "variable": "_served_public_last_fortnight"
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
                                                                    "fr": "Faites vous partie d'une équipe médicale dans le cadre de votre travail ? Soignez-vous ou recevez-vous des patients ?",
                                                                    "ru": "Работаете ли вы как медицинский персонал (уход за больными или прием публики)?"
                                                                  }
                                                                },
                                                                "uid": "969b12fa58"
                                                              },
                                                              {
                                                                "uid": "c9422ff637",
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
                                                            "uid": "9c546da722",
                                                            "undefined": true
                                                          },
                                                          {
                                                            "default": true
                                                          }
                                                        ]
                                                      },
                                                      "uid": "273740c611"
                                                    }
                                                  ],
                                                  "uid": "9144a2a011",
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
                                          },
                                          {
                                            "switch": {
                                              "arg": "routine_visits_prayer_house",
                                              "cases": [
                                                {
                                                  "default": true
                                                },
                                                {
                                                  "steps": [
                                                    {
                                                      "say": "האם ביקרת בבית תפילה באופן שגרתי השבוע?",
                                                      "uid": "a9e258ffc0"
                                                    },
                                                    {
                                                      "uid": "1b06a0b67c",
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
                                                            "class": "other",
                                                            "show": {
                                                              ".tx": {
                                                                "_": "לא רוצה להשיב",
                                                                "ar": "لا أريد الإجابة",
                                                                "en": "I prefer not to answer",
                                                                "fr": "Je ne veux pas répondre",
                                                                "ru": "Я не хочу отвечать на этот вопрос"
                                                              }
                                                            },
                                                            "value": "no_response"
                                                          }
                                                        ],
                                                        "variable": "routine_visits_prayer_house"
                                                      }
                                                    }
                                                  ],
                                                  "uid": "56ab1578fa",
                                                  "undefined": true
                                                }
                                              ]
                                            },
                                            "uid": "604b87b2fa"
                                          },
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "האם יצא לך להשתמש בתחבורה ציבורית בשבוע האחרון?",
                                                "ar": "هل قمت بإستخدام المواصلات العامة في الأسبوع السابق؟",
                                                "en": "Did you use public transport during the last week?",
                                                "fr": "Avez-vous utilisé les transports en commun au cours de la dernière semaine ?",
                                                "ru": "Вы пользовались общественным транспортом на последней неделе?"
                                              }
                                            },
                                            "uid": "a007204d93"
                                          },
                                          {
                                            "uid": "4c49e43d38",
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
                                                          "_": "במה מאלה השתמשת השבוע?",
                                                          "ar": "هل قمت بإستخدام أي من هذه؟",
                                                          "en": "Which of these have you taken during the last week?",
                                                          "fr": "Lequel avez-vous utilisé cette semaine ?",
                                                          "ru": "Какими средствами транспорта вы пользовались на этой неделе?"
                                                        }
                                                      },
                                                      "uid": "1f45084eb3"
                                                    },
                                                    {
                                                      "uid": "e66c79d6a0",
                                                      "wait": {
                                                        "multi": true,
                                                        "options": [
                                                          {
                                                            "field": "routine_uses_public_transportation_train",
                                                            "show": {
                                                              ".tx": {
                                                                "_": "רכבת",
                                                                "ar": "قطار",
                                                                "en": "Train",
                                                                "fr": "Train",
                                                                "ru": "Поезд"
                                                              }
                                                            }
                                                          },
                                                          {
                                                            "field": "routine_uses_public_transportation_bus",
                                                            "show": {
                                                              ".tx": {
                                                                "_": "אוטובוס",
                                                                "ar": "باص",
                                                                "en": "Bus",
                                                                "fr": "Autobus",
                                                                "ru": "Автобус"
                                                              }
                                                            }
                                                          },
                                                          {
                                                            "field": "routine_uses_public_transportation_taxi",
                                                            "show": {
                                                              ".tx": {
                                                                "_": "מונית",
                                                                "ar": "سيارة أجرة",
                                                                "en": "Taxi",
                                                                "fr": "Taxi",
                                                                "ru": "Такси"
                                                              }
                                                            }
                                                          },
                                                          {
                                                            "field": "routine_uses_public_transportation_other",
                                                            "show": {
                                                              ".tx": {
                                                                "_": "אחר",
                                                                "ar": "آخر",
                                                                "en": "Other",
                                                                "fr": "Autre",
                                                                "ru": "Другое"
                                                              }
                                                            }
                                                          },
                                                          {
                                                            "class": "other",
                                                            "show": {
                                                              ".tx": {
                                                                "_": "<span class='empty'>בעצם לא</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין פרטים נוספים</span>",
                                                                "ar": "<span class='empty'>في الحقيقة لا</span>\n<span class='not-empty'>بس </span>\n<span class='none-selected'>لا يوجد تفاصيل أخرى</span>",
                                                                "en": "<span class='empty'>Actually, I didn't</span>\n<span class='not-empty'>That's it</span>\n<span class='none-selected'>No further details</span>",
                                                                "fr": "<span class='empty'>Pas vraiment</span>\n<span class='not-empty'>C'est tout</span>\n<span class='none-selected'>Pas d'autres détails</span>",
                                                                "ru": "<span class='empty'>Не использвал/а ничего</span>\n<span class='not-empty'>Готово</span>\n<span class='none-selected'>Ничего не могу добавить</span>"
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
                                                      "uid": "782bbe4de9"
                                                    }
                                                  ],
                                                  "uid": "2a3efd7875",
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
                                              "variable": "routine_uses_public_transportation"
                                            }
                                          },
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "האם חבשת השבוע מסיכה כשיצאת מהבית?",
                                                "ar": "هل وضعت كمامة عند خروجك من البيت؟",
                                                "en": "Did you wear a mask when you went outside?",
                                                "fr": "Avez-vous porté un masque cette semaine lorsque vous avez quitté la maison ?",
                                                "ru": "Носили ли вы маску, когда вы выходили  из дома?"
                                              }
                                            },
                                            "uid": "44823f1fb5"
                                          },
                                          {
                                            "uid": "50f8e3113f",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "כן, תמיד",
                                                      "ar": "نعم, دائمًا",
                                                      "en": "Yes, always",
                                                      "fr": "Oui, toujours",
                                                      "ru": "Да, всё время"
                                                    }
                                                  },
                                                  "value": "always"
                                                },
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "רוב הזמן",
                                                      "ar": "أغلب الوقت",
                                                      "en": "Most of the time",
                                                      "fr": "La plupart du temps",
                                                      "ru": "Большую часть времени"
                                                    }
                                                  },
                                                  "value": "mostly_yes"
                                                },
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "בחלק קטן מהזמן",
                                                      "ar": "جزء قليل من الوقت",
                                                      "en": "A small part of the time",
                                                      "fr": "Une fraction du temps",
                                                      "ru": "Иногда"
                                                    }
                                                  },
                                                  "value": "mostly_no"
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
                                                  "value": "never"
                                                },
                                                {
                                                  "class": "other",
                                                  "show": {
                                                    ".tx": {
                                                      "_": "לא רוצה להשיב",
                                                      "ar": "لا أريد الإجابة",
                                                      "en": "I prefer not to answer",
                                                      "fr": "Je ne veux pas répondre",
                                                      "ru": "Я не хочу отвечать на этот вопрос"
                                                    }
                                                  },
                                                  "value": "no_response"
                                                }
                                              ],
                                              "variable": "routine_wears_mask"
                                            }
                                          }
                                        ],
                                        "uid": "cd859cb293",
                                        "value": true
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "לא, נשארתי בבית",
                                            "ar": "لا, كنت في البيت",
                                            "en": "No, I stayed at home",
                                            "fr": "Non, je suis resté à la maison",
                                            "ru": "Нет, я сидел/а дома"
                                          }
                                        },
                                        "value": false
                                      }
                                    ],
                                    "variable": "routine_left_the_house"
                                  }
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
                                      "ar": "فقط للتأكد, هل عندك أحد هاي الأعراض؟",
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
                                      "ar": "فقط للتأكد, هل عندك أحد هاي الأعراض؟",
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
                                      "ar": "فقط للتأكد, هل عندك أحد هاي الأعراض؟",
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
              "goto": "current-report-top-level-symptoms",
              "uid": "b19e056d7d"
            },
            {
              "switch": {
                "arg": "covid_positive",
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
                                            "say": "לפני כמה ימים התחיל קוצר הנשימה?",
                                            "uid": "2a8800a52b"
                                          },
                                          {
                                            "uid": "779cfb1604",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_breath_shortness_duration"
                                            }
                                          }
                                        ],
                                        "uid": "3afff12eb1",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "f1b96eef48"
                                }
                              ],
                              "uid": "4d707461bf"
                            }
                          ]
                        },
                        "uid": "9e1e6b8383"
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
                                            "say": "לפני כמה ימים התחיל השלשול?",
                                            "uid": "5e59d6a798"
                                          },
                                          {
                                            "uid": "d68be552b9",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_diarrhea_duration"
                                            }
                                          }
                                        ],
                                        "uid": "d3434a03d8",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "2562d7c244"
                                }
                              ],
                              "uid": "fa3ca3d060"
                            }
                          ]
                        },
                        "uid": "68c4e0dcba"
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
                                            "say": "לפני כמה ימים התחיל חוסר התיאבון?",
                                            "uid": "a42bd47193"
                                          },
                                          {
                                            "uid": "3e5124d488",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_lack_of_appetite_or_skipping_meals_duration"
                                            }
                                          }
                                        ],
                                        "uid": "d2e60ba522",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "60de0a50c7"
                                }
                              ],
                              "uid": "3598d1a781"
                            }
                          ]
                        },
                        "uid": "1a9f83a54b"
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
                                            "say": "לפני כמה ימים התחילו הבחילה או ההקאות?",
                                            "uid": "118da79362"
                                          },
                                          {
                                            "uid": "250f5442ec",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_nausea_and_vomiting_duration"
                                            }
                                          }
                                        ],
                                        "uid": "b24bb5dee7",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "8ecc1a4d70"
                                }
                              ],
                              "uid": "6ab51540a2"
                            }
                          ]
                        },
                        "uid": "03f21f64cc"
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
                                            "say": "לפני כמה ימים התחילו הצמרמורות?",
                                            "uid": "b55829037e"
                                          },
                                          {
                                            "uid": "bfc55485b6",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_chills_duration"
                                            }
                                          }
                                        ],
                                        "uid": "74c9e414bc",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "ba0543ed45"
                                }
                              ],
                              "uid": "def29e8126"
                            }
                          ]
                        },
                        "uid": "8b0a85cd20"
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
                                            "say": "לפני כמה ימים התחיל הבלבול?",
                                            "uid": "e620d40de8"
                                          },
                                          {
                                            "uid": "c13668b4fe",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_confusion_duration"
                                            }
                                          }
                                        ],
                                        "uid": "0b090c4e46",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "13c2e896cc"
                                }
                              ],
                              "uid": "4ad7f6a969"
                            }
                          ]
                        },
                        "uid": "2459975b04"
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
                                            "say": "לפני כמה ימים התחילו העייפות או החולשה?",
                                            "uid": "1f71c7f769"
                                          },
                                          {
                                            "uid": "5d6891ae2e",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_tiredness_or_fatigue_duration"
                                            }
                                          }
                                        ],
                                        "uid": "c82333d212",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "04bcdb9709"
                                }
                              ],
                              "uid": "c0fe66691f"
                            }
                          ]
                        },
                        "uid": "8b19b442a1"
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
                                            "say": "לפני כמה ימים אבד חוש הטעם או הריח?",
                                            "uid": "8b90f2ae49"
                                          },
                                          {
                                            "uid": "8d42655c03",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_smell_taste_loss_duration"
                                            }
                                          }
                                        ],
                                        "uid": "98cd3d0187",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "bcee851b4d"
                                }
                              ],
                              "uid": "9181786365"
                            }
                          ]
                        },
                        "uid": "0fb41f8b30"
                      }
                    ],
                    "uid": "6a027bc505"
                  }
                ]
              },
              "uid": "0c4f3047e4"
            },
            {
              "goto": "current-report-cough-symptoms",
              "uid": "03cd72e122"
            },
            {
              "switch": {
                "arg": "covid_positive",
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
                                            "say": "לפני כמה ימים התחילו הנזלת או הגודש באף?",
                                            "uid": "bbe0375689"
                                          },
                                          {
                                            "uid": "d42e3d25c2",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_clogged_nose_duration"
                                            }
                                          }
                                        ],
                                        "uid": "ba82d4c0db",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "b1893354fa"
                                }
                              ],
                              "uid": "9c17f2a27e"
                            }
                          ]
                        },
                        "uid": "165db47f6e"
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
                                            "say": "לפני כמה ימים התחיל השיעול היבש?",
                                            "uid": "b4687914b5"
                                          },
                                          {
                                            "uid": "c0116cf9c5",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_dry_cough_duration"
                                            }
                                          }
                                        ],
                                        "uid": "1e24fba892",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "48f6924e2a"
                                }
                              ],
                              "uid": "dfa19ea797"
                            }
                          ]
                        },
                        "uid": "3c533e14ad"
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
                                            "say": "לפני כמה ימים התחיל השיעול הלח, או השיעול עם הכיח?",
                                            "uid": "6eaf71986a"
                                          },
                                          {
                                            "uid": "4d8fb70313",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_moist_cough_duration"
                                            }
                                          }
                                        ],
                                        "uid": "1f608f981a",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "637628be27"
                                }
                              ],
                              "uid": "26589be41f"
                            }
                          ]
                        },
                        "uid": "6224f709fa"
                      }
                    ],
                    "uid": "7cff6d6206"
                  }
                ]
              },
              "uid": "6b5fc30955"
            },
            {
              "goto": "current-report-pain-symptoms",
              "uid": "aea4b47313"
            },
            {
              "switch": {
                "arg": "covid_positive",
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
                                            "say": "לפני כמה ימים התחילו כאבי השרירים?",
                                            "uid": "e79cf18615"
                                          },
                                          {
                                            "uid": "9d6fe76ee2",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_muscles_pain_duration"
                                            }
                                          }
                                        ],
                                        "uid": "2bdc76a06d",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "7b2b76e1af"
                                }
                              ],
                              "uid": "3c41187877"
                            }
                          ]
                        },
                        "uid": "332b6cae56"
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
                                            "say": "לפני כמה ימים התחילו כאבי הראש?",
                                            "uid": "b8938a9fc2"
                                          },
                                          {
                                            "uid": "fea3e82d47",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_headache_duration"
                                            }
                                          }
                                        ],
                                        "uid": "ee8a88a839",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "497b4829bb"
                                }
                              ],
                              "uid": "cae56528b2"
                            }
                          ]
                        },
                        "uid": "22e749b6a9"
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
                                            "say": "לפני כמה ימים התחילו כאבי הגרון?",
                                            "uid": "444959570f"
                                          },
                                          {
                                            "uid": "1b1e62cf97",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_sore_throat_duration"
                                            }
                                          }
                                        ],
                                        "uid": "1ac6a3d25c",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "09ede370aa"
                                }
                              ],
                              "uid": "23111a2d54"
                            }
                          ]
                        },
                        "uid": "a4b7e3e9a3"
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
                                            "say": "לפני כמה ימים התחילו כאבי הבטן?",
                                            "uid": "f6aaee15a0"
                                          },
                                          {
                                            "uid": "a2a5054e79",
                                            "wait": {
                                              "input-kind": "number",
                                              "input-max": 100,
                                              "input-min": 0,
                                              "input-step": 1,
                                              "placeholder": "מספר הימים",
                                              "variable": "symptoms_abdominal_pain_duration"
                                            }
                                          }
                                        ],
                                        "uid": "b7c12c065f",
                                        "undefined": true
                                      }
                                    ]
                                  },
                                  "uid": "b4c3797f67"
                                }
                              ],
                              "uid": "5caf353644"
                            }
                          ]
                        },
                        "uid": "e97a02db19"
                      },
                      {
                        "say": "האם חשת בתסמינים אחרים בימים האחרונים? אם כן, מהם?",
                        "uid": "acaf7b9e12"
                      },
                      {
                        "uid": "11ebf08e79",
                        "wait": {
                          "required": false,
                          "variable": "symptoms_other"
                        }
                      }
                    ],
                    "uid": "c271568304"
                  }
                ]
              },
              "uid": "4ba9341e28"
            },
            {
              "goto": "current-report-temperature",
              "uid": "fc3ed878ac"
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
                        "say": "למרות שאמרת קודם שההרגשה טובה, כדאי בתקופה הזו למדוד כל יום את חום הגוף.",
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
                        "ar": "فقدت الإحساس بالأطعمة أو بالروائح",
                        "en": "Lost my sense of taste or smell",
                        "es": "Pérdida del sentido del olfato o el gusto",
                        "fr": "J'ai perdu le sens du goût ou l'odorat",
                        "ru": "Я потерял/а чувство вкуса или запаха"
                      }
                    }
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
                                  "ar": "سعال ناشف",
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
                              "show": "כאבי בטן"
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
              "say": "הרבה אנשים נפגשים עכשיו, בעבודה ובמקומות אחרים -",
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
                        "say": "וכמה מהם היו מבוגרים מעל גיל 18?",
                        "uid": "7f12f102aa"
                      },
                      {
                        "uid": "4997a3d599",
                        "wait": {
                          "input-kind": "number",
                          "input-max": 99,
                          "input-min": 0,
                          "placeholder": "מספר המבוגרים, 0-99, אם לא ידוע ניתן להשאיר ריק",
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
                          "placeholder": "מספר הילדים, 0-99, אם לא ידוע ניתן להשאיר ריק",
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
              "say": "ועכשיו, רוצה לענות גם על מספר שאלות לגבי תחושת לחץ ומצב רוח?",
              "uid": "1d2d438c5d"
            },
            {
              "uid": "8284345c1b",
              "wait": {
                "options": [
                  {
                    "show": "כן, רוצה",
                    "value": "ok"
                  },
                  {
                    "show": "בפעם אחרת",
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
                  "fr": "Le professeur Alon Chen de l'Institut Weizmann et son équipe étudient divers aspects de la neurobiologie du stress. Ils demandent l'aide du public pour remplir un questionnaire qui évalue le niveau de stress et d'anxiété dans la population, afin de cartographier ses effets, ses facteurs et ses stratégies d'adaptation.",
                  "ru": "Профессор Алон Хен из Института Вайцмана и его группа исследуют нейробиологические эффекты стресса и просят публику заполнить анкету, которая оценивает уровень стресса среди населения. Это поможет исследователям оценить влияние стресса, его причины и предложить стратегию по его преодолению."
                }
              },
              "uid": "ed824c7891"
            },
            {
              "say": "עבור מי הדיווח?",
              "uid": "a18a5913a8"
            },
            {
              "do": {
                "cmd": "affiliate_alon_chen_prepare",
                "params": [
                  "בעצם, לא היום"
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
              "say": "עוד עניין קטן… יעזור מאוד אם גם החברים והקרובים שלך ישתתפו. רוצה לשתף אותם?",
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
          "show": "זמן לדיווח היומי למאבק בקורונה!"
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
