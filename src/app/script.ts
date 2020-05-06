
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
                        "say": "טוב שבאת,",
                        "uid": "432fe8e599"
                      },
                      {
                        "say": "התשובות שלך לכמה שאלות קצרות יעזרו מאוד במאמץ המשותף לעצור את התפרצות הקורונה",
                        "uid": "724fd9e1ce"
                      },
                      {
                        "say": "אם זה בסדר, אבקש לדעת כמה פרטים אנונימיים לטובת המחקר",
                        "uid": "c50fbc1b4d"
                      },
                      {
                        "say": "נתחיל בדיווח עבורך, בסופו יתאפשר גם דיווח עבור בני משפחה נוספים",
                        "uid": "7fd1d1ea6d"
                      },
                      {
                        "say": "הכי טוב כשכולם מדווחים על עצמם בכל יום",
                        "uid": "2af5c3ecb3"
                      },
                      {
                        "say": "אבל אם זה לא מסתדר, אפשר להקריא להם את השאלות או פשוט לענות בשמם",
                        "uid": "82dee13fa2"
                      }
                    ],
                    "uid": "804186b089"
                  },
                  {
                    "match": "returning",
                    "steps": [
                      {
                        "say": "הי! טוב לראותך שוב",
                        "uid": "a4f3f4c1ff"
                      },
                      {
                        "say": "הדיווחים שלך ושל אחרים עוזרים לנו מאוד במחקר ובניסיון להיאבק בקורונה",
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
              "goto": "routine",
              "uid": "9def4af95e"
            },
            {
              "goto": "current-report",
              "uid": "56cb1f9459"
            },
            {
              "goto": "exposures",
              "uid": "e42739825b"
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
              "say": "מצויין, השלמנו את הדיווח היומי עבור {{alias}}",
              "uid": "4e44153d8d"
            },
            {
              "goto": "reporting-loop",
              "uid": "82cf53724b"
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
                        "say": "עבור מי ברצונך לדווח עכשיו?",
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
                            },
                            {
                              "show": "אחר",
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
                            },
                            {
                              "match": "other",
                              "steps": [
                                {
                                  "say": "מה הגיל שלך?",
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
                          "placeholder": "גיל, 0-120",
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
                        "say": "מה הוא מקום המגורים?",
                        "uid": "4c0abfecc9"
                      },
                      {
                        "uid": "174bb25fa7",
                        "wait": {
                          "placeholder": "שם העיר או הישוב",
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
                        "say": "שם הרחוב?",
                        "uid": "2966b83d86"
                      },
                      {
                        "uid": "4fdca8e817",
                        "wait": {
                          "placeholder": "שם הרחוב, אם ידוע",
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
                            "בן {{age}} מ{{_location}}",
                            "בת {{age}} מ{{_location}}",
                            "דיווח עבור גיל {{age}} מ{{_location}}"
                          ],
                          "variable": "alias"
                        },
                        "uid": "78b65b0a08"
                      },
                      {
                        "say": "נהדר, בכדי לשמור על הפרטיות שלך, בדיווחים הבאים נקרא לך פשוט {{alias}}",
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
                "cmd": "fetch_household_data",
                "params": [
                  "record"
                ]
              },
              "uid": "18552bcc62"
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
                        "say": "יש לנו כמה שאלות (שנשאל פעם אחת) לגבי הבית ב{{_location}} -",
                        "uid": "2fb51aac61"
                      },
                      {
                        "say": "כמה מבוגרים מעל לגיל 18 גרים בבית?",
                        "uid": "6f0513265a"
                      },
                      {
                        "switch": {
                          "arg": "_is_adult",
                          "cases": [
                            {
                              "match": true,
                              "steps": [
                                {
                                  "uid": "799fa20500",
                                  "wait": {
                                    "input-kind": "number",
                                    "input-max": 99,
                                    "input-min": 1,
                                    "placeholder": "מספר המבוגרים ,1-99",
                                    "validation": "[0-9]+",
                                    "variable": "_household_adults"
                                  }
                                }
                              ],
                              "uid": "1d5d0279a7"
                            },
                            {
                              "match": false,
                              "steps": [
                                {
                                  "uid": "35f7c67694",
                                  "wait": {
                                    "input-kind": "number",
                                    "input-max": 99,
                                    "input-min": 0,
                                    "placeholder": "מספר המבוגרים ,0-99",
                                    "validation": "[0-9]+",
                                    "variable": "_household_adults"
                                  }
                                }
                              ],
                              "uid": "508c84043e"
                            }
                          ]
                        },
                        "uid": "86660cb2df"
                      },
                      {
                        "say": "וכמה ילדים מתחת לגיל 18?",
                        "uid": "8908359a20"
                      },
                      {
                        "switch": {
                          "arg": "_is_adult",
                          "cases": [
                            {
                              "match": true,
                              "steps": [
                                {
                                  "uid": "4b59320d24",
                                  "wait": {
                                    "input-kind": "number",
                                    "input-max": 99,
                                    "input-min": 0,
                                    "placeholder": "מספר הילדים, 0-99",
                                    "validation": "[0-9]+",
                                    "variable": "_household_minors"
                                  }
                                }
                              ],
                              "uid": "a639cb9852"
                            },
                            {
                              "match": false,
                              "steps": [
                                {
                                  "uid": "910fff2629",
                                  "wait": {
                                    "input-kind": "number",
                                    "input-max": 99,
                                    "input-min": 1,
                                    "placeholder": "מספר הילדים, 1-99",
                                    "validation": "[0-9]+",
                                    "variable": "_household_minors"
                                  }
                                }
                              ],
                              "uid": "8d3dbd01fb"
                            }
                          ]
                        },
                        "uid": "ff185e44dc"
                      }
                    ],
                    "uid": "59547d5ca6"
                  }
                ]
              },
              "uid": "20ee4aa27c"
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
                          "arg": "is_assisted_living",
                          "cases": [
                            {
                              "default": true
                            },
                            {
                              "steps": [
                                {
                                  "say": "האם מקום המגורים הנוכחי שלך הוא דיור מוגן?",
                                  "uid": "132132a332"
                                },
                                {
                                  "uid": "515fb93860",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": "כן, בדיור מוגן",
                                        "value": true
                                      },
                                      {
                                        "show": "לא",
                                        "value": false
                                      },
                                      {
                                        "show": "לא רוצה להשיב",
                                        "value": "no_response"
                                      }
                                    ],
                                    "variable": "is_assisted_living"
                                  }
                                }
                              ],
                              "uid": "a4f874099c",
                              "undefined": true
                            }
                          ]
                        },
                        "uid": "41677fbeb3"
                      }
                    ],
                    "uid": "69f2d8c722"
                  }
                ]
              },
              "uid": "e640fb6c0a"
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
              "say": "אשאל אותך על מחלות, שחשוב לנו לדעת אם אובחנו אצלך בעבר או שיש לך כיום:",
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
              "say": "אוקיי, עברנו את זה…",
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
                    "value": "long_past_smoker"
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
                        "say": "סיפרת לנו בדיווח קודם שנבדקת לקורונה… האם כבר קיבלת את תוצאות הבדיקה?",
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
                        "say": "האם נבדקת לקורונה בעבר (בדיקת PCR)?",
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
                        "say": "האם נבדקת בשבוע האחרון לקורונה, בבדיקת PCR?",
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
              "say": "ומה היתה תוצאת הבדיקה?",
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
                        "say": "עכשיו, מה בנוגע לבידוד?",
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
                                  "say": "האם יצאת מהבית במהלך השבוע האחרון?",
                                  "uid": "c0a3441c7e"
                                },
                                {
                                  "uid": "f496a7208d",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": "כן, יצאתי",
                                        "steps": [
                                          {
                                            "say": "האם יש לך עבודה קבועה מחוץ לבית בימים אלה?",
                                            "uid": "e6777b8d52"
                                          },
                                          {
                                            "uid": "79a2591bdc",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": "כן, יש עבודה מחוץ לבית",
                                                  "steps": [
                                                    {
                                                      "say": "וכמה שעות, פחות או יותר, עבדת שם בשבוע האחרון?",
                                                      "uid": "b5646b238a"
                                                    },
                                                    {
                                                      "uid": "2b3b0adc62",
                                                      "wait": {
                                                        "input-max": 168,
                                                        "input-min": 0,
                                                        "input-step": 1,
                                                        "input-type": "number",
                                                        "placeholder": "מספר השעות, בערך",
                                                        "variable": "routine_workplace_weekly_hours"
                                                      }
                                                    },
                                                    {
                                                      "say": "האם העבודה במקום קבוע?",
                                                      "uid": "8255661f63"
                                                    },
                                                    {
                                                      "uid": "02dfe3cf0d",
                                                      "wait": {
                                                        "options": [
                                                          {
                                                            "show": "כן, במקום קבוע",
                                                            "steps": [
                                                              {
                                                                "say": "אפשר לשאול איפה נמצא מקום העבודה? זה יכול לעזור לנו במחקר",
                                                                "uid": "41b1deb2d4"
                                                              },
                                                              {
                                                                "uid": "9a150d7fd3",
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
                                                                          "uid": "028b39805d"
                                                                        },
                                                                        {
                                                                          "say": "איפה נמצא מקום העבודה?",
                                                                          "uid": "9c526fbe63"
                                                                        },
                                                                        {
                                                                          "uid": "e1de7d045a",
                                                                          "wait": {
                                                                            "placeholder": "שם העיר או הישוב",
                                                                            "suggestionsFrom": "_cityTownSuggestions",
                                                                            "variable": "routine_workplace_city_town"
                                                                          }
                                                                        },
                                                                        {
                                                                          "say": "ובאיזה רחוב זה?",
                                                                          "uid": "1e927d313e"
                                                                        },
                                                                        {
                                                                          "uid": "78f3e9eed6",
                                                                          "wait": {
                                                                            "placeholder": "שם הרחוב, אם ידוע",
                                                                            "required": false,
                                                                            "variable": "routine_workplace_street"
                                                                          }
                                                                        }
                                                                      ],
                                                                      "uid": "42592936a0"
                                                                    },
                                                                    {
                                                                      "show": "עדיף שלא"
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            "uid": "c13f21be29",
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
                                                      "uid": "2afcf4dbfe"
                                                    },
                                                    {
                                                      "uid": "66402aea2a",
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
                                                                "uid": "12b8141c8b"
                                                              },
                                                              {
                                                                "uid": "2afcddf9e6",
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
                                                            "uid": "4410fe66d1",
                                                            "undefined": true
                                                          },
                                                          {
                                                            "default": true
                                                          }
                                                        ]
                                                      },
                                                      "uid": "de6d708a67"
                                                    }
                                                  ],
                                                  "uid": "c1071808c0",
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
                                                      "switch": {
                                                        "arg": "sex",
                                                        "cases": [
                                                          {
                                                            "default": true,
                                                            "steps": [
                                                              {
                                                                "say": "האם ביקור בבית תפילה הוא חלק מהשיגרה שלך?",
                                                                "uid": "6ab9910b0e"
                                                              }
                                                            ],
                                                            "uid": "d4190187e8"
                                                          },
                                                          {
                                                            "match": "male",
                                                            "steps": [
                                                              {
                                                                "say": "האם אתה נוהג לבקר בבית תפילה באופן קבוע?",
                                                                "uid": "2db8016a4a"
                                                              }
                                                            ],
                                                            "uid": "3cd5c27479"
                                                          },
                                                          {
                                                            "match": "female",
                                                            "steps": [
                                                              {
                                                                "say": "האם את נוהגת לבקר בבית תפילה באופן קבוע?",
                                                                "uid": "bd50e82835"
                                                              }
                                                            ],
                                                            "uid": "a6f96b035e"
                                                          }
                                                        ]
                                                      },
                                                      "uid": "562dbeafec"
                                                    },
                                                    {
                                                      "uid": "7f58f97c5e",
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
                                                  "uid": "be3d6b4c5d",
                                                  "undefined": true
                                                }
                                              ]
                                            },
                                            "uid": "c12ca2f1f5"
                                          },
                                          {
                                            "say": "האם יצא לך להשתמש בתחבורה ציבורית בשבוע האחרון?",
                                            "uid": "ecc9f76937"
                                          },
                                          {
                                            "uid": "cc1b617583",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": "כן",
                                                  "steps": [
                                                    {
                                                      "say": "במה מאלה השתמשת השבוע?",
                                                      "uid": "4a581cabac"
                                                    },
                                                    {
                                                      "uid": "d44db069f9",
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
                                                      "uid": "f6cdaee202"
                                                    }
                                                  ],
                                                  "uid": "e6040a31ae",
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
                                            "uid": "143a271ac6"
                                          },
                                          {
                                            "uid": "ef3dc90d0f",
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
                                          },
                                          {
                                            "say": "ומה עם כפפות?",
                                            "uid": "3a47aa4a37"
                                          },
                                          {
                                            "uid": "5056a7c058",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": "כן, כל הזמן",
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
                                              "variable": "routine_wears_gloves"
                                            }
                                          }
                                        ],
                                        "uid": "f40022b226",
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
                        "say": "למרות שאמרת קודם שההרגשה טובה, כדאי בתקופה כזו לקיים מעקב יומי אחר חום הגוף.",
                        "uid": "c57bd415ab"
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
                              "show": "כאב בטן"
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
              "say": "חשוב לנו לדעת -",
              "uid": "1700fdb725"
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
            }
          ],
          "uid": "ce7628ae51"
        },
        {
          "name": "end-of-report",
          "steps": [
            {
              "goto": "set-reminder",
              "uid": "02d5f52542"
            },
            {
              "goto": "share",
              "uid": "33392c8ecc"
            },
            {
              "goto": "affiliations",
              "uid": "ccc68125a7"
            },
            {
              "say": "סיימנו עם השאלות להיום. בזכותך התקרבנו עוד צעד אחד לסוף של זה…",
              "uid": "87a44257a2"
            },
            {
              "say": "תודה רבה, נתראה מחר?",
              "uid": "5427b26490"
            },
            {
              "uid": "60d63009b1",
              "wait": {
                "options": [
                  {
                    "show": "בטח!"
                  }
                ]
              }
            }
          ],
          "uid": "a92af82c81"
        },
        {
          "name": "affiliations",
          "steps": [
            {
              "do": {
                "cmd": "affiliates_should_ask",
                "variable": "_affiliates_should_ask"
              },
              "uid": "4326fae447"
            },
            {
              "switch": {
                "arg": "_affiliates_should_ask",
                "cases": [
                  {
                    "match": false,
                    "steps": [
                      {
                        "pop": "end-of-report",
                        "uid": "65abfbcf12"
                      }
                    ],
                    "uid": "e8a030509d"
                  },
                  {
                    "default": true
                  }
                ]
              },
              "uid": "d5c1bb2dcb"
            },
            {
              "switch": {
                "arg": "affiliate_questionnaires_preference",
                "cases": [
                  {
                    "match": "never"
                  },
                  {
                    "default": true,
                    "steps": [
                      {
                        "say": "האם נוכל להציע לכם להשתתף במחקרים נוספים של מדעני מכון ויצמן?",
                        "uid": "d24e2af160"
                      },
                      {
                        "uid": "4186bee39c",
                        "wait": {
                          "options": [
                            {
                              "show": "כן, בשמחה",
                              "value": "ok"
                            },
                            {
                              "show": "לא, בפעם אחרת",
                              "value": "later"
                            },
                            {
                              "show": "לא, אף פעם",
                              "value": "never"
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
                                  "uid": "a3de1702b9"
                                }
                              ],
                              "uid": "9c54ccfbba"
                            },
                            {
                              "default": true
                            }
                          ]
                        },
                        "uid": "c53d2fe49e"
                      }
                    ],
                    "uid": "cc6b917bab"
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
              "say": "לאור מכלול ההשפעות של תקופה זו על חיינו, האם נוכל לשאול אותך גם על מצב רוחך?",
              "uid": "157579fe76"
            },
            {
              "uid": "19f8eb5c80",
              "wait": {
                "options": [
                  {
                    "show": "אשמח להשתתף במחקר",
                    "steps": [
                      {
                        "say": "תודה רבה, נתראה מחר!",
                        "uid": "c4b59f6f31"
                      },
                      {
                        "do": {
                          "cmd": "affiliate_alon_chen"
                        },
                        "uid": "3e2d803d4a"
                      },
                      {
                        "goto": "complete",
                        "uid": "f8b9576e1f"
                      }
                    ],
                    "uid": "a37063e62c",
                    "value": "ok"
                  },
                  {
                    "show": "לא, בפעם אחרת",
                    "value": "pass"
                  }
                ],
                "variable": "affiliate_questionnaires_preference_alon_chen"
              }
            }
          ],
          "uid": "91e09012bf"
        },
        {
          "name": "share",
          "steps": [
            {
              "say": "ועוד עניין קטן… יעזור מאוד אם גם החברים והקרובים שלך ישתתפו. רוצה לשתף אותם?",
              "uid": "3b53898038"
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
