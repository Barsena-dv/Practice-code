
symptoms(dhruv, headache).
symptoms(dhruv, fever).
symptoms(dhruv, weakness).
symptoms(dhruv, shortness_of_breath).

symptoms(devraj, fever).
symptoms(devraj, weakness).
symptoms(devraj, headache).


hypothesis(X, general_yellow_fever) :-
    symptoms(X, fever),
    symptoms(X, headache),
    symptoms(X, weakness),
    \+ symptoms(X, shortness_of_breath).

hypothesis(X, covid_19) :-
    symptoms(X, headache),
    symptoms(X, fever),
    symptoms(X, weakness),
    symptoms(X, shortness_of_breath).
