
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
                        "say": "התשובות שלך לכמה שאלות, והמשך הדיווח, יעזרו לצוות המחקר של מכון ויצמן לאתר מוקדים אפשריים להתפרצות מחודשת של המחלה ולהיערך אליה בהתאם.",
                        "uid": "352f5a331f"
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
                        "say": "האם אתם עדיין באשפוז?",
                        "uid": "d0542cea27"
                      },
                      {
                        "uid": "6be11f7012",
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
                                  "uid": "e8bd67e582"
                                },
                                {
                                  "uid": "6426ae3f34",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": "תאריך: dd/mm/yy",
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
                        "say": "האם מאז הדיווח האחרון התאשפזת?",
                        "uid": "f43046c98a"
                      },
                      {
                        "uid": "90b30474fa",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, אני באשפוז",
                              "steps": [
                                {
                                  "say": "מתי התחיל האשפוז?",
                                  "uid": "34a8cd2274"
                                },
                                {
                                  "uid": "cecfe17e4e",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": "תאריך: dd/mm/yy",
                                    "variable": "hospitalization_start_date"
                                  }
                                }
                              ],
                              "uid": "6cd50bc0e3",
                              "value": "true"
                            },
                            {
                              "show": "כן, אבל כבר שוחררתי",
                              "steps": [
                                {
                                  "say": "מתי התחיל האשפוז?",
                                  "uid": "048d7528c3"
                                },
                                {
                                  "uid": "29fa112ecd",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": "תאריך: dd/mm/yy",
                                    "variable": "hospitalization_start_date"
                                  }
                                },
                                {
                                  "say": "ומתי השתחחרת?",
                                  "uid": "3a81fc34c3"
                                },
                                {
                                  "uid": "21b7615f05",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": "תאריך: dd/mm/yy",
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
                              "show": "לא",
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
                        "say": "האם בעקבות זאת נזקקת לאשפוז?",
                        "uid": "92087271f7"
                      },
                      {
                        "uid": "89e804d4df",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, אני באשפוז כרגע",
                              "steps": [
                                {
                                  "say": "מתי התחיל האשפוז?",
                                  "uid": "dfc713d6da"
                                },
                                {
                                  "uid": "c86aba61e8",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": "תאריך: dd/mm/yy",
                                    "variable": "hospitalization_start_date"
                                  }
                                }
                              ],
                              "uid": "7bde3d7e47",
                              "value": "true"
                            },
                            {
                              "show": "כן, וכבר שוחררתי",
                              "steps": [
                                {
                                  "say": "באיזה תאריך התאשפזת?",
                                  "uid": "ec80e0bc03"
                                },
                                {
                                  "uid": "b67a75a006",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": "תאריך: dd/mm/yy",
                                    "variable": "hospitalization_start_date"
                                  }
                                },
                                {
                                  "say": "ומתי השתחחרת?",
                                  "uid": "cc9fa3e95f"
                                },
                                {
                                  "uid": "6fbecffc17",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": "תאריך: dd/mm/yy",
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
                              "show": "לא",
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
              "say": "האם אושפזת גם בטיפול נמרץ?",
              "uid": "c643ef4687"
            },
            {
              "uid": "4639dbe17c",
              "wait": {
                "options": [
                  {
                    "show": "כן",
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
                    "show": "לא",
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
                        "say": "האם היית היום בבידוד?",
                        "uid": "0b124ce172"
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
                              "show": "אני לא בבידוד",
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
                              "show": "לא",
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
                                        "show": "אני בבידוד כי חזרתי מחו״ל לאחרונה",
                                        "value": "back_from_abroad"
                                      },
                                      {
                                        "show": "אני בבידוד כי נחשפתי לחולה מאומת",
                                        "value": "contact_with_patient"
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
                                },
                                {
                                  "say": "ממתי אתם בבידוד?",
                                  "uid": "66571e9448"
                                },
                                {
                                  "uid": "13e9b3acbe",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": "תאריך: dd/mm/yy",
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
                                  "say": "האם יצאת מהבית במהלך השבוע האחרון?",
                                  "uid": "8bafa8745f"
                                },
                                {
                                  "uid": "c7c2b7ae3b",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": "כן, יצאתי",
                                        "steps": [
                                          {
                                            "say": "האם יש לך עבודה קבועה מחוץ לבית בימים אלה?",
                                            "uid": "7b88d96580"
                                          },
                                          {
                                            "uid": "5933885ce5",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": "כן, יש עבודה מחוץ לבית",
                                                  "steps": [
                                                    {
                                                      "say": "וכמה שעות, פחות או יותר, עבדת שם בשבוע האחרון?",
                                                      "uid": "850997e473"
                                                    },
                                                    {
                                                      "uid": "107bde58ff",
                                                      "wait": {
                                                        "input-kind": "number",
                                                        "input-max": 168,
                                                        "input-min": 0,
                                                        "input-step": 1,
                                                        "placeholder": "מספר השעות, בערך",
                                                        "variable": "routine_workplace_weekly_hours"
                                                      }
                                                    },
                                                    {
                                                      "say": "האם העבודה במקום קבוע?",
                                                      "uid": "7c7fbfa879"
                                                    },
                                                    {
                                                      "uid": "d918add3f0",
                                                      "wait": {
                                                        "options": [
                                                          {
                                                            "show": "כן, במקום קבוע",
                                                            "steps": [
                                                              {
                                                                "say": "אפשר לשאול איפה נמצא מקום העבודה? זה יכול לעזור לנו במחקר",
                                                                "uid": "fdd50e0a64"
                                                              },
                                                              {
                                                                "uid": "b83516d55c",
                                                                "wait": {
                                                                  "options": [
                                                                    {
                                                                      "show": "כן, בטח",
                                                                      "steps": [
                                                                        {
                                                                          "do": {
                                                                            "cmd": "prepare_city_town_suggestions",
                                                                            "variable": "_cityTownSuggestions"
                                                                          },
                                                                          "uid": "d0e04c7771"
                                                                        },
                                                                        {
                                                                          "say": "איפה נמצא מקום העבודה?",
                                                                          "uid": "931fc80ab5"
                                                                        },
                                                                        {
                                                                          "uid": "5e47aa5161",
                                                                          "wait": {
                                                                            "placeholder": "שם העיר או הישוב",
                                                                            "suggestionsFrom": "_cityTownSuggestions",
                                                                            "variable": "routine_workplace_city_town"
                                                                          }
                                                                        },
                                                                        {
                                                                          "say": "ובאיזה רחוב זה?",
                                                                          "uid": "0bccf5b0e5"
                                                                        },
                                                                        {
                                                                          "uid": "a89bee4d9f",
                                                                          "wait": {
                                                                            "placeholder": "שם הרחוב, אם ידוע",
                                                                            "required": false,
                                                                            "variable": "routine_workplace_street"
                                                                          }
                                                                        }
                                                                      ],
                                                                      "uid": "f17f5c976a"
                                                                    },
                                                                    {
                                                                      "show": "עדיף שלא"
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            "uid": "f8c00971a4",
                                                            "value": true
                                                          },
                                                          {
                                                            "show": "לא, אין כתובת קבועה בעבודה",
                                                            "value": false
                                                          }
                                                        ],
                                                        "variable": "routine_workplace_single_location"
                                                      }
                                                    },
                                                    {
                                                      "say": "האם באחד מן הימים בשבוע האחרון נתת שירות בעבודתך ליותר מ-10 אנשים?",
                                                      "uid": "8a11b12c78"
                                                    },
                                                    {
                                                      "uid": "7624cea157",
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
                                                      "switch": {
                                                        "arg": "medical_staff_member",
                                                        "cases": [
                                                          {
                                                            "steps": [
                                                              {
                                                                "say": "האם העבודה שלך היא כחלק מצוות רפואי - בטיפול בחולים או בקבלת קהל?",
                                                                "uid": "969b12fa58"
                                                              },
                                                              {
                                                                "uid": "c9422ff637",
                                                                "wait": {
                                                                  "options": [
                                                                    {
                                                                      "show": "כן, אני חלק מצוות רפואי",
                                                                      "value": true
                                                                    },
                                                                    {
                                                                      "show": "לא, אני לא",
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
                                                  "show": "לא",
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
                                            "say": "האם יצא לך להשתמש בתחבורה ציבורית בשבוע האחרון?",
                                            "uid": "a007204d93"
                                          },
                                          {
                                            "uid": "4c49e43d38",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": "כן",
                                                  "steps": [
                                                    {
                                                      "say": "במה מאלה השתמשת השבוע?",
                                                      "uid": "1f45084eb3"
                                                    },
                                                    {
                                                      "uid": "e66c79d6a0",
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
                                                      "uid": "782bbe4de9"
                                                    }
                                                  ],
                                                  "uid": "2a3efd7875",
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
                                            "uid": "44823f1fb5"
                                          },
                                          {
                                            "uid": "50f8e3113f",
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
                                        "uid": "cd859cb293",
                                        "value": true
                                      },
                                      {
                                        "show": "לא, נשארתי בבית",
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
                        "say": "ומה נשמע היום?",
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
                        "say": "אני מקווה שהמרגש עדיין טוב כמו בדיווח הקודם",
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
                        "say": "בדיווח שעבר סיפרת שהרגשת לא כל כך טוב… האם חל שיפור במצבך?",
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
                        "say": "האם כבר נמדד חום היום?",
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
                                  "goto": "current-report-ask-body-temperature",
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
                        "say": "האם נמדד חום היום?",
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
                                  "goto": "current-report-ask-body-temperature",
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
          "name": "current-report-ask-body-temperature",
          "steps": [
            {
              "say": "ומה בדיוק המדחום אומר?",
              "uid": "8ec2583cd2"
            },
            {
              "uid": "87d1b57cc3",
              "wait": {
                "input-kind": "number",
                "input-max": 43,
                "input-min": 35,
                "input-step": 0.1,
                "placeholder": "מעלות חום, 35.0-43.0",
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
                    "field": "symptoms_lack_of_appetite_or_skipping_meals",
                    "show": "חוסר תאבון או דילוג על ארוחות"
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
                        "say": "נשמח לעוד כמה פרטים לגבי השיעול והנזלת.",
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
                        "say": "מה כואב בדיוק?",
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
                              "field": "symptoms_abdominal_pain",
                              "show": "כאבי בטן"
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
              "say": "הרבה אנשים נפגשים עכשיו, בעבודה ובמקומות אחרים -",
              "uid": "868eb1b3f6"
            },
            {
              "say": "האם ביממה האחרונה שהית בקרבת אנשים (<b>שאינם בני הבית</b>) למשך יותר מ-15 דקות ובמרחק של פחות מ-2 מטרים",
              "uid": "9f918e739e"
            },
            {
              "uid": "e1add559ab",
              "wait": {
                "options": [
                  {
                    "show": "לא"
                  },
                  {
                    "show": "כן",
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
                        "say": "וכמה ילדים מתחת לגיל 18?",
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
              "say": "פרופ׳ אלון חן ממכון וייצמן וצוותו חוקרים היבטים שונים של הנוירוביולוגיה של לחץ, ומבקשים את עזרת הציבור במילוי שאלון המעריך את רמת הלחץ והחרדה בקרב האוכלוסייה, למיפוי השפעותיה, גורמיה ואסטרטגיות ההתמודדות איתה.",
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
                    "show": "כן, אשמח לשתף",
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
                                      "הקישור לדיווח היומי הועתק ללוח!"
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
                                  "say": "תודה רבה על השיתוף!",
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
                    "show": "לא עכשיו",
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
                        "say": "יש כמה דרכים שבהן נוכל להזכיר לך לחזור ולספר לנו מה שלומך, שננסה?",
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
                      }
                    ],
                    "uid": "6e65389281"
                  },
                  {
                    "match": "not-required",
                    "steps": [
                      {
                        "say": "תודה רבה שחזרת לדווח. מחכים לשמוע ממך שוב",
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
                            "אם כלום לא קורה, פתחו את הקובץ corona_reminder.ics מה״הורדות״",
                            "המשך"
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
