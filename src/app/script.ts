
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
              "say": "טוב שבאת,",
              "uid": "09cfbe3ed2"
            },
            {
              "say": "התשובות שלך לכמה שאלות קצרות יעזרו מאוד במאמץ המשותף לעצור את התפרצות הקורונה",
              "uid": "c5d1f049c7"
            },
            {
              "say": "אם זה בסדר, אבקש לדעת כמה פרטים אנונימיים לטובת המחקר",
              "uid": "22a33d20b3"
            },
            {
              "say": "קודם כל, מה גילך?",
              "uid": "25a83097b5"
            },
            {
              "uid": "8bce5d0787",
              "wait": {
                "input-kind": "number",
                "placeholder": "גיל",
                "variable": "age"
              }
            },
            {
              "say": "בן? בת?",
              "uid": "0bb5fd02d3"
            },
            {
              "uid": "48d4bcc172",
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
            },
            {
              "say": "מה הוא מקום מגוריך?",
              "uid": "c67e23c819"
            },
            {
              "uid": "6a57b9c1e7",
              "wait": {
                "placeholder": "שם העיר או הישוב",
                "variable": "city_town"
              }
            },
            {
              "say": "שם הרחוב?",
              "uid": "766f938222"
            },
            {
              "uid": "59035a686c",
              "wait": {
                "placeholder": "שם הרחוב",
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
                  "ar": "بدي أسألك على شوية أمراض, اللي مهم لإلنا نعرف إذا كانوا عندك بالماضي:",
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
                        "en": "Chronic pulmonary disease including Asthma (not including childhood Asthma)"
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
                        "en": "immunosupressed, including takingimmunosuppressant drugs"
                      }
                    },
                    "value": "chronic_immune_system_suppression"
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "לא אובחנתי באף אחת מאלה",
                        "en": "I wasn't diagnosed with any of these"
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
                        "_": "עישנתי בעבר, בחמש השנים האחרונות",
                        "ar": "دخنت في السابق, في الخمس سنوات الأخيرة",
                        "en": "Smoked in the last 5 years",
                        "es": "Fumé en el pasado, en los últimos cinco años",
                        "ru": "Я курил/а раньше, в течение последних пяти лет"
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
                        "ru": "Я курил/а раньше, более пяти лет назад"
                      }
                    },
                    "value": "long_past_smokre"
                  },
                  {
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
              "say": "אוקיי, עברנו את זה...",
              "uid": "508805f7f4"
            },
            {
              "say": "עכשיו, מה בנוגע לבידוד?",
              "uid": "ee66e64b5e"
            },
            {
              "uid": "26c0954016",
              "wait": {
                "options": [
                  {
                    "show": "אני בבידוד מבני משפחה, ובחדר סגור",
                    "steps": [
                      {
                        "say": "מאיזה תאריך נמשך הבידוד?",
                        "uid": "30f4bcaac8"
                      },
                      {
                        "uid": "8c17e0398f",
                        "wait": {
                          "input-kind": "date",
                          "placeholder": "תאריך: dd.mm.yy",
                          "variable": "insulation_start_date"
                        }
                      },
                      {
                        "say": "מה הסיבה לשהות שלך בבידוד?",
                        "uid": "a0647a3459"
                      },
                      {
                        "uid": "7a374a1e3f",
                        "wait": {
                          "options": [
                            {
                              "show": "אני בבידוד כי חזרתי מחו״ל לאחרונה",
                              "steps": [
                                {
                                  "say": "מתי חזרת לארץ?",
                                  "uid": "e05c9ddb93"
                                },
                                {
                                  "uid": "94235655cf",
                                  "wait": {
                                    "input-kind": "date",
                                    "options": [
                                      {
                                        "show": "אני בבידוד כי נחשפתי לחולה מאומת",
                                        "steps": [
                                          {
                                            "say": "ידוע לך מה מספר החולה שפגשת?",
                                            "uid": "e21a448032"
                                          },
                                          {
                                            "uid": "1d2c27deb7",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": "כן",
                                                  "steps": [
                                                    {
                                                      "say": "מצויין. מה המספר?",
                                                      "uid": "7c816fe7b9"
                                                    },
                                                    {
                                                      "uid": "c45353ab23",
                                                      "wait": {
                                                        "placeholder": "מספר החולה שפגשתי",
                                                        "variable": "insulation_patient_number"
                                                      }
                                                    },
                                                    {
                                                      "say": "האם זכור לך היום שבו נפגשתם?",
                                                      "uid": "00859fa043"
                                                    },
                                                    {
                                                      "uid": "2e102de72a",
                                                      "wait": {
                                                        "options": [
                                                          {
                                                            "show": "כן",
                                                            "steps": [
                                                              {
                                                                "say": "מה היה התאריך?",
                                                                "uid": "e10c679952"
                                                              },
                                                              {
                                                                "uid": "a52138951f",
                                                                "wait": {
                                                                  "input-kind": "date",
                                                                  "placeholder": "תאריך: dd.mm.yy",
                                                                  "variable": "insulation_exposure_date"
                                                                }
                                                              }
                                                            ],
                                                            "uid": "93046856eb",
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
                                                  "uid": "6b108607c2",
                                                  "value": "yes"
                                                },
                                                {
                                                  "show": "לא",
                                                  "value": "no"
                                                }
                                              ]
                                            }
                                          }
                                        ],
                                        "uid": "e18baef4a5",
                                        "value": "contact-with-patient"
                                      }
                                    ],
                                    "placeholder": "תאריך: dd.mm.yy",
                                    "variable": "insulation_returned_from_abroad_date"
                                  }
                                }
                              ],
                              "uid": "1af5329911",
                              "value": "back-from-abroad"
                            },
                            {
                              "show": "אני נמצא בבידוד כי חוויתי תסמינים",
                              "value": "has_symptoms"
                            },
                            {
                              "show": "אני נמצא בבידוד מרצוני האישי",
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
                    "show": "אני חולה קורונה (מאומת בבדיקת מעבדה)",
                    "steps": [
                      {
                        "say": "והיכן אתם נמצאים?",
                        "uid": "acc602660b",
                        "wait": {
                          "option": [
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
                    "uid": "409cf3038d",
                    "value": "diagnosed"
                  },
                  {
                    "show": "אני לא בבידוד",
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
              "say": "ומה שלומך היום?",
              "uid": "db968bc46d"
            },
            {
              "uid": "a763744970",
              "wait": {
                "options": [
                  {
                    "show": "בסדר גמור",
                    "steps": [
                      {
                        "say": "נהדר לשמוע!",
                        "uid": "520f128fa1"
                      },
                      {
                        "say": "אבל רק כדי להיות בטוחים, האם יש לך אלו מהתסמינים הללו:",
                        "uid": "92920f9722"
                      }
                    ],
                    "uid": "012c841404",
                    "value": "feel_good"
                  },
                  {
                    "show": "לא כל כך טוב",
                    "steps": [
                      {
                        "say": "אוייש… איך זה בא לידי ביטוי?",
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
              "say": "האם מדדת חום ביממה האחרונה?",
              "uid": "ba61d4152a"
            },
            {
              "uid": "d8c6b1182c",
              "wait": {
                "options": [
                  {
                    "show": "כן",
                    "steps": [
                      {
                        "say": "ומה המדחום אומר?",
                        "uid": "c6ab019b33"
                      },
                      {
                        "uid": "414c51b83b",
                        "wait": {
                          "input-kind": "number",
                          "placeholder": "מעלות חום, 32-43",
                          "variable": "temperature"
                        }
                      }
                    ],
                    "uid": "a49ea50c43",
                    "value": "yes"
                  },
                  {
                    "show": "לא",
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
                  "en": "Experiencing any other symptoms?"
                }
              },
              "uid": "203b61a17e"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "f53bc4c82a"
            },
            {
              "say": "עוד תופעות שכדאי שנכיר?",
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
                  "en": "Anything else that makes you feel ill?"
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
                  "en": "What else?"
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
                  "en": "Anything else bothering you?"
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
                  "_": "עוד משהו?",
                  "en": "Anything else?"
                }
              },
              "uid": "b5ce139681"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "f06c342959"
            },
            {
              "say": {
                ".tx": {
                  "_": "עוד משהו שגורם לך להרגיש לא טוב?",
                  "en": "Are you feeling unwell in any other way?"
                }
              },
              "uid": "4374db5a63"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "41c512be93"
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
                        "say": "נשמח לעוד כמה פרטים בנוגע לגבי השיעול והנזלת.",
                        "uid": "dc4cf7d239"
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
                        "en": "Stomach issues"
                      }
                    },
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "מה לא בסדר בקיבה?",
                            "en": "What's wrong with your stomach?"
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
                            "en": "Any other stomach issues?"
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
                    "show": "צמרמורת",
                    "unless": "symptoms_chills",
                    "value": "symptoms_chills"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "בלבול",
                        "en": "Disorientation or confusion"
                      }
                    },
                    "unless": "symptoms_confusion",
                    "value": "symptoms_confusion"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "עייפות או חולשה",
                        "en": "Fatigue or weakness"
                      }
                    },
                    "unless": "symptoms_tiredness_or_fatigue",
                    "value": "symptoms_tiredness_or_fatigue"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "איבדתי את חוש הטעם או הריח",
                        "en": "Lost my sense of taste or smell"
                      }
                    },
                    "unless": "symptoms_smell_taste_loss",
                    "value": "symptoms_smell_taste_loss"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "זהו",
                        "en": "That's it"
                      }
                    },
                    "steps": [
                      {
                        "pop": "current-report-symptoms",
                        "uid": "9b79d06b62"
                      }
                    ],
                    "uid": "af98e3478a"
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
                    "uid": "75c9bb8e35",
                    "value": ""
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
                        "en": "Throat pain"
                      }
                    },
                    "unless": "symptoms_sore_throat",
                    "value": "symptoms_sore_throat"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "זהו",
                        "en": "That's it"
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
                        "en": "diarrhea"
                      }
                    },
                    "unless": "symptoms_diarrhea",
                    "value": "symptoms_diarrhea"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "בחילה או הקאות",
                        "en": "Nausea or vomiting"
                      }
                    },
                    "unless": "symptoms_nausea_and_vomiting",
                    "value": "symptoms_nausea_and_vomiting"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "זהו",
                        "en": "That's it"
                      }
                    },
                    "steps": [
                      {
                        "pop": "current-report-top-level-symptoms",
                        "uid": "7520ab7652"
                      }
                    ],
                    "uid": "b05b2629c0",
                    "value": ""
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
                  "en": "What are the other issues or symptoms we should know about?"
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
                    "en": "Name of disease or symptom"
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
              "say": "כעת נברר מה מספר האנשים השונים ששהית בקרבתם מעל ל-15 דקות בטווח 2 מטרים ביממה האחרונה.",
              "uid": "cb48345c0d"
            },
            {
              "say": "כמה מהם מתחת לגיל 18?",
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
                  "_": "כמה מהם מעל לגיל 18?",
                  "en": "How many older than 18?"
                }
              },
              "uid": "506502c1d2"
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
                  "en": "Thanks a lot. The information you have provided would help the Weizmann Institution researchers as well as colleagues from other countries to locate disease hot-spots and take care of them before they spread."
                }
              },
              "uid": "8d11a569f1"
            },
            {
              "say": {
                ".tx": {
                  "_": "שנזכיר לך מחר לעדכן אותנו מה המצב?",
                  "en": "Shall we remind you tomorrow to update us on how you're feeling?"
                }
              },
              "uid": "20f0dbaedf"
            },
            {
              "uid": "8ed1315403",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "כן, בבקשה!",
                        "en": "Yes, please!"
                      }
                    },
                    "value": true
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "לא, תודה",
                        "en": "No, thanks"
                      }
                    },
                    "value": false
                  }
                ],
                "variable": "reminder"
              }
            }
          ],
          "uid": "a92af82c81"
        }
      ]
    }
  ]
};
