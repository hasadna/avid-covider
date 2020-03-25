
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
              "goto": "preconditions",
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
              "say": {
                ".tx": {
                  "_": "טוב שבאת,",
                  "ar": "ممتاز انك جيت/ي,",
                  "en": "How good of you to drop by,",
                  "es": "Que bueno que viniste,",
                  "ru": "Как хорошо что вы здесь,"
                }
              },
              "uid": "09cfbe3ed2"
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
              "uid": "c5d1f049c7"
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
              "uid": "22a33d20b3"
            },
            {
              "say": {
                ".tx": {
                  "_": "קודם כל, מה גילך?",
                  "ar": "قبل كل شي, كم عمرك؟",
                  "en": "How old are you?",
                  "es": "Antes que nada, ¿qué edad tienes?",
                  "ru": "Прежде всего, сколько вам лет?"
                }
              },
              "uid": "25a83097b5"
            },
            {
              "uid": "8bce5d0787",
              "wait": {
                "input-kind": "number",
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
            },
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
              "uid": "0bb5fd02d3"
            },
            {
              "uid": "48d4bcc172",
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
            },
            {
              "say": {
                ".tx": {
                  "_": "מה הוא מקום מגוריך?",
                  "ar": "شو مكان إقامتك؟",
                  "en": "Where do you live?",
                  "es": "¿En dónde vives?",
                  "ru": "Где вы проживаете?"
                }
              },
              "uid": "c67e23c819"
            },
            {
              "uid": "6a57b9c1e7",
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
            },
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
              "uid": "766f938222"
            },
            {
              "uid": "59035a686c",
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
          "uid": "ab5b28894d"
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
                  "ar": "كمان أمراض؟",
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
                  "ar": " هل تم تشخيصك بأمراض مزمنة أخرى؟",
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
                    "unless": "chronic_diabetes",
                    "value": "chronic_diabetes"
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
                    "unless": "chronic_hypertension",
                    "value": "chronic_hypertension"
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
                    "unless": "chronic_ischemic_heart_disease_or_stroke",
                    "value": "chronic_ischemic_heart_disease_or_stroke"
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
                    "unless": "chronic_lung_disease",
                    "value": "chronic_lung_disease"
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
                    "unless": "chronic_cancer",
                    "value": "chronic_cancer"
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
                    "unless": "chronic_kidney_failure",
                    "value": "chronic_kidney_failure"
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
                    "unless": "chronic_immune_system_suppression",
                    "value": "chronic_immune_system_suppression"
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
              "uid": "70b7da59fd",
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
                "variable": "smoking"
              }
            }
          ],
          "uid": "397469aff5"
        },
        {
          "name": "insulation",
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
              "uid": "508805f7f4"
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
              "uid": "ee66e64b5e"
            },
            {
              "uid": "26c0954016",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "אני בבידוד מבני משפחה, ובחדר סגור",
                        "ar": "أنا بعزل من أهل البيت, وفي غرفة مغلقة",
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
                        "uid": "f9362506b2"
                      },
                      {
                        "uid": "8c17e0398f",
                        "wait": {
                          "input-kind": "date",
                          "placeholder": {
                            ".tx": {
                              "_": "תאריך: dd.mm.yy",
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
                        "uid": "a0647a3459"
                      },
                      {
                        "uid": "7a374a1e3f",
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
                                  "uid": "e05c9ddb93"
                                },
                                {
                                  "uid": "94235655cf",
                                  "wait": {
                                    "input-kind": "date",
                                    "options": null,
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd.mm.yy",
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
                              "uid": "1af5329911",
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
                                  "uid": "0bb4443352"
                                },
                                {
                                  "uid": "0c950224be",
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
                                            "uid": "3c9aba4455"
                                          },
                                          {
                                            "uid": "78d13be6b4",
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
                                            "uid": "ca89530901"
                                          },
                                          {
                                            "uid": "6e6884024e",
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
                                                      "uid": "d841e72e5e"
                                                    },
                                                    {
                                                      "uid": "acb6f0bcb5",
                                                      "wait": {
                                                        "input-kind": "date",
                                                        "placeholder": {
                                                          ".tx": {
                                                            "_": "תאריך: dd.mm.yy",
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
                                                  "uid": "b3490242e6",
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
                                        "uid": "46ddf1c6f1",
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
                              "uid": "01ab3f0c1d",
                              "value": "contact-with-patient"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "אני נמצא בבידוד כי חוויתי תסמינים",
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
                                  "_": "אני נמצא בבידוד מרצוני האישי",
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
                    "uid": "fbc77aaf93",
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
                        "uid": "6d11a2097c",
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
                    "uid": "409cf3038d",
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
                        "ru": "Я не на карантине"
                      }
                    },
                    "value": "none"
                  }
                ],
                "variable": "exposure_status"
              }
            }
          ],
          "uid": "ebd966ac43"
        },
        {
          "name": "current-report",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "ומה שלומך היום?",
                  "ar": "كيف حالك اليوم؟",
                  "en": "And how are you feeling today?",
                  "es": "¿Y cómo estás hoy?",
                  "ru": "Как ваше самочувствие сегодня?"
                }
              },
              "uid": "db968bc46d"
            },
            {
              "uid": "a763744970",
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
                        "uid": "520f128fa1"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "ליתר בטחון, האם יש לך אלו מהתסמינים הללו:",
                            "ar": "فقط للتأكد, هل عندك أحد هاي الأعراض:",
                            "en": "To be on the safe side: are you exhibiting any of the following symptoms:",
                            "es": "Sólo para estar seguros, sufres de algunos de estos síntomas:",
                            "ru": "На всякий случай, есть ли у вас какие-либо из следующих симптомов:"
                          }
                        },
                        "uid": "3ae0851629"
                      }
                    ],
                    "uid": "012c841404",
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
                        "uid": "f688dbc443"
                      }
                    ],
                    "uid": "05c6353434",
                    "value": "feel_bad"
                  }
                ],
                "variable": "general_feeling"
              }
            },
            {
              "goto": "current-report-symptoms",
              "uid": "6799cb2e64"
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
              "say": {
                ".tx": {
                  "_": "האם מדדת חום ביממה האחרונה?",
                  "ar": "هل قمت/ي بقياس درجة حرارتك مؤخرًا؟",
                  "en": "Did you take your temperature over the last 24 hours? ",
                  "es": "¿Te has tomado la fiebre últimamente?",
                  "ru": "Измеряли ли вы температуру за последние сутки?"
                }
              },
              "uid": "ba61d4152a"
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
                          "input-min": 32,
                          "input-step": 0.1,
                          "placeholder": {
                            ".tx": {
                              "_": "מעלות חום, 32-43",
                              "ar": "درجات حرارة, 32-43",
                              "en": "32-43 degrees Celsius",
                              "es": "Grados de fiebre, 32-43",
                              "ru": "32-43 градуса"
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
              "say": {
                ".tx": {
                  "_": "עוד משהו שגורם לך להרגיש לא טוב?",
                  "ar": "كمان إشي بسببه حاسس/ة بشعور سيء؟",
                  "en": "Anything else that makes you feel ill?",
                  "es": "¿Hay algo más que te cause malestar?",
                  "ru": "Что то` ещё что отрицательно влияет на ваше самочувствие?"
                }
              },
              "uid": "eda119f0f5"
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
              "say": {
                ".tx": {
                  "_": "יש עוד משהו שמפריע לך?",
                  "ar": "في كمان إشي مضايقك؟",
                  "en": "Anything else bothering you?",
                  "es": "¿Hay alguna otra cosa que te molesta?",
                  "ru": "Есть ли что-то ещё что вам мешает?"
                }
              },
              "uid": "0455473662"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "e7ebec4dda"
            },
            {
              "say": {
                ".tx": {
                  "_": "עוד משהו שגורם לך להרגיש לא טוב?",
                  "ar": "كمان إشي بسببه حاسس/ة بشعور سيء؟",
                  "en": "Anything else that makes you feel ill?",
                  "es": "¿Hay algo más que te cause malestar?",
                  "ru": "Что то` ещё что отрицательно влияет на ваше самочувствие?"
                }
              },
              "uid": "51910a9cef"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "f06c342959"
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
                        "ar": "سُعال او سيلان بالأنف؟",
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
                            "ar": "بيسعدنا لكمان تفاصيل عن السُعال وسيلان الأنف.",
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
                        "uid": "a7b059c04f"
                      },
                      {
                        "goto": "symptoms_cough_questions",
                        "uid": "28da6a7199"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "סימפטום נוסף?",
                            "ar": "كمان أعراض؟",
                            "en": "Other symptoms?",
                            "es": "¿Otro síntoma?",
                            "ru": "Дополнительный симптом?"
                          }
                        },
                        "uid": "d6622e8976"
                      },
                      {
                        "goto": "symptoms_cough_questions",
                        "uid": "435ffd740d"
                      }
                    ],
                    "uid": "19fa8cbd16",
                    "unless": "toplevel_symptoms_cough",
                    "value": "toplevel_symptoms_cough"
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
                        "say": {
                          ".tx": {
                            "_": "סוג נוסף של כאב?",
                            "ar": "نوع وجع آخر؟",
                            "en": "Any other kinds of pain?",
                            "es": "¿Algún otro tipo de dolor?<br>",
                            "ru": "Ещё какие-либо боли?"
                          }
                        },
                        "uid": "f15d5c8449"
                      },
                      {
                        "goto": "symptoms_pains_question",
                        "uid": "6000c71548"
                      }
                    ],
                    "uid": "f0f2b86dfa",
                    "unless": "toplevel_symptoms_pains",
                    "value": "toplevel_symptoms_pains"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "בעיות קיבה",
                        "ar": "مشاكل بالمعدة؟",
                        "en": "Stomach issues",
                        "es": "Problemas digestivos",
                        "ru": "Проблемы с желудком"
                      }
                    },
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "מה לא בסדר בקיבה?",
                            "ar": "شو المشكلة بالمعدة؟",
                            "en": "What's wrong with your stomach?",
                            "es": "¿Cuál es el problema con el estómago?",
                            "ru": "Что не так с желудком?"
                          }
                        },
                        "uid": "1a6c6ab4c0"
                      },
                      {
                        "goto": "symptoms_stomach_questions",
                        "uid": "c6a58971e8"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "יש עוד בעיות קיבה?",
                            "ar": "في كمان مشاكل بالمعدة؟",
                            "en": "Any other stomach issues?",
                            "es": "¿Hay otros problemas digestivos?",
                            "ru": "Есть еще проблемы с желудком?"
                          }
                        },
                        "uid": "f1dbf23100"
                      },
                      {
                        "goto": "symptoms_stomach_questions",
                        "uid": "79bae95b83"
                      }
                    ],
                    "uid": "d7c56d4226",
                    "unless": "toplevel_symptoms_stomach",
                    "value": "toplevel_symptoms_stomach"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "צמרמורת",
                        "ar": "إرتجاف",
                        "en": "Shivers or chills",
                        "es": "Mareos",
                        "ru": "озноб"
                      }
                    },
                    "unless": "symptoms_chills",
                    "value": "symptoms_chills"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "בלבול",
                        "ar": "هذيان",
                        "en": "Disorientation or confusion",
                        "es": "Confusión",
                        "ru": "замешательство"
                      }
                    },
                    "unless": "symptoms_confusion",
                    "value": "symptoms_confusion"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "עייפות או חולשה",
                        "ar": "تعب او ضعف",
                        "en": "Fatigue or weakness",
                        "es": "Cansancio o debilidad",
                        "ru": "усталость или слабость"
                      }
                    },
                    "unless": "symptoms_tiredness_or_fatigue",
                    "value": "symptoms_tiredness_or_fatigue"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "איבדתי את חוש הטעם או הריח",
                        "ar": "فقدت الإحساس بالأطعمة والروائح",
                        "en": "Lost my sense of taste or smell",
                        "es": "Pérdida del sentido del olfato o el gusto",
                        "ru": "Я потерял/а чувство вкуса и запаха"
                      }
                    },
                    "unless": "symptoms_smell_taste_loss",
                    "value": "symptoms_smell_taste_loss"
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "אף אחד מאלה",
                        "ar": "ولا أي واحد",
                        "en": "None of them",
                        "es": "Ninguno de esos",
                        "ru": "Ни одно из этих"
                      }
                    },
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
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "זהו",
                        "ar": "خلص",
                        "en": "That's it",
                        "es": "Listo",
                        "ru": "всё"
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
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "זהו",
                        "ar": "خلص",
                        "en": "That's it",
                        "es": "Listo",
                        "ru": "больше ничего"
                      }
                    },
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
          "name": "symptoms_stomach_questions",
          "steps": [
            {
              "uid": "a139b80a58",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "שלשול",
                        "ar": "إسهال",
                        "en": "Diarrhea",
                        "es": "Diarrea",
                        "ru": "понос"
                      }
                    },
                    "unless": "symptoms_diarrhea",
                    "value": "symptoms_diarrhea"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "בחילה או הקאות",
                        "ar": "غثيان أو تقيؤ",
                        "en": "Nausea or vomiting",
                        "es": "Náuseas o vómitos ",
                        "ru": "тошнота или рвота"
                      }
                    },
                    "unless": "symptoms_nausea_and_vomiting",
                    "value": "symptoms_nausea_and_vomiting"
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "זהו",
                        "ar": "خلص",
                        "en": "That's it",
                        "es": "Listo",
                        "ru": "больше ничего"
                      }
                    },
                    "steps": [
                      {
                        "pop": "current-report-top-level-symptoms",
                        "uid": "7520ab7652"
                      }
                    ],
                    "uid": "b05b2629c0"
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
              "uid": "899c548a20"
            }
          ],
          "uid": "8c5fbdf740"
        },
        {
          "name": "symptoms_other_questions",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "מהם התופעות או הסימפטומים הנוספים שכדאי שנדע עליהם?",
                  "ar": "في كمان ظواهر وأعراض اللي لازم نعرف عنها؟",
                  "en": "What are the other issues or symptoms we should know about?",
                  "es": "¿Cuáles son los otros fenómenos o síntomas sobre los que conviene que sepamos?",
                  "ru": "Имеются ли дополнительные симптомы, о которых нам стоит знать?"
                }
              },
              "uid": "a81805f857"
            },
            {
              "uid": "7d68d617f8",
              "wait": {
                "placeholder": {
                  ".tx": {
                    "_": "שם המחלה או הסימפטום",
                    "ar": "إسم المرض أو الأعراض",
                    "en": "Name of disease or symptom",
                    "es": "Nombre de la enfermedad o el síntoma",
                    "ru": "Название заболевания или симптома"
                  }
                },
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
              "say": {
                ".tx": {
                  "_": "חשוב לנו לדעת, בקרבת כמה אנשים שונים שהית ביממה האחרונה, מעל ל-15 דקות, בטווח של פחות מ-2 מטרים",
                  "ar": "بهمنا نعرف, قديش ناس مختلفين كانوا بقربك لأكثر من 15 دقيقة بالأيام الأخيرة, بمسافة أقل من مترين",
                  "en": "Another piece of important  information is how many people you have spent more than 15 minutes and were within 2 meters of you in the last 24 hours?",
                  "es": "Nos resulta importante saber con cuántas personas diferentes has pasado más de 15 minutos a una distancia de 2 metros durante el último día",
                  "ru": "Для нас важно знать, рядом с каким количеством человек вы находились за последние сутки, более 15 минут, на расстоянии менее 2-ух метров"
                }
              },
              "uid": "26f71c1576"
            },
            {
              "say": {
                ".tx": {
                  "_": "כמה מהם מתחת לגיל 18?",
                  "ar": "قديش منهم تحت ال18؟",
                  "en": "How many are under 18?",
                  "es": "¿Cuántos de ellos son menores de 18 años?",
                  "ru": "Скольким из них менее 18 лет?"
                }
              },
              "uid": "51cec7e3b5"
            },
            {
              "uid": "3a728f0e1c",
              "wait": {
                "input-kind": "number",
                "placholder": "מספר האנשים",
                "validation": "[0-9]+",
                "variable": "met_under_18"
              }
            },
            {
              "say": {
                ".tx": {
                  "_": "וכמה מעל גיל 18?",
                  "ar": "قديش منهم فوق ال18؟",
                  "en": "An how many over 18?",
                  "es": "¿Cuántos son mayores de 18 años?",
                  "ru": "Скольким из них менее 18 лет?"
                }
              },
              "uid": "58710e39b6"
            },
            {
              "uid": "00b6f4aad7",
              "wait": {
                "input-kind": "number",
                "placholder": "מספר האנשים",
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
              "say": {
                ".tx": {
                  "_": "המון תודה, המידע שנתת יעזור מאוד לחוקרים שלנו במכון ויצמן וגם לעמיתים שלנו במדינות אחרות לזהות התפרצויות נקודתיות של המחלה ולטפל בהן לפני שהן מתפשטות.",
                  "en": "Thanks a lot. The information you have provided would help the Weizmann Institution researchers as well as colleagues from other countries to locate disease hot-spots and take care of them before they spread.",
                  "es": "Muchas gracias, la información que nos has brindado ayudará enormemente a nuestros investigadores en el Instituto Weizmann, así como a nuestros colegas en otros países, a identificar brotes puntuales de la enfermedad y a tratarlos antes de que se propaguen. ",
                  "ru": "Огромное спасибо, предоставленная вами информация очень поможет нашим исследователям из Института Вейцмана и нашим зарубежным коллегам выявлять вспышки эпидемии и предупреждать их распространение. Тогда до завтра?"
                }
              },
              "uid": "8d11a569f1"
            },
            {
              "say": {
                ".tx": {
                  "_": "אז נתראה מחר?",
                  "en": "So we'll see you tomorrow?",
                  "es": "¿Nos vemos mañana?",
                  "ru": "Так до завтра?"
                }
              },
              "uid": "0cd94aa41c"
            },
            {
              "uid": "ccc68125a7",
              "wait": {
                "options": [
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "בטח!",
                        "en": "Sure!",
                        "es": "¡Claro!",
                        "ru": "Конечно!"
                      }
                    }
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
