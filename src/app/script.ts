
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
              "goto": "personal-details",
              "uid": "a06dfaf7c2"
            },
            {
              "goto": "preconditions-check",
              "uid": "e9acb54132"
            },
            {
              "goto": "insulation",
              "uid": "7a26c4124f"
            },
            {
              "goto": "current-report",
              "uid": "346d2a3795"
            },
            {
              "goto": "exposures",
              "uid": "ff9a2f5002"
            },
            {
              "goto": "end-of-report",
              "uid": "91d138c403"
            }
          ],
          "uid": "898235e117"
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
                    "match": "new",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "טוב שבאת,",
                            "ar": "ممتاز انك جيت/ي,",
                            "en": "How good of you to drop by,",
                            "es": "Que bueno que viniste,",
                            "ru": "Как хорошо что вы здесь,"
                          }
                        },
                        "uid": "af5b77d3b6"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "התשובות שלך לכמה שאלות קצרות יעזרו מאוד במאמץ המשותף לעצור את התפרצות הקורונה",
                            "ar": "أجوبتك لشوية أسئلة قصيرة رح تساعد كثير بمسعانا المشترك لإيقاف إنتشار الكورونا",
                            "en": "Answering a few short questions would contribute a lot to our joint effort to stop the Corona outbreak",
                            "es": "Tus respuestas a algunas preguntas breves nos ayudarán significativamente en el esfuerzo conjunto de detener el brote de coronavirus. ",
                            "ru": "Ваши ответы на несколько коротких вопросов очень помогут в совместных усилиях остановить вспышку Короны"
                          }
                        },
                        "uid": "73613badb3"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "אם זה בסדר, אבקש לדעת כמה פרטים אנונימיים לטובת המחקר",
                            "ar": "إذا ممكن, بدي أعرف شوية تفاصيل من أجل البحث.",
                            "en": "We have a few anonymous questions for you, to help the research",
                            "es": "Si te parece, me gustaría saber algunos datos anónimos a favor de la investigación",
                            "ru": "Если не против, попрошу у вас некоторые анонимные подробности в пользу научного исследования."
                          }
                        },
                        "uid": "fbbed77d3e"
                      },
                      {
                        "say": "נתחיל בדיווח עבורך, בסופו יתאפשר גם דיווח עבור בני משפחה נוספים",
                        "uid": "208d7c05c2"
                      }
                    ],
                    "uid": "7ad5fdc853"
                  },
                  {
                    "match": "returning",
                    "steps": [
                      {
                        "say": "הי! טוב לראותך שוב",
                        "uid": "29db961015"
                      },
                      {
                        "say": "הדיווחים שלך ושל אחרים עוזרים לנו מאוד במחקר ובניסיון להיאבק בקורונה",
                        "uid": "b40745dc26"
                      },
                      {
                        "say": "עבור מי ברצונך לדווח עכשיו?",
                        "uid": "37236f3712"
                      },
                      {
                        "do": {
                          "cmd": "fetch_previous_reports",
                          "params": [
                            "דיווח חדש ב{{street}} {{city_town}}",
                            "דיווח חדש בכתובת אחרת"
                          ],
                          "variable": "_report_options"
                        },
                        "uid": "e278b6b866"
                      },
                      {
                        "uid": "c10cf2ab5a",
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
                        "uid": "8c6d2e311f"
                      },
                      {
                        "say": "הכי טוב כשכולם מדווחים על עצמם בכל יום",
                        "uid": "34f7fd91ef"
                      },
                      {
                        "say": "אבל אם זה לא מסתדר, אפשר להקריא להם את השאלות או פשוט לענות בשמם",
                        "uid": "a46ed1d5ca"
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
                                  "ru": "мужчина"
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
                                  "ru": "женщина"
                                }
                              },
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
                                  "say": "בן כמה?",
                                  "uid": "1fb50d3ac9"
                                }
                              ],
                              "uid": "afe829864e"
                            },
                            {
                              "match": "female",
                              "steps": [
                                {
                                  "say": "בת כמה?",
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
                              "_": "גיל",
                              "ar": "الجيل",
                              "en": "Age",
                              "es": "Edad",
                              "ru": "возраст"
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
                        "say": {
                          ".tx": {
                            "_": "מה הוא מקום המגורים?",
                            "en": "Where do you live?"
                          }
                        },
                        "uid": "25eb69e559"
                      },
                      {
                        "uid": "9b02b5bdde",
                        "wait": {
                          "placeholder": {
                            ".tx": {
                              "_": "שם העיר או הישוב",
                              "ar": "إسم المدينة أو القرية",
                              "en": "Name of city or town",
                              "es": "Nombre de la ciudad o la localidad",
                              "ru": "Название города или поселка"
                            }
                          },
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
                            "en": "Your street?",
                            "es": "¿En qué calle vives?",
                            "ru": "Название улици?"
                          }
                        },
                        "uid": "2966b83d86"
                      },
                      {
                        "uid": "4fdca8e817",
                        "wait": {
                          "placeholder": {
                            ".tx": {
                              "_": "שם הרחוב",
                              "ar": "إسم الشارع",
                              "en": "Street name",
                              "es": "Calle",
                              "ru": "название улици"
                            }
                          },
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
                            {
                              ".tx": {
                                "_": "בן {{age}} מ{{street}} {{city_town}}",
                                "en": "{{age}} years old from {{street}} {{city_town}}",
                                "es": "Hombre {{age}} מ{{street}} {{city_town}}"
                              }
                            },
                            {
                              ".tx": {
                                "_": "בת {{age}} מ{{street}} {{city_town}}",
                                "en": "{{age}} years old from {{street}} {{city_town}}",
                                "es": " Mujer {{age}} מ{{street}} {{city_town}}"
                              }
                            }
                          ],
                          "variable": "alias"
                        },
                        "uid": "8b55168adb"
                      },
                      {
                        "say": "נהדר, בכדי לשמור על הפרטיות שלך, בדיווחים הבאים נקרא לך פשוט {{alias}}",
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
              "goto": "preconditions-diseases-loop",
              "uid": "b63b4db678"
            },
            {
              "goto": "preconditions-smoking",
              "uid": "2e29f0c171"
            },
            {
              "do": {
                "cmd": "set_flag",
                "params": [
                  "record",
                  "preconditions_received"
                ]
              },
              "uid": "cafc8bd838"
            }
          ],
          "uid": "d96a2bfad6"
        },
        {
          "name": "preconditions-diseases-loop",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "אני אשאל אותך על כמה מחלות, שחשוב לנו לדעת אם אובחנו אצלך בעבר:",
                  "ar": "بدي أسألك عن شوية أمراض, اللي مهم لإلنا نعرف إذا كانوا عندك بالماضي:",
                  "en": "It's time for a few questions about illnesses you may have been diagnoses with in the past:",
                  "es": "Te preguntaré sobre algunas enfermedades que es importante que sepamos si te las han diagnosticado en el pasado:",
                  "ru": "Я спрошу у вас а некоторых заболеваниях, о которых нам важно знать был ли вам когда либо поставлен диагноз:"
                }
              },
              "uid": "3b1b905fff"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "ade3b992a5"
            },
            {
              "say": {
                ".tx": {
                  "_": "מחלות נוספות?",
                  "ar": "أمراض أخرى",
                  "en": "Any other existing illnesses?",
                  "es": "¿Otras enfermedades?",
                  "ru": "Дополнительные заболевания?"
                }
              },
              "uid": "90ed58a48c"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "07e85460da"
            },
            {
              "say": {
                ".tx": {
                  "_": "עוד משהו?",
                  "ar": "كمان إشي؟",
                  "en": "Anything else?",
                  "es": "¿Algo más?",
                  "ru": "Что то еще?"
                }
              },
              "uid": "7da48d9dba"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "03e166a37b"
            },
            {
              "say": {
                ".tx": {
                  "_": "האם ישנן מחלות רקע נוספות בהן אובחנת?",
                  "ar": "هل تم تشخيصك بأمراض مزمنة أخرى؟",
                  "en": "Have you been diagnosed with any other pre-existing conditions?",
                  "es": "¿Te han diagnosticado otras enfermedades crónicas o tienes antecedentes patológicos?",
                  "ru": "Диагностированы ли у вас какие-либо сопутствующие заболевания?"
                }
              },
              "uid": "3337d3489a"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "ff913f4be2"
            },
            {
              "say": {
                ".tx": {
                  "_": "עוד משהו?",
                  "ar": "كمان إشي؟",
                  "en": "Anything else?",
                  "es": "¿Algo más?",
                  "ru": "Что то еще?"
                }
              },
              "uid": "ebeb9fc029"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "593bd58fad"
            },
            {
              "say": {
                ".tx": {
                  "_": "מחלות נוספות?",
                  "ar": "أمراض أخرى",
                  "en": "Any other existing illnesses?",
                  "es": "¿Otras enfermedades?",
                  "ru": "Дополнительные заболевания?"
                }
              },
              "uid": "4e7519c646"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "fb727c4c8b"
            },
            {
              "say": {
                ".tx": {
                  "_": "עוד משהו?",
                  "ar": "كمان إشي؟",
                  "en": "Anything else?",
                  "es": "¿Algo más?",
                  "ru": "Что то еще?"
                }
              },
              "uid": "8c4196787f"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "3d6501c445"
            }
          ],
          "uid": "d14be6bcf5"
        },
        {
          "name": "preconditions-diseases",
          "steps": [
            {
              "uid": "8188eb0451",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "סוכרת",
                        "ar": "سُكري",
                        "en": "Diabetes",
                        "es": "Diabetes",
                        "ru": "диабет"
                      }
                    },
                    "unless": "precondition_chronic_diabetes",
                    "value": "precondition_chronic_diabetes"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "בעיית יתר לחץ דם",
                        "ar": "مشكلة ضغط دم عالي",
                        "en": "Hypertension",
                        "es": "Hipertensión arterial",
                        "ru": "высокое давление"
                      }
                    },
                    "unless": "precondition_chronic_hypertension",
                    "value": "precondition_chronic_hypertension"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "מחלת לב, כלי דם או שבץ",
                        "ar": "أمراض قلب, أوعية دموية أو جلطة",
                        "en": "Coronary artery disease, stroke or Cardiovascular disease",
                        "es": "Enfermedades del corazón, vasos sanguíneos o derrames cerebrales",
                        "ru": "сердечно-сосудистое заболевание или инсульт"
                      }
                    },
                    "unless": "precondition_chronic_ischemic_heart_disease_or_stroke",
                    "value": "precondition_chronic_ischemic_heart_disease_or_stroke"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "מחלת ריאות כרונית כולל אסתמה (ללא אסתמה בילדות)",
                        "ar": "مرض مُزمن بالرئات يشمل ربو - אסתמה (بإستثناء ربو بالطفولة) ",
                        "en": "Chronic pulmonary disease including Asthma (not including childhood Asthma)",
                        "es": "Enfermedad pulmonar crónica incluyendo asma (sin asma en la infancia)",
                        "ru": "Хроническая болезнь легких, включая астму (но не детскую астму)"
                      }
                    },
                    "unless": "precondition_chronic_lung_disease",
                    "value": "precondition_chronic_lung_disease"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "סרטן",
                        "ar": "سرطان",
                        "en": "Cancer",
                        "es": "Cáncer",
                        "ru": "рак"
                      }
                    },
                    "unless": "precondition_chronic_cancer",
                    "value": "precondition_chronic_cancer"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "אי ספיקת כליות",
                        "ar": "قصور كلوي",
                        "en": "Renal failure",
                        "es": "Insuficiencia renal",
                        "ru": "почечная недостаточность"
                      }
                    },
                    "unless": "precondition_chronic_kidney_failure",
                    "value": "precondition_chronic_kidney_failure"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "דיכוי חיסוני לרבות נטילת תרופות המדכאות את מערכת החיסון",
                        "ar": "نقص بالمناعة يشمل إستخدام أدوية اللي تُضعف جهاز المناعة",
                        "en": "Immunosupressed, including taking immunosuppressant drugs",
                        "es": "Inmunosupresión incluyendo el consumo de remedios que inhiben el sistema inmunológico",
                        "ru": "Иммуносупрессия, включая прием лекарств, подавляющих иммунную систему"
                      }
                    },
                    "unless": "precondition_chronic_immune_system_suppression",
                    "value": "precondition_chronic_immune_system_suppression"
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "לא אובחנתי באף אחת מאלה",
                        "ar": "لم يتم تشخيصي بأي من هذه الأمراض",
                        "en": "I wasn't diagnosed with any of these",
                        "es": "No me han diagnosticado ninguna de estas enfermedades",
                        "ru": "У меня не было диагностировано ни одного из этих заболеваний"
                      }
                    },
                    "steps": [
                      {
                        "pop": "preconditions",
                        "uid": "76ca4b7ea0"
                      }
                    ],
                    "uid": "7a4fd9e2c9"
                  }
                ],
                "variable": "_var"
              }
            },
            {
              "do": {
                "cmd": "flag_from_var",
                "params": [
                  "record"
                ]
              },
              "uid": "b90814dc30"
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
                        "en": "Smoking daily",
                        "es": "Fumo diariamente",
                        "ru": "ежедневное курение"
                      }
                    },
                    "value": "daily_smoker"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "עישנתי בעבר, הפסקתי לפני פחות מחמש שנים",
                        "ar": "دخنت في السابق, توقفت قبل أقل من خمس سنين",
                        "en": "Smoked in the past, stopped less than 5 years ago",
                        "es": "Fumé en el pasado, dejé hace menos de cinco años",
                        "ru": "Я курил/а раньше, бросила менее пяти лет назад"
                      }
                    },
                    "value": "short_past_smoker"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "עישנתי בעבר, לפני יותר מחמש שנים",
                        "ar": "دخنت في السابق, قبل أكثر من خمس سنين",
                        "en": "Smoked in the past, more than 5 years ago",
                        "es": "Fumé en el pasado, hace más de cinco años",
                        "ru": "Я курил/а раньше, бросила более пяти лет назад"
                      }
                    },
                    "value": "long_past_smokre"
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "אף פעם",
                        "ar": "ولا مرة",
                        "en": "Never",
                        "es": "Nunca",
                        "ru": "никогда"
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
                            "_": "אוקיי, עברנו את זה...",
                            "ar": "أوكي, مرقنا..",
                            "en": "OK, we're done with that...",
                            "es": "OK, lo pasamos... ",
                            "ru": "Так, это мы прошли..."
                          }
                        },
                        "uid": "384df452a2"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "עכשיו, מה בנוגע לבידוד?",
                            "ar": " الآن, شو بالنسبة للعزل؟",
                            "en": "Now, what about quarantine?",
                            "es": "Ahora, ¿qué nos puedes decir respecto al aislamiento?",
                            "ru": "А теперь, что насчет карантина?"
                          }
                        },
                        "uid": "cfe2d49073"
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
                                  "say": "הדיווח הקודם היה על בידוד או אישפוז. האם משהו השתנה?",
                                  "uid": "f347774e64"
                                }
                              ],
                              "uid": "e18fd30513"
                            },
                            {
                              "default": true,
                              "steps": [
                                {
                                  "say": "בדיווח הקודם לא הוזכר בידוד או אשפוז. האם משהו השתנה?",
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
                              "show": {
                                ".tx": {
                                  "_": "לא",
                                  "ar": "لا",
                                  "en": "No",
                                  "es": "No",
                                  "ru": "нет"
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
                                  "ru": "да"
                                }
                              },
                              "steps": [
                                {
                                  "do": {
                                    "cmd": "clear_fields",
                                    "params": [
                                      "record",
                                      "exposure.*",
                                      "insulation.*"
                                    ]
                                  },
                                  "uid": "8ed4a9cee1"
                                }
                              ],
                              "uid": "34c09cceb0"
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
                              "show": {
                                ".tx": {
                                  "_": "אני בבידוד מבני משפחה, ובחדר סגור",
                                  "ar": "أنا معزول عن عائلتي, وبغرفة مغلقة",
                                  "en": "I'm quarantined from my family, in a separate room",
                                  "es": "Estoy aislado de mi familia, y en un cuarto cerrado",
                                  "ru": "я в изоляции от семьи, и в закрытой комнате"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "באיזה תאריך התחיל הבידוד?",
                                      "ar": "في أي تاريخ بدأ العزل؟",
                                      "en": "At what date did your quarantine begin?",
                                      "es": "¿Desde qué fecha comenzó la cuarentena?",
                                      "ru": "Какого числа начался карантин?"
                                    }
                                  },
                                  "uid": "d64d63ba82"
                                },
                                {
                                  "uid": "5f298814b6",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd.mm.yy",
                                        "en": "date: dd.mm.yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "ru": "число: dd.mm.yy"
                                      }
                                    },
                                    "variable": "insulation_start_date"
                                  }
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "מה הסיבה לשהות שלך בבידוד?",
                                      "ar": "شو سبب وجودك بالعزل؟",
                                      "en": "Why are you quarantined?",
                                      "es": "¿Cuál es la razón por la que te encuentras en aislamiento?",
                                      "ru": "В чем причина вашего пребывания на карантине?"
                                    }
                                  },
                                  "uid": "a23809efad"
                                },
                                {
                                  "uid": "a51b1efaef",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד כי חזרתי מחו״ל לאחרונה",
                                            "ar": "أنا بعزل لأنني كنت مسافر/ة",
                                            "en": "I'm quarantined because I recently returned from a foreign country",
                                            "es": "Estoy en cuarentena ya que regresé últimamente del exterior",
                                            "ru": "Я на карантине, вследствии недавнего возвращения из-за граници"
                                          }
                                        },
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "מתי חזרת לארץ?",
                                                "ar": "وينتا رجعت/ي على البلاد؟",
                                                "en": "When did you return to Israel?",
                                                "es": "¿Cuándo has regresado al país?",
                                                "ru": "Когда вы вернулись в страну?"
                                              }
                                            },
                                            "uid": "3af14d42ee"
                                          },
                                          {
                                            "uid": "8d53223749",
                                            "wait": {
                                              "input-kind": "date",
                                              "options": null,
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "תאריך: dd/mm/yy",
                                                  "ar": "تاريخ: dd.mm.yy",
                                                  "en": "date: dd.mm.yy",
                                                  "es": "Fecha: dd.mm.aa",
                                                  "ru": "число: dd.mm.yy"
                                                }
                                              },
                                              "variable": "insulation_returned_from_abroad_date"
                                            }
                                          }
                                        ],
                                        "uid": "afa97d10e1",
                                        "value": "back-from-abroad"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד כי נחשפתי לחולה מאומת",
                                            "ar": "أنا بعزل لأنني تعرضت لمريض/ة تم التحقق منه/ا",
                                            "en": "I'm quarantined because I've been exposed to a verified patient",
                                            "es": "Estoy en aislamiento porque he estado expuesto a un enfermo confirmado",
                                            "ru": "Я на карантине вследствии нахождения рядом с подтвержденным больным"
                                          }
                                        },
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "ידוע לך מה מספר החולה שפגשת?",
                                                "ar": "بتعرف/ي رقم المريض/ة اللي التقيته/ا؟",
                                                "en": "Do you know the number of the patient that you've been exposed to?",
                                                "es": "¿Sabes con qué enfermo (No. de enfermo) te has encontrado?",
                                                "ru": "Известен ли вам номер больного с которым вы были в контакте?"
                                              }
                                            },
                                            "uid": "6a33972a29"
                                          },
                                          {
                                            "uid": "bd03329baf",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "כן",
                                                      "ar": "نعم",
                                                      "en": "Yes",
                                                      "es": "Sí",
                                                      "ru": "да"
                                                    }
                                                  },
                                                  "steps": [
                                                    {
                                                      "say": {
                                                        ".tx": {
                                                          "_": "מצויין. מה המספר?",
                                                          "ar": "ممتاز. شو الرقم؟",
                                                          "en": "Excellent. What's their number?",
                                                          "es": "Excelente, ¿cuál es el número?",
                                                          "ru": "Отлично. Какой его номер?"
                                                        }
                                                      },
                                                      "uid": "d75278ca87"
                                                    },
                                                    {
                                                      "uid": "ce66e394f1",
                                                      "wait": {
                                                        "placeholder": {
                                                          ".tx": {
                                                            "_": "מספר החולה שפגשתי",
                                                            "ar": "رقم المريض/ة اللي التقيت فيه/ا",
                                                            "en": "The number of the patient that I've been exposed to",
                                                            "es": "Número del enfermo con el que me he encontrado",
                                                            "ru": "Номер больного с которым я был/а в контакте"
                                                          }
                                                        },
                                                        "variable": "insulation_patient_number"
                                                      }
                                                    },
                                                    {
                                                      "say": {
                                                        ".tx": {
                                                          "_": "האם זכור לך היום שבו נפגשתם?",
                                                          "ar": "متذكر/ة بأي يوم التقيت فيه/ا؟",
                                                          "en": "Do you remember when you met that patient?",
                                                          "es": "¿Recuerdas en que fecha se encontraron?",
                                                          "ru": "Вы помните день вашей встречи?"
                                                        }
                                                      },
                                                      "uid": "fddfffd461"
                                                    },
                                                    {
                                                      "uid": "da26dd517c",
                                                      "wait": {
                                                        "options": [
                                                          {
                                                            "show": {
                                                              ".tx": {
                                                                "_": "כן",
                                                                "ar": "نعم",
                                                                "en": "Yes",
                                                                "es": "Sí",
                                                                "ru": "да"
                                                              }
                                                            },
                                                            "steps": [
                                                              {
                                                                "say": {
                                                                  ".tx": {
                                                                    "_": "מה היה התאריך?",
                                                                    "ar": "شو كان التاريخ؟",
                                                                    "en": "What was the date?",
                                                                    "es": "¿En qué fecha?",
                                                                    "ru": "Какого это было числа?"
                                                                  }
                                                                },
                                                                "uid": "dc079acad2"
                                                              },
                                                              {
                                                                "uid": "2a2b823bb9",
                                                                "wait": {
                                                                  "input-kind": "date",
                                                                  "placeholder": {
                                                                    ".tx": {
                                                                      "_": "תאריך: dd/mm/yy",
                                                                      "ar": "تاريخ: dd.mm.yy",
                                                                      "en": "date: dd.mm.yy",
                                                                      "es": "Fecha: dd.mm.aa",
                                                                      "ru": "число: dd.mm.yy"
                                                                    }
                                                                  },
                                                                  "variable": "insulation_exposure_date"
                                                                }
                                                              }
                                                            ],
                                                            "uid": "ea17565621",
                                                            "value": "yes"
                                                          },
                                                          {
                                                            "show": {
                                                              ".tx": {
                                                                "_": "לא זכור לי",
                                                                "ar": "مش متذكر/ة",
                                                                "en": "I can't recall",
                                                                "es": "No lo recuerdo",
                                                                "ru": "не припомню"
                                                              }
                                                            },
                                                            "value": "no"
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "uid": "ca8eeb8cd6",
                                                  "value": "yes"
                                                },
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "לא",
                                                      "ar": "لا",
                                                      "en": "No",
                                                      "es": "No",
                                                      "ru": "нет"
                                                    }
                                                  },
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
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד כי חוויתי תסמינים",
                                            "ar": "أنا موجود/ة بعزل لأنني حسيت بأعراض",
                                            "en": "I'm quarantined because I've exhibited symptoms ",
                                            "es": "Estoy en aislamiento porque he padecido síntomas",
                                            "ru": "Я на карантине вследствии появления симптомов"
                                          }
                                        },
                                        "value": "has_symptoms"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד מרצוני האישי",
                                            "ar": "أنا موجود/ة بعزل بإختياري الشخصي",
                                            "en": "I'm quarantined of my own choice",
                                            "es": "Estoy en aislamiento por propia voluntad",
                                            "ru": "Я на самоизоляции"
                                          }
                                        },
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
                              "show": {
                                ".tx": {
                                  "_": "אני חולה קורונה (מאומת בבדיקת מעבדה)",
                                  "ar": "أنا مريض كورونا (مؤكد بفحص مختبر)",
                                  "en": "I'm a verified COVID-19 patient (verified by lab test)",
                                  "es": "Estoy diagnosticado con coronavirus (confirmado por medio de análisis de laboratorio)",
                                  "ru": "Я болен Короной (подтверждено лабораторными анализами)"
                                }
                              },
                              "steps": [
                                {
                                  "uid": "32b02ca38f",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אשפוז בבית חולים",
                                            "ar": "في المستشفى",
                                            "en": "Hospitalized",
                                            "es": "Hospitalización",
                                            "ru": "госпитализирован в больнице"
                                          }
                                        },
                                        "value": "hospital"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "בבית מלון",
                                            "ar": "في الفندق",
                                            "en": "Hotel",
                                            "es": "En un hotel",
                                            "ru": "в отеле"
                                          }
                                        },
                                        "value": "hotel"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "בבית",
                                            "ar": "في البيت",
                                            "en": "Home",
                                            "es": "En mi casa",
                                            "ru": "дома"
                                          }
                                        },
                                        "value": "home"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "החלמתי ואני בבית",
                                            "ar": "شفيت وأنا في البيت",
                                            "en": "I'm recovered and at home",
                                            "es": "Ya me he recuperado y estoy en casa",
                                            "ru": "я выздоровел и нахожусь дома"
                                          }
                                        },
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
                              "show": {
                                ".tx": {
                                  "_": "אני לא בבידוד",
                                  "ar": "أنا مش بعزل",
                                  "en": "I'm not quarantined",
                                  "es": "No estoy en aislamiento",
                                  "ru": "я не на карантине"
                                }
                              },
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
                    "steps": [
                      {
                        "say": "ומה נשמע היום?",
                        "uid": "a8ade6b2ba"
                      },
                      {
                        "uid": "8bd1462742",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "בסדר גמור",
                                  "ar": "ممتاز",
                                  "en": "Fine",
                                  "es": "Todo está bien",
                                  "ru": "отлично"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "נהדר לשמוע!",
                                      "ar": "ابسطنا نسمع!",
                                      "en": "That's great!",
                                      "es": "¡Nos alegramos de escuchar!",
                                      "ru": "Рады слышать!"
                                    }
                                  },
                                  "uid": "c56fee8f07"
                                },
                                {
                                  "say": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                  "uid": "6145fe48e5"
                                }
                              ],
                              "uid": "2ff5d05446",
                              "value": "feel_good"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא כל כך טוב",
                                  "ar": "مش كثير منيح",
                                  "en": "So so",
                                  "es": "No muy bien",
                                  "ru": "не очень хорошо"
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
                                      "ru": "Какая неприятность... В чем это выражается?"
                                    }
                                  },
                                  "uid": "363362616a"
                                }
                              ],
                              "uid": "1764f660a9",
                              "value": "feel_bad"
                            }
                          ],
                          "variable": "general_feeling"
                        }
                      }
                    ],
                    "uid": "2bf7b52516",
                    "undefined": true
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
                                  "say": {
                                    ".tx": {
                                      "_": "נהדר לשמוע!",
                                      "ar": "ابسطنا نسمع!",
                                      "en": "That's great!",
                                      "es": "¡Nos alegramos de escuchar!",
                                      "ru": "Рады слышать!"
                                    }
                                  },
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
                                  "say": {
                                    ".tx": {
                                      "_": "אוייש… איך זה בא לידי ביטוי?",
                                      "ar": "أوتش... كيف إحساسك؟",
                                      "en": "Oh, sorry to hear that... what are you feeling?",
                                      "es": "¡Oy! y ¿Cómo se manifiesta?",
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
                        "say": "אני מקווה שהמצב השתפר מהדיווח האחרון..?",
                        "uid": "8c4adf385a"
                      },
                      {
                        "uid": "98c766d9cb",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, עכשיו הכל בסדר",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "נהדר לשמוע!",
                                      "ar": "ابسطنا نسمع!",
                                      "en": "That's great!",
                                      "es": "¡Nos alegramos de escuchar!",
                                      "ru": "Рады слышать!"
                                    }
                                  },
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
                                  "say": {
                                    ".tx": {
                                      "_": "אוייש… איך זה בא לידי ביטוי?",
                                      "ar": "أوتش... كيف إحساسك؟",
                                      "en": "Oh, sorry to hear that... what are you feeling?",
                                      "es": "¡Oy! y ¿Cómo se manifiesta?",
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
              "goto": "current-report-symptoms-loop",
              "uid": "b19e056d7d"
            },
            {
              "goto": "current-report-temperature",
              "uid": "cb252a9f1a"
            }
          ],
          "uid": "ee520e19a7"
        },
        {
          "name": "current-report-temperature",
          "steps": [
            {
              "say": "האם נמדד חום ביממה האחרונה?",
              "uid": "a265cb3659"
            },
            {
              "uid": "d8c6b1182c",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "כן",
                        "ar": "نعم",
                        "en": "Yes",
                        "es": "Sí",
                        "ru": "да"
                      }
                    },
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "ומה המדחום אומר?",
                            "ar": "وشو مكتوب على ميزان الحرارة؟",
                            "en": "What does your thermometer say?",
                            "es": "y ¿Qué dice el termómetro?",
                            "ru": "А что показывает градусник?"
                          }
                        },
                        "uid": "c6ab019b33"
                      },
                      {
                        "uid": "414c51b83b",
                        "wait": {
                          "input-kind": "number",
                          "input-max": 43,
                          "input-min": 35,
                          "input-step": 0.1,
                          "placeholder": {
                            ".tx": {
                              "_": "מעלות חום, 35-43",
                              "en": "35-43 degrees Celsius",
                              "es": "Grados de fiebre, 35-43"
                            }
                          },
                          "variable": "temperature"
                        }
                      }
                    ],
                    "uid": "a49ea50c43",
                    "value": "yes"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "לא",
                        "ar": "لا",
                        "en": "No",
                        "es": "No",
                        "ru": "нет"
                      }
                    },
                    "value": "no"
                  }
                ]
              }
            }
          ],
          "uid": "89a20e8104"
        },
        {
          "name": "current-report-symptoms-loop",
          "steps": [
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "63755ce1aa"
            },
            {
              "say": {
                ".tx": {
                  "_": "האם יש עוד סוגים של סימפטומים?",
                  "ar": "هل في عندك أعراض أخرى؟",
                  "en": "Experiencing any other symptoms?",
                  "es": "¿Hay otros tipos de síntomas?",
                  "ru": "Имеются ли дополнительные симптомы?"
                }
              },
              "uid": "203b61a17e"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "f53bc4c82a"
            },
            {
              "say": {
                ".tx": {
                  "_": "עוד תופעות שכדאי שנכיר?",
                  "ar": "كمان أعراض لازم نعرفها؟",
                  "en": "Anythings else we need to know about?",
                  "es": "¿Ocurren otras cosas que deberíamos saber?",
                  "ru": "Дополнительные симптомы о которых нам стоит узнать?"
                }
              },
              "uid": "44e2026d1a"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "14ed40aca4"
            },
            {
              "say": "עוד משהו שמפריע או גורם להרגשה לא טובה?",
              "uid": "73a0967d13"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "0bad6900a2"
            },
            {
              "say": {
                ".tx": {
                  "_": "מה עוד?",
                  "ar": "شو كمان؟",
                  "en": "What else?",
                  "es": "¿Qué más?<br>",
                  "ru": "Что-то ещё?"
                }
              },
              "uid": "b6fb5b4c3c"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "281a379675"
            },
            {
              "say": "יש עוד משהו שמפריע?",
              "uid": "dff92584db"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "e7ebec4dda"
            },
            {
              "say": "עוד משהו שגורם הרגשה לא טובה?",
              "uid": "fb1eb9cd42"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "f06c342959"
            },
            {
              "say": {
                ".tx": {
                  "_": "משהו נוסף שכדאי שנכיר?",
                  "ar": "كمان إشي إضافي لازم نعرفه؟",
                  "en": "Anythings else we need to know about?",
                  "es": "¿Hay algo más que sería conveniente que sepamos?",
                  "ru": "Что-то ещё о чём стоит рассказать?"
                }
              },
              "uid": "43f4918f1c"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "41c512be93"
            },
            {
              "say": "מה עוד?",
              "uid": "3aa9495d57"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "f93e6f6244"
            },
            {
              "say": "תסמין נוסף?",
              "uid": "f1993e315f"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "bbc2a1431e"
            }
          ],
          "uid": "529f6c7050"
        },
        {
          "name": "current-report-top-level-symptoms",
          "steps": [
            {
              "uid": "939745f377",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "שיעולים או נזלת",
                        "ar": "سُعال او سيلان بالأنف",
                        "en": "Coughing or a runny nose",
                        "es": "Tos o secreción nasal",
                        "ru": "кашель или насморк"
                      }
                    },
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "נשמח לעוד כמה פרטים לגבי השיעול והנזלת.",
                            "ar": "بيسعدنا نعرف كمان تفاصيل عن السُعال وسيلان الأنف.",
                            "en": "Can you tell us a little more about the coughing and runny nose?",
                            "es": "Nos gustaría obtener algunos datos más respecto a la tos y las secreciones nasales.",
                            "ru": "Расскажите нам пожалуйста побольше о симптомах кашля и насморка."
                          }
                        },
                        "uid": "ba134f7deb"
                      },
                      {
                        "goto": "symptoms_cough_questions",
                        "uid": "52bf71f303"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "יש עוד בעיות שקשורות בשיעולים או נזלת?",
                            "ar": "كمان مشاكل مرتبطة بالسُعال أو سيلان الأنف؟",
                            "en": "Other issues related to coughing or runny nose?",
                            "es": "¿Hay más problemas relacionados con la tos y la mucosidad?",
                            "ru": "Любые другие проблемы, связанные с кашлем или насморком?"
                          }
                        },
                        "uid": "eba3372b9e"
                      },
                      {
                        "goto": "symptoms_cough_questions",
                        "uid": "83e63b4189"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "עוד תופעה מאלו?",
                            "ar": "كمان أعراض مشابهة؟",
                            "en": "Any similar issues?",
                            "es": "¿Otros síntomas además de esos?",
                            "ru": "Дополнительные из вышеупомянутых симптомы?"
                          }
                        },
                        "uid": "42d6c4e645"
                      },
                      {
                        "goto": "symptoms_cough_questions",
                        "uid": "70b6fb49a9"
                      }
                    ],
                    "uid": "19fa8cbd16",
                    "unless": "toplevel_symptoms_cough",
                    "value": "toplevel_symptoms_cough"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "כאבי גרון",
                        "ar": "وجع حلق",
                        "en": "Sore throat",
                        "es": "Dolor de garganta",
                        "ru": "боли в горле"
                      }
                    },
                    "unless": "symptoms_sore_throat",
                    "value": "symptoms_sore_throat"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "קוצר נשימה",
                        "ar": "ضيق بالتنفس",
                        "en": "Shortness of breath",
                        "es": "Falta de aire al respirar",
                        "ru": "одышка"
                      }
                    },
                    "unless": "symptoms_breath_shortness",
                    "value": "symptoms_breath_shortness"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "כאבים",
                        "ar": "أوجاع",
                        "en": "Pain",
                        "es": "Dolores",
                        "ru": "боли"
                      }
                    },
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "מה כואב בדיוק?",
                            "ar": "شو بيوجعك بالضبط؟",
                            "en": "Where does it hurt?",
                            "es": "¿Qué te duele exactamente?",
                            "ru": "Где точно болит?"
                          }
                        },
                        "uid": "5225dcb4e0"
                      },
                      {
                        "goto": "symptoms_pains_questions",
                        "uid": "f19ded6166"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "יש עוד כאבים?",
                            "ar": "في كمان أوجاع؟",
                            "en": "Any other kinds of pain?",
                            "es": "¿Hay otros dolores?",
                            "ru": "Есть ли дополнительные боли?"
                          }
                        },
                        "uid": "240cdbad54"
                      },
                      {
                        "goto": "symptoms_pains_questions",
                        "uid": "347e27709f"
                      },
                      {
                        "say": "עוד משהו כואב?",
                        "uid": "03ccb73712"
                      },
                      {
                        "goto": "symptoms_pains_questions",
                        "uid": "6000c71548"
                      }
                    ],
                    "uid": "f0f2b86dfa",
                    "unless": "toplevel_symptoms_pains",
                    "value": "toplevel_symptoms_pains"
                  },
                  {
                    "show": "שלשול",
                    "unless": "symptoms_diarrhea",
                    "value": "symptoms_diarrhea"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "בחילה או הקאות",
                        "ar": "إرتجاف",
                        "en": "Shivers or chills",
                        "es": "Mareos",
                        "ru": "озноб"
                      }
                    },
                    "unless": "symptoms_nausea_and_vomiting",
                    "value": "symptoms_nausea_and_vomiting"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "צמרמורת",
                        "ar": "هذيان",
                        "en": "Disorientation or confusion",
                        "es": "Confusión",
                        "ru": "замешательство"
                      }
                    },
                    "unless": "symptoms_chills",
                    "value": "symptoms_chills"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "בלבול",
                        "ar": "تعب او ضعف",
                        "en": "Fatigue or weakness",
                        "es": "Cansancio o debilidad",
                        "ru": "усталость или слабость"
                      }
                    },
                    "unless": "symptoms_confusion",
                    "value": "symptoms_confusion"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "עייפות או חולשה",
                        "ar": "فقدت الإحساس بالأطعمة والروائح",
                        "en": "Lost my sense of taste or smell",
                        "es": "Pérdida del sentido del olfato o el gusto",
                        "ru": "Я потерял/а чувство вкуса и запаха"
                      }
                    },
                    "unless": "symptoms_tiredness_or_fatigue",
                    "value": "symptoms_tiredness_or_fatigue"
                  },
                  {
                    "show": "איבדתי את חוש הטעם או הריח",
                    "unless": "symptoms_smell_taste_loss",
                    "value": "symptoms_smell_taste_loss"
                  },
                  {
                    "class": "other",
                    "show": "אף אחד מאלה",
                    "steps": [
                      {
                        "pop": "current-report-symptoms",
                        "uid": "4714c37cc0"
                      }
                    ],
                    "uid": "e2aa3f16be"
                  }
                ],
                "variable": "_var_symptoms"
              }
            },
            {
              "do": {
                "cmd": "flag_from_var",
                "params": [
                  "record",
                  "_var_symptoms"
                ]
              },
              "uid": "f1f9b45aa1"
            }
          ],
          "uid": "6c5d380604"
        },
        {
          "name": "symptoms_cough_questions",
          "steps": [
            {
              "uid": "d2f57ce59f",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "נזלת או גודש באף",
                        "ar": "سيلان أو إنسداد بالأنف",
                        "en": "Runny nose or nasal congestion",
                        "es": "Mucosidad o congestión nasal",
                        "ru": "сопли или заложенность носа"
                      }
                    },
                    "unless": "symptoms_clogged_nose",
                    "value": "symptoms_clogged_nose"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "שיעול יבש",
                        "ar": "سعال ناشف",
                        "en": "Dry cough",
                        "es": "Tos seca",
                        "ru": "сухой кашель"
                      }
                    },
                    "unless": "symptoms_dry_cough",
                    "value": "symptoms_dry_cough"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "שיעול לח, או שיעול עם כיח",
                        "ar": "سُعال رطب, أو سُعال مع بلغم",
                        "en": "Wet cough or wet cough with mucous",
                        "es": "Tos grasa o tos con esputo (flema)",
                        "ru": "влажный кашель или кашель с мокротой"
                      }
                    },
                    "unless": "symptoms_moist_cough",
                    "value": "symptoms_moist_cough"
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "זהו",
                        "ar": "بس",
                        "en": "That's it",
                        "es": "Listo",
                        "ru": "больше ничего"
                      }
                    },
                    "steps": [
                      {
                        "pop": "current-report-top-level-symptoms",
                        "uid": "531dfedf08"
                      }
                    ],
                    "uid": "75c9bb8e35"
                  }
                ],
                "variable": "_var"
              }
            },
            {
              "do": {
                "cmd": "flag_from_var",
                "params": [
                  "record"
                ]
              },
              "uid": "0d76702fa4"
            }
          ],
          "uid": "84c66049b6"
        },
        {
          "name": "symptoms_pains_questions",
          "steps": [
            {
              "uid": "ff7f218ccc",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "כאבי שרירים",
                        "ar": "وجع بالعضلات",
                        "en": "Muscle pain",
                        "es": "Dolor muscular",
                        "ru": "мышечные боли"
                      }
                    },
                    "unless": "symptoms_muscles_pain",
                    "value": "symptoms_muscles_pain"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "כאבי ראש",
                        "ar": "وجع رأس",
                        "en": "Head ache",
                        "es": "Dolor de cabeza",
                        "ru": "головные боли"
                      }
                    },
                    "unless": "symptoms_headache",
                    "value": "symptoms_headache"
                  },
                  {
                    "show": "כאבי גרון",
                    "unless": "symptoms_sore_throat",
                    "value": "symptoms_sore_throat"
                  },
                  {
                    "class": "other",
                    "show": "זהו",
                    "steps": [
                      {
                        "pop": "current-report-top-level-symptoms",
                        "uid": "e77490142c"
                      }
                    ],
                    "uid": "aab6481f0a"
                  }
                ],
                "variable": "_var"
              }
            },
            {
              "do": {
                "cmd": "flag_from_var",
                "params": [
                  "record"
                ]
              },
              "uid": "4066f83acb"
            }
          ],
          "uid": "772a2e75d8"
        },
        {
          "name": "symptoms_other_questions",
          "steps": [
            {
              "say": "מהם התופעות או הסימפטומים הנוספים שכדאי שנדע עליהם?",
              "uid": "a81805f857"
            },
            {
              "uid": "7d68d617f8",
              "wait": {
                "placeholder": "שם המחלה או הסימפטום",
                "variable": "symptoms_other"
              }
            }
          ],
          "uid": "9d045969e3"
        },
        {
          "name": "exposures",
          "steps": [
            {
              "say": "חשוב לנו לדעת",
              "uid": "8a4526029f"
            },
            {
              "say": "אם שהית בקרבת אנשים שונים ביממה האחרונה למשך יותר מ-15 דקות ובמרחק של פחות מ-2 מטרים,",
              "uid": "933db4184c"
            },
            {
              "say": "כמה מהם מתחת לגיל 18?",
              "uid": "d6876d7311"
            },
            {
              "uid": "16311dae71",
              "wait": {
                "input-kind": "number",
                "input-max": 99,
                "input-min": 0,
                "placeholder": "מספר האנשים",
                "validation": "[0-9]+",
                "variable": "met_under_18"
              }
            },
            {
              "say": "וכמה מעל גיל 18?",
              "uid": "c5118716df"
            },
            {
              "uid": "a9b1fc2c72",
              "wait": {
                "input-kind": "number",
                "input-max": 99,
                "input-min": 0,
                "placeholder": "מספר האנשים",
                "validation": "[0-9]+",
                "variable": "met_above_18"
              }
            }
          ],
          "uid": "ce7628ae51"
        },
        {
          "name": "end-of-report",
          "steps": [
            {
              "say": "המון תודה, המידע ששלחת יעזור מאוד לחוקרים שלנו במכון ויצמן וגם לעמיתים שלנו במדינות אחרות לזהות התפרצויות נקודתיות של המחלה ולנסות לטפל בהן לפני שהן מתפשטות.",
              "uid": "e317217c7e"
            },
            {
              "say": "אז נתראה מחר?",
              "uid": "0cd94aa41c"
            },
            {
              "uid": "ccc68125a7",
              "wait": {
                "options": [
                  {
                    "class": "other",
                    "show": "בטח!"
                  }
                ]
              }
            }
          ],
          "uid": "a92af82c81"
        }
      ]
    }
  ]
};
