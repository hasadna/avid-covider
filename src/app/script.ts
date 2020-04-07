
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
                        "say": "יש לנו כמה שאלות (שנשאל פעם אחת) לגבי הבית ב{{street}} {{city_town}} -",
                        "uid": "621928ce03"
                      },
                      {
                        "say": "כמה מבוגרים מעל לגיל 18 גרים בבית?",
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
                                    "placeholder": "מספר המבוגרים ,1-99",
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
                                    "placeholder": "מספר המבוגרים ,0-99",
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
                        "say": "וכמה ילדים מתחת לגיל 18?",
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
                                    "placeholder": "מספר הילדים, 0-99",
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
                                    "placeholder": "מספר הילדים, 1-99",
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
                                  "say": "האם העבודה שלך היא כחלק מצוות רפואי- בטיפול בחולים או בקבלת קהל?",
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
              "say": "האם נמדד חום ביממה האחרונה?",
              "uid": "a265cb3659"
            },
            {
              "uid": "d8c6b1182c",
              "wait": {
                "options": [
                  {
                    "show": "כן, נמדד חום",
                    "steps": [
                      {
                        "say": "ומה המדחום אומר?",
                        "uid": "fd6d8a43b5"
                      },
                      {
                        "uid": "928f10b036",
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
                    "uid": "7a92ab58eb",
                    "value": "yes"
                  },
                  {
                    "show": "לא נמדד חום",
                    "value": "no"
                  }
                ]
              }
            }
          ],
          "uid": "89a20e8104"
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
                    "field": "symptoms_sore_throat",
                    "show": "כאבי גרון"
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
                                  "say": "האם בשבוע האחרון נתת בעבודתך שירות באופן פיזי למעל 10 אנשים ביום?",
                                  "uid": "07940bc67a"
                                },
                                {
                                  "uid": "7b2cd205c7",
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
                                    "variable": "served_public_last_fortnight"
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
        }
      ],
      "name": "generic-translation-assets"
    }
  ]
};
