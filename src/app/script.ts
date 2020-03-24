
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
              "say": "אני אשאל אותך על כמה מחלות, שחשוב לנו לדעת אם אובחנו אצלך בעבר:",
              "uid": "3b1b905fff"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "ade3b992a5"
            },
            {
              "say": "מחלות נוספות?",
              "uid": "90ed58a48c"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "07e85460da"
            },
            {
              "say": "עוד משהו?",
              "uid": "7da48d9dba"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "03e166a37b"
            },
            {
              "say": "האם ישנן מחלות רקע נוספות בהן אובחנת?",
              "uid": "3337d3489a"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "ff913f4be2"
            },
            {
              "say": "עוד משהו?",
              "uid": "ebeb9fc029"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "593bd58fad"
            },
            {
              "say": "מחלות נוספות?",
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
                    "show": "סוכרת",
                    "unless": "chronic_diabetes",
                    "value": "chronic_diabetes"
                  },
                  {
                    "show": "בעיית יתר לחץ דם",
                    "unless": "chronic_hypertension",
                    "value": "chronic_hypertension"
                  },
                  {
                    "show": "מחלת לב, כלי דם או שבץ",
                    "unless": "chronic_ischemic_heart_disease_or_stroke",
                    "value": "chronic_ischemic_heart_disease_or_stroke"
                  },
                  {
                    "show": "מחלת ריאות כרונית כולל אסתמה (ללא אסתמה בילדות)",
                    "unless": "chronic_lung_disease",
                    "value": "chronic_lung_disease"
                  },
                  {
                    "show": "סרטן",
                    "unless": "chronic_cancer",
                    "value": "chronic_cancer"
                  },
                  {
                    "show": "אי ספיקת כליות",
                    "unless": "chronic_kidney_failure",
                    "value": "chronic_kidney_failure"
                  },
                  {
                    "show": "דיכוי חיסוני לרבות נטילת תרופות המדכאות את מערכת החיסון",
                    "value": "chronic_immune_system_suppression"
                  },
                  {
                    "show": "לא אובחנתי באף אחת מאלה",
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
              "say": "מה לגבי עישון?",
              "uid": "92a9456fa5"
            },
            {
              "uid": "70b7da59fd",
              "wait": {
                "options": [
                  {
                    "show": "עישון יומיומי",
                    "value": "daily_smoker"
                  },
                  {
                    "show": "עישנתי בעבר, בחמש השנים האחרונות",
                    "value": "short_past_smoker"
                  },
                  {
                    "show": "עישנתי בעבר, לפני יותר מחמש שנים",
                    "value": "long_past_smokre"
                  },
                  {
                    "show": "אף פעם",
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
              "say": "האם יש עוד סוגים של סימפטומים?",
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
              "say": "עוד משהו שגורם לך להרגיש לא טוב?",
              "uid": "eda119f0f5"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "0bad6900a2"
            },
            {
              "say": "מה עוד?",
              "uid": "b6fb5b4c3c"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "281a379675"
            },
            {
              "say": "יש עוד משהו שמפריע לך?",
              "uid": "0455473662"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "e7ebec4dda"
            },
            {
              "say": "עוד משהו?",
              "uid": "b5ce139681"
            },
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "f06c342959"
            },
            {
              "say": "עוד משהו שגורם לך להרגיש לא טוב?",
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
                    "show": "שיעולים או נזלת",
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
                        "say": "יש עוד בעיות שקשורות בשיעולים או נזלת?",
                        "uid": "eba3372b9e"
                      },
                      {
                        "goto": "symptoms_cough_questions",
                        "uid": "83e63b4189"
                      },
                      {
                        "say": "עוד תופעה מאלו?",
                        "uid": "42d6c4e645"
                      },
                      {
                        "goto": "symptoms_cough_questions",
                        "uid": "70b6fb49a9"
                      },
                      {
                        "say": "משהו נוסף שכדאי שנכיר?",
                        "uid": "a7b059c04f"
                      },
                      {
                        "goto": "symptoms_cough_questions",
                        "uid": "28da6a7199"
                      },
                      {
                        "say": "סימפטום נוסף?",
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
                    "show": "כאבים",
                    "steps": [
                      {
                        "say": "מה כואב בדיוק?",
                        "uid": "5225dcb4e0"
                      },
                      {
                        "goto": "symptoms_pains_questions",
                        "uid": "f19ded6166"
                      },
                      {
                        "say": "יש עוד כאבים?",
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
                    "show": "בעיות קיבה",
                    "steps": [
                      {
                        "say": "מה לא בסדר בקיבה?",
                        "uid": "1a6c6ab4c0"
                      },
                      {
                        "goto": "symptoms_stomach_questions",
                        "uid": "c6a58971e8"
                      },
                      {
                        "say": "יש עוד בעיות קיבה?",
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
                    "show": "בלבול",
                    "unless": "symptoms_confusion",
                    "value": "symptoms_confusion"
                  },
                  {
                    "show": "עייפות או חולשה",
                    "unless": "symptoms_tiredness_or_fatigue",
                    "value": "symptoms_tiredness_or_fatigue"
                  },
                  {
                    "show": "איבדתי את חוש הטעם או הריח",
                    "unless": "symptoms_smell_taste_loss",
                    "value": "symptoms_smell_taste_loss"
                  },
                  {
                    "show": "זהו",
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
                    "show": "נזלת או גודש באף",
                    "unless": "symptoms_clogged_nose",
                    "value": "symptoms_clogged_nose"
                  },
                  {
                    "show": "כאבי גרון",
                    "unless": "symptoms_sore_throat",
                    "value": "symptoms_sore_throat"
                  },
                  {
                    "show": "שיעול יבש",
                    "unless": "symptoms_dry_cough",
                    "value": "symptoms_dry_cough"
                  },
                  {
                    "show": "שיעול לח, או שיעול עם כיח",
                    "unless": "symptoms_moist_cough",
                    "value": "symptoms_moist_cough"
                  },
                  {
                    "show": "קוצר נשימה",
                    "unless": "symptoms_breath_shortness",
                    "value": "symptoms_breath_shortness"
                  },
                  {
                    "show": "זהו",
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
                    "show": "כאבי שרירים",
                    "unless": "symptoms_muscles_pain",
                    "value": "symptoms_muscles_pain"
                  },
                  {
                    "show": "כאבי ראש",
                    "unless": "symptoms_headache",
                    "value": "symptoms_headache"
                  },
                  {
                    "show": "כאבי גרון",
                    "unless": "symptoms_sore_throat",
                    "value": "symptoms_sore_throat"
                  },
                  {
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
          "name": "symptoms_stomach_questions",
          "steps": [
            {
              "uid": "a139b80a58",
              "wait": {
                "options": [
                  {
                    "show": "שלשול",
                    "unless": "symptoms_diarrhea",
                    "value": "symptoms_diarrhea"
                  },
                  {
                    "show": "בחילה או הקאות",
                    "unless": "symptoms_nausea_and_vomiting",
                    "value": "symptoms_nausea_and_vomiting"
                  },
                  {
                    "show": "זהו",
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
              "say": "כמה מהם מעל לגיל 18?",
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
              "say": "המון תודה, המידע שנתת יעזור מאוד לחוקרים שלנו במכון ויצמן וגם לעמיתים שלנו במדינות אחרות לזהות התפרצויות נקודתיות של המחלה ולטפל בהן לפני שהן מתפשטות.",
              "uid": "8d11a569f1"
            },
            {
              "say": "שנזכיר לך מחר לעדכן אותנו מה המצב?",
              "uid": "20f0dbaedf"
            },
            {
              "uid": "8ed1315403",
              "wait": {
                "options": [
                  {
                    "show": "כן, בבקשה!",
                    "value": true
                  },
                  {
                    "show": "לא, תודה",
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
