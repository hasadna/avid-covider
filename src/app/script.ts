
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
                        "say": "טוב שבאת,",
                        "uid": "af5b77d3b6"
                      },
                      {
                        "say": "התשובות שלך לכמה שאלות קצרות יעזרו מאוד במאמץ המשותף לעצור את התפרצות הקורונה",
                        "uid": "73613badb3"
                      },
                      {
                        "say": "אם זה בסדר, אבקש לדעת כמה פרטים אנונימיים לטובת המחקר",
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
                        "say": "בן? בת?",
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
                          "placeholder": "גיל",
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
                        "say": "מה הוא מקום המגורים?",
                        "uid": "25eb69e559"
                      },
                      {
                        "uid": "9b02b5bdde",
                        "wait": {
                          "placeholder": "שם העיר או הישוב",
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
                        "say": "שם הרחוב?",
                        "uid": "2966b83d86"
                      },
                      {
                        "uid": "4fdca8e817",
                        "wait": {
                          "placeholder": "שם הרחוב",
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
            },
            {
              "say": "עוד משהו?",
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
                    "show": "סוכרת",
                    "unless": "precondition_chronic_diabetes",
                    "value": "precondition_chronic_diabetes"
                  },
                  {
                    "show": "בעיית יתר לחץ דם",
                    "unless": "precondition_chronic_hypertension",
                    "value": "precondition_chronic_hypertension"
                  },
                  {
                    "show": "מחלת לב, כלי דם או שבץ",
                    "unless": "precondition_chronic_ischemic_heart_disease_or_stroke",
                    "value": "precondition_chronic_ischemic_heart_disease_or_stroke"
                  },
                  {
                    "show": "מחלת ריאות כרונית כולל אסתמה (ללא אסתמה בילדות)",
                    "unless": "precondition_chronic_lung_disease",
                    "value": "precondition_chronic_lung_disease"
                  },
                  {
                    "show": "סרטן",
                    "unless": "precondition_chronic_cancer",
                    "value": "precondition_chronic_cancer"
                  },
                  {
                    "show": "אי ספיקת כליות",
                    "unless": "precondition_chronic_kidney_failure",
                    "value": "precondition_chronic_kidney_failure"
                  },
                  {
                    "show": "דיכוי חיסוני לרבות נטילת תרופות המדכאות את מערכת החיסון",
                    "unless": "precondition_chronic_immune_system_suppression",
                    "value": "precondition_chronic_immune_system_suppression"
                  },
                  {
                    "class": "other",
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
          "name": "insulation",
          "steps": [
            {
              "switch": {
                "arg": "exposure_status",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": "אוקיי, עברנו את זה...",
                        "uid": "384df452a2"
                      },
                      {
                        "say": "עכשיו, מה בנוגע לבידוד?",
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
                              "show": "לא"
                            },
                            {
                              "show": "כן",
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
                                                  "show": "כן",
                                                  "steps": [
                                                    {
                                                      "say": "מצויין. מה המספר?",
                                                      "uid": "d75278ca87"
                                                    },
                                                    {
                                                      "uid": "ce66e394f1",
                                                      "wait": {
                                                        "placeholder": "מספר החולה שפגשתי",
                                                        "variable": "insulation_patient_number"
                                                      }
                                                    },
                                                    {
                                                      "say": "האם זכור לך היום שבו נפגשתם?",
                                                      "uid": "fddfffd461"
                                                    },
                                                    {
                                                      "uid": "da26dd517c",
                                                      "wait": {
                                                        "options": [
                                                          {
                                                            "show": "כן",
                                                            "steps": [
                                                              {
                                                                "say": "מה היה התאריך?",
                                                                "uid": "dc079acad2"
                                                              },
                                                              {
                                                                "uid": "2a2b823bb9",
                                                                "wait": {
                                                                  "input-kind": "date",
                                                                  "placeholder": "תאריך: dd/mm/yy",
                                                                  "variable": "insulation_exposure_date"
                                                                }
                                                              }
                                                            ],
                                                            "uid": "ea17565621",
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
                                                  "uid": "ca8eeb8cd6",
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
                              "show": "בסדר גמור",
                              "steps": [
                                {
                                  "say": "נהדר לשמוע!",
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
                              "show": "לא כל כך טוב",
                              "steps": [
                                {
                                  "say": "אוייש… איך זה בא לידי ביטוי?",
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
                          "input-max": 43,
                          "input-min": 35,
                          "input-step": 0.1,
                          "placeholder": "מעלות חום, 35-43",
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
              "say": "עוד משהו שמפריע או גורם להרגשה לא טובה?",
              "uid": "73a0967d13"
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
              "say": "משהו נוסף שכדאי שנכיר?",
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
                    "show": "שיעולים או נזלת",
                    "steps": [
                      {
                        "say": "נשמח לעוד כמה פרטים לגבי השיעול והנזלת.",
                        "uid": "ba134f7deb"
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
                      }
                    ],
                    "uid": "19fa8cbd16",
                    "unless": "toplevel_symptoms_cough",
                    "value": "toplevel_symptoms_cough"
                  },
                  {
                    "show": "כאבי גרון",
                    "unless": "symptoms_sore_throat",
                    "value": "symptoms_sore_throat"
                  },
                  {
                    "show": "קוצר נשימה",
                    "unless": "symptoms_breath_shortness",
                    "value": "symptoms_breath_shortness"
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
                    "show": "בחילה או הקאות",
                    "unless": "symptoms_nausea_and_vomiting",
                    "value": "symptoms_nausea_and_vomiting"
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
                    "show": "נזלת או גודש באף",
                    "unless": "symptoms_clogged_nose",
                    "value": "symptoms_clogged_nose"
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
                    "class": "other",
                    "show": "זהו",
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
