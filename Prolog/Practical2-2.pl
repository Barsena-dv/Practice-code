symptoms(dhruv,headache).
symptoms(dhruv,fever).
symptoms(dhruv,weakness).
symptoms(dhruv,shortness_of_breath).

symptoms(devraj,fever).
symptoms(devraj,weakness).
symptoms(devraj,headache).

hypothesis(X,covid-19):-
    symptoms(X,headache),
    symptoms(X,fever),
    symptoms(X,shortness_of_breath),
    symptoms(X,weakness).

hypothesis(X,general_yellow_fever):-
    symptoms(X,fever),
    symptoms(X,headache),
    symptoms(X,weakness).
